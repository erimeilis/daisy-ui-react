import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const checkboxVariants = cva(
    'checkbox',
    {
        variants: {
            variant: {
                default: '',
            },
            size: {
                xs: 'checkbox-xs',
                sm: 'checkbox-sm',
                md: 'checkbox-md',
                lg: 'checkbox-lg',
                xl: 'checkbox-xl',
            },
            color: {
                default: '',
                primary: 'checkbox-primary',
                secondary: 'checkbox-secondary',
                accent: 'checkbox-accent',
                neutral: 'checkbox-neutral',
                info: 'checkbox-info',
                success: 'checkbox-success',
                warning: 'checkbox-warning',
                error: 'checkbox-error'
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
            color: 'default',
        },
    }
)

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'type'>,
    VariantProps<typeof checkboxVariants> {
    label?: React.ReactNode
    labelClassName?: string
    labelPosition?: 'left' | 'right'
    indeterminate?: boolean
}

export type CheckboxVariantProps = VariantProps<typeof checkboxVariants>
