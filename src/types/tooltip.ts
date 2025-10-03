import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const tooltipVariants = cva(
    'tooltip',
    {
        variants: {
            // Position variants
            position: {
                top: 'tooltip-top',
                bottom: 'tooltip-bottom',
                left: 'tooltip-left',
                right: 'tooltip-right',
            },
            // Color variants
            color: {
                neutral: 'tooltip-neutral',
                primary: 'tooltip-primary',
                secondary: 'tooltip-secondary',
                accent: 'tooltip-accent',
                info: 'tooltip-info',
                success: 'tooltip-success',
                warning: 'tooltip-warning',
                error: 'tooltip-error',
            },
        },
        defaultVariants: {
            position: 'top',
        },
    }
)

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof tooltipVariants> {
    tip?: string
    open?: boolean
    asChild?: boolean
}

export interface TooltipProviderProps {
    children: React.ReactNode
    delay?: number
    skipDelay?: number
    disableHoverableContent?: boolean
}

export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean
}

export interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
    side?: 'top' | 'right' | 'bottom' | 'left'
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    alignOffset?: number
    avoidCollisions?: boolean
    sticky?: 'partial' | 'always'
    hideWhenDetached?: boolean
}

export interface TooltipArrowProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number
    height?: number
}

export interface TooltipPortalProps {
    children: React.ReactNode
    container?: HTMLElement | null
}

export type TooltipVariantProps = VariantProps<typeof tooltipVariants>
