// Main exports for the DaisyUI React component library

// UI Components
export { Button } from './components/form/button';
export { buttonVariants } from './types/button';
export type { ButtonProps } from './types/button';

export { Input } from './components/form/input';
export { inputVariants } from './types/input';
export type { InputProps } from './types/input';

export { Checkbox } from './components/form/checkbox';
export { checkboxVariants } from './types/checkbox';
export type { CheckboxProps } from './types/checkbox';

export {
    Radio,
    RadioGroup,
    RadioGroupItem,
    RadioWithLabel,
    RadioList,
    CardRadio
} from './components/form/radio';
export { radioVariants } from './types/radio';
export type {
    RadioProps,
    RadioGroupProps,
    RadioGroupItemProps,
    RadioWithLabelProps,
    RadioListProps,
    CardRadioProps
} from './types/radio';

export { Toggle } from './components/form/toggle';
export { toggleVariants } from './types/toggle';
export type { ToggleProps } from './types/toggle';

export { Select } from './components/form/select';
export { selectVariants } from './types/select';
export type { SelectProps } from './types/select';

export {
    Textarea,
    TextareaWithLabel,
    AutoResizeTextarea,
    SimpleTextarea,
    CodeTextarea
} from './components/form/textarea';
export { textareaVariants } from './types/textarea';
export type {
    TextareaProps,
    TextareaWithLabelProps,
    AutoResizeTextareaProps
} from './types/textarea';

export {
    Range,
    RangeWithSteps,
    DualRange
} from './components/form/range';
export { rangeVariants } from './types/range';
export type {
    RangeProps,
    RangeWithStepsProps,
    DualRangeProps
} from './types/range';

export {
    Rating,
    SimpleRating,
    RatingDistribution
} from './components/form/rating';
export { ratingVariants, ratingItemVariants } from './types/rating';
export type {
    RatingProps,
    SimpleRatingProps,
    RatingDistributionProps,
    RatingDistributionItem
} from './types/rating';

export {
    FileInput,
    FileInputWithFieldset,
    FileInputWithPreview,
    FileInputDragDrop
} from './components/form/file-input';
export { fileInputVariants } from './types/file-input';
export type {
    FileInputProps,
    FileInputWithFieldsetProps,
    FileInputWithPreviewProps,
    FileInputDragDropProps
} from './types/file-input';

export {
    Label,
    LabelText,
    FormLabel,
    InputLabel,
    SimpleLabel
} from './components/ui/label';
export { labelVariants, labelTextVariants } from './types/label';
export type {
    LabelProps,
    LabelTextProps,
    FormLabelProps,
    InputLabelProps
} from './types/label';

export {
    Stats,
    Stat,
    StatCard,
    MetricCard
} from './components/data-display/stat';
export {
    statsVariants,
    statVariants,
    statTitleVariants,
    statValueVariants,
    statDescVariants
} from './types/stat';
export type {
    StatsProps,
    StatProps,
    StatCardProps,
    MetricCardProps,
    StatItem
} from './types/stat';

export {
    Table,
    TableWrapper,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableHeaderCell
} from './components/data-display/table';
export {
    tableVariants,
    tableWrapperVariants,
    tableRowVariants,
    getModifierClasses
} from './types/table';
export type {
    TableProps,
    TableWrapperProps,
    TableHeadProps,
    TableBodyProps,
    TableRowProps,
    TableCellProps,
    TableHeaderCellProps,
    TableColumn,
    TableDataSource
} from './types/table';

export {
    Timeline,
    SimpleTimeline,
    TimelineItem,
    CompactTimeline
} from './components/data-display/timeline';
export { timelineVariants } from './types/timeline';
export type {
    TimelineProps,
    SimpleTimelineProps,
    TimelineItemProps,
    CompactTimelineProps,
    TimelineEvent
} from './types/timeline';

export { Badge } from './components/ui/badge';
export { badgeVariants } from './types/badge';
export type { BadgeProps } from './types/badge';

export {
    Card,
    CardBody,
    CardTitle,
    CardActions,
    CardFigure
} from './components/ui/card';
export { cardVariants } from './types/card';
export type {
    CardProps,
    CardBodyProps,
    CardTitleProps,
    CardActionsProps,
    CardFigureProps
} from './types/card';

export {
    Avatar,
    AvatarGroup,
    AvatarPlaceholder
} from './components/ui/avatar';
export { avatarVariants, avatarGroupVariants } from './types/avatar';
export type {
    AvatarProps,
    AvatarGroupProps,
    AvatarPlaceholderProps
} from './types/avatar';

export {
    Progress,
    ProgressWithLabel,
    IndeterminateProgress,
    CircularProgress,
    StepProgress
} from './components/ui/progress';
export { progressVariants } from './types/progress';
export type {
    ProgressProps,
    ProgressWithLabelProps,
    CircularProgressProps,
    StepProgressProps
} from './types/progress';

export {
    Loading,
    LoadingOverlay,
    LoadingButton,
    LoadingDots,
    LoadingSpinner,
    LoadingRing,
    LoadingBall,
    LoadingBars,
    LoadingInfinity,
    LoadingText
} from './components/ui/loading';
export { loadingVariants } from './types/loading';
export type {
    LoadingProps,
    LoadingOverlayProps,
    LoadingButtonProps,
    LoadingTextProps
} from './types/loading';

export { Icon, type TablerIconProps } from './components/ui/icon';

export { Tooltip } from './components/ui/tooltip';
export { tooltipVariants } from './types/tooltip';
export type { TooltipProps } from './types/tooltip';

export {
    Modal,
    ModalBox,
    ModalAction,
    ModalBackdrop,
    ModalTrigger
} from './components/ui/modal';
export { modalVariants } from './types/modal';
export type {
    ModalProps,
    ModalBoxProps,
    ModalActionProps,
    ModalBackdropProps,
    ModalTriggerProps
} from './types/modal';

export {
    ToastContainer,
    Toast,
    ToastProvider
} from './components/feedback/toast';
export type { ToastMessage } from '@/types/toast';
export { useToast, showToast } from '@/lib/toast-service';

// Navigation Components
export {
  Pagination,
  SimplePagination
} from './components/navigation/pagination';
export type { PaginationProps, SimplePaginationProps } from './components/navigation/pagination';

export {
  Menu,
  MenuItem,
  MenuTitle,
  MenuDetails,
  NavigationMenu,
  HorizontalMenu,
  SidebarMenu,
  BreadcrumbMenu
} from './components/navigation/menu';
export type { MenuProps, MenuItemProps, MenuTitleProps, MenuDetailsProps, NavigationMenuProps } from './components/navigation/menu';

export { Navbar, NavbarBrand, NavbarMenu, navbarVariants } from './components/navigation/navbar';
export type { NavbarProps, NavbarBrandProps, NavbarMenuProps } from './components/navigation/navbar';

export { Breadcrumbs, SimpleBreadcrumbs, BreadcrumbItem, breadcrumbsVariants } from './components/navigation/breadcrumbs';
export type { BreadcrumbsProps } from './components/navigation/breadcrumbs';

// Utility functions
export { cn } from './lib/utils';
export * from './lib/date-utils';
export * from './lib/country-utils';

// Types
export type { SortDirection, SortConfig } from './lib/ordering-utils';
