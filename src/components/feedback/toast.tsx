import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { toast } from '@/lib/toast-service'
import { toastVariants, alertVariants } from '@/types/toast'
import type {
    ToastMessage,
    ToastContainerProps,
    ToastProps,
    ToastProviderProps
} from '@/types/toast'

/**
 * Toast container for displaying notification messages.
 *
 * Based on DaisyUI's toast component with support for different positions,
 * error messages, success confirmations, and user notifications.
 *
 * @example
 * ```tsx
 * const [toasts, setToasts] = useState([
 *   {
 *     id: '1',
 *     title: 'Success!',
 *     message: 'Your changes have been saved.',
 *     variant: 'success',
 *     duration: 5000,
 *     dismissible: true
 *   }
 * ])
 *
 * <ToastContainer
 *   toasts={toasts}
 *   position="top-end"
 *   maxToasts={5}
 * />
 * ```
 */
function ToastContainer({
    className,
    position,
    toasts,
    maxToasts = 5,
    asChild = false,
    ...props
}: ToastContainerProps) {
    const Comp = asChild ? Slot : 'div'
    const displayToasts = toasts.slice(0, maxToasts)

    if (displayToasts.length === 0) {
        return null
    }

    return (
        <Comp
            className={cn(toastVariants({ position }), className)}
            {...props}
        >
            {displayToasts.map((toast) => (
                <Toast
                    key={toast.id}
                    toast={toast}
                />
            ))}
        </Comp>
    )
}



function Toast({
    className,
    toast,
    onDismiss,
    asChild = false,
    ...props
}: ToastProps) {
    const timerRef = React.useRef<number | undefined>(undefined)
    const [isVisible, setIsVisible] = React.useState(true)

    const handleDismiss = React.useCallback(() => {
        setIsVisible(false)
        setTimeout(() => {
            onDismiss?.(toast.id)
        }, 150) // Allow fade out animation
    }, [onDismiss, toast.id])

    // Auto dismiss
    React.useEffect(() => {
        if (toast.duration && toast.duration > 0) {
            timerRef.current = window.setTimeout(() => {
                handleDismiss()
            }, toast.duration)
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
        }
    }, [toast.duration, handleDismiss])

    const Comp = asChild ? Slot : 'div'

    if (!isVisible) {
        return null
    }

    return (
        <Comp
            className={cn(
                alertVariants({ variant: toast.variant }),
                'mb-2 transition-all duration-150',
                className
            )}
            {...props}
            {...toast.toastProps}
        >
            {/* Toast Icon */}
            {toast.icon && (
                <div className="flex-shrink-0">
                    {toast.icon}
                </div>
            )}

            {/* Toast Content */}
            <div className="flex-1">
                {toast.title && (
                    <div className="font-bold">
                        {toast.title}
                    </div>
                )}
                <div className="text-sm">
                    {toast.message}
                </div>
            </div>

            {/* Action Button */}
            {toast.action && (
                <div className="flex-shrink-0">
                    <button
                        type="button"
                        className="btn btn-sm"
                        onClick={toast.action.onClick}
                    >
                        {toast.action.label}
                    </button>
                </div>
            )}

            {/* Dismiss Button */}
            {toast.dismissible && (
                <div className="flex-shrink-0">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost"
                        onClick={handleDismiss}
                        aria-label="Dismiss"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </Comp>
    )
}

/**
 * Hook for managing toast state and actions.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { toasts, addToast, removeToast, clearToasts } = useToast()
 *
 *   const handleSuccess = () => {
 *     addToast({
 *       message: 'Operation completed successfully!',
 *       variant: 'success',
 *       duration: 3000
 *     })
 *   }
 *
 *   return (
 *     <>
 *       <button onClick={handleSuccess}>Show Success</button>
 *       <ToastContainer toasts={toasts} />
 *     </>
 *   )
 * }
 * ```
 */


/**
 * Provider component for global toast management.
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <ToastProvider position="top-end">
 *       <YourApp />
 *     </ToastProvider>
 *   )
 * }
 * ```
 */

function ToastProvider({
    children,
    position = 'top-end',
    maxToasts = 5,
    ...props
}: ToastProviderProps) {
    const [toasts, setToasts] = React.useState<ToastMessage[]>([])

    React.useEffect(() => {
        return toast.subscribe(setToasts)
    }, [])

    const handleDismiss = (id: string) => {
        toast.remove(id)
    }

    return (
        <>
            {children}
            <ToastContainer
                toasts={toasts}
                position={position}
                maxToasts={maxToasts}
                {...props}
            >
                {toasts.slice(0, maxToasts).map((toastMessage) => (
                    <Toast
                        key={toastMessage.id}
                        toast={toastMessage}
                        onDismiss={handleDismiss}
                    />
                ))}
            </ToastContainer>
        </>
    )
}

export {
    ToastContainer,
    Toast,
    ToastProvider
}

export type { ToastMessage, ToastContainerProps, ToastProps, ToastProviderProps }

