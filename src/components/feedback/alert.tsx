import * as React from 'react'
import {cn} from '@/lib/utils'
import {
    alertVariants
} from '@/types/alert'
import type {
    AlertProps
} from '@/types/alert'

/**
 * DaisyUI Alert Component
 *
 * A flexible alert component that follows DaisyUI's alert structure exactly.
 * Supports different colors (info, success, warning, error), styles (outline, dash),
 * and directions (vertical, horizontal).
 */
function Alert({
    className,
    color,
    style,
    direction,
    children,
    ...props
}: AlertProps) {
    return (
        <div
            role="alert"
            className={cn(alertVariants({color, style, direction}), className)}
            {...props}
        >
            {children}
        </div>
    )
}

export {Alert}
