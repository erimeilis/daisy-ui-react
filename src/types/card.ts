import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const cardVariants = cva(
    'card',
    {
        variants: {
            // DaisyUI card size variants
            size: {
                xs: 'card-xs',
                sm: 'card-sm',
                md: 'card-md',
                lg: 'card-lg',
                xl: 'card-xl',
            },
            // Color variants (similar to Button)
            color: {
                default: 'bg-base-100',
                neutral: 'badge-neutral',
                primary: 'badge-primary',
                secondary: 'badge-secondary',
                accent: 'badge-accent',
                info: 'badge-info',
                success: 'badge-success',
                warning: 'badge-warning',
                error: 'badge-error',
            },
            // DaisyUI card style variants
            style: {
                default: '',
                border: 'card-border',
                dash: 'card-dash',
                soft: 'badge-soft',
                ghost: 'card-ghost',
            },
            // DaisyUI card modifier variants
            modifier: {
                default: '',
                side: 'card-side',
                image: 'image-full',
            },
            // Shadow variants
            shadow: {
                sm: 'shadow-sm',
                md: 'shadow-md',
                lg: 'shadow-lg',
                xl: 'shadow-xl',
                none: 'shadow-none',
            },
        },
        defaultVariants: {
            size: 'md',
            color: 'default',
            style: 'default',
            modifier: 'default',
            shadow: 'md',
        },
    }
)

export const cardBodyVariants = cva('card-body')

export const cardTitleVariants = cva('card-title')

export const cardActionsVariants = cva(
    'card-actions',
    {
        variants: {
            justify: {
                default: '',
                start: 'justify-start',
                center: 'justify-center',
                end: 'justify-end',
                between: 'justify-between',
                around: 'justify-around',
            },
        },
        defaultVariants: {
            justify: 'default',
        },
    }
)

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'style'>,
    VariantProps<typeof cardVariants> {}

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>

export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardActionsVariants> {}

export type CardFigureProps = React.HTMLAttributes<HTMLElement>

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    overlay?: React.ReactNode
    position?: 'top' | 'bottom' | 'background'
}

export interface CardCompactProps extends Omit<CardProps, 'title'> {
    title: React.ReactNode
    description?: React.ReactNode
    image?: string
    actions?: React.ReactNode
    badge?: React.ReactNode
}

export interface CardProductProps extends CardProps {
    product: {
        name: string
        price: string | number
        originalPrice?: string | number
        image?: string
        rating?: number
        reviewCount?: number
        description?: string
        inStock?: boolean
        badge?: string
    }
    showRating?: boolean
    showReviews?: boolean
    showStock?: boolean
    onAddToCart?: () => void
    onFavorite?: () => void
}

export type CardVariantProps = VariantProps<typeof cardVariants>
export type CardActionsVariantProps = VariantProps<typeof cardActionsVariants>
