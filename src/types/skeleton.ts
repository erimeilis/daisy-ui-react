import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const skeletonVariants = cva(
    'skeleton',
    {
        variants: {
            // Shape variants
            shape: {
                default: '',
                circle: 'rounded-full',
                square: 'rounded-none',
                rounded: 'rounded',
                'rounded-lg': 'rounded-lg',
                'rounded-xl': 'rounded-xl',
            },
            // Animation variants
            animation: {
                default: '',
                pulse: 'animate-pulse',
                none: 'animate-none',
            },
        },
        defaultVariants: {
            shape: 'default',
            animation: 'default',
        },
    }
)

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
    width?: string | number
    height?: string | number
}

export interface SkeletonTextProps extends Omit<SkeletonProps, 'shape'> {
    lines?: number
    lineHeight?: string
    lastLineWidth?: string
}

export interface SkeletonAvatarProps extends Omit<SkeletonProps, 'shape'> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
    showAvatar?: boolean
    showImage?: boolean
    textLines?: number
    imageHeight?: string
    avatarSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export type SkeletonVariantProps = VariantProps<typeof skeletonVariants>
