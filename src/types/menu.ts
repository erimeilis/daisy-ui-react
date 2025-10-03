import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const menuVariants = cva(
    'menu',
    {
        variants: {
            // Size variants
            size: {
                xs: 'menu-xs',
                sm: 'menu-sm',
                md: 'menu-md',
                lg: 'menu-lg',
                xl: 'menu-xl',
            },
            // Direction variants
            direction: {
                vertical: '',
                horizontal: 'menu-horizontal',
            },
        },
        defaultVariants: {
            size: 'md',
            direction: 'vertical',
        },
    }
)

export const menuItemVariants = cva(
    '',
    {
        variants: {
            // State variants
            active: {
                false: '',
                true: 'active',
            },
            // Disabled variants
            disabled: {
                false: '',
                true: 'disabled',
            },
            // Focus variants
            focus: {
                false: '',
                true: 'focus',
            },
        },
        defaultVariants: {
            active: false,
            disabled: false,
            focus: false,
        },
    }
)

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof menuVariants> {
    children: React.ReactNode
}

export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof menuItemVariants> {
    children: React.ReactNode
    icon?: React.ComponentType<{ className?: string }>
    href?: string
    onClick?: () => void
    prefetch?: boolean
}

export interface MenuTitleProps extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode
}

export interface MenuDetailsProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
    summary: React.ReactNode
    children: React.ReactNode
    icon?: React.ComponentType<{ className?: string }>
    summaryClassName?: string
}

export interface NavigationMenuProps extends MenuProps {
    items: Array<{
        label: React.ReactNode
        href?: string
        onClick?: () => void
        icon?: React.ComponentType<{ className?: string }>
        active?: boolean
        disabled?: boolean
        children?: Array<{
            label: React.ReactNode
            href?: string
            onClick?: () => void
            active?: boolean
            disabled?: boolean
        }>
    }>
}

export type MenuVariantProps = VariantProps<typeof menuVariants>
export type MenuItemVariantProps = VariantProps<typeof menuItemVariants>
