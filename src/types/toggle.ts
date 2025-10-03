import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const toggleVariants = cva(
    'toggle',
    {
        variants: {
            color: {
                default: '',
                neutral: 'toggle-neutral',
                primary: 'toggle-primary',
                secondary: 'toggle-secondary',
                accent: 'toggle-accent',
                info: 'toggle-info',
                success: 'toggle-success',
                warning: 'toggle-warning',
                error: 'toggle-error',
            },
            size: {
                xs: 'toggle-xs',
                sm: 'toggle-sm',
                md: 'toggle-md',
                lg: 'toggle-lg',
                xl: 'toggle-xl',
            },
        },
        defaultVariants: {
            color: 'default',
            size: 'md',
        },
    }
)

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'type'>,
    VariantProps<typeof toggleVariants> {
    label?: React.ReactNode
    labelClassName?: string
    indeterminate?: boolean
}

export type ToggleVariantProps = VariantProps<typeof toggleVariants>
