import { IMassAction, IModel, IModelListProps } from '@/types/models';
import React from 'react';

// Custom row action interface
export interface IRowAction<T extends IModel> {
    icon: React.ComponentType<any>;
    title: string;
    color?: 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    style?: 'default' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
    onClick: (item: T) => void;
}

// Column definition interface for enhanced table functionality
export interface IColumnDefinition<T extends IModel> {
    key: keyof T | string;
    label: string;
    sortable?: boolean;
    filterable?: boolean;
    filterType?: 'text' | 'select' | 'date';
    filterOptions?: { value: string; label: string }[];
    render?: (item: T) => React.ReactNode;
    className?: string;
    headerClassName?: string;
    editableInline?: boolean;
    editType?: 'text' | 'email' | 'number' | 'select' | 'date' | 'toggle';
    editOptions?: { value: string; label: string }[];
    editValidation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
    };
    onSave?: (item: T, newValue: string) => Promise<void> | void;
}

// Ordering configuration interface
export interface IOrderingConfig<T extends IModel> {
    enabled: boolean;
    swapEndpoint: string;
    positionField: keyof T;
    idField: keyof T;
    onReorder?: (item1: T, item2: T) => Promise<void>;
    recountEndpoint?: string;
    recountDelay?: number; // in milliseconds, default 2000
}

// Main component props interface
export interface ModelListComponentProps<T extends IModel> extends IModelListProps<T> {
    title: string;
    createRoute?: string | null;
    editRoute: (id: number | string) => string;
    deleteRoute: (id: number | string) => string;
    inlineEditRoute?: (id: number | string) => string;
    massActionRoute: string;
    columns: IColumnDefinition<T>[];
    massActions?: IMassAction[];
    rowActions?: IRowAction<T>[];
    orderingConfig?: IOrderingConfig<T>;
    // Legacy props for backward compatibility
    renderItem?: (item: T) => React.ReactNode;
    renderHeader?: () => React.ReactNode;
}

// Inline editing state interfaces
export interface EditingCell {
    itemId: number | string;
    columnKey: string;
}

export interface EditingState {
    editingCell: EditingCell | null;
    editValue: string;
    isEditingSaving: boolean;
    editingError: string;
    isClickingSaveButton: boolean;
    editingSaveSuccess: boolean;
}

// Filter state interfaces
export interface FilterState {
    columnFilters: Record<string, string>;
    showFilters: boolean;
    openDateFilters: Set<string>;
    calendarPositions: Record<string, { top: number; left: number; width: number }>;
}

// Selection state interfaces
export interface SelectionState {
    selectedItems: Set<number | string>;
    isAllSelected: boolean;
    isIndeterminate: boolean;
}

// Modal state interfaces
export interface ModalState {
    deleteModalOpen: boolean;
    itemToDelete: IModel | null;
    isDeleting: boolean;
    massActionModalOpen: boolean;
    selectedMassAction: IMassAction | null;
    isExecutingMassAction: boolean;
}

// Component-specific prop interfaces
export interface TableHeaderProps<T extends IModel> {
    columns: IColumnDefinition<T>[];
    filters: { sort?: string; direction?: 'asc' | 'desc' };
    selectedItems: Set<number | string>;
    items: { data?: T[]; last_page?: number } | null;
    onSort: (columnKey: string) => void;
    onSelectAll: (checked: boolean) => void;
    useLegacyRendering: boolean;
    renderHeader?: () => React.ReactNode;
    // Optional FiltersRow props
    showFilters?: boolean;
    hasFilterableColumns?: boolean;
    columnFilters?: Record<string, string>;
    openDateFilters?: Set<string>;
    calendarTriggersRef?: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
    onColumnFilter?: (columnKey: string, value: string, filterType?: 'text' | 'select' | 'date') => void;
    onToggleDateFilter?: (columnKey: string) => void;
    // Mass actions props for checkbox column visibility
    hasMassActions?: boolean;
}

