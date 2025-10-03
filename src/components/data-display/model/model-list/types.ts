import type {IMassAction, IModel, IModelListProps} from '@/types/models'
import React from 'react';

/**
 * Custom row action configuration interface
 * @template T - The model type extending IModel
 */
export interface IRowAction<T extends IModel> {
    /** Icon component to display for this action */
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    /** Tooltip/title text for the action */
    title: string;
    /** Color scheme for the action button */
    color?: 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    /** Visual style variant for the action button */
    style?: 'default' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
    /** Callback function executed when action is clicked */
    onClick: (item: T) => void;
}

/**
 * Column definition interface for enhanced table functionality
 * @template T - The model type extending IModel
 */
export interface IColumnDefinition<T extends IModel> {
    /** Column identifier - must match model property or be a custom string */
    key: keyof T | string;
    /** Display label for the column header */
    label: string;
    /** Enable sorting functionality for this column */
    sortable?: boolean;
    /** Enable filtering functionality for this column */
    filterable?: boolean;
    /** Type of filter to apply (text input, select dropdown, or date picker) */
    filterType?: 'text' | 'select' | 'date';
    /** Available options for select filter type */
    filterOptions?: Array<{ value: string; label: string }>;
    /** Custom render function for cell content */
    render?: (item: T) => React.ReactNode;
    /** CSS classes to apply to table cells in this column */
    className?: string;
    /** CSS classes to apply to the header cell */
    headerClassName?: string;
    /** Enable inline editing for this column */
    editableInline?: boolean;
    /** Type of input for inline editing */
    editType?: 'text' | 'email' | 'number' | 'select' | 'date' | 'toggle';
    /** Available options for select edit type */
    editOptions?: Array<{ value: string; label: string }>;
    /** Validation rules for inline editing */
    editValidation?: {
        /** Field is required */
        required?: boolean;
        /** Minimum length for text inputs */
        minLength?: number;
        /** Maximum length for text inputs */
        maxLength?: number;
        /** Regex pattern for validation */
        pattern?: RegExp;
    };
    /** Custom save handler for inline editing - if not provided, uses default PATCH request */
    onSave?: (item: T, newValue: string) => Promise<void> | void;
}

/**
 * Ordering/reordering configuration interface
 * @template T - The model type extending IModel
 */
export interface IOrderingConfig<T extends IModel> {
    /** Enable drag-and-drop reordering */
    enabled: boolean;
    /** API endpoint for swapping item positions */
    swapEndpoint: string;
    /** Model field containing position/order value */
    positionField: keyof T;
    /** Model field containing unique identifier */
    idField: keyof T;
    /** Custom callback after reordering - if not provided, triggers page reload */
    onReorder?: (item1: T, item2: T) => Promise<void>;
    /** API endpoint for recounting positions */
    recountEndpoint?: string;
    /** Delay before recounting (in milliseconds, default 2000) */
    recountDelay?: number;
}

/**
 * Main ModelList component props interface
 * @template T - The model type extending IModel
 */
export interface IModelListComponentProps<T extends IModel> extends IModelListProps<T> {
    /** Page title displayed at the top */
    title: string;
    /** Route for creating new items - use string for route, '' for inline add, null to hide */
    createRoute?: string | null;
    /** Function to generate edit route from item ID */
    editRoute: (id: number | string) => string;
    /** Function to generate delete route from item ID */
    deleteRoute: (id: number | string) => string;
    /** Function to generate inline edit route from item ID */
    inlineEditRoute?: (id: number | string) => string;
    /** API endpoint for mass actions */
    massActionRoute: string;
    /** Column definitions for the table */
    columns: IColumnDefinition<T>[];
    /** Available mass actions */
    massActions?: IMassAction[];
    /** Custom row-level actions */
    rowActions?: IRowAction<T>[];
    /** Drag-and-drop ordering configuration */
    orderingConfig?: IOrderingConfig<T>;
    /** Legacy: Custom render function for table rows */
    renderItem?: (item: T) => React.ReactNode;
    /** Legacy: Custom render function for table headers */
    renderHeader?: () => React.ReactNode;
}

