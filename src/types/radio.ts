import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const radioVariants = cva(
    'radio',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                primary: 'radio-primary',
                secondary: 'radio-secondary',
                accent: 'radio-accent',
                info: 'radio-info',
                success: 'radio-success',
                warning: 'radio-warning',
                error: 'radio-error',
            },
            // Size variants
            size: {
                xs: 'radio-xs',
                sm: 'radio-sm',
                md: 'radio-md',
                lg: 'radio-lg',
                xl: 'radio-xl',
            },
        },
        defaultVariants: {
            color: 'default',
            size: 'md',
        },
    }
)

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'color'>,
    VariantProps<typeof radioVariants> {
    label?: React.ReactNode
}

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    value?: string
    defaultValue?: string
    onValueChange?: (value: string) => void
    children: React.ReactNode
    orientation?: 'horizontal' | 'vertical'
    error?: boolean
    disabled?: boolean
}

export interface RadioGroupItemProps extends RadioProps {
    value: string
}

export interface RadioWithLabelProps extends RadioProps {
    labelPosition?: 'left' | 'right'
    labelClassName?: string
    containerClassName?: string
}

export interface RadioListProps {
    name: string
    options: Array<{
        value: string
        label: React.ReactNode
        disabled?: boolean
    }>
    value?: string
    defaultValue?: string
    onValueChange?: (value: string) => void
    color?: VariantProps<typeof radioVariants>['color']
    size?: VariantProps<typeof radioVariants>['size']
    orientation?: 'horizontal' | 'vertical'
    error?: boolean
    disabled?: boolean
    className?: string
}

export interface CardRadioProps extends RadioProps {
    description?: React.ReactNode
    icon?: React.ComponentType<{ className?: string }>
}

export type RadioVariantProps = VariantProps<typeof radioVariants>
