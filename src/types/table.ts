import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

// Helper function to process multiple modifiers
export const getModifierClasses = (modifiers?: string): string => {
    if (!modifiers || modifiers === 'default') return ''

    const modifierMap: Record<string, string> = {
        zebra: 'table-zebra',
        pinRows: 'table-pin-rows',
        pinCols: 'table-pin-cols',
    }

    return modifiers
        .split(' ')
        .map(modifier => modifier.trim())
        .filter(modifier => modifier && modifierMap[modifier])
        .map(modifier => modifierMap[modifier])
        .join(' ')
}

export const tableVariants = cva(
    'table',
    {
        variants: {
            // DaisyUI table size variants (5 sizes)
            size: {
                xs: 'table-xs',
                sm: 'table-sm',
                md: 'table-md',
                lg: 'table-lg',
                xl: 'table-xl',
            },
            // Responsive behavior
            responsive: {
                true: '',
                false: '',
            },
        },
        defaultVariants: {
            size: 'md',
            responsive: true,
        },
        compoundVariants: [
            // When responsive is true, override size for small screens
            {
                responsive: true,
                size: 'md',
                class: 'table-xs sm:table-sm md:table-md',
            },
            {
                responsive: true,
                size: 'lg',
                class: 'table-xs sm:table-sm md:table-lg',
            },
            {
                responsive: true,
                size: 'xl',
                class: 'table-xs sm:table-sm md:table-xl',
            },
            // xs and sm sizes remain unchanged when responsive
            {
                responsive: true,
                size: 'xs',
                class: 'table-xs',
            },
            {
                responsive: true,
                size: 'sm',
                class: 'table-xs sm:table-sm',
            },
        ],
    }
)

export const tableWrapperVariants = cva('overflow-x-auto')

export const tableHeadVariants = cva('')

export const tableBodyVariants = cva('')

export const tableRowVariants = cva(
    '',
    {
        variants: {
            hover: {
                default: '',
                true: 'hover',
            },
            active: {
                default: '',
                true: 'active',
            },
        },
        defaultVariants: {
            hover: 'default',
            active: 'default',
        },
    }
)

export const tableCellVariants = cva('')

export const tableHeaderCellVariants = cva('')

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
    modifier?: string
}

export type TableWrapperProps = React.HTMLAttributes<HTMLDivElement>

export type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>

export type TableHeaderCellProps = React.ThHTMLAttributes<HTMLTableCellElement>

export interface TableColumn<T = Record<string, unknown>> {
    key: string
    title: React.ReactNode
    dataIndex?: keyof T
    render?: (value: unknown, record: T, index: number) => React.ReactNode
    width?: number | string
    align?: 'left' | 'center' | 'right'
    sortable?: boolean
    fixed?: 'left' | 'right'
    className?: string
}

export interface TableDataSource<T = Record<string, unknown>> {
    data: T[]
    total?: number
    current?: number
    pageSize?: number
}

export type TableVariantProps = VariantProps<typeof tableVariants>
export type TableWrapperVariantProps = VariantProps<typeof tableWrapperVariants>
export type TableRowVariantProps = VariantProps<typeof tableRowVariants>