// Ordering handlers interface
export interface IOrderingHandlers<T extends IModel> {
    onDragStart: (e: React.DragEvent, item: T) => void;
    onDragOver: (e: React.DragEvent) => void;
    onDragEnd: (e: React.DragEvent) => void;
    onDrop: (e: React.DragEvent, targetItem: T) => void;
    onMoveItem: (item: T, direction: 'up' | 'down') => void;
    getPositionInfo: (item: T) => { isFirst: boolean; isLast: boolean; sortedIndex: number };
}

export interface TableBodyProps<T extends IModel> {
    items: { data?: T[]; last_page?: number } | null;
    columns: IColumnDefinition<T>[];
    selectedItems: Set<number | string>;
    editingCell: EditingCell | null;
    editValue: string;
    editingError: string;
    isEditingSaving: boolean;
    editingSaveSuccess: boolean;
    editRoute: (id: number | string) => string;
    deleteRoute: (id: number | string) => string;
    useLegacyRendering: boolean;
    onItemSelect: (itemId: number | string, checked: boolean) => void;
    onStartEditing: (item: T, column: IColumnDefinition<T>) => void;
    onSaveEditing: (valueToSave?: string) => Promise<void>;
    onSetEditValue: (value: string) => void;
    onEditKeyPress: (e: React.KeyboardEvent) => void;
    onInputBlur: () => void;
    onSetIsClickingSaveButton: (value: boolean) => void;
    onDeleteItem: (item: T) => void;
    renderItem?: (item: T) => React.ReactNode;
    rowActions?: IRowAction<T>[];
    // Add Row functionality
    isAddingNewRow?: boolean;
    newRowData?: Record<string, string>;
    newRowError?: string;
    isSavingNewRow?: boolean;
    onUpdateNewRowData?: (columnKey: string, value: string) => void;
    onSaveNewRow?: () => Promise<void>;
    onCancelAddingNewRow?: () => void;
    // Ordering functionality
    orderingHandlers?: IOrderingHandlers<T>;
    // Mass actions props for checkbox column visibility
    hasMassActions?: boolean;
}

export interface FiltersRowProps<T extends IModel> {
    columns: IColumnDefinition<T>[];
    columnFilters: Record<string, string>;
    openDateFilters: Set<string>;
    calendarTriggersRef: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
    onColumnFilter: (columnKey: string, value: string, filterType?: 'text' | 'select' | 'date') => void;
    onToggleDateFilter: (columnKey: string) => void;
    hasMassActions?: boolean;
}

export interface InlineEditComponentProps<T extends IModel> {
    column: IColumnDefinition<T>;
    editValue: string;
    editingError: string;
    isEditingSaving: boolean;
    editingSaveSuccess: boolean;
    onSetEditValue: (value: string) => void;
    onSaveEditing: (valueToSave?: string) => Promise<void>;
    onEditKeyPress: (e: React.KeyboardEvent) => void;
    onInputBlur: () => void;
    onSetIsClickingSaveButton: (value: boolean) => void;
}

export interface DateFilterCalendarProps {
    openDateFilters: Set<string>;
    calendarPositions: Record<string, { top: number; left: number; width: number }>;
    columnFilters: Record<string, string>;
    onDateSelect: (columnKey: string, date: Date | undefined) => void;
}

export interface ModalsProps<T extends IModel> {
    deleteModalOpen: boolean;
    itemToDelete: T | null;
    isDeleting: boolean;
    deleteError?: string;
    massActionModalOpen: boolean;
    selectedMassAction: IMassAction | null;
    isExecutingMassAction: boolean;
    massActionError?: string;
    selectedCount: number;
    onCloseDeleteModal: () => void;
    onConfirmDelete: () => Promise<void>;
    onCloseMassActionModal: () => void;
    onConfirmMassAction: () => Promise<void>;
}
