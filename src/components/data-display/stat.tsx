import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import {
    statsVariants,
    statVariants,
    statTitleVariants,
    statValueVariants,
    statDescVariants
} from '@/types/stat'
import type {
    StatsProps
} from '@/types/stat'

// Define types locally to avoid conflicts
export interface StatProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
        VariantProps<typeof statVariants> {
    title: React.ReactNode
    value: React.ReactNode
    description?: React.ReactNode
    figure?: React.ReactNode
    titleColor?: VariantProps<typeof statTitleVariants>['color']
    valueColor?: VariantProps<typeof statValueVariants>['color']
    valueSize?: VariantProps<typeof statValueVariants>['size']
    descriptionColor?: VariantProps<typeof statDescVariants>['color']
    asChild?: boolean
}

export interface StatCardProps extends Omit<StatProps, 'figure'> {
    icon?: React.ReactNode
    trend?: 'up' | 'down' | 'neutral'
    bordered?: boolean
    padding?: 'sm' | 'md' | 'lg'
}

export interface MetricCardProps extends Omit<StatCardProps, 'title' | 'value' | 'description'> {
    metric: string
    value: string | number
    unit?: string
    change?: string
    changeType?: 'positive' | 'negative' | 'neutral'
    period?: string
    metricIcon?: React.ReactNode
    formatValue?: boolean
}

/**
 * Stats component for displaying statistics and metrics.
 *
 * Based on DaisyUI's stats component with support for horizontal/vertical
 * layouts, different colors, figures, and comprehensive stat information.
 * Perfect for dashboards, analytics, and displaying key metrics in
 * telecommunications applications.
 *
 * @example
 * ```tsx
 * const statsData = [
 *   {
 *     id: '1',
 *     title: 'Total Users',
 *     value: '89,400',
 *     description: '21% more than last month',
 *     background: 'primary'
 *   },
 *   {
 *     id: '2',
 *     title: 'Active Sessions',
 *     value: '2,100',
 *     description: 'Currently online',
 *     valueColor: 'success'
 *   }
 * ]
 *
 * <Stats
 *   stats={statsData}
 *   direction="horizontal"
 *   shadow="lg"
 * />
 * ```
 */
function Stats({
    className,
    direction,
    shadow,
    stats,
    asChild = false,
    ...props
}: StatsProps) {
    const Comp = asChild ? Slot : 'div'

    return (
        <Comp
            className={cn(statsVariants({ direction, shadow }), className)}
            {...props}
        >
            {stats.map((stat) => (
                <Stat
                    key={stat.id}
                    title={stat.title}
                    value={stat.value}
                    description={stat.description}
                    figure={stat.figure}
                    background={stat.background}
                    titleColor={stat.titleColor}
                    valueColor={stat.valueColor}
                    valueSize={stat.valueSize}
                    descriptionColor={stat.descriptionColor}
                    {...stat.statProps}
                />
            ))}
        </Comp>
    )
}

/**
 * Individual Stat component for single stat display.
 *
 * @example
 * ```tsx
 * <Stat
 *   title="Downloads"
 *   value="31K"
 *   description="Jan 1st - Feb 1st"
 *   background="info"
 *   figure={<DownloadIcon />}
 * />
 * ```
 */
function Stat({
    className,
    background,
    title,
    value,
    description,
    figure,
    titleColor,
    valueColor,
    valueSize,
    descriptionColor,
    asChild = false,
    ...props
}: StatProps) {
    const Comp = asChild ? Slot : 'div'

    return (
        <Comp
            className={cn(statVariants({ background }), className)}
            {...props}
        >
            {/* Stat Figure */}
            {figure && (
                <div className="stat-figure text-secondary">
                    {figure}
                </div>
            )}

            {/* Stat Title */}
            <div className={cn(statTitleVariants({ color: titleColor }))}>
                {title}
            </div>

            {/* Stat Value */}
            <div className={cn(statValueVariants({ size: valueSize, color: valueColor }))}>
                {value}
            </div>

            {/* Stat Description */}
            {description && (
                <div className={cn(statDescVariants({ color: descriptionColor }))}>
                    {description}
                </div>
            )}
        </Comp>
    )
}

/**
 * StatCard component for card-style stat display.
 *
 * @example
 * ```tsx
 * <StatCard
 *   title="Revenue"
 *   value="$12,628"
 *   description="+4.75% from last week"
 *   icon={<DollarIcon />}
 *   trend="up"
 * />
 * ```
 */
function StatCard({
    className,
    title,
    value,
    description,
    icon,
    trend,
    bordered = true,
    padding = 'md',
    background = 'base100',
    ...props
}: StatCardProps) {
    const paddingClasses = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    }

    const trendColors = {
        up: 'success',
        down: 'error',
        neutral: 'default',
    } as const

    const trendColor = trend ? trendColors[trend] : 'default'

    return (
        <div
            className={cn(
                'stats shadow',
                bordered && 'border border-base-300',
                paddingClasses[padding],
                className
            )}
        >
            <Stat
                title={title}
                value={value}
                description={description}
                figure={icon}
                background={background}
                descriptionColor={trendColor}
                {...props}
            />
        </div>
    )
}

/**
 * MetricCard component specifically for telecommunications metrics.
 *
 * @example
 * ```tsx
 * <MetricCard
 *   metric="Data Usage"
 *   value="15.2"
 *   unit="GB"
 *   change="+12%"
 *   changeType="positive"
 *   period="This month"
 * />
 * ```
 */
function MetricCard({
    metric,
    value,
    unit,
    change,
    changeType = 'neutral',
    period,
    metricIcon,
    formatValue = true,
    ...props
}: MetricCardProps) {
    const formatNumber = (num: string | number): string => {
        if (!formatValue) return num.toString()

        const numValue = typeof num === 'string' ? parseFloat(num) : num
        if (isNaN(numValue)) return num.toString()

        if (numValue >= 1000000) {
            return (numValue / 1000000).toFixed(1) + 'M'
        } else if (numValue >= 1000) {
            return (numValue / 1000).toFixed(1) + 'K'
        }
        return numValue.toString()
    }

    const displayValue = formatValue ? formatNumber(value) : value
    const fullValue = unit ? `${displayValue} ${unit}` : displayValue

    const changeColorMap = {
        positive: 'success',
        negative: 'error',
        neutral: 'default',
    } as const

    const trendMap = {
        positive: 'up',
        negative: 'down',
        neutral: 'neutral',
    } as const

    const description = change && period
        ? `${change} ${period}`
        : change || period || undefined

    return (
        <StatCard
            title={metric}
            value={fullValue}
            description={description}
            icon={metricIcon}
            trend={trendMap[changeType]}
            descriptionColor={changeColorMap[changeType]}
            {...props}
        />
    )
}

export {
    Stats,
    Stat,
    StatCard,
    MetricCard
}
