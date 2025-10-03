import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const labelVariants = cva(
    'label',
    {
        variants: {
            // Cursor variants
            cursor: {
                default: '',
                pointer: 'cursor-pointer',
            },
        },
        defaultVariants: {
            cursor: 'default',
        },
    }
)

export const labelTextVariants = cva(
    'label-text',
    {
        variants: {
            // Style variants
            style: {
                default: '',
                alt: 'label-text-alt',
            },
        },
        defaultVariants: {
            style: 'default',
        },
    }
)

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
    text?: React.ReactNode
    altText?: React.ReactNode
    children?: React.ReactNode
}

export interface LabelTextProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'>,
    VariantProps<typeof labelTextVariants> {
    children: React.ReactNode
}

export interface FormLabelProps extends LabelProps {
    required?: boolean
    error?: boolean
    errorMessage?: string
    helpText?: string
}

export interface InputLabelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'> {
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    children: React.ReactNode
    className?: string
}

export type LabelVariantProps = VariantProps<typeof labelVariants>
export type LabelTextVariantProps = VariantProps<typeof labelTextVariants>
