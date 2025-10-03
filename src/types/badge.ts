import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
    'badge',
    {
        variants: {
            variant: {
                default: '',
                primary: 'badge-primary',
                secondary: 'badge-secondary',
                accent: 'badge-accent',
                info: 'badge-info',
                success: 'badge-success',
                warning: 'badge-warning',
                error: 'badge-error',
                neutral: 'badge-neutral',
                ghost: 'badge-ghost',
            },
            styleVariant: {
                default: '',
                outline: 'badge-outline',
                dash: 'badge-dash',
                soft: 'badge-soft',
            },
            size: {
                default: '',
                xs: 'badge-xs',
                sm: 'badge-sm',
                md: 'badge-md',
                lg: 'badge-lg',
                xl: 'badge-xl',
            },
            shape: {
                default: '',
                circle: 'w-3 h-3 rounded-full p-0 min-h-0',
            },
        },
        defaultVariants: {
            variant: 'default',
            styleVariant: 'default',
            size: 'default',
            shape: 'default',
        },
    }
)

export interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {}

export interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    spacing?: 'tight' | 'normal' | 'loose'
    align?: 'start' | 'center' | 'end'
}

export interface BadgeListProps extends React.HTMLAttributes<HTMLDivElement> {
    badges: Array<{
        content: React.ReactNode
        variant?: VariantProps<typeof badgeVariants>['variant']
        styleVariant?: VariantProps<typeof badgeVariants>['styleVariant']
        size?: VariantProps<typeof badgeVariants>['size']
        shape?: VariantProps<typeof badgeVariants>['shape']
        onClick?: () => void
        removable?: boolean
        onRemove?: () => void
    }>
    spacing?: 'tight' | 'normal' | 'loose'
    align?: 'start' | 'center' | 'end'
    maxVisible?: number
    showMoreText?: string
}

export interface StatusBadgeProps extends Omit<BadgeProps, 'variant' | 'children'> {
    status: 'online' | 'offline' | 'away' | 'busy' | 'dnd' | 'invisible'
    showLabel?: boolean
    label?: string
    animated?: boolean
}

export interface NotificationBadgeProps extends Omit<BadgeProps, 'variant' | 'children' | 'size'> {
    count: number
    maxCount?: number
    showZero?: boolean
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
    children: React.ReactNode
}

export type BadgeVariantProps = VariantProps<typeof badgeVariants>
