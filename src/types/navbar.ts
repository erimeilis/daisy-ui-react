import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const navbarVariants = cva(
    'navbar',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                neutral: 'bg-neutral text-neutral-content',
                primary: 'bg-primary text-primary-content',
                secondary: 'bg-secondary text-secondary-content',
                accent: 'bg-accent text-accent-content',
                info: 'bg-info text-info-content',
                success: 'bg-success text-success-content',
                warning: 'bg-warning text-warning-content',
                error: 'bg-error text-error-content',
                base100: 'bg-base-100',
                base200: 'bg-base-200',
                base300: 'bg-base-300',
            },
            // Size variants
            size: {
                default: '',
                compact: 'navbar-compact',
            },
            // Shadow variants
            shadow: {
                none: '',
                sm: 'shadow-sm',
                md: 'shadow-md',
                lg: 'shadow-lg',
                xl: 'shadow-xl',
            },
            // Position variants
            position: {
                default: '',
                sticky: 'sticky top-0 z-30',
                fixed: 'fixed top-0 left-0 right-0 z-30',
            },
        },
        defaultVariants: {
            color: 'default',
            size: 'default',
            shadow: 'none',
            position: 'default',
        },
    }
)

export interface NavbarProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
        VariantProps<typeof navbarVariants> {
    /**
     * Content for the start (left) section of the navbar
     */
    start?: React.ReactNode
    /**
     * Content for the center section of the navbar
     */
    center?: React.ReactNode
    /**
     * Content for the end (right) section of the navbar
     */
    end?: React.ReactNode
    /**
     * Custom props for the start section
     */
    startProps?: React.HTMLAttributes<HTMLDivElement>
    /**
     * Custom props for the center section
     */
    centerProps?: React.HTMLAttributes<HTMLDivElement>
    /**
     * Custom props for the end section
     */
    endProps?: React.HTMLAttributes<HTMLDivElement>
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface NavbarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
    /**
     * Whether to use horizontal layout
     * @default true
     */
    horizontal?: boolean
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export type NavbarVariantProps = VariantProps<typeof navbarVariants>
