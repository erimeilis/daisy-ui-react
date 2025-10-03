import * as React from 'react'
import {cn} from '@/lib/utils'
import {
    checkboxVariants
} from '@/types/checkbox'
import type {
    CheckboxProps
} from '@/types/checkbox'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({className, variant, size, color, label, labelClassName, labelPosition = 'left', indeterminate, ...props}, ref) => {
        const inputRef = React.useRef<HTMLInputElement>(null)

        // Combine refs
        React.useImperativeHandle(ref, () => inputRef.current!)

        // Handle indeterminate state
        React.useEffect(() => {
            if (inputRef.current) {
                inputRef.current.indeterminate = indeterminate ?? false
            }
        }, [indeterminate])

        const checkboxElement = (
            <input
                type="checkbox"
                className={cn(checkboxVariants({variant, size, color}), className)}
                ref={inputRef}
                {...props}
            />
        )

        // If no label, return just the checkbox
        if (!label) {
            return checkboxElement
        }

        // Return checkbox wrapped in label with configurable position
        return (
            <label className={cn('label cursor-pointer', labelPosition === 'right' ? 'justify-start' : '', labelClassName)}>
                {labelPosition === 'left' && <span className="label-text">{label}</span>}
                {checkboxElement}
                {labelPosition === 'right' && <span className="label-text">{label}</span>}
            </label>
        )
    }
)

Checkbox.displayName = 'Checkbox'

export {Checkbox}
