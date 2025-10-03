import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { timelineVariants } from '@/types/timeline'
import type {
    TimelineProps,
    SimpleTimelineProps,
    TimelineItemProps,
    CompactTimelineProps
} from '@/types/timeline'

/**
 * Timeline component for displaying chronological events and processes.
 *
 * Based on DaisyUI's timeline component with support for vertical/horizontal
 * orientations, custom icons, timestamps, and different event statuses.
 * Perfect for order tracking, service history, and activity feeds.
 *
 * @example
 * ```tsx
 * const events = [
 *   {
 *     id: '1',
 *     title: 'Order Placed',
 *     description: 'Your order has been received',
 *     timestamp: '2023-01-01 10:00 AM',
 *     status: 'success'
 *   },
 *   {
 *     id: '2',
 *     title: 'Processing',
 *     description: 'Order is being prepared',
 *     timestamp: '2023-01-01 11:30 AM',
 *     status: 'primary'
 *   }
 * ]
 *
 * <Timeline
 *   events={events}
 *   orientation="vertical"
 *   showTimestamps
 * />
 * ```
 */
function Timeline({
    className,
    orientation,
    align,
    snap,
    events,
    showTimestamps = true,
    showIcons = true,
    defaultIcon,
    asChild = false,
    ...props
}: TimelineProps) {
    const Comp = asChild ? Slot : 'ul'

    return (
        <Comp
            className={cn(timelineVariants({ orientation, align, snap }), className)}
            {...props}
        >
            {events.map((event, index) => {
                const isLast = index === events.length - 1
                const statusColorMap = {
                    default: 'text-base-content',
                    primary: 'text-primary',
                    secondary: 'text-secondary',
                    accent: 'text-accent',
                    success: 'text-success',
                    warning: 'text-warning',
                    error: 'text-error',
                    info: 'text-info',
                }

                const iconColorClass = statusColorMap[event.status || 'default']

                return (
                    <li
                        key={event.id}
                        className={cn('timeline-item', event.itemProps?.className)}
                        {...event.itemProps}
                    >
                        {/* Timeline start (timestamp) */}
                        {showTimestamps && event.timestamp && (
                            <div className="timeline-start timeline-box">
                                {event.timestamp}
                            </div>
                        )}

                        {/* Timeline middle (icon) */}
                        {showIcons && (
                            <div className="timeline-middle">
                                <div className={cn('timeline-icon', iconColorClass)}>
                                    {event.icon || defaultIcon || (
                                        <div className="w-4 h-4 rounded-full bg-current" />
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Timeline end (content) */}
                        <div className="timeline-end timeline-box">
                            <div className="font-semibold">
                                {event.title}
                            </div>
                            {event.description && (
                                <div className="text-sm opacity-70 mt-1">
                                    {event.description}
                                </div>
                            )}
                        </div>

                        {/* Connector line (hidden for last item) */}
                        {!isLast && <hr className="timeline-hr" />}
                    </li>
                )
            })}
        </Comp>
    )
}



function SimpleTimeline({
    className,
    orientation,
    align,
    snap,
    children,
    asChild = false,
    ...props
}: SimpleTimelineProps) {
    const Comp = asChild ? Slot : 'ul'

    return (
        <Comp
            className={cn(timelineVariants({ orientation, align, snap }), className)}
            {...props}
        >
            {children}
        </Comp>
    )
}



function TimelineItem({
    className,
    children,
    timestamp,
    description,
    icon,
    status = 'default',
    showTimestamp = true,
    showIcon = true,
    isLast = false,
    asChild = false,
    ...props
}: TimelineItemProps) {
    const Comp = asChild ? Slot : 'li'

    const statusColorMap = {
        default: 'text-base-content',
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error',
        info: 'text-info',
    }

    const iconColorClass = statusColorMap[status]

    return (
        <Comp
            className={cn('timeline-item', className)}
            {...props}
        >
            {/* Timeline start (timestamp) */}
            {showTimestamp && timestamp && (
                <div className="timeline-start timeline-box">
                    {timestamp}
                </div>
            )}

            {/* Timeline middle (icon) */}
            {showIcon && (
                <div className="timeline-middle">
                    <div className={cn('timeline-icon', iconColorClass)}>
                        {icon || <div className="w-4 h-4 rounded-full bg-current" />}
                    </div>
                </div>
            )}

            {/* Timeline end (content) */}
            <div className="timeline-end timeline-box">
                <div className="font-semibold">
                    {children}
                </div>
                {description && (
                    <div className="text-sm opacity-70 mt-1">
                        {description}
                    </div>
                )}
            </div>

            {/* Connector line (hidden for last item) */}
            {!isLast && <hr className="timeline-hr" />}
        </Comp>
    )
}



function CompactTimeline({
    events,
    maxItems = 3,
    showMoreText = 'Show more',
    showLessText = 'Show less',
    showMoreProps,
    ...props
}: CompactTimelineProps) {
    const [expanded, setExpanded] = React.useState(false)
    const displayEvents = expanded ? events : events.slice(0, maxItems)
    const hasMore = events.length > maxItems

    return (
        <div className="space-y-4">
            <Timeline
                events={displayEvents}
                {...props}
            />

            {hasMore && (
                <div className="text-center">
                    <button
                        type="button"
                        className={cn('btn btn-outline btn-sm', showMoreProps?.className)}
                        onClick={() => setExpanded(!expanded)}
                        {...showMoreProps}
                    >
                        {expanded ? showLessText : showMoreText}
                    </button>
                </div>
            )}
        </div>
    )
}

export {
    Timeline,
    SimpleTimeline,
    TimelineItem,
    CompactTimeline
}
