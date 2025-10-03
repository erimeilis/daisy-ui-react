import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { navbarVariants } from '@/types/navbar'
import type {
    NavbarProps,
    NavbarBrandProps,
    NavbarMenuProps
} from '@/types/navbar'

/**
 * Navbar component for creating navigation headers.
 *
 * Based on DaisyUI's navbar component with support for different color themes,
 * sizes, shadows, and positioning. Features start, center, and end sections
 * for flexible layout organization.
 *
 * @example
 * ```tsx
 * <Navbar
 *   color="primary"
 *   position="sticky"
 *   shadow="md"
 *   start={<Logo />}
 *   center={<Navigation />}
 *   end={<UserMenu />}
 * />
 * ```
 */
function Navbar({
    className,
    color,
    size,
    shadow,
    position,
    start,
    center,
    end,
    startProps,
    centerProps,
    endProps,
    asChild = false,
    children,
    ...props
}: NavbarProps) {
    const Comp = asChild ? Slot : 'div'

    // If children are provided, render them directly without sections
    if (children) {
        return (
            <Comp
                className={cn(navbarVariants({ color, size, shadow, position }), className)}
                {...props}
            >
                {children}
            </Comp>
        )
    }

    return (
        <Comp
            className={cn(navbarVariants({ color, size, shadow, position }), className)}
            role="navigation"
            {...props}
        >
            {/* Start section */}
            {start && (
                <div
                    className={cn('navbar-start', startProps?.className)}
                    {...startProps}
                >
                    {start}
                </div>
            )}

            {/* Center section */}
            {center && (
                <div
                    className={cn('navbar-center', centerProps?.className)}
                    {...centerProps}
                >
                    {center}
                </div>
            )}

            {/* End section */}
            {end && (
                <div
                    className={cn('navbar-end', endProps?.className)}
                    {...endProps}
                >
                    {end}
                </div>
            )}
        </Comp>
    )
}



function NavbarBrand({
    className,
    children,
    asChild = false,
    ...props
}: NavbarBrandProps) {
    const Comp = asChild ? Slot : 'div'

    return (
        <Comp
            className={cn('navbar-brand text-xl font-bold', className)}
            {...props}
        >
            {children}
        </Comp>
    )
}



function NavbarMenu({
    className,
    horizontal = true,
    children,
    asChild = false,
    ...props
}: NavbarMenuProps) {
    const Comp = asChild ? Slot : 'ul'

    return (
        <Comp
            className={cn(
                'menu',
                horizontal ? 'menu-horizontal' : '',
                'px-1',
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}

export { Navbar, NavbarBrand, NavbarMenu }
