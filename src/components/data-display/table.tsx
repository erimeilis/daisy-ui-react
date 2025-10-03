import * as React from 'react'
import {cn} from '@/lib/utils'
import {
    getModifierClasses,
    tableVariants,
    tableWrapperVariants,
    tableHeadVariants,
    tableBodyVariants,
    tableRowVariants,
    tableCellVariants,
    tableHeaderCellVariants
} from '@/types/table'
import type {
    TableProps
} from '@/types/table'

// Define local types that don't conflict with imports
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    hover?: boolean
    active?: boolean
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({className, size, modifier, responsive, ...props}, ref) => (
        <table
            ref={ref}
            className={cn(
                tableVariants({size, responsive}),
                getModifierClasses(modifier),
                className
            )}
            {...props}
        />
    )
)
Table.displayName = 'Table'

const TableWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => (
        <div
            ref={ref}
            className={cn(tableWrapperVariants(), className)}
            {...props}
        />
    )
)
TableWrapper.displayName = 'TableWrapper'

const TableHead = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({className, ...props}, ref) => (
        <thead
            ref={ref}
            className={cn(tableHeadVariants(), className)}
            {...props}
        />
    )
)
TableHead.displayName = 'TableHead'

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({className, ...props}, ref) => (
        <tbody
            ref={ref}
            className={cn(tableBodyVariants(), className)}
            {...props}
        />
    )
)
TableBody.displayName = 'TableBody'

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
    ({className, hover, active, ...props}, ref) => (
        <tr
            ref={ref}
            className={cn(tableRowVariants({hover, active}), className)}
            {...props}
        />
    )
)
TableRow.displayName = 'TableRow'

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
    ({className, ...props}, ref) => (
        <td
            ref={ref}
            className={cn(tableCellVariants(), className)}
            {...props}
        />
    )
)
TableCell.displayName = 'TableCell'

const TableHeaderCell = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
    ({className, ...props}, ref) => (
        <th
            ref={ref}
            className={cn(tableHeaderCellVariants(), className)}
            {...props}
        />
    )
)
TableHeaderCell.displayName = 'TableHeaderCell'

export {
    Table,
    TableWrapper,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableHeaderCell
}
