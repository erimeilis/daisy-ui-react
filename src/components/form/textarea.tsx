import * as React from 'react'
import {cn} from '@/lib/utils'
import {
    textareaVariants
} from '@/types/textarea'
import type {
    TextareaProps,
    TextareaWithLabelProps,
    AutoResizeTextareaProps
} from '@/types/textarea'

/**
 * DaisyUI Textarea Component
 *
 * A flexible textarea component with various colors, sizes, and styles.
 * Supports validation states, character counting, and resize control.
 */
function Textarea({
                      className,
                      color,
                      size,
                      style,
                      error = false,
                      label,
                      helperText,
                      errorMessage,
                      characterCount = false,
                      maxLength,
                      resizable = true,
                      value,
                      onChange,
                      id,
                      ...props
                  }: TextareaProps) {
    const [charCount, setCharCount] = React.useState(0)
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`

    // Update character count when value changes
    React.useEffect(() => {
        if (typeof value === 'string') {
            setCharCount(value.length)
        }
    }, [value])

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(event.target.value.length)
        onChange?.(event)
    }

    const effectiveColor = error ? 'error' : color
    const displayText = error && errorMessage ? errorMessage : helperText

    return (
        <fieldset className="fieldset">
            {label && (
                <legend className="fieldset-legend">{label}</legend>
            )}

            <textarea
                id={textareaId}
                className={cn(
                    textareaVariants({
                        color: effectiveColor as 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error',
                        size,
                        style: style as 'default' | 'ghost' | 'bordered'
                    }),
                    !resizable && 'resize-none',
                    className
                )}
                value={value}
                onChange={handleChange}
                maxLength={maxLength}
                {...props}
            />

            {(displayText || characterCount) && (
                <div className="label">
                    {displayText && (
                        <span className={cn('label-text-alt', error && 'text-error')}>
                            {displayText}
                        </span>
                    )}
                    {characterCount && (
                        <span className="label-text-alt">
                            {charCount}{maxLength ? `/${maxLength}` : ''}
                        </span>
                    )}
                </div>
            )}
        </fieldset>
    )
}

/**
 * Textarea with Label Component
 *
 * Textarea with configurable label positioning and styling.
 */
function TextareaWithLabel({
                               className,
                               color,
                               size,
                               style,
                               error = false,
                               label,
                               helperText,
                               errorMessage,
                               characterCount = false,
                               maxLength,
                               resizable = true,
                               labelPosition = 'top',
                               labelClassName,
                               containerClassName,
                               required = false,
                               value,
                               onChange,
                               id,
                               ...props
                           }: TextareaWithLabelProps) {
    const [charCount, setCharCount] = React.useState(0)
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`

    React.useEffect(() => {
        if (typeof value === 'string') {
            setCharCount(value.length)
        }
    }, [value])

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(event.target.value.length)
        onChange?.(event)
    }

    const effectiveColor = error ? 'error' : color
    const displayText = error && errorMessage ? errorMessage : helperText

    const labelElement = label && (
        <label htmlFor={textareaId} className={cn('label', labelClassName)}>
            <span className="label-text">
                {label}
                {required && <span className="text-error ml-1">*</span>}
            </span>
        </label>
    )

    const textareaElement = (
        <textarea
            id={textareaId}
            className={cn(
                textareaVariants({
                    color: effectiveColor as 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error',
                    size,
                    style: style as 'default' | 'ghost' | 'bordered'
                }),
                !resizable && 'resize-none',
                className
            )}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            required={required}
            {...props}
        />
    )

    const footerElement = (displayText || characterCount) && (
        <div className="label">
            {displayText && (
                <span className={cn('label-text-alt', error && 'text-error')}>
                    {displayText}
                </span>
            )}
            {characterCount && (
                <span className="label-text-alt">
                    {charCount}{maxLength ? `/${maxLength}` : ''}
                </span>
            )}
        </div>
    )

    if (labelPosition === 'left') {
        return (
            <div className={cn('flex items-start gap-4', containerClassName)}>
                {labelElement}
                <div className="flex-1">
                    {textareaElement}
                    {footerElement}
                </div>
            </div>
        )
    }

    return (
        <div className={cn('w-full', containerClassName)}>
            {labelElement}
            {textareaElement}
            {footerElement}
        </div>
    )
}

