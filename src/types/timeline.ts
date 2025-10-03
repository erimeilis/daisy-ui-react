import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const timelineVariants = cva(
    'timeline',
    {
        variants: {
            // Orientation variants
            orientation: {
                vertical: 'timeline-vertical',
                horizontal: 'timeline-horizontal',
            },
            // Alignment variants (for vertical timeline)
            align: {
                start: 'timeline-start',
                center: 'timeline-center',
                end: 'timeline-end',
            },
            // Snap variants
            snap: {
                none: '',
                start: 'timeline-snap-start',
                center: 'timeline-snap-center',
                end: 'timeline-snap-end',
            },
        },
        defaultVariants: {
            orientation: 'vertical',
            align: 'start',
            snap: 'none',
        },
    }
)

export interface TimelineEvent {
    /**
     * Unique identifier for the event
     */
    id: string
    /**
     * Event title
     */
    title: React.ReactNode
    /**
     * Event description/content
     */
    description?: React.ReactNode
    /**
     * Event timestamp or date
     */
    timestamp?: React.ReactNode
    /**
     * Custom icon for the event
     */
    icon?: React.ReactNode
    /**
     * Event status/type for styling
     */
    status?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info'
    /**
     * Custom props for the timeline item
     */
    itemProps?: React.HTMLAttributes<HTMLLIElement>
}

export interface TimelineProps
    extends React.HTMLAttributes<HTMLUListElement>,
        VariantProps<typeof timelineVariants> {
    /**
     * Array of timeline events
     */
    events: TimelineEvent[]
    /**
     * Whether to show timestamps
     * @default true
     */
    showTimestamps?: boolean
    /**
     * Whether to show icons
     * @default true
     */
    showIcons?: boolean
    /**
     * Default icon to use when no custom icon is provided
     */
    defaultIcon?: React.ReactNode
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface SimpleTimelineProps
    extends Omit<TimelineProps, 'events' | 'showTimestamps' | 'showIcons'> {
    /**
     * Timeline items as children
     */
    children: React.ReactNode
}

export interface TimelineItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    /**
     * Item content/title
     */
    children: React.ReactNode
    /**
     * Item timestamp
     */
    timestamp?: React.ReactNode
    /**
     * Item description
     */
    description?: React.ReactNode
    /**
     * Custom icon
     */
    icon?: React.ReactNode
    /**
     * Item status for styling
     */
    status?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info'
    /**
     * Whether to show timestamp
     * @default true
     */
    showTimestamp?: boolean
    /**
     * Whether to show icon
     * @default true
     */
    showIcon?: boolean
    /**
     * Whether this is the last item (affects connector display)
     */
    isLast?: boolean
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface CompactTimelineProps extends TimelineProps {
    /**
     * Maximum number of items to show initially
     */
    maxItems?: number
    /**
     * Text for show more button
     */
    showMoreText?: string
    /**
     * Text for show less button
     */
    showLessText?: string
    /**
     * Custom show more button props
     */
    showMoreProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export type TimelineVariantProps = VariantProps<typeof timelineVariants>
