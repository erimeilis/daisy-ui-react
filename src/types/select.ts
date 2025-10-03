import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const selectVariants = cva(
    'select',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                primary: 'select-primary',
                secondary: 'select-secondary',
                accent: 'select-accent',
                neutral: 'select-neutral',
                info: 'select-info',
                success: 'select-success',
                warning: 'select-warning',
                error: 'select-error',
            },
            // Style variants
            style: {
                default: '',
                ghost: 'select-ghost',
            },
            // Size variants
            size: {
                xs: 'select-xs',
                sm: 'select-sm',
                md: 'select-md',
                lg: 'select-lg',
                xl: 'select-xl',
            },
            // Behavior variants
            behaviour: {
                default: '',
                disabled: 'select-disabled',
            },
        },
        defaultVariants: {
            color: 'default',
            style: 'default',
            size: 'md',
            behaviour: 'default',
        },
    }
)

export interface SelectProps
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'color' | 'style' | 'size'>,
        VariantProps<typeof selectVariants> {
    options?: Array<{ value: string; label: string; disabled?: boolean }>
    placeholder?: string
    error?: string
}

export type SelectVariantProps = VariantProps<typeof selectVariants>
