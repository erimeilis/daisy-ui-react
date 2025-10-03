import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const alertVariants = cva(
    'alert',
    {
        variants: {
            // Color variants
            color: {
                default: '',
                info: 'alert-info',
                success: 'alert-success',
                warning: 'alert-warning',
                error: 'alert-error',
            },
            // Style variants
            style: {
                default: '',
                outline: 'alert-outline',
                dash: 'alert-dash',
                soft: 'alert-soft',
            },
            // Direction variants
            direction: {
                default: '',
                vertical: 'alert-vertical',
                horizontal: 'alert-horizontal',
            },
        },
        defaultVariants: {
            color: 'default',
            style: 'default',
            direction: 'default',
        },
    }
)

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'style'>,
    VariantProps<typeof alertVariants> {
}

export type AlertVariantProps = VariantProps<typeof alertVariants>
