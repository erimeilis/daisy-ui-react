import * as React from 'react'
import {cn} from '@/lib/utils'
import {
    toggleVariants
} from '@/types/toggle'
import type {
    ToggleProps
} from '@/types/toggle'

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
    ({className, color, size, label, labelClassName, indeterminate, ...props}, ref) => {
        const inputRef = React.useRef<HTMLInputElement>(null)

        // Combine refs
        React.useImperativeHandle(ref, () => inputRef.current!)

        // Handle indeterminate state
        React.useEffect(() => {
            if (inputRef.current) {
                inputRef.current.indeterminate = indeterminate ?? false
            }
        }, [indeterminate])

        const toggleElement = (
            <input
                type="checkbox"
                className={cn(toggleVariants({color, size}), className)}
                ref={inputRef}
                {...props}
            />
        )

        // If no label, return just the toggle
        if (!label) {
            return toggleElement
        }

        // Return toggle wrapped in label
        return (
            <label className={cn('label cursor-pointer', labelClassName)}>
                <span className="label-text">{label}</span>
                {toggleElement}
            </label>
        )
    }
)

Toggle.displayName = 'Toggle'

export {Toggle}
