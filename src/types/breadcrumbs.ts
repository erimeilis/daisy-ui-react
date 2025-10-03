import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const breadcrumbsVariants = cva(
    'breadcrumbs',
    {
        variants: {
            // Size variants
            size: {
                xs: 'text-xs',
                sm: 'text-sm',
                md: 'text-base',
                lg: 'text-lg',
            },
        },
        defaultVariants: {
            size: 'sm',
        },
    }
)

export interface BreadcrumbItem {
    label: React.ReactNode
    href?: string
    icon?: React.ComponentType<{ className?: string }>
    current?: boolean
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof breadcrumbsVariants> {
    items: BreadcrumbItem[]
    maxWidth?: string
}

export type BreadcrumbsVariantProps = VariantProps<typeof breadcrumbsVariants>
