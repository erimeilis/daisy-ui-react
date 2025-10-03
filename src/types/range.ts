import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const rangeVariants = cva(
    'range',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                primary: 'range-primary',
                secondary: 'range-secondary',
                accent: 'range-accent',
                info: 'range-info',
                success: 'range-success',
                warning: 'range-warning',
                error: 'range-error',
            },
            // Size variants
            size: {
                xs: 'range-xs',
                sm: 'range-sm',
                md: 'range-md',
                lg: 'range-lg',
            },
        },
        defaultVariants: {
            color: 'default',
            size: 'md',
        },
    }
)

export interface RangeProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>,
        VariantProps<typeof rangeVariants> {
    /**
     * Current value of the range
     */
    value?: number
    /**
     * Default value for uncontrolled mode
     */
    defaultValue?: number
    /**
     * Minimum value
     * @default 0
     */
    min?: number
    /**
     * Maximum value
     * @default 100
     */
    max?: number
    /**
     * Step increment
     * @default 1
     */
    step?: number
    /**
     * Callback fired when value changes
     */
    onValueChange?: (value: number) => void
    /**
     * Whether to show value label
     */
    showValue?: boolean
    /**
     * Custom value formatter for display
     */
    formatValue?: (value: number) => string
    /**
     * Whether to show min/max labels
     */
    showMinMax?: boolean
    /**
     * Custom label component props
     */
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface RangeWithStepsProps extends RangeProps {
    /**
     * Whether to show step markers
     */
    showSteps?: boolean
    /**
     * Custom step labels
     */
    stepLabels?: string[]
}

export interface DualRangeProps
    extends Omit<RangeProps, 'value' | 'defaultValue' | 'onValueChange'> {
    /**
     * Minimum selected value
     */
    minValue?: number
    /**
     * Maximum selected value
     */
    maxValue?: number
    /**
     * Default minimum value
     */
    defaultMinValue?: number
    /**
     * Default maximum value
     */
    defaultMaxValue?: number
    /**
     * Callback fired when range changes
     */
    onRangeChange?: (minValue: number, maxValue: number) => void
}

export type RangeVariantProps = VariantProps<typeof rangeVariants>
