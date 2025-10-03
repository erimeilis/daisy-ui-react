import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const modalVariants = cva(
    'modal',
    {
        variants: {
            // Documented placement options from DaisyUI
            placement: {
                default: '',
                top: 'modal-top',
                middle: 'modal-middle',
                bottom: 'modal-bottom',
                start: 'modal-start',
                end: 'modal-end',
            },
            // Modifier variants
            modifier: {
                default: '',
                open: 'modal-open',
            },
        },
        defaultVariants: {
            placement: 'default',
            modifier: 'default',
        },
    }
)

export interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement>,
    VariantProps<typeof modalVariants> {}

export type ModalBoxProps = React.HTMLAttributes<HTMLDivElement>

export type ModalActionProps = React.HTMLAttributes<HTMLDivElement>

export type ModalBackdropProps = React.FormHTMLAttributes<HTMLFormElement>

export interface ModalTriggerProps {
    targetModal: string
    color?: 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
    style?: 'default' | 'outline' | 'dash' | 'soft' | 'ghost'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'block'
    modifier?: 'default' | 'circle' | 'square' | 'wide' | 'glass'
    processing?: boolean
    disabled?: boolean
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: React.ReactNode
}

export interface ModalHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: React.ReactNode
    subtitle?: React.ReactNode
    showCloseButton?: boolean
    onClose?: () => void
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: 'start' | 'center' | 'end' | 'between'
}

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
    scrollable?: boolean
    maxHeight?: string
}

export interface ModalSizeProps {
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
    responsive?: boolean
}

export interface ModalStateProps {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    defaultOpen?: boolean
}

export type ModalVariantProps = VariantProps<typeof modalVariants>
