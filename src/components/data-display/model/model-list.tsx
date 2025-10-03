import Heading from '@/components/ui/heading';
import { Button } from '@/components/form/button';
import { Card, CardBody } from '@/components/ui/card';
import { Pagination } from '@/components/navigation/pagination';
import { Table, TableWrapper } from '../table';
import type { IMassAction, IModel } from '@/types/models';
import { IconFilter, IconPlus, IconTrash, IconX } from '@tabler/icons-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { formatDateForInput } from '@/lib/date-utils';
import { clientApiRequest } from '@/lib/client-api';
import {
    handleDragStart,
    handleDragEnd,
    moveItem,
    getItemPositionInfo
} from '@/lib/ordering-utils';
import type { DragState } from '@/lib/ordering-utils';

// Import our extracted components
import { DateFilterCalendar } from './model-list/date-filter-calendar';
import { ModelListModals } from './model-list/modals';
import { ModelTableBody } from './model-list/table-body';
import { TableHeader } from './model-list/table-header';
import type {
    IEditingCell,
    IColumnDefinition,
    IRowAction,
    IModelListComponentProps,
    IOrderingConfig,
    IOrderingHandlers,
    // Legacy exports for backward compatibility
    EditingCell,
    ModelListComponentProps,
} from './model-list/types';

/**
 * Re-export all public interfaces for external use
 */
export type {
    // Recommended interfaces (with I prefix)
    IColumnDefinition,
    IRowAction,
    IOrderingConfig,
    IOrderingHandlers,
    IEditingCell,
    IModelListComponentProps,
    // Legacy exports (deprecated but maintained for backwards compatibility)
    EditingCell,
    ModelListComponentProps,
};

// Interface for API error responses
interface ApiErrorResponse {
    message?: string;
    error?: string;
    errors?: Record<string, string[]>;
    details?: string;
}

// Helper function to extract user-friendly error messages from API responses
async function extractErrorMessage(response: Response): Promise<string> {
    try {
        const errorData = await response.json() as ApiErrorResponse;

        // Handle different error response formats
        if (errorData.message) {
            return errorData.message;
        } else if (errorData.error) {
            return errorData.error;
        } else if (errorData.details) {
            return `${errorData.error || 'Operation failed'}: ${errorData.details}`;
        }
        
        // Fallback based on status code
        switch (response.status) {
            case 403:
                return "You don't have permission to perform this action. This operation may compromise system security.";
            case 401:
                return "Authentication required. Please log in again.";
            case 404:
                return "The requested item was not found.";
            case 400:
                return "Invalid request. Please check your input and try again.";
            default:
                return `Operation failed with status ${response.status}`;
        }
    } catch {
        // If we can't parse JSON, return a generic message based on status
        switch (response.status) {
            case 403:
                return "Access denied. This operation may violate security policies.";
            case 401:
                return "Authentication required. Please log in again.";
            case 404:
                return "The requested item was not found.";
            case 400:
                return "Invalid request. Please check your input and try again.";
            default:
                return `Operation failed (${response.status})`;
        }
    }
}

/**
 * ModelList Component
 *
 * A comprehensive data table component with features including:
 * - Sorting and filtering
 * - Inline editing
 * - Mass actions
 * - Row-level custom actions
 * - Drag-and-drop ordering
 * - Pagination
 * - Add new row inline
 *
 * @template T - The model type extending IModel
 * @param props - Component props conforming to IModelListComponentProps
 * @returns Rendered table with all features
 *
 * @example
 * ```tsx
 * <ModelList
 *   title="Users"
 *   items={paginatedData}
 *   columns={[
 *     { key: 'name', label: 'Name', sortable: true, filterable: true },
 *     { key: 'email', label: 'Email', editableInline: true, editType: 'email' }
 *   ]}
 *   createRoute="/users/create"
 *   editRoute={(id) => `/users/${id}/edit`}
 *   deleteRoute={(id) => `/users/${id}`}
 *   massActionRoute="/users/mass-action"
 * />
 * ```
 */
export function ModelList<T extends IModel>({
    title,
    items,
    filters,
    createRoute,
    editRoute,
    deleteRoute,
    inlineEditRoute,
    massActionRoute,
    columns,
    massActions,
    rowActions,
    orderingConfig,
    renderItem,
    renderHeader,
}: IModelListComponentProps<T>) {
    // Debug logging for mass actions and row actions
    console.log('🔍 ModelList Debug:', {
        title,
        hasMassActions: !!massActions,
        massActionsLength: massActions?.length || 0,
        massActionRoute,
        createRoute,
        createRouteType: typeof createRoute,
        createRouteIsNull: createRoute === null,
        createRouteIsUndefined: createRoute === undefined,
        hasRowActions: !!rowActions,
        rowActionsLength: rowActions?.length || 0,
        rowActions: rowActions
    });
    // Selection state
    const [selectedItems, setSelectedItems] = useState<Set<number | string>>(new Set());

    // Filter state
    const [columnFilters, setColumnFilters] = useState<Record<string, string>>({});
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [openDateFilters, setOpenDateFilters] = useState<Set<string>>(new Set());
    const [calendarPositions, setCalendarPositions] = useState<Record<string, { top: number; left: number; width: number }>>({});
    const calendarTriggersRef = useRef<Record<string, HTMLDivElement | null>>({});

    // Modal state
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [itemToDelete, setItemToDelete] = useState<T | null>(null);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [deleteError, setDeleteError] = useState<string>('');
    const [massActionModalOpen, setMassActionModalOpen] = useState<boolean>(false);
    const [selectedMassAction, setSelectedMassAction] = useState<IMassAction | null>(null);
    const [isExecutingMassAction, setIsExecutingMassAction] = useState<boolean>(false);
    const [massActionError, setMassActionError] = useState<string>('');

    // Inline editing state
    const [editingCell, setEditingCell] = useState<IEditingCell | null>(null);
    const [editValue, setEditValue] = useState<string>('');
    const [isEditingSaving, setIsEditingSaving] = useState<boolean>(false);
    const [editingError, setEditingError] = useState<string>('');
    const [isClickingSaveButton, setIsClickingSaveButton] = useState<boolean>(false);
    const [editingSaveSuccess, setEditingSaveSuccess] = useState<boolean>(false);
    // Add row state
    const [isAddingNewRow, setIsAddingNewRow] = useState<boolean>(false);
    const [newRowData, setNewRowData] = useState<Record<string, string>>({});
    const [newRowError, setNewRowError] = useState<string>('');
    const [isSavingNewRow, setIsSavingNewRow] = useState<boolean>(false);

    // Ordering state
    const [dragState, setDragState] = useState<DragState>({
        draggedItem: null,
        isDragging: false,
        draggedIndex: null,
        dragOverIndex: null
    });

    // Debounce ref for text filters
    const debounceTimeouts = useRef<Record<string, NodeJS.Timeout>>({});

    // Add Row functionality
    const startAddingNewRow = () => {
        console.log('Starting to add new row');

        // Initialize newRowData with default values based on column types
        // Only include editable columns (skip system columns like 'order')
        const initialData: Record<string, string> = {};
        columns.forEach(column => {
            const columnKey = String(column.key);

            // Skip system/non-editable columns like 'order', 'created_at', etc.
            if (!column.editableInline && !column.editType) {
                return;
            }

            // Skip columns that are clearly system-generated
            if (columnKey === 'order' || columnKey === 'created_at' || columnKey === 'updated_at' || columnKey === 'id') {
                return;
            }

            if (column.editType === 'toggle' || column.filterType === 'select') {
                initialData[columnKey] = 'false'; // Default for boolean fields
            } else {
                initialData[columnKey] = column.editValidation?.required ? '' : '';
            }
        });

        setNewRowData(initialData);
        setIsAddingNewRow(true);
        setNewRowError('');
    };

    const cancelAddingNewRow = () => {
        setIsAddingNewRow(false);
        setNewRowData({});
        setNewRowError('');
        setIsSavingNewRow(false);
    };

    const updateNewRowData = (columnKey: string, value: string) => {
        setNewRowData(prev => ({
            ...prev,
            [columnKey]: value
        }));
        // Clear error when user starts typing
        if (newRowError) {
            setNewRowError('');
        }
    };

    const saveNewRow = async () => {
        console.log('Saving new row:', newRowData);

        // Validate required fields (only for editable columns)
        for (const column of columns) {
            const columnKey = String(column.key);

            // Skip system/non-editable columns
            if (!column.editableInline && !column.editType) {
                continue;
            }

            // Skip columns that are clearly system-generated
            if (columnKey === 'order' || columnKey === 'created_at' || columnKey === 'updated_at' || columnKey === 'id') {
                continue;
            }

            const value = newRowData[columnKey] || '';
            const stringValue = String(value);

            if (column.editValidation?.required && !stringValue.trim()) {
                setNewRowError(`${column.label.replace(' *', '')} is required`);
                return;
            }

            // Validate patterns
            if (column.editValidation?.pattern && stringValue.trim()) {
                if (!column.editValidation.pattern.test(stringValue)) {
                    setNewRowError(`${column.label.replace(' *', '')} has invalid format`);
                    return;
                }
            }
        }

        setIsSavingNewRow(true);
        setNewRowError('');
        
        try {
            // Use the same base route as inlineEditRoute but without the ID (POST to create)
            const baseUrl = inlineEditRoute ? inlineEditRoute('').replace('/undefined', '').replace('/null', '') : massActionRoute.replace('/mass-action', '');
            const createUrl = baseUrl.replace(/\/$/, '');
            console.log('🔍 Add Row API URL Debug:', { baseUrl, createUrl, inlineEditRoute: inlineEditRoute?.toString() });
            
            // Check if this is a table data API endpoint and wrap data accordingly
            const isTableDataApi = createUrl.includes('/tables/') && createUrl.includes('/data');
            const requestBody = isTableDataApi ? { data: newRowData } : newRowData;

            const response = await clientApiRequest(createUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                // Success - reload the page to show the new data
                console.log('New row created successfully');
                cancelAddingNewRow();
                window.location.reload(); // Simple approach to refresh the data
            } else {
                const errorMessage = await extractErrorMessage(response);
                setNewRowError(errorMessage);
            }
        } catch (error) {
            console.error('Error saving new row:', error);
            setNewRowError(error instanceof Error ? error.message : 'Failed to save new row');
        } finally {
            setIsSavingNewRow(false);
        }
    };

    // Reset selected items when items change
    useEffect(() => {
        setSelectedItems(new Set());
    }, [items]);

    // Initialize column filters from URL parameters
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const initialFilters: Record<string, string> = {};
        columns.forEach((column) => {
            if (column.filterable) {
                const filterValue = urlParams.get(`filter_${String(column.key)}`);
                if (filterValue) {
                    initialFilters[String(column.key)] = filterValue;
                }
            }
        });
        setColumnFilters(initialFilters);
        setShowFilters(Object.keys(initialFilters).length > 0);
    }, [columns]);

    // Cleanup debounce timeouts on unmount
    useEffect(() => {
        const timeouts = debounceTimeouts.current;
        return () => {
            Object.values(timeouts).forEach((timeout) => {
                if (timeout) clearTimeout(timeout);
            });
        };
    }, []);

    // Close date filter dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: globalThis.MouseEvent) => {
            if (openDateFilters.size > 0) {
                const target = event.target as Element;
                const isCalendarTriggerClick = target.closest('[data-calendar-dropdown]');
                const isCalendarContentClick = target.closest('.rdp') || target.closest('[data-calendar-portal]');
                if (!isCalendarTriggerClick && !isCalendarContentClick) {
                    setOpenDateFilters(new Set());
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openDateFilters]);

    // Handle sorting
    const handleSort = (columnKey: string) => {
        const currentSort = filters?.sort;
        const currentDirection = filters?.direction || 'asc';

        let newDirection: 'asc' | 'desc' = 'asc';
        if (currentSort === columnKey && currentDirection === 'asc') {
            newDirection = 'desc';
        }

        const params = new URLSearchParams(window.location.search);
        params.set('sort', columnKey);
        params.set('direction', newDirection);
        params.set('page', '1'); // Reset to first page when sorting

        // Navigate to the new URL with updated params
        window.location.href = `${window.location.pathname}?${params.toString()}`;
    };

    // Handle column filtering with debouncing for text inputs
    const updateUrlWithFilter = useCallback((columnKey: string, value: string) => {
        const params = new URLSearchParams(window.location.search);
        if (value.trim() === '') {
            params.delete(`filter_${columnKey}`);
        } else {
            params.set(`filter_${columnKey}`, value);
        }
        params.set('page', '1'); // Reset to first page when filtering

        // Navigate to the new URL with updated params
        window.location.href = `${window.location.pathname}?${params.toString()}`;
    }, []);

    const handleColumnFilter = (columnKey: string, value: string, filterType?: 'text' | 'select' | 'date') => {
        const newFilters = { ...columnFilters };

        if (value.trim() === '') {
            delete newFilters[columnKey];
        } else {
            newFilters[columnKey] = value;
        }

        setColumnFilters(newFilters);

        // Clear any existing timeout for this column
        if (debounceTimeouts.current[columnKey]) {
            clearTimeout(debounceTimeouts.current[columnKey]);
        }

        // For text filters, debounce the URL update
        if (filterType === 'text') {
            debounceTimeouts.current[columnKey] = setTimeout(() => {
                updateUrlWithFilter(columnKey, value);
            }, 1500); // 1500ms debounce for better UX
        } else {
            // For select and date filters, update immediately
            updateUrlWithFilter(columnKey, value);
        }
    };

    // Clear all column filters
    const clearAllFilters = () => {
        setColumnFilters({});
        setShowFilters(false);

        const params = new URLSearchParams(window.location.search);
        columns.forEach((column) => {
            if (column.filterable) {
                params.delete(`filter_${String(column.key)}`);
            }
        });

        // Navigate to the new URL with cleared filters
        window.location.href = `${window.location.pathname}?${params.toString()}`;
    };

    const handleItemSelect = (itemId: number | string, checked: boolean) => {
        setSelectedItems((prev) => {
            const newSet = new Set(prev);
            if (checked) {
                newSet.add(itemId);
            } else {
                newSet.delete(itemId);
            }
            return newSet;
        });
    };

    const handleSelectAll = (checked: boolean) => {
        if (!items?.data) return;

        if (checked) {
            const allIds = items.data.map((item) => item.id);
            setSelectedItems(new Set(allIds));
        } else {
            setSelectedItems(new Set());
        }
    };

    // Handle delete modal
    const openDeleteModal = (item: T) => {
        setItemToDelete(item);
        setDeleteModalOpen(true);
        setDeleteError(''); // Reset any previous error
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        setItemToDelete(null);
        setIsDeleting(false);
        setDeleteError(''); // Reset error when closing
    };

    const handleDeleteConfirm = async () => {
        if (!itemToDelete) return;

        setIsDeleting(true);
        
        try {
            const response = await clientApiRequest(deleteRoute(itemToDelete.id), {
                method: 'DELETE',
            });

            if (response.ok) {
                closeDeleteModal();
                // Refresh the page to show updated data
                window.location.reload();
            } else {
                const errorMessage = await extractErrorMessage(response);
                setDeleteError(errorMessage);
                console.error('Delete failed:', response.statusText);
                setIsDeleting(false);
            }
        } catch (error) {
            console.error('Delete error:', error);
            setDeleteError('An unexpected error occurred while deleting the item.');
            setIsDeleting(false);
        }
    };

    // Handle mass action modal
    const openMassActionModal = (action: IMassAction) => {
        if (selectedItems.size === 0) {
            alert('Please select items from the table first.');
            return;
        }
        setSelectedMassAction(action);
        setMassActionModalOpen(true);
        setMassActionError(''); // Reset any previous error
    };

    const closeMassActionModal = () => {
        setMassActionModalOpen(false);
        setSelectedMassAction(null);
        setIsExecutingMassAction(false);
        setMassActionError(''); // Reset error when closing
    };

    const handleMassActionConfirm = async () => {
        if (!selectedMassAction) {
            setMassActionError('No action selected');
            return;
        }

        if (selectedItems.size === 0) {
            setMassActionError('No items selected. Please select items from the table first.');
            setIsExecutingMassAction(false);
            return;
        }

        setIsExecutingMassAction(true);
        const selectedItemIds = Array.from(selectedItems);

        try {
            // Determine the correct parameter name based on the route
            const isColumnsRoute = massActionRoute.includes('/columns/mass-action');
            const idsParam = isColumnsRoute ? 'columnIds' : 'ids';

            const response = await clientApiRequest(massActionRoute, {
                method: 'POST',
                body: JSON.stringify({
                    action: selectedMassAction.name,
                    [idsParam]: selectedItemIds,
                }),
            });

            if (response.ok) {
                closeMassActionModal();
                setSelectedItems(new Set()); // Clear selection after successful mass action
                // Refresh the page to show updated data
                window.location.reload();
            } else {
                const errorMessage = await extractErrorMessage(response);
                setMassActionError(errorMessage);
                console.error('Mass action failed:', response.statusText);
                setIsExecutingMassAction(false);
            }
        } catch (error) {
            console.error('Mass action error:', error);
            setMassActionError('An unexpected error occurred while executing the mass action.');
            setIsExecutingMassAction(false);
        }
    };

    // Handle inline editing
    const startEditing = (item: T, column: IColumnDefinition<T>) => {
        if (!column.editableInline) return;

        const columnKey = String(column.key);
        // Check if this is a dynamic table data row (has nested data property)
        const isDynamicTableData = 'data' in item && typeof (item as Record<string, unknown>).data === 'object';
        const currentValue = isDynamicTableData
            ? (item as unknown as { data: Record<string, unknown> }).data[columnKey]
            : item[column.key as keyof T];

        setEditingCell({ itemId: item.id, columnKey });

        // For select fields with boolean values, convert properly
        let editValue: string;
        if (column.editType === 'select' && typeof currentValue === 'boolean') {
            editValue = currentValue ? 'true' : 'false';
        } else {
            editValue = String(currentValue || '');
        }

        setEditValue(editValue);
        setEditingError('');
    };

    const cancelEditing = () => {
        setEditingCell(null);
        setEditValue('');
        setEditingError('');
        setIsEditingSaving(false);
        setIsClickingSaveButton(false);
        setEditingSaveSuccess(false);
    };

    const handleSaveSuccess = () => {
        setIsEditingSaving(false);
        setEditingSaveSuccess(true);
        // Show success feedback for 2 seconds before canceling editing
        setTimeout(() => {
            cancelEditing();
            // Refresh the page to show the updated data
            window.location.reload();
        }, 1500);
    };

    const handleInputBlur = () => {
        // Don't cancel if user is clicking the save button
        if (!isClickingSaveButton) {
            cancelEditing();
        }
    };

    const validateEditValue = (column: IColumnDefinition<T>, value: string): string => {
        if (!column.editValidation) return '';

        const validation = column.editValidation;

        if (validation.required && !value.trim()) {
            return 'This field is required';
        }

        if (validation.minLength && value.length < validation.minLength) {
            return `Minimum length is ${validation.minLength} characters`;
        }

        if (validation.maxLength && value.length > validation.maxLength) {
            return `Maximum length is ${validation.maxLength} characters`;
        }

        if (validation.pattern && !validation.pattern.test(value)) {
            return 'Invalid format';
        }

        return '';
    };

    const saveEditing = async (valueToSave?: string) => {
        console.log('🔥 ModelList.saveEditing called:', {
            editingCell,
            valueToSave,
            editValue,
            hasInlineEditRoute: !!inlineEditRoute
        });

        if (!editingCell) {
            console.log('❌ No editing cell - returning early');
            return;
        }

        const item = items?.data?.find((i) => i.id === editingCell.itemId);
        const column = columns.find((c) => String(c.key) === editingCell.columnKey);

        // Check if this is a dynamic table data row (has nested data property)
        const isDynamicTableData = item && 'data' in item && typeof (item as Record<string, unknown>).data === 'object';
        const currentItemValue = isDynamicTableData
            ? (item as unknown as { data: Record<string, unknown> }).data[editingCell.columnKey]
            : item ? item[editingCell.columnKey as keyof typeof item] : null;

        console.log('🔍 saveEditing item and column check:', {
            item: item ? { id: item.id, [editingCell.columnKey]: currentItemValue, isDynamicTableData } : null,
            column: column ? { key: column.key, editableInline: column.editableInline, editType: column.editType } : null
        });

        if (!item || !column || !column.editableInline) {
            console.log('❌ Missing requirements - returning early');
            return;
        }

        // Use provided value or fall back to current editValue
        const currentValue = valueToSave ?? editValue;
        console.log('💾 Current value to save:', currentValue);

        const validationError = validateEditValue(column, currentValue);
        if (validationError) {
            console.log('❌ Validation error:', validationError);
            setEditingError(validationError);
            return;
        }

        console.log('✅ Validation passed, starting save process');
        setIsEditingSaving(true);
        setEditingError('');

        try {
            if (column.onSave) {
                await column.onSave(item, currentValue);
                handleSaveSuccess();
            } else {
                // Default save behavior - make a PATCH request
                // Convert currentValue to proper type based on column configuration
                let convertedValue: string | boolean | number = currentValue;

                if (column.editType === 'select' && column.editOptions) {
                    // For select fields, find the actual value from editOptions
                    const selectedOption = column.editOptions.find((opt) => opt.label === currentValue || String(opt.value) === currentValue);
                    if (selectedOption) {
                        convertedValue = selectedOption.value;
                    } else {
                        // Try to convert boolean strings
                        if (currentValue === 'true' || currentValue === 'Active') {
                            convertedValue = true;
                        } else if (currentValue === 'false' || currentValue === 'Inactive') {
                            convertedValue = false;
                        }
                    }
                } else if (column.editType === 'number') {
                    convertedValue = Number(currentValue);
                } else if (column.editType === 'toggle') {
                    // Convert checkbox values to proper booleans
                    convertedValue = currentValue === '1' || currentValue === 'true' || String(currentValue) === 'true';
                }

                console.log('🌐 About to make API request:', {
                    convertedValue,
                    columnKey: editingCell.columnKey,
                    payload: { [editingCell.columnKey]: convertedValue }
                });

                try {
                    const editUrl = inlineEditRoute
                        ? inlineEditRoute(item.id)
                        : `${window.location.pathname}/${item.id}`;

                    console.log('🔗 Making PATCH request to:', editUrl);

                    // Check if this is a table data API endpoint and wrap data accordingly
                    const isTableDataEditApi = editUrl.includes('/tables/') && editUrl.includes('/data');
                    const editPayload = isTableDataEditApi
                        ? {
                            data: {
                                ...(isDynamicTableData ? (item as unknown as { data: Record<string, unknown> }).data : {}), // Preserve existing data
                                [editingCell.columnKey]: convertedValue  // Override with new value
                            }
                        }
                        : { [editingCell.columnKey]: convertedValue };

                    const response = await clientApiRequest(editUrl, {
                        method: 'PATCH',
                        body: JSON.stringify(editPayload),
                    });

                    console.log('📡 API Response:', {
                        status: response.status,
                        ok: response.ok,
                        statusText: response.statusText
                    });

                    if (response.ok) {
                        console.log('✅ Save successful');
                        handleSaveSuccess();
                    } else {
                        console.error('❌ Save failed:', response.statusText);
                        // Extract specific error message from backend response
                        try {
                            const errorData = await response.json() as ApiErrorResponse;
                            const errorMessage = errorData?.error || errorData?.message || 'Failed to save changes';
                            setEditingError(errorMessage);
                        } catch {
                            setEditingError('Failed to save changes');
                        }
                        setIsEditingSaving(false);
                    }
                } catch (error) {
                    console.error('💥 Save error:', error);
                    setEditingError('Failed to save changes');
                    setIsEditingSaving(false);
                }
            }
        } catch (error) {
            console.error('Save error:', error);
            setEditingError('Failed to save changes');
            setIsEditingSaving(false);
        }
    };

    const handleEditKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveEditing();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            cancelEditing();
        }
    };

    // Handle date filter dropdown toggle
    const toggleDateFilter = (columnKey: string) => {
        setOpenDateFilters((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(columnKey)) {
                newSet.delete(columnKey);
                // Remove position data when closing
                setCalendarPositions((prevPos) => {
                    const newPos = { ...prevPos };
                    delete newPos[columnKey];
                    return newPos;
                });
            } else {
                newSet.add(columnKey);
                // Calculate position when opening
                const triggerElement = calendarTriggersRef.current[columnKey];
                if (triggerElement) {
                    const rect = triggerElement.getBoundingClientRect();
                    setCalendarPositions((prevPos) => ({
                        ...prevPos,
                        [columnKey]: {
                            top: rect.bottom + window.scrollY + 4, // 4px margin
                            left: rect.left + window.scrollX,
                            width: rect.width,
                        },
                    }));
                }
            }
            return newSet;
        });
    };

    // Handle date selection from calendar
    const handleDateSelect = (columnKey: string, date: Date | undefined) => {
        const dateValue = date ? formatDateForInput(date) : '';
        handleColumnFilter(columnKey, dateValue, 'date');
        // Close the dropdown after selection
        setOpenDateFilters((prev) => {
            const newSet = new Set(prev);
            newSet.delete(columnKey);
            return newSet;
        });
    };

    // Create ordering handlers if ordering is enabled
    const orderingHandlers: IOrderingHandlers<T> | undefined = orderingConfig?.enabled ? {
        onDragStart: (e: React.DragEvent<HTMLElement>, item: T) => {
            const index = items?.data?.findIndex(i => i.id === item.id) ?? -1;
            handleDragStart(e, item, index, setDragState);
        },
        onDragOver: (e: React.DragEvent<HTMLElement>) => {
            e.preventDefault();
        },
        onDragEnd: () => {
            handleDragEnd(setDragState);
        },
        onDrop: (e: React.DragEvent<HTMLElement>, targetItem: T) => {
            e.preventDefault();
            const targetIndex = items?.data?.findIndex(i => i.id === targetItem.id) ?? -1;
            if (dragState.draggedIndex !== null && dragState.draggedIndex !== targetIndex && items?.data) {
                // Reorder items in memory (could be used for optimistic updates)
                moveItem(items.data, dragState.draggedIndex, targetIndex);
                // Trigger reorder callback or reload
                if (orderingConfig.onReorder && dragState.draggedItem) {
                    orderingConfig.onReorder(dragState.draggedItem as T, targetItem);
                } else {
                    window.location.reload();
                }
            }
            handleDragEnd(setDragState);
        },
        onMoveItem: (item: T, direction: 'up' | 'down') => {
            const currentIndex = items?.data?.findIndex(i => i.id === item.id) ?? -1;
            const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
            if (currentIndex >= 0 && targetIndex >= 0 && items?.data) {
                // Reorder items in memory (could be used for optimistic updates)
                moveItem(items.data, currentIndex, targetIndex);
                // Trigger reorder callback or reload
                if (orderingConfig.onReorder && items.data[targetIndex]) {
                    orderingConfig.onReorder(item, items.data[targetIndex]);
                } else {
                    window.location.reload();
                }
            }
        },
        getPositionInfo: (item: T) => {
            const index = items?.data?.findIndex(i => i.id === item.id) ?? -1;
            const total = items?.data?.length ?? 0;
            const posInfo = getItemPositionInfo(index, total);
            return {
                isFirst: posInfo.isFirst,
                isLast: posInfo.isLast,
                sortedIndex: index
            };
        }
    } : undefined;

    // Determine if we should use legacy rendering or new column-based rendering
    const useLegacyRendering = !columns || columns.length === 0;
    const hasFilterableColumns = columns?.some((col) => col.filterable) || false;

    return (
        <div className="px-4 py-6">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <Heading title={title} />
                    {typeof createRoute === 'string' && createRoute.length > 0 ? (
                        <Button icon={IconPlus} onClick={() => window.location.href = createRoute}>
                            Create New
                        </Button>
                    ) : createRoute === '' ? (
                        <Button icon={IconPlus} onClick={() => startAddingNewRow()}>
                            Add Row
                        </Button>
                    ) : createRoute === null && (!massActions || massActions.length === 0) ? (
                        <Button
                            icon={IconTrash}
                            color="error"
                            style="soft"
                            onClick={() => {
                                // Open the clear all modal that should be provided by the parent page
                                const modal = document.getElementById('clear-all-modal') as HTMLDialogElement;
                                if (modal) {
                                    modal.showModal();
                                } else {
                                    console.warn('Clear all modal not found - parent page should implement clear-all-modal');
                                }
                            }}
                        >
                            Clear All
                        </Button>
                    ) : createRoute === null ? null : (
                        <Button icon={IconPlus} onClick={() => startAddingNewRow()}>
                            Add Row
                        </Button>
                    )}
                </div>

                <Card>
                    <CardBody>
                        {/* Table Title and Controls */}
                        <div className="mb-4 flex items-baseline justify-between">
                            <div className="font-semibold">All {title}</div>
                            <div className="flex items-center space-x-4">
                                {selectedItems.size > 0 && (
                                    <div className="flex items-center space-x-2">
                                        <div className="text-muted-foreground font-light">({selectedItems.size} selected)</div>
                                        {massActions && massActions.length > 0 && (
                                            <div className="flex items-center space-x-2">
                                                <span className="text-muted-foreground text-sm">•</span>
                                                <div className="flex items-center space-x-1">
                                                    {massActions.map((action) => (
                                                        <Button
                                                            key={action.name}
                                                            size="sm"
                                                            color={action.name === 'delete' ? 'error' : 'primary'}
                                                            style="soft"
                                                            onClick={() => openMassActionModal(action)}
                                                            icon={action.name === 'delete' ? IconTrash : undefined}
                                                        >
                                                            {action.label}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            {hasFilterableColumns && (
                                <div className="flex items-center space-x-2">
                                    <Button size="sm" onClick={() => setShowFilters(!showFilters)} icon={IconFilter}>
                                        Filters
                                    </Button>
                                    {Object.keys(columnFilters).length > 0 && (
                                        <Button style="ghost" size="sm" onClick={clearAllFilters} icon={IconX}>
                                            Clear
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>

                        <TableWrapper>
                            <Table modifier="zebra pinCols" className="w-full text-left text-sm">
                                <TableHeader
                                    columns={columns}
                                    filters={filters || {}}
                                    selectedItems={selectedItems}
                                    items={items ? { data: items.data, last_page: items.lastPage } : null}
                                    onSort={handleSort}
                                    onSelectAll={handleSelectAll}
                                    useLegacyRendering={useLegacyRendering}
                                    renderHeader={renderHeader}
                                    showFilters={showFilters}
                                    hasFilterableColumns={hasFilterableColumns}
                                    columnFilters={columnFilters}
                                    openDateFilters={openDateFilters}
                                    calendarTriggersRef={calendarTriggersRef}
                                    onColumnFilter={handleColumnFilter}
                                    onToggleDateFilter={toggleDateFilter}
                                    hasMassActions={massActions && massActions.length > 0}
                                />
                                <ModelTableBody
                                    items={items ? { data: items.data, last_page: items.lastPage } : null}
                                    columns={columns}
                                    selectedItems={selectedItems}
                                    editingCell={editingCell}
                                    editValue={editValue}
                                    editingError={editingError}
                                    isEditingSaving={isEditingSaving}
                                    editingSaveSuccess={editingSaveSuccess}
                                    editRoute={editRoute}
                                    deleteRoute={deleteRoute}
                                    useLegacyRendering={useLegacyRendering}
                                    onItemSelect={handleItemSelect}
                                    onStartEditing={startEditing}
                                    onSaveEditing={saveEditing}
                                    onSetEditValue={setEditValue}
                                    onEditKeyPress={handleEditKeyPress}
                                    onInputBlur={handleInputBlur}
                                    onSetIsClickingSaveButton={setIsClickingSaveButton}
                                    onDeleteItem={openDeleteModal}
                                    renderItem={renderItem}
                                    rowActions={rowActions}
                                    // Add Row functionality
                                    isAddingNewRow={isAddingNewRow}
                                    newRowData={newRowData}
                                    newRowError={newRowError}
                                    isSavingNewRow={isSavingNewRow}
                                    onUpdateNewRowData={updateNewRowData}
                                    onSaveNewRow={saveNewRow}
                                    onCancelAddingNewRow={cancelAddingNewRow}
                                    // Ordering functionality
                                    orderingHandlers={orderingHandlers}
                                    // Mass actions props for checkbox column visibility
                                    hasMassActions={massActions && massActions.length > 0}
                                />
                            </Table>
                        </TableWrapper>

                        {items && items.lastPage > 1 && (
                            <Pagination
                                currentPage={items.currentPage}
                                totalPages={items.lastPage}
                                onPageChange={(page) => {
                                    const params = new URLSearchParams(window.location.search);
                                    params.set('page', String(page));
                                    window.location.href = `${window.location.pathname}?${params.toString()}`;
                                }}
                                showPrevNext={true}
                                maxVisiblePages={7}
                            />
                        )}
                    </CardBody>
                </Card>

                {/* Date Filter Calendar Portal */}
                <DateFilterCalendar
                    openDateFilters={openDateFilters}
                    calendarPositions={calendarPositions}
                    columnFilters={columnFilters}
                    onDateSelect={handleDateSelect}
                />

                {/* Modals */}
                <ModelListModals
                    deleteModalOpen={deleteModalOpen}
                    itemToDelete={itemToDelete}
                    isDeleting={isDeleting}
                    deleteError={deleteError}
                    massActionModalOpen={massActionModalOpen}
                    selectedMassAction={selectedMassAction}
                    isExecutingMassAction={isExecutingMassAction}
                    massActionError={massActionError}
                    selectedCount={selectedItems.size}
                    onCloseDeleteModal={closeDeleteModal}
                    onConfirmDelete={handleDeleteConfirm}
                    onCloseMassActionModal={closeMassActionModal}
                    onConfirmMassAction={handleMassActionConfirm}
                />
            </div>
        </div>
    );
}