/**
 * Editing cell state interface
 */
export interface IEditingCell {
    /** ID of the item being edited */
    itemId: number | string;
    /** Column key being edited */
    columnKey: string;
}

/**
 * Complete editing state interface
 */
export interface IEditingState {
    /** Currently editing cell information */
    editingCell: IEditingCell | null;
    /** Current edit value */
    editValue: string;
    /** Saving state flag */
    isEditingSaving: boolean;
    /** Error message if save failed */
    editingError: string;
    /** User is clicking save button flag */
    isClickingSaveButton: boolean;
    /** Save success state flag */
    editingSaveSuccess: boolean;
}

/**
 * Filter state interface
 */
export interface IFilterState {
    /** Active column filters */
    columnFilters: Record<string, string>;
    /** Show/hide filters row */
    showFilters: boolean;
    /** Set of column keys with open date filter dropdowns */
    openDateFilters: Set<string>;
    /** Calendar dropdown positions */
    calendarPositions: Record<string, { top: number; left: number; width: number }>;
}

/**
 * Selection state interface
 */
export interface ISelectionState {
    /** Set of selected item IDs */
    selectedItems: Set<number | string>;
    /** All items selected flag */
    isAllSelected: boolean;
    /** Some items selected flag */
    isIndeterminate: boolean;
}

/**
 * Modal state interface
 */
export interface IModalState {
    /** Delete confirmation modal open state */
    deleteModalOpen: boolean;
    /** Item pending deletion */
    itemToDelete: IModel | null;
    /** Delete in progress flag */
    isDeleting: boolean;
    /** Mass action confirmation modal open state */
    massActionModalOpen: boolean;
    /** Selected mass action */
    selectedMassAction: IMassAction | null;
    /** Mass action execution in progress flag */
    isExecutingMassAction: boolean;
}

// ============================================================================
// Legacy type aliases for backwards compatibility
// ============================================================================

/** @deprecated Use IModelListComponentProps instead */
export type ModelListComponentProps<T extends IModel> = IModelListComponentProps<T>;

/** @deprecated Use IEditingCell instead */
export type EditingCell = IEditingCell;

/** @deprecated Use IEditingState instead */
export type EditingState = IEditingState;

/** @deprecated Use IFilterState instead */
export type FilterState = IFilterState;

/** @deprecated Use ISelectionState instead */
export type SelectionState = ISelectionState;

/** @deprecated Use IModalState instead */
export type ModalState = IModalState;

// ============================================================================
// Component-specific prop interfaces
// ============================================================================

/**
 * Table header component props
 * @template T - The model type extending IModel
 */
export interface ITableHeaderProps<T extends IModel> {
    /** Column definitions */
    columns: IColumnDefinition<T>[];
    /** Current sort and direction state */
    filters: { sort?: string; direction?: 'asc' | 'desc' };
    /** Set of currently selected item IDs */
    selectedItems: Set<number | string>;
    /** Paginated items data */
    items: { data?: T[]; last_page?: number } | null;
    /** Callback when column header is clicked for sorting */
    onSort: (columnKey: string) => void;
    /** Callback when select-all checkbox is toggled */
    onSelectAll: (checked: boolean) => void;
    /** Use legacy rendering mode */
    useLegacyRendering: boolean;
    /** Legacy: Custom render function for headers */
    renderHeader?: () => React.ReactNode;
    /** Show filters row */
    showFilters?: boolean;
    /** Has filterable columns */
    hasFilterableColumns?: boolean;
    /** Active column filters */
    columnFilters?: Record<string, string>;
    /** Set of column keys with open date filters */
    openDateFilters?: Set<string>;
    /** Reference to calendar trigger elements */
    calendarTriggersRef?: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
    /** Callback when filter value changes */
    onColumnFilter?: (columnKey: string, value: string, filterType?: 'text' | 'select' | 'date') => void;
    /** Callback when date filter dropdown is toggled */
    onToggleDateFilter?: (columnKey: string) => void;
    /** Show checkbox column for mass actions */
    hasMassActions?: boolean;
}

