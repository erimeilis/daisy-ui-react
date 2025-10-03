import * as React from 'react'
import type { ToastMessage } from '@/types/toast'

/**
 * Toast service for global toast management.
 */
class ToastService {
    private toasts: ToastMessage[] = []
    private listeners: ((toasts: ToastMessage[]) => void)[] = []

    add(toast: Omit<ToastMessage, 'id'>): string {
        const id = Math.random().toString(36).substr(2, 9)
        const newToast: ToastMessage = {
            id,
            dismissible: true,
            duration: 5000,
            ...toast,
        }

        this.toasts = [...this.toasts, newToast]
        this.notifyListeners()

        // Auto remove after duration
        if (newToast.duration && newToast.duration > 0) {
            setTimeout(() => {
                this.remove(id)
            }, newToast.duration)
        }

        return id
    }

    remove(id: string) {
        this.toasts = this.toasts.filter(toast => toast.id !== id)
        this.notifyListeners()
    }

    clear() {
        this.toasts = []
        this.notifyListeners()
    }

    update(id: string, updates: Partial<ToastMessage>) {
        this.toasts = this.toasts.map(toast =>
            toast.id === id ? { ...toast, ...updates } : toast
        )
        this.notifyListeners()
    }

    subscribe(listener: (toasts: ToastMessage[]) => void): () => void {
        this.listeners.push(listener)
        listener(this.toasts)

        return () => {
            this.listeners = this.listeners.filter(l => l !== listener)
        }
    }

    private notifyListeners() {
        this.listeners.forEach(listener => listener(this.toasts))
    }

    success(message: React.ReactNode, options?: Partial<Omit<ToastMessage, 'id' | 'message' | 'variant'>>) {
        return this.add({
            message,
            variant: 'success',
            ...options,
        })
    }

    error(message: React.ReactNode, options?: Partial<Omit<ToastMessage, 'id' | 'message' | 'variant'>>) {
        return this.add({
            message,
            variant: 'error',
            ...options,
        })
    }

    warning(message: React.ReactNode, options?: Partial<Omit<ToastMessage, 'id' | 'message' | 'variant'>>) {
        return this.add({
            message,
            variant: 'warning',
            ...options,
        })
    }

    info(message: React.ReactNode, options?: Partial<Omit<ToastMessage, 'id' | 'message' | 'variant'>>) {
        return this.add({
            message,
            variant: 'info',
            ...options,
        })
    }
}

export const toast = new ToastService()

/**
 * Simple toast utilities for common use cases.
 */
export const showToast = {
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    warning: (message: string) => toast.warning(message),
    info: (message: string) => toast.info(message),
}

/**
 * React hook for using the toast service.
 */
export function useToast() {
    const [toasts, setToasts] = React.useState<ToastMessage[]>([])

    React.useEffect(() => {
        const unsubscribe = toast.subscribe(setToasts)
        return unsubscribe
    }, [])

    const addToast = React.useCallback((toastData: Omit<ToastMessage, 'id'>) => {
        return toast.add(toastData)
    }, [])

    const removeToast = React.useCallback((id: string) => {
        toast.remove(id)
    }, [])

    const clearToasts = React.useCallback(() => {
        toast.clear()
    }, [])

    const updateToast = React.useCallback((id: string, updates: Partial<ToastMessage>) => {
        toast.update(id, updates)
    }, [])

    return {
        toasts,
        addToast,
        removeToast,
        clearToasts,
        updateToast,
    }
}