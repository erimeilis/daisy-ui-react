import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const ratingVariants = cva(
    'rating',
    {
        variants: {
            // Size variants
            size: {
                xs: 'rating-xs',
                sm: 'rating-sm',
                md: 'rating-md',
                lg: 'rating-lg',
            },
            // Gap variants
            gap: {
                none: '',
                sm: 'gap-1',
                md: 'gap-2',
                lg: 'gap-3',
            },
        },
        defaultVariants: {
            size: 'md',
            gap: 'sm',
        },
    }
)

export const ratingItemVariants = cva(
    'mask',
    {
        variants: {
            // Shape variants
            shape: {
                star: 'mask-star-2',
                heart: 'mask-heart',
                circle: 'mask-circle',
                triangle: 'mask-triangle',
                square: 'mask-square',
                hexagon: 'mask-hexagon',
                decagon: 'mask-decagon',
            },
            // Color variants
            color: {
                default: 'bg-orange-400',
                neutral: 'bg-neutral',
                primary: 'bg-primary',
                secondary: 'bg-secondary',
                accent: 'bg-accent',
                info: 'bg-info',
                success: 'bg-success',
                warning: 'bg-warning',
                error: 'bg-error',
            },
            // State variants
            state: {
                default: '',
                half: 'rating-half',
                hidden: 'rating-hidden',
            },
        },
        defaultVariants: {
            shape: 'star',
            color: 'default',
            state: 'default',
        },
    }
)

export interface RatingProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
        VariantProps<typeof ratingVariants> {
    /**
     * Current rating value
     */
    value?: number
    /**
     * Default rating value for uncontrolled mode
     */
    defaultValue?: number
    /**
     * Maximum rating value
     * @default 5
     */
    max?: number
    /**
     * Whether the rating is interactive
     * @default true
     */
    interactive?: boolean
    /**
     * Whether to allow half ratings
     * @default false
     */
    allowHalf?: boolean
    /**
     * Shape of the rating items
     * @default 'star'
     */
    shape?: 'star' | 'heart' | 'circle' | 'triangle' | 'square' | 'hexagon' | 'decagon'
    /**
     * Color of filled rating items
     */
    color?: 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
    /**
     * Color of empty rating items
     */
    emptyColor?: string
    /**
     * Callback fired when rating changes
     */
    onRatingChange?: (rating: number) => void
    /**
     * Custom props for rating items
     */
    itemProps?: React.InputHTMLAttributes<HTMLInputElement>
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface SimpleRatingProps extends Omit<RatingProps, 'onRatingChange'> {
    /**
     * Whether to show the rating value as text
     */
    showValue?: boolean
    /**
     * Whether to show the rating count
     */
    showCount?: boolean
    /**
     * Total number of ratings
     */
    count?: number
    /**
     * Custom value formatter
     */
    formatValue?: (value: number) => string
}

export interface RatingDistributionItem {
    stars: number
    count: number
    percentage: number
}

export interface RatingDistributionProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Array of rating distribution data
     */
    distribution: RatingDistributionItem[]
    /**
     * Whether to show percentages
     * @default true
     */
    showPercentages?: boolean
    /**
     * Whether to show counts
     * @default true
     */
    showCounts?: boolean
}

export type RatingVariantProps = VariantProps<typeof ratingVariants>
export type RatingItemVariantProps = VariantProps<typeof ratingItemVariants>
