import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import {
    rangeVariants
} from '@/types/range'
import type {
    RangeProps
} from '@/types/range'

// Define types locally to avoid conflicts
interface RangeWithStepsProps extends RangeProps {
    showSteps?: boolean
    stepLabels?: string[]
    showLabels?: boolean
}

interface DualRangeProps extends Omit<RangeProps, 'value' | 'defaultValue' | 'onValueChange'> {
    minValue?: number
    maxValue?: number
    defaultMinValue?: number
    defaultMaxValue?: number
    onRangeChange?: (minValue: number, maxValue: number) => void
    showValues?: boolean
}

/**
 * Range component for selecting numeric values within a range.
 *
 * Based on DaisyUI's range component with support for different colors,
 * sizes, and value display options. Perfect for settings, filters,
 * volume controls, and numeric input within bounds.
 *
 * @example
 * ```tsx
 * <Range
 *   color="primary"
 *   size="lg"
 *   min={0}
 *   max={100}
 *   step={5}
 *   value={volume}
 *   onValueChange={setVolume}
 *   showValue
 *   showMinMax
 * />
 * ```
 */
function Range({
    className,
    color,
    size,
    value,
    defaultValue,
    min = 0,
    max = 100,
    step = 1,
    onValueChange,
    onChange,
    showValue = false,
    formatValue = (val) => val.toString(),
    showMinMax = false,
    asChild = false,
    ...props
}: RangeProps) {
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? min)
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value)

        if (!isControlled) {
            setInternalValue(newValue)
        }

        onValueChange?.(newValue)
        onChange?.(e)
    }

    const Comp = asChild ? Slot : 'input'

    return (
        <div className="w-full space-y-2">
            {/* Value display */}
            {showValue && (
                <div className="flex justify-center">
                    <span className="text-sm font-medium">
                        {formatValue(currentValue)}
                    </span>
                </div>
            )}

            {/* Range input */}
            <div className="relative">
                <Comp
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={currentValue}
                    onChange={handleChange}
                    className={cn(rangeVariants({ color, size }), 'w-full', className)}
                    {...props}
                />
            </div>

            {/* Min/Max labels */}
            {showMinMax && (
                <div className="flex justify-between text-xs text-base-content/70">
                    <span>{formatValue(min)}</span>
                    <span>{formatValue(max)}</span>
                </div>
            )}
        </div>
    )
}

/**
 * RangeWithSteps component that shows step markers.
 *
 * @example
 * ```tsx
 * <RangeWithSteps
 *   min={0}
 *   max={100}
 *   step={25}
 *   value={value}
 *   onValueChange={setValue}
 *   showSteps
 * />
 * ```
 */
function RangeWithSteps({
    min = 0,
    max = 100,
    step = 1,
    showLabels = true,
    stepLabels,
    ...props
}: RangeWithStepsProps) {
    const stepValues = React.useMemo(() => {
        const values = []
        for (let i = min; i <= max; i += step) {
            values.push(i)
        }
        return values
    }, [min, max, step])

    return (
        <div className="w-full">
            <Range
                min={min}
                max={max}
                step={step}
                {...props}
            />

            {/* Step markers */}
            {showLabels && (
                <div className="flex justify-between mt-1">
                    {stepValues.map((stepValue, index) => (
                        <div
                            key={stepValue}
                            className="flex flex-col items-center"
                        >
                            <div className="w-0.5 h-2 bg-base-content/30"></div>
                            {stepLabels && stepLabels[index] && (
                                <span className="text-xs text-base-content/70 mt-1">
                                    {stepLabels[index]}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

/**
 * DualRange component for selecting a range between two values.
 *
 * @example
 * ```tsx
 * <DualRange
 *   min={0}
 *   max={100}
 *   minValue={20}
 *   maxValue={80}
 *   onRangeChange={(min, max) => setRange([min, max])}
 * />
 * ```
 */
function DualRange({
    min = 0,
    max = 100,
    minValue,
    maxValue,
    defaultMinValue,
    defaultMaxValue,
    onRangeChange,
    showValues = false,
    formatValue = (val) => val.toString(),
    ...props
}: DualRangeProps) {
    const [internalMinValue, setInternalMinValue] = React.useState(defaultMinValue ?? min)
    const [internalMaxValue, setInternalMaxValue] = React.useState(defaultMaxValue ?? max)

    const isControlled = minValue !== undefined && maxValue !== undefined
    const currentMinValue = isControlled ? minValue : internalMinValue
    const currentMaxValue = isControlled ? maxValue : internalMaxValue

    const handleMinChange = (newValue: number) => {
        const constrainedValue = Math.min(newValue, currentMaxValue)

        if (!isControlled) {
            setInternalMinValue(constrainedValue)
        }

        onRangeChange?.(constrainedValue, currentMaxValue)
    }

    const handleMaxChange = (newValue: number) => {
        const constrainedValue = Math.max(newValue, currentMinValue)

        if (!isControlled) {
            setInternalMaxValue(constrainedValue)
        }

        onRangeChange?.(currentMinValue, constrainedValue)
    }

    return (
        <div className="w-full space-y-4">
            {showValues && (
                <div className="flex justify-between text-sm font-medium">
                    <span>{formatValue(currentMinValue)}</span>
                    <span>{formatValue(currentMaxValue)}</span>
                </div>
            )}

            <div className="space-y-2">
                <Range
                    {...props}
                    min={min}
                    max={max}
                    value={currentMinValue}
                    onValueChange={handleMinChange}
                    showValue={false}
                />

                <Range
                    {...props}
                    min={min}
                    max={max}
                    value={currentMaxValue}
                    onValueChange={handleMaxChange}
                    showValue={false}
                />
            </div>
        </div>
    )
}

export { Range, RangeWithSteps, DualRange }
