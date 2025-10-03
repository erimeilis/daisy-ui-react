import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import {
    drawerVariants,
    drawerSideVariants
} from '@/types/drawer'
import type {
    DrawerProps,
    DrawerToggleProps
} from '@/types/drawer'

/**
 * Drawer component for creating sliding side panels and mobile navigation.
 *
 * Based on DaisyUI's drawer component with support for left/right positioning,
 * mobile behavior, and overlay customization. Perfect for navigation menus,
 * filters, and mobile-first responsive layouts.
 *
 * @example
 * ```tsx
 * <Drawer
 *   sidebarContent={<Navigation />}
 *   side="left"
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 * >
 *   <main>Main content goes here</main>
 * </Drawer>
 * ```
 */
function Drawer({
    className,
    side,
    mobile,
    children,
    sidebarContent,
    open = false,
    onOpenChange,
    sidebarProps,
    contentProps,
    overlayProps,
    asChild = false,
    toggleId = 'drawer-toggle',
    ...props
}: DrawerProps) {
    const handleToggle = () => {
        onOpenChange?.(!open)
    }

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp
            className={cn(drawerVariants({ side, mobile }), className)}
            {...props}
        >
            {/* Hidden checkbox for drawer state */}
            <input
                id={toggleId}
                type="checkbox"
                className="drawer-toggle"
                checked={open}
                onChange={handleToggle}
                aria-hidden="true"
            />

            {/* Main content area */}
            <div
                className={cn('drawer-content flex flex-col', contentProps?.className)}
                {...contentProps}
            >
                {children}
            </div>

            {/* Sidebar */}
            <div
                className={cn(drawerSideVariants({}), sidebarProps?.className)}
                {...sidebarProps}
            >
                {/* Overlay - clicking closes the drawer */}
                <label
                    htmlFor={toggleId}
                    className={cn(
                        'drawer-overlay',
                        overlayProps?.className
                    )}
                    {...overlayProps}
                    onClick={(e) => {
                        handleToggle()
                        overlayProps?.onClick?.(e)
                    }}
                    aria-label="Close drawer"
                />

                {/* Sidebar content */}
                <aside className="bg-base-200 text-base-content min-h-full w-80 p-4">
                    {sidebarContent}
                </aside>
            </div>
        </Comp>
    )
}



function DrawerToggle({
    className,
    children,
    asChild = false,
    ...props
}: DrawerToggleProps) {
    const Comp = asChild ? Slot : 'label'

    return (
        <Comp
            className={cn('drawer-button', className)}
            {...props}
        >
            {children}
        </Comp>
    )
}

export { Drawer, DrawerToggle }