/**
 * Auto Resize Textarea Component
 *
 * Textarea that automatically adjusts height based on content.
 */
function AutoResizeTextarea({
                                className,
                                color,
                                size,
                                style,
                                error = false,
                                label,
                                helperText,
                                errorMessage,
                                characterCount = false,
                                maxLength,
                                minRows = 3,
                                maxRows = 10,
                                value,
                                onChange,
                                id,
                                ...props
                            }: AutoResizeTextareaProps) {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)
    const [charCount, setCharCount] = React.useState(0)
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`

    React.useEffect(() => {
        if (typeof value === 'string') {
            setCharCount(value.length)
        }
    }, [value])

    const adjustHeight = React.useCallback(() => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto'
            const scrollHeight = textarea.scrollHeight
            const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20
            const minHeight = lineHeight * minRows
            const maxHeight = lineHeight * maxRows

            textarea.style.height = `${Math.min(Math.max(scrollHeight, minHeight), maxHeight)}px`
        }
    }, [minRows, maxRows])

    React.useEffect(() => {
        adjustHeight()
    }, [value, adjustHeight])

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(event.target.value.length)
        onChange?.(event)
        adjustHeight()
    }

    const effectiveColor = error ? 'error' : color
    const displayText = error && errorMessage ? errorMessage : helperText

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={textareaId} className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}

            <textarea
                ref={textareaRef}
                id={textareaId}
                className={cn(
                    textareaVariants({
                        color: effectiveColor as 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error',
                        size,
                        style: style as 'default' | 'ghost' | 'bordered'
                    }),
                    'resize-none overflow-hidden',
                    className
                )}
                value={value}
                onChange={handleChange}
                maxLength={maxLength}
                rows={minRows}
                {...props}
            />

            {(displayText || characterCount) && (
                <div className="label">
                    {displayText && (
                        <span className={cn('label-text-alt', error && 'text-error')}>
                            {displayText}
                        </span>
                    )}
                    {characterCount && (
                        <span className="label-text-alt">
                            {charCount}{maxLength ? `/${maxLength}` : ''}
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}

/**
 * Simple Textarea Component
 *
 * Minimal textarea without additional features.
 */
function SimpleTextarea({
                            className,
                            color,
                            size,
                            style = 'bordered' as const,
                            resizable = true,
                            ...props
                        }: Omit<TextareaProps, 'error' | 'label' | 'helperText' | 'errorMessage' | 'characterCount' | 'maxLength'>) {
    return (
        <textarea
            className={cn(
                textareaVariants({
                    color: color as 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | undefined,
                    size,
                    style: style as 'default' | 'ghost' | 'bordered'
                }),
                !resizable && 'resize-none',
                className
            )}
            {...props}
        />
    )
}

/**
 * Code Textarea Component
 *
 * Textarea optimized for code input with monospace font.
 */
function CodeTextarea({
                          className,
                          color,
                          size,
                          style = 'bordered' as const,
                          resizable = true,
                          ...props
                      }: Omit<TextareaProps, 'error' | 'label' | 'helperText' | 'errorMessage' | 'characterCount' | 'maxLength'>) {
    return (
        <textarea
            className={cn(
                textareaVariants({
                    color: color as 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | undefined,
                    size,
                    style: style as 'default' | 'ghost' | 'bordered'
                }),
                'font-mono text-sm',
                !resizable && 'resize-none',
                className
            )}
            spellCheck={false}
            {...props}
        />
    )
}

export {
    Textarea,
    TextareaWithLabel,
    AutoResizeTextarea,
    SimpleTextarea,
    CodeTextarea
}
