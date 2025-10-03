import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const listVariants = cva(
    'menu',
    {
        variants: {
            // Direction variants
            direction: {
                vertical: '',
                horizontal: 'menu-horizontal',
            },
            // Size variants
            size: {
                xs: 'menu-xs',
                sm: 'menu-sm',
                md: 'menu-md',
                lg: 'menu-lg',
            },
            // Background variants
            background: {
                none: '',
                base100: 'bg-base-100',
                base200: 'bg-base-200',
                base300: 'bg-base-300',
                rounded: 'bg-base-200 rounded-box',
            },
            // Padding variants
            padding: {
                none: 'p-0',
                sm: 'p-2',
                md: 'p-4',
                lg: 'p-6',
            },
        },
        defaultVariants: {
            direction: 'vertical',
            size: 'md',
            background: 'none',
            padding: 'md',
        },
    }
)

export const listItemVariants = cva(
    '',
    {
        variants: {
            // State variants
            state: {
                default: '',
                active: 'active',
                disabled: 'disabled',
            },
            // Style variants
            style: {
                default: '',
                bordered: 'bordered',
                hover: 'hover:bg-base-200',
            },
        },
        defaultVariants: {
            state: 'default',
            style: 'default',
        },
    }
)

export interface ListItem {
    /**
     * Unique identifier for the item
     */
    id: string
    /**
     * Item content
     */
    content: React.ReactNode
    /**
     * Item subtitle or description
     */
    subtitle?: React.ReactNode
    /**
     * Leading icon or element
     */
    leading?: React.ReactNode
    /**
     * Trailing icon or element
     */
    trailing?: React.ReactNode
    /**
     * Whether the item is active
     */
    active?: boolean
    /**
     * Whether the item is disabled
     */
    disabled?: boolean
    /**
     * Click handler
     */
    onClick?: () => void
    /**
     * Custom item props
     */
    itemProps?: React.LiHTMLAttributes<HTMLLIElement>
}

export interface ListProps
    extends Omit<React.HTMLAttributes<HTMLUListElement>, 'onClick'>,
        VariantProps<typeof listVariants> {
    /**
     * Array of list items
     */
    items?: ListItem[]
    /**
     * List content as children (alternative to items prop)
     */
    children?: React.ReactNode
    /**
     * Whether items are selectable
     * @default false
     */
    selectable?: boolean
    /**
     * Currently selected item ID (for controlled mode)
     */
    selectedId?: string
    /**
     * Default selected item ID (for uncontrolled mode)
     */
    defaultSelectedId?: string
    /**
     * Callback fired when an item is selected
     */
    onSelectionChange?: (itemId: string) => void
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    /**
     * Item data
     */
    item: ListItem
    /**
     * Whether the item is selected
     */
    isSelected?: boolean
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface SimpleListProps extends VariantProps<typeof listVariants> {
    /**
     * List title
     */
    title?: string
    /**
     * Simple array of items (strings or ReactNodes)
     */
    items: Array<React.ReactNode>
    /**
     * Whether items should be clickable
     */
    clickable?: boolean
    /**
     * Callback fired when an item is clicked
     */
    onItemClick?: (index: number, item: React.ReactNode) => void
    /**
     * Additional CSS classes
     */
    className?: string
}

export interface NavigationItem {
    /**
     * Navigation label
     */
    label: React.ReactNode
    /**
     * Navigation href
     */
    href?: string
    /**
     * Navigation icon
     */
    icon?: React.ReactNode
    /**
     * Whether the item is disabled
     */
    disabled?: boolean
    /**
     * Click handler (alternative to href)
     */
    onClick?: () => void
    /**
     * Badge or count to display
     */
    badge?: React.ReactNode
}

export interface NavigationListProps extends Omit<ListProps, 'items'> {
    /**
     * Array of navigation items
     */
    items: NavigationItem[]
    /**
     * Current path for highlighting active item
     */
    currentPath?: string
    /**
     * Whether to show icons
     * @default true
     */
    showIcons?: boolean
    /**
     * Whether to show badges
     * @default true
     */
    showBadges?: boolean
}

export interface DataItem {
    /**
     * Data label
     */
    label: React.ReactNode
    /**
     * Data value
     */
    value: React.ReactNode
    /**
     * Optional description
     */
    description?: React.ReactNode
    /**
     * Optional icon
     */
    icon?: React.ReactNode
    /**
     * Custom styling for the value
     */
    valueClassName?: string
}

export interface DataListProps extends VariantProps<typeof listVariants> {
    /**
     * Array of data items
     */
    data: DataItem[]
    /**
     * List title
     */
    title?: string
    /**
     * Whether to show icons
     * @default false
     */
    showIcons?: boolean
    /**
     * Additional CSS classes
     */
    className?: string
}

export type ListVariantProps = VariantProps<typeof listVariants>
export type ListItemVariantProps = VariantProps<typeof listItemVariants>
