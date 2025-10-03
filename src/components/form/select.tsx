import { cn } from '@/lib/utils'
import {
    selectVariants
} from '@/types/select'
import type {
    SelectProps
} from '@/types/select'

function Select({
    className,
    color,
    style,
    size,
    behaviour,
    options = [],
    placeholder,
    disabled,
    children,
    error,
    ...props
}: SelectProps) {
    // Automatically set behaviour to 'disabled' if select is disabled
    const effectiveBehaviour = disabled ? 'disabled' : behaviour

    // If error is provided, override color to error
    const effectiveColor = error ? 'error' : color

    return (
        <div className="form-control w-full">
            <select
                className={cn(selectVariants({
                    color: effectiveColor,
                    style,
                    size,
                    behaviour: effectiveBehaviour
                }), className)}
                disabled={disabled}
                {...props}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.length > 0 ? (
                    options.map((option, index) => (
                        <option
                            key={option.value || index}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </option>
                    ))
                ) : (
                    children
                )}
            </select>
            {error && (
                <div className="label">
                    <span className="label-text-alt text-error">{error}</span>
                </div>
            )}
        </div>
    )
}

export { Select }