/**
 * Ordering handlers interface for drag-and-drop functionality
 * @template T - The model type extending IModel
 */
export interface IOrderingHandlers<T extends IModel> {
    /** Handle drag start event */
    onDragStart: (e: React.DragEvent<HTMLElement>, item: T) => void;
    /** Handle drag over event */
    onDragOver: (e: React.DragEvent<HTMLElement>) => void;
    /** Handle drag end event */
    onDragEnd: () => void;
    /** Handle drop event */
    onDrop: (e: React.DragEvent<HTMLElement>, targetItem: T) => void;
    /** Move item up or down */
    onMoveItem: (item: T, direction: 'up' | 'down') => void;
    /** Get position information for item */
    getPositionInfo: (item: T) => { isFirst: boolean; isLast: boolean; sortedIndex: number };
}

/**
 * Table body component props
 * @template T - The model type extending IModel
 */
export interface ITableBodyProps<T extends IModel> {
    /** Paginated items data */
    items: { data?: T[]; last_page?: number } | null;
    /** Column definitions */
    columns: IColumnDefinition<T>[];
    /** Set of currently selected item IDs */
    selectedItems: Set<number | string>;
    /** Currently editing cell */
    editingCell: IEditingCell | null;
    /** Current edit value */
    editValue: string;
    /** Edit error message */
    editingError: string;
    /** Saving state */
    isEditingSaving: boolean;
    /** Save success state */
    editingSaveSuccess: boolean;
    /** Function to generate edit route */
    editRoute: (id: number | string) => string;
    /** Function to generate delete route */
    deleteRoute: (id: number | string) => string;
    /** Use legacy rendering mode */
    useLegacyRendering: boolean;
    /** Callback when item selection changes */
    onItemSelect: (itemId: number | string, checked: boolean) => void;
    /** Callback when starting to edit a cell */
    onStartEditing: (item: T, column: IColumnDefinition<T>) => void;
    /** Callback when saving edited value */
    onSaveEditing: (valueToSave?: string) => Promise<void>;
    /** Callback when edit value changes */
    onSetEditValue: (value: string) => void;
    /** Callback for keyboard events during editing */
    onEditKeyPress: (e: React.KeyboardEvent) => void;
    /** Callback when input loses focus */
    onInputBlur: () => void;
    /** Callback to set save button click state */
    onSetIsClickingSaveButton: (value: boolean) => void;
    /** Callback when delete button is clicked */
    onDeleteItem: (item: T) => void;
    /** Legacy: Custom render function for rows */
    renderItem?: (item: T) => React.ReactNode;
    /** Custom row-level actions */
    rowActions?: IRowAction<T>[];
    /** Add row mode active */
    isAddingNewRow?: boolean;
    /** New row data */
    newRowData?: Record<string, string>;
    /** New row error message */
    newRowError?: string;
    /** Saving new row state */
    isSavingNewRow?: boolean;
    /** Callback when new row data changes */
    onUpdateNewRowData?: (columnKey: string, value: string) => void;
    /** Callback to save new row */
    onSaveNewRow?: () => Promise<void>;
    /** Callback to cancel adding new row */
    onCancelAddingNewRow?: () => void;
    /** Ordering handlers for drag-and-drop */
    orderingHandlers?: IOrderingHandlers<T>;
    /** Show checkbox column for mass actions */
    hasMassActions?: boolean;
}

/**
 * Filters row component props
 * @template T - The model type extending IModel
 */
