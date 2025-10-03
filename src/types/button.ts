import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
    'btn',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                neutral: 'btn-neutral',
                primary: 'btn-primary',
                secondary: 'btn-secondary',
                accent: 'btn-accent',
                info: 'btn-info',
                success: 'btn-success',
                warning: 'btn-warning',
                error: 'btn-error',
            },
            // Style variants
            style: {
                default: '',
                outline: 'btn-outline',
                dash: 'btn-dash',
                soft: 'btn-soft',
                ghost: 'btn-ghost',
                link: 'btn-link',
            },
            // Behavior variants
            behaviour: {
                default: '',
                active: 'btn-active',
                disabled: 'btn-disabled',
            },
            // Size variants
            size: {
                xs: 'btn-xs',
                sm: 'btn-sm',
                md: 'btn-md',
                lg: 'btn-lg',
                xl: 'btn-xl',
                icon: 'btn-circle btn-xs p-0',
            },
            // Modifier variants
            modifier: {
                default: '',
                circle: 'btn-circle',
                square: 'btn-square',
                wide: 'btn-wide',
                block: 'btn-block',
            },
        },
        defaultVariants: {
            color: 'primary',
            style: 'default',
            behaviour: 'default',
            size: 'md',
            modifier: 'default',
        },
    }
)

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'style'>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    processing?: boolean
    success?: boolean
    fail?: boolean
    icon?: React.ComponentType<{ size?: number | string; className?: string }>
}

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
