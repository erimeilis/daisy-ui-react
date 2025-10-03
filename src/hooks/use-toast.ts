import * as React from 'react'
import { ToastMessage } from '@/types/toast'

/**
 * Hook for managing toast notifications locally (not global).
 * For global toast management, use the ToastProvider and toast service.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { toasts, addToast, removeToast } = useToast()
 *
 *   const handleSuccess = () => {
 *     addToast({ message: 'Success!', variant: 'success' })
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
export function useToast() {
    const [toasts, setToasts] = React.useState<ToastMessage[]>([])

    const addToast = React.useCallback((toast: Omit<ToastMessage, 'id'>) => {
        const id = Math.random().toString(36).substr(2, 9)
        const newToast: ToastMessage = {
            id,
            dismissible: true,
            duration: 5000,
            ...toast,
        }

        setToasts(prev => [...prev, newToast])
        return id
    }, [])

    const removeToast = React.useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id))
    }, [])

    const clearToasts = React.useCallback(() => {
        setToasts([])
    }, [])

    const updateToast = React.useCallback((id: string, updates: Partial<ToastMessage>) => {
        setToasts(prev => prev.map(toast =>
            toast.id === id ? { ...toast, ...updates } : toast
        ))
    }, [])

    return {
        toasts,
        addToast,
        removeToast,
        clearToasts,
        updateToast,
    }
}