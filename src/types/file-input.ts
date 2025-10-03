import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const fileInputVariants = cva(
    'file-input',
    {
        variants: {
            // Style variants
            style: {
                default: '',
                ghost: 'file-input-ghost',
            },
            // Color variants
            color: {
                default: '',
                primary: 'file-input-primary',
                secondary: 'file-input-secondary',
                accent: 'file-input-accent',
                neutral: 'file-input-neutral',
                info: 'file-input-info',
                success: 'file-input-success',
                warning: 'file-input-warning',
                error: 'file-input-error',
            },
            // Size variants
            size: {
                xs: 'file-input-xs',
                sm: 'file-input-sm',
                md: 'file-input-md',
                lg: 'file-input-lg',
                xl: 'file-input-xl',
            },
            // Width variants
            width: {
                default: '',
                full: 'w-full',
                max: 'max-w-xs',
            },
        },
        defaultVariants: {
            style: 'default',
            color: 'default',
            size: 'md',
            width: 'default',
        },
    }
)

export interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'color' | 'style' | 'width'>,
    VariantProps<typeof fileInputVariants> {
    onFileChange?: (files: FileList | null) => void
}

export interface FileInputWithFieldsetProps extends FileInputProps {
    legend?: React.ReactNode
    label?: React.ReactNode
    fieldsetClassName?: string
    legendClassName?: string
    labelClassName?: string
}

export interface FileInputWithPreviewProps extends FileInputProps {
    showFileSize?: boolean
    showFileType?: boolean
    previewClassName?: string
}

export interface FileInputDragDropProps extends Omit<FileInputProps, 'style' | 'color' | 'size' | 'width'> {
    children?: React.ReactNode
    dragOverClassName?: string
}

export type FileInputVariantProps = VariantProps<typeof fileInputVariants>
