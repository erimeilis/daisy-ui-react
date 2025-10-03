import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const carouselVariants = cva(
    'carousel',
    {
        variants: {
            // Snap behavior variants
            snap: {
                start: '',
                center: 'carousel-center',
                end: 'carousel-end',
            },
            // Direction variants
            direction: {
                horizontal: '',
                vertical: 'carousel-vertical',
            },
        },
        defaultVariants: {
            snap: 'start',
            direction: 'horizontal',
        },
    }
)

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
    children: React.ReactNode
    showNavigation?: boolean
    showIndicators?: boolean
    onSlideChange?: (index: number) => void
}

export interface CarouselWithNavigationProps extends Omit<CarouselProps, 'children'> {
    slides: Array<{
        id: string
        content: React.ReactNode
    }>
}

export type CarouselVariantProps = VariantProps<typeof carouselVariants>
