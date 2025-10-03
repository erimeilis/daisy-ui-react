import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const avatarVariants = cva(
    'avatar',
    {
        variants: {
            // Placeholder variant
            placeholder: {
                false: '',
                true: 'avatar-placeholder',
            },
            // Online indicator variant
            online: {
                false: '',
                true: 'avatar-online',
            },
            // Offline indicator variant
            offline: {
                false: '',
                true: 'avatar-offline',
            },
        },
        defaultVariants: {
            placeholder: false,
            online: false,
            offline: false,
        },
    }
)

export const avatarInnerVariants = cva(
    '',
    {
        variants: {
            // Size variants using Tailwind width classes
            size: {
                xs: 'w-6',
                sm: 'w-8',
                md: 'w-12',
                lg: 'w-16',
                xl: 'w-20',
                '2xl': 'w-24',
                '3xl': 'w-32',
            },
            // Shape variants
            shape: {
                rounded: 'rounded',
                'rounded-lg': 'rounded-lg',
                'rounded-xl': 'rounded-xl',
                'rounded-full': 'rounded-full',
            },
        },
        defaultVariants: {
            size: 'md',
            shape: 'rounded',
        },
    }
)

export const avatarGroupVariants = cva(
    'avatar-group',
    {
        variants: {
            // Spacing variants
            spacing: {
                default: '-space-x-6',
                tight: '-space-x-4',
                loose: '-space-x-8',
            },
        },
        defaultVariants: {
            spacing: 'default',
        },
    }
)

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
    src?: string
    alt?: string
    size?: VariantProps<typeof avatarInnerVariants>['size']
    shape?: VariantProps<typeof avatarInnerVariants>['shape']
    fallback?: React.ReactNode
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupVariants> {
    children: React.ReactNode
}

export interface AvatarPlaceholderProps extends Omit<AvatarProps, 'placeholder'> {
    children?: React.ReactNode
}

export interface AvatarStackProps extends AvatarGroupProps {
    maxVisible?: number
    showMore?: boolean
    moreText?: string
}

export interface AvatarWithStatusProps extends AvatarProps {
    status?: 'online' | 'offline' | 'away' | 'busy'
    statusPosition?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
    statusSize?: 'sm' | 'md' | 'lg'
}

export type AvatarVariantProps = VariantProps<typeof avatarVariants>
export type AvatarInnerVariantProps = VariantProps<typeof avatarInnerVariants>
export type AvatarGroupVariantProps = VariantProps<typeof avatarGroupVariants>
