import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import {
    listVariants,
    listItemVariants
} from '@/types/list'
import type {
    ListProps,
    ListItemProps,
    SimpleListProps,
    ListItem
} from '@/types/list'

// Define missing types locally
interface NavigationItem {
    label: string
    href?: string
    icon?: React.ComponentType<{ className?: string }>
    badge?: string
    disabled?: boolean
    onClick?: () => void
}

interface NavigationListProps extends Omit<ListProps, 'items'> {
    items: NavigationItem[]
    currentPath?: string
    showIcons?: boolean
    showBadges?: boolean
}

interface DataItem {
    label: string
    value: React.ReactNode
    description?: string
    valueClassName?: string
    icon?: React.ComponentType<{ className?: string }>
}

interface DataListProps extends Omit<ListProps, 'items'> {
    data: DataItem[]
    title?: string
    showIcons?: boolean
}

/**
 * List component for displaying structured data and navigation items.
 *
 * Based on DaisyUI's menu component with support for different orientations,
 * sizes, backgrounds, and interactive states. Perfect for navigation menus,
 * data lists, and structured content display.
 *
 * @example
 * ```tsx
 * const listItems = [
 *   {
 *     id: '1',
 *     content: 'Mobile Plan - Unlimited',
 *     subtitle: '$45/month',
 *     leading: <PhoneIcon />,
 *     trailing: <ChevronRightIcon />
 *   },
 *   {
 *     id: '2',
 *     content: 'Internet Package - Fiber',
 *     subtitle: '$65/month',
 *     leading: <WifiIcon />,
 *     trailing: <ChevronRightIcon />
 *   }
 * ]
 *
 * <List
 *   items={listItems}
 *   background="rounded"
 *   selectable
 *   onSelectionChange={handleSelection}
 * />
 * ```
 */
function List({
    className,
    direction,
    size,
    background,
    padding,
    items = [],
    children,
    selectable = false,
    selectedId,
    defaultSelectedId,
    onSelectionChange,
    asChild = false,
    ...props
}: ListProps) {
    const [internalSelectedId, setInternalSelectedId] = React.useState(defaultSelectedId)
    const isControlled = selectedId !== undefined
    const currentSelectedId = isControlled ? selectedId : internalSelectedId

    const handleItemClick = (itemId: string, onClick?: () => void) => {
        if (selectable) {
            if (isControlled) {
                onSelectionChange?.(itemId)
            } else {
                setInternalSelectedId(itemId)
                onSelectionChange?.(itemId)
            }
        }
        onClick?.()
    }

    const Comp = asChild ? Slot : 'ul'

    return (
        <Comp
            className={cn(listVariants({ direction, size, background, padding }), className)}
            {...props}
        >
            {children || items.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    isSelected={selectable && currentSelectedId === item.id}
                    onClick={() => handleItemClick(item.id, item.onClick)}
                />
            ))}
        </Comp>
    )
}



function ListItem({
    className,
    item,
    isSelected = false,
    onClick,
    asChild = false,
    ...props
}: ListItemProps) {
    const Comp = asChild ? Slot : 'li'

    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
        if (!item.disabled) {
            onClick?.(event)
        }
    }

    return (
        <Comp
            className={cn(
                listItemVariants({
                    state: item.disabled ? 'disabled' : isSelected || item.active ? 'active' : 'default',
                    style: onClick && !item.disabled ? 'hover' : 'default'
                }),
                className
            )}
            onClick={handleClick}
            {...props}
            {...item.itemProps}
        >
            <a className={cn(
                'flex items-center gap-3 w-full',
                item.disabled && 'opacity-50 cursor-not-allowed',
                (onClick && !item.disabled) && 'cursor-pointer'
            )}>
                {/* Leading element */}
                {item.leading && (
                    <div className="flex-shrink-0">
                        {item.leading}
                    </div>
                )}

                {/* Content */}
                <div className="flex-1">
                    <div className="font-medium">
                        {item.content}
                    </div>
                    {item.subtitle && (
                        <div className="text-sm opacity-70">
                            {item.subtitle}
                        </div>
                    )}
                </div>

                {/* Trailing element */}
                {item.trailing && (
                    <div className="flex-shrink-0">
                        {item.trailing}
                    </div>
                )}
            </a>
        </Comp>
    )
}



function SimpleList({
    title,
    items,
    clickable = false,
    onItemClick,
    ...props
}: SimpleListProps) {
    const listItems: ListItem[] = items.map((item, index) => ({
        id: index.toString(),
        content: item,
        onClick: clickable ? () => onItemClick?.(index, item) : undefined,
    }))

    return (
        <div>
            {title && (
                <div className="text-lg font-semibold mb-2 px-4">
                    {title}
                </div>
            )}
            <List items={listItems} {...props} />
        </div>
    )
}

function NavigationList({
    items,
    currentPath,
    showIcons = true,
    showBadges = true,
    ...props
}: NavigationListProps) {
    const listItems: ListItem[] = items.map((item, index) => ({
        id: index.toString(),
        content: item.label,
        leading: showIcons && item.icon ? React.createElement(item.icon, { className: "w-4 h-4" }) : undefined,
        trailing: showBadges && item.badge ? (
            <div className="badge badge-sm">
                {item.badge}
            </div>
        ) : undefined,
        active: currentPath === item.href,
        disabled: item.disabled,
        onClick: item.onClick,
    }))

    return <List items={listItems} {...props} />
}

function DataList({
    data,
    title,
    showIcons = false,
    ...props
}: DataListProps) {
    const listItems: ListItem[] = data.map((item, index) => ({
        id: index.toString(),
        content: (
            <div className="flex justify-between items-start w-full">
                <div className="flex-1">
                    <div className="font-medium text-sm opacity-70">
                        {item.label}
                    </div>
                    {item.description && (
                        <div className="text-xs opacity-50 mt-1">
                            {item.description}
                        </div>
                    )}
                </div>
                <div className={cn('font-semibold text-right', item.valueClassName)}>
                    {item.value}
                </div>
            </div>
        ),
        leading: showIcons && item.icon ? React.createElement(item.icon, { className: "w-4 h-4" }) : undefined,
    }))

    return (
        <div>
            {title && (
                <div className="text-lg font-semibold mb-2 px-4">
                    {title}
                </div>
            )}
            <List items={listItems} {...props} />
        </div>
    )
}

export {
    List,
    ListItem,
    SimpleList,
    NavigationList,
    DataList
}
