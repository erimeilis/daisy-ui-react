import { cn } from '@/lib/utils'
import {
    labelVariants,
    labelTextVariants
} from '@/types/label'
import type {
    LabelProps,
    LabelTextProps,
    FormLabelProps,
    InputLabelProps
} from '@/types/label'

/**
 * DaisyUI Label Component
 *
 * A flexible label component for form inputs and other elements.
 * Supports main text, alt text, and custom cursor styles.
 */
function Label({
    className,
    cursor,
    text,
    altText,
    children,
    ...props
}: LabelProps) {
    return (
        <label
            className={cn(labelVariants({cursor}), className)}
            {...props}
        >
            {text && (
                <span className="label-text">
                    {text}
                </span>
            )}
            {children}
            {altText && (
                <span className="label-text-alt">
                    {altText}
                </span>
            )}
        </label>
    )
}

/**
 * DaisyUI Label Text Component
 *
 * Text component specifically for labels with style variants.
 */
function LabelText({
    className,
    style,
    children,
    ...props
}: LabelTextProps) {
    return (
        <span
            className={cn(labelTextVariants({style}), className)}
            {...props}
        >
            {children}
        </span>
    )
}

/**
 * Form Label Component
 *
 * Enhanced label with validation states and help text.
 */
function FormLabel({
    className,
    cursor = 'pointer',
    text,
    altText,
    required = false,
    error = false,
    errorMessage,
    helpText,
    children,
    ...props
}: FormLabelProps) {
    const labelText = text && (
        <span className={cn('label-text', error && 'text-error')}>
            {text}
            {required && <span className="text-error ml-1">*</span>}
        </span>
    )

    const displayAltText = error && errorMessage ? errorMessage : altText || helpText

    return (
        <label
            className={cn(labelVariants({cursor}), className)}
            {...props}
        >
            {labelText}
            {children}
            {displayAltText && (
                <span className={cn('label-text-alt', error && 'text-error')}>
                    {displayAltText}
                </span>
            )}
        </label>
    )
}

/**
 * Input Label Component
 *
 * Label component with prefix/suffix support for input fields.
 * Commonly used for URLs, currency symbols, or other fixed text.
 */
function InputLabel({
    className,
    prefix,
    suffix,
    children,
    ...props
}: InputLabelProps) {
    return (
        <div className={cn('label', className)} {...props}>
            {prefix && (
                <span className="label-text">
                    {prefix}
                </span>
            )}
            {children}
            {suffix && (
                <span className="label-text-alt">
                    {suffix}
                </span>
            )}
        </div>
    )
}

/**
 * Simple Label Component
 *
 * Minimal label wrapper for basic use cases.
 */
function SimpleLabel({
    children,
    className,
    cursor = 'pointer',
    ...props
}: Omit<LabelProps, 'text' | 'altText'>) {
    return (
        <label
            className={cn(labelVariants({cursor}), className)}
            {...props}
        >
            {children}
        </label>
    )
}

export {
    Label,
    LabelText,
    FormLabel,
    InputLabel,
    SimpleLabel
}
