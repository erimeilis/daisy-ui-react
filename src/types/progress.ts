import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const progressVariants = cva(
    'progress',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                primary: 'progress-primary',
                secondary: 'progress-secondary',
                accent: 'progress-accent',
                info: 'progress-info',
                success: 'progress-success',
                warning: 'progress-warning',
                error: 'progress-error',
            },
            // Size variants
            size: {
                xs: 'progress-xs',
                sm: 'progress-sm',
                md: 'progress-md',
                lg: 'progress-lg',
                xl: 'progress-xl',
            },
        },
        defaultVariants: {
            color: 'default',
            size: 'md',
        },
    }
)

export interface ProgressProps
    extends VariantProps<typeof progressVariants>,
    Omit<React.ProgressHTMLAttributes<HTMLProgressElement>, 'size' | 'color'> {
    value?: number
    max?: number
    indeterminate?: boolean
    showValue?: boolean
    label?: string
}

export interface ProgressWithLabelProps extends ProgressProps {
    labelPosition?: 'top' | 'bottom' | 'inline'
    labelClassName?: string
}

export interface CircularProgressProps extends Omit<ProgressProps, 'showValue'> {
    strokeWidth?: number
    radius?: number
    showValue?: boolean
    valueClassName?: string
}

export interface StepProgressProps {
    steps: string[]
    currentStep?: number
    color?: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    className?: string
    stepClassName?: string
    showLabels?: boolean
}

export interface RadialProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
    value: number
    max?: number
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
    color?: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
    thickness?: 'thin' | 'normal' | 'thick'
    showValue?: boolean
    children?: React.ReactNode
}

export interface ProgressRingProps extends RadialProgressProps {
    strokeWidth?: number
    radius?: number
    animated?: boolean
}

export type ProgressVariantProps = VariantProps<typeof progressVariants>
