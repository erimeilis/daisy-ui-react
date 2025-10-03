import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const toastVariants = cva(
    'toast',
    {
        variants: {
            // Position variants
            position: {
                'top': 'toast-top',
                'bottom': 'toast-bottom',
                'center': 'toast-center',
                'start': 'toast-start',
                'end': 'toast-end',
                'top-start': 'toast-top toast-start',
                'top-center': 'toast-top toast-center',
                'top-end': 'toast-top toast-end',
                'middle-start': 'toast-middle toast-start',
                'middle-center': 'toast-middle toast-center',
                'middle-end': 'toast-middle toast-end',
                'bottom-start': 'toast-bottom toast-start',
                'bottom-center': 'toast-bottom toast-center',
                'bottom-end': 'toast-bottom toast-end',
            },
        },
        defaultVariants: {
            position: 'top-end',
        },
    }
)

export const alertVariants = cva(
    'alert',
    {
        variants: {
            // Style variants
            variant: {
                default: '',
                info: 'alert-info',
                success: 'alert-success',
                warning: 'alert-warning',
                error: 'alert-error',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export interface ToastMessage {
    /**
     * Unique identifier for the toast
     */
    id: string
    /**
     * Toast title
     */
    title?: React.ReactNode
    /**
     * Toast message content
     */
    message: React.ReactNode
    /**
     * Toast type/variant
     */
    variant?: 'default' | 'info' | 'success' | 'warning' | 'error'
    /**
     * Custom icon
     */
    icon?: React.ReactNode
    /**
     * Whether the toast can be dismissed
     */
    dismissible?: boolean
    /**
     * Auto dismiss duration in milliseconds (0 = no auto dismiss)
     */
    duration?: number
    /**
     * Action button
     */
    action?: {
        label: string
        onClick: () => void
    }
    /**
     * Custom toast props
     */
    toastProps?: React.HTMLAttributes<HTMLDivElement>
}

export interface ToastContainerProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'position'>,
        VariantProps<typeof toastVariants> {
    /**
     * Array of toast messages
     */
    toasts: ToastMessage[]
    /**
     * Maximum number of toasts to display
     * @default 5
     */
    maxToasts?: number
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Toast message data
     */
    toast: ToastMessage
    /**
     * Callback fired when toast is dismissed
     */
    onDismiss?: (id: string) => void
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface ToastProviderProps extends Omit<ToastContainerProps, 'toasts'> {
    children: React.ReactNode
}

export type ToastVariantProps = VariantProps<typeof toastVariants>
export type AlertVariantProps = VariantProps<typeof alertVariants>
