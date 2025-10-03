import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const loadingVariants = cva(
    'loading',
    {
        variants: {
            // Type variants
            type: {
                spinner: 'loading-spinner',
                dots: 'loading-dots',
                ring: 'loading-ring',
                ball: 'loading-ball',
                bars: 'loading-bars',
                infinity: 'loading-infinity',
            },
            // Size variants
            size: {
                xs: 'loading-xs',
                sm: 'loading-sm',
                md: 'loading-md',
                lg: 'loading-lg',
                xl: 'loading-xl',
            },
        },
        defaultVariants: {
            type: 'spinner',
            size: 'md',
        },
    }
)

export interface LoadingProps extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof loadingVariants> {
    color?: string
}

export interface LoadingOverlayProps extends LoadingProps {
    show?: boolean
    children?: React.ReactNode
    overlayClassName?: string
    backdrop?: boolean
}

export interface LoadingButtonProps extends LoadingProps {
    loading?: boolean
    children: React.ReactNode
    buttonClassName?: string
    disabled?: boolean
}

export interface LoadingTextProps extends LoadingProps {
    text?: string
    textClassName?: string
}

export interface LoadingSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string | number
    height?: string | number
    variant?: 'text' | 'rectangular' | 'circular'
    animation?: 'pulse' | 'wave' | 'none'
    lines?: number
}

export interface LoadingCardProps extends React.HTMLAttributes<HTMLDivElement> {
    showAvatar?: boolean
    showTitle?: boolean
    showDescription?: boolean
    lines?: number
    avatarSize?: 'sm' | 'md' | 'lg'
}

export type LoadingVariantProps = VariantProps<typeof loadingVariants>