export interface IFiltersRowProps<T extends IModel> {
    /** Column definitions */
    columns: IColumnDefinition<T>[];
    /** Active column filters */
    columnFilters: Record<string, string>;
    /** Set of column keys with open date filters */
    openDateFilters: Set<string>;
    /** Reference to calendar trigger elements */
    calendarTriggersRef: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
    /** Callback when filter value changes */
    onColumnFilter: (columnKey: string, value: string, filterType?: 'text' | 'select' | 'date') => void;
    /** Callback when date filter dropdown is toggled */
    onToggleDateFilter: (columnKey: string) => void;
    /** Show checkbox column for mass actions */
    hasMassActions?: boolean;
}

/**
 * Inline edit component props
 * @template T - The model type extending IModel
 */
export interface IInlineEditComponentProps<T extends IModel> {
    /** Column being edited */
    column: IColumnDefinition<T>;
    /** Current edit value */
    editValue: string;
    /** Edit error message */
    editingError: string;
    /** Saving state */
    isEditingSaving: boolean;
    /** Save success state */
    editingSaveSuccess: boolean;
    /** Callback when edit value changes */
    onSetEditValue: (value: string) => void;
    /** Callback when saving edited value */
    onSaveEditing: (valueToSave?: string) => Promise<void>;
    /** Callback for keyboard events during editing */
    onEditKeyPress: (e: React.KeyboardEvent) => void;
    /** Callback when input loses focus */
    onInputBlur: () => void;
    /** Callback to set save button click state */
    onSetIsClickingSaveButton: (value: boolean) => void;
}

/**
 * Date filter calendar component props
 */
export interface IDateFilterCalendarProps {
    /** Set of column keys with open date filters */
    openDateFilters: Set<string>;
    /** Calendar dropdown positions */
    calendarPositions: Record<string, { top: number; left: number; width: number }>;
    /** Active column filters */
    columnFilters: Record<string, string>;
    /** Callback when date is selected */
    onDateSelect: (columnKey: string, date: Date | undefined) => void;
}

/**
 * Modals component props
 * @template T - The model type extending IModel
 */
export interface IModalsProps<T extends IModel> {
    /** Delete modal open state */
    deleteModalOpen: boolean;
    /** Item pending deletion */
    itemToDelete: T | null;
    /** Delete in progress flag */
    isDeleting: boolean;
    /** Delete error message */
    deleteError?: string;
    /** Mass action modal open state */
    massActionModalOpen: boolean;
    /** Selected mass action */
    selectedMassAction: IMassAction | null;
    /** Mass action execution in progress flag */
    isExecutingMassAction: boolean;
    /** Mass action error message */
    massActionError?: string;
    /** Number of selected items */
    selectedCount: number;
    /** Callback to close delete modal */
    onCloseDeleteModal: () => void;
    /** Callback to confirm deletion */
    onConfirmDelete: () => Promise<void>;
    /** Callback to close mass action modal */
    onCloseMassActionModal: () => void;
    /** Callback to confirm mass action */
    onConfirmMassAction: () => Promise<void>;
}

// ============================================================================
// Legacy component prop type aliases for backwards compatibility
// ============================================================================

/** @deprecated Use ITableHeaderProps instead */
export type TableHeaderProps<T extends IModel> = ITableHeaderProps<T>;

/** @deprecated Use ITableBodyProps instead */
export type TableBodyProps<T extends IModel> = ITableBodyProps<T>;

/** @deprecated Use IFiltersRowProps instead */
export type FiltersRowProps<T extends IModel> = IFiltersRowProps<T>;

/** @deprecated Use IInlineEditComponentProps instead */
export type InlineEditComponentProps<T extends IModel> = IInlineEditComponentProps<T>;

/** @deprecated Use IDateFilterCalendarProps instead */
export type DateFilterCalendarProps = IDateFilterCalendarProps;

/** @deprecated Use IModalsProps instead */
export type ModalsProps<T extends IModel> = IModalsProps<T>;
