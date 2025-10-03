import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import {
    ratingVariants,
    ratingItemVariants
} from '@/types/rating'
import type {
    RatingProps,
    SimpleRatingProps,
    RatingDistributionProps
} from '@/types/rating'

/**
 * Rating component for collecting user feedback and displaying ratings.
 *
 * Based on DaisyUI's rating component with support for different shapes,
 * colors, sizes, and both interactive and display-only modes. Perfect for
 * product reviews, service ratings, and feedback collection.
 *
 * @example
 * ```tsx
 * <Rating
 *   shape="star"
 *   color="warning"
 *   size="lg"
 *   max={5}
 *   value={rating}
 *   onRatingChange={setRating}
 *   allowHalf
 * />
 * ```
 */
function Rating({
    className,
    size,
    gap,
    value,
    defaultValue,
    max = 5,
    interactive = true,
    allowHalf = false,
    shape = 'star',
    color = 'default',
    emptyColor = 'bg-base-300',
    onRatingChange,
    itemProps,
    asChild = false,
    ...props
}: RatingProps) {
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? 0)
    const [hoverValue, setHoverValue] = React.useState<number | null>(null)

    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue
    const displayValue = hoverValue !== null ? hoverValue : currentValue

    const handleRatingChange = (newValue: number) => {
        if (!interactive) return

        if (!isControlled) {
            setInternalValue(newValue)
        }

        onRatingChange?.(newValue)
    }

    const handleMouseEnter = (itemValue: number) => {
        if (!interactive) return
        setHoverValue(itemValue)
    }

    const handleMouseLeave = () => {
        if (!interactive) return
        setHoverValue(null)
    }

    const Comp = asChild ? Slot : 'div'

    // Generate rating items
    const items = []
    const step = allowHalf ? 0.5 : 1

    for (let i = step; i <= max; i += step) {
        const isActive = displayValue >= i
        const isHalf = allowHalf && displayValue >= i - 0.5 && displayValue < i

        items.push(
            <input
                key={i}
                type="radio"
                name={`rating-${Math.random()}`}
                className={cn(
                    ratingItemVariants({
                        shape,
                        color: isActive ? color : undefined,
                        state: isHalf ? 'half' : 'default'
                    }),
                    !isActive && emptyColor,
                    interactive && 'cursor-pointer',
                    itemProps?.className
                )}
                checked={currentValue === i}
                onChange={() => handleRatingChange(i)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                disabled={!interactive}
                aria-label={`Rate ${i} out of ${max}`}
                {...itemProps}
            />
        )
    }

    return (
        <Comp
            className={cn(ratingVariants({ size, gap }), className)}
            {...props}
        >
            {/* Hidden radio for zero rating */}
            {interactive && (
                <input
                    type="radio"
                    name={`rating-${Math.random()}`}
                    className="rating-hidden"
                    checked={currentValue === 0}
                    onChange={() => handleRatingChange(0)}
                    aria-label="No rating"
                />
            )}

            {items}
        </Comp>
    )
}



function SimpleRating({
    value = 0,
    showValue = false,
    showCount = false,
    count,
    formatValue = (val) => val.toFixed(1),
    className,
    ...props
}: SimpleRatingProps) {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <Rating
                value={value}
                interactive={false}
                {...props}
            />

            {showValue && (
                <span className="text-sm font-medium">
                    {formatValue(value)}
                </span>
            )}

            {showCount && count !== undefined && (
                <span className="text-sm text-base-content/60">
                    ({count.toLocaleString()})
                </span>
            )}
        </div>
    )
}



function RatingDistribution({
    distribution,
    showPercentages = true,
    showCounts = true,
    className,
    ...props
}: RatingDistributionProps) {
    return (
        <div className={cn('space-y-2', className)} {...props}>
            {distribution
                .sort((a, b) => b.stars - a.stars)
                .map((item) => (
                    <div key={item.stars} className="flex items-center gap-2">
                        <span className="text-sm w-2">{item.stars}</span>
                        <SimpleRating
                            value={item.stars}
                            max={item.stars}
                            size="xs"
                            interactive={false}
                        />
                        <div className="flex-1 bg-base-300 rounded-full h-2">
                            <div
                                className="bg-warning h-2 rounded-full"
                                style={{ width: `${item.percentage}%` }}
                            />
                        </div>
                        <div className="text-sm text-base-content/60 min-w-0 flex gap-1">
                            {showCounts && (
                                <span>{item.count}</span>
                            )}
                            {showPercentages && (
                                <span>({item.percentage}%)</span>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export { Rating, SimpleRating, RatingDistribution }
