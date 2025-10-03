import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const textareaVariants = cva(
    'textarea',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                primary: 'textarea-primary',
                secondary: 'textarea-secondary',
                accent: 'textarea-accent',
                info: 'textarea-info',
                success: 'textarea-success',
                warning: 'textarea-warning',
                error: 'textarea-error',
            },
            // Size variants
            size: {
                xs: 'textarea-xs',
                sm: 'textarea-sm',
                md: 'textarea-md',
                lg: 'textarea-lg',
                xl: 'textarea-xl',
            },
            // Style variants
            style: {
                default: '',
                bordered: 'textarea-bordered',
                ghost: 'textarea-ghost',
            },
        },
        defaultVariants: {
            color: 'default',
            size: 'md',
            style: 'bordered',
        },
    }
)

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'color' | 'style'>,
    VariantProps<typeof textareaVariants> {
    error?: boolean
    label?: React.ReactNode
    helperText?: React.ReactNode
    errorMessage?: string
    characterCount?: boolean
    maxLength?: number
    resizable?: boolean
}

export interface TextareaWithLabelProps extends TextareaProps {
    labelPosition?: 'top' | 'left'
    labelClassName?: string
    containerClassName?: string
    required?: boolean
}

export interface AutoResizeTextareaProps extends Omit<TextareaProps, 'resizable'> {
    minRows?: number
    maxRows?: number
}

export type TextareaVariantProps = VariantProps<typeof textareaVariants>
