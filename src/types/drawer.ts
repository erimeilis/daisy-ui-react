import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const drawerVariants = cva(
    'drawer',
    {
        variants: {
            // Position variants
            side: {
                left: '',
                right: 'drawer-end',
            },
            // Mobile behavior variants
            mobile: {
                default: '',
                open: 'drawer-mobile',
            },
        },
        defaultVariants: {
            side: 'left',
            mobile: 'default',
        },
    }
)

export const drawerSideVariants = cva(
    'drawer-side',
    {
        variants: {
            // Overlay variants
            overlay: {
                default: '',
                dark: 'z-20',
            },
        },
        defaultVariants: {
            overlay: 'default',
        },
    }
)

export interface DrawerProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'side'>,
        VariantProps<typeof drawerVariants> {
    /**
     * The main content area of the drawer
     */
    children: React.ReactNode
    /**
     * The sidebar content
     */
    sidebarContent: React.ReactNode
    /**
     * Whether the drawer is open
     */
    open?: boolean
    /**
     * Callback fired when the drawer open state changes
     */
    onOpenChange?: (open: boolean) => void
    /**
     * Custom sidebar props
     */
    sidebarProps?: React.HTMLAttributes<HTMLDivElement>
    /**
     * Custom content props
     */
    contentProps?: React.HTMLAttributes<HTMLDivElement>
    /**
     * Custom overlay props
     */
    overlayProps?: React.HTMLAttributes<HTMLLabelElement>
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
    /**
     * Drawer toggle input id (for label association)
     */
    toggleId?: string
}

export interface DrawerToggleProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /**
     * The drawer toggle input id to associate with
     */
    htmlFor: string
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export type DrawerVariantProps = VariantProps<typeof drawerVariants>
export type DrawerSideVariantProps = VariantProps<typeof drawerSideVariants>
