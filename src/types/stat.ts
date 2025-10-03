import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const statsVariants = cva(
    'stats',
    {
        variants: {
            // Direction variants
            direction: {
                horizontal: '',
                vertical: 'stats-vertical',
            },
            // Shadow variants
            shadow: {
                none: '',
                sm: 'shadow-sm',
                md: 'shadow-md',
                lg: 'shadow-lg',
                xl: 'shadow-xl',
            },
        },
        defaultVariants: {
            direction: 'horizontal',
            shadow: 'none',
        },
    }
)

export const statVariants = cva(
    'stat',
    {
        variants: {
            // Background variants
            background: {
                none: '',
                base100: 'bg-base-100',
                base200: 'bg-base-200',
                base300: 'bg-base-300',
                primary: 'bg-primary text-primary-content',
                secondary: 'bg-secondary text-secondary-content',
                accent: 'bg-accent text-accent-content',
                neutral: 'bg-neutral text-neutral-content',
                info: 'bg-info text-info-content',
                success: 'bg-success text-success-content',
                warning: 'bg-warning text-warning-content',
                error: 'bg-error text-error-content',
            },
        },
        defaultVariants: {
            background: 'none',
        },
    }
)

export const statTitleVariants = cva(
    'stat-title',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                neutral: 'text-neutral',
                primary: 'text-primary',
                secondary: 'text-secondary',
                accent: 'text-accent',
                info: 'text-info',
                success: 'text-success',
                warning: 'text-warning',
                error: 'text-error',
            },
        },
        defaultVariants: {
            color: 'default',
        },
    }
)

export const statValueVariants = cva(
    'stat-value',
    {
        variants: {
            // Size variants
            size: {
                sm: 'text-2xl',
                md: 'text-4xl',
                lg: 'text-5xl',
                xl: 'text-6xl',
            },
            // Color variants
            color: {
                default: '',
                neutral: 'text-neutral',
                primary: 'text-primary',
                secondary: 'text-secondary',
                accent: 'text-accent',
                info: 'text-info',
                success: 'text-success',
                warning: 'text-warning',
                error: 'text-error',
            },
        },
        defaultVariants: {
            size: 'md',
            color: 'default',
        },
    }
)

export const statDescVariants = cva(
    'stat-desc',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                neutral: 'text-neutral',
                primary: 'text-primary',
                secondary: 'text-secondary',
                accent: 'text-accent',
                info: 'text-info',
                success: 'text-success',
                warning: 'text-warning',
                error: 'text-error',
            },
        },
        defaultVariants: {
            color: 'default',
        },
    }
)

export interface StatItem {
    /**
     * Unique identifier for the stat
     */
    id: string
    /**
     * Stat title/label
     */
    title: React.ReactNode
    /**
     * Main stat value
     */
    value: React.ReactNode
    /**
     * Optional description or change indicator
     */
    description?: React.ReactNode
    /**
     * Optional figure/icon
     */
    figure?: React.ReactNode
    /**
     * Stat background color
     */
    background?: VariantProps<typeof statVariants>['background']
    /**
     * Title color
     */
    titleColor?: VariantProps<typeof statTitleVariants>['color']
    /**
     * Value color
     */
    valueColor?: VariantProps<typeof statValueVariants>['color']
    /**
     * Value size
     */
    valueSize?: VariantProps<typeof statValueVariants>['size']
    /**
     * Description color
     */
    descriptionColor?: VariantProps<typeof statDescVariants>['color']
    /**
     * Custom stat props
     */
    statProps?: React.HTMLAttributes<HTMLDivElement>
}

export interface StatsProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof statsVariants> {
    /**
     * Array of stat items
     */
    stats: StatItem[]
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface StatProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
        VariantProps<typeof statVariants> {
    /**
     * Stat title/label
     */
    title: React.ReactNode
    /**
     * Main stat value
     */
    value: React.ReactNode
    /**
     * Optional description
     */
    description?: React.ReactNode
    /**
     * Optional figure/icon
     */
    figure?: React.ReactNode
    /**
     * Title color
     */
    titleColor?: VariantProps<typeof statTitleVariants>['color']
    /**
     * Value color
     */
    valueColor?: VariantProps<typeof statValueVariants>['color']
    /**
     * Value size
     */
    valueSize?: VariantProps<typeof statValueVariants>['size']
    /**
     * Description color
     */
    descriptionColor?: VariantProps<typeof statDescVariants>['color']
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface StatCardProps extends Omit<StatProps, 'figure'> {
    /**
     * Card icon
     */
    icon?: React.ReactNode
    /**
     * Trend direction
     */
    trend?: 'up' | 'down' | 'neutral'
    /**
     * Card border
     */
    bordered?: boolean
    /**
     * Card padding
     */
    padding?: 'sm' | 'md' | 'lg'
}

export interface MetricCardProps extends Omit<StatCardProps, 'title' | 'value' | 'description'> {
    /**
     * Metric name
     */
    metric: string
    /**
     * Metric value (number or string)
     */
    value: string | number
    /**
     * Value unit (GB, MB, minutes, calls, etc.)
     */
    unit?: string
    /**
     * Change indicator (+/-percentage or value)
     */
    change?: string
    /**
     * Type of change for styling
     */
    changeType?: 'positive' | 'negative' | 'neutral'
    /**
     * Time period for the metric
     */
    period?: string
    /**
     * Metric icon
     */
    metricIcon?: React.ReactNode
    /**
     * Whether to format large numbers
     * @default true
     */
    formatValue?: boolean
}

export type StatsVariantProps = VariantProps<typeof statsVariants>
export type StatVariantProps = VariantProps<typeof statVariants>
export type StatTitleVariantProps = VariantProps<typeof statTitleVariants>
export type StatValueVariantProps = VariantProps<typeof statValueVariants>
export type StatDescVariantProps = VariantProps<typeof statDescVariants>
