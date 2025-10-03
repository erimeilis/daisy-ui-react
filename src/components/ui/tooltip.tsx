import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { tooltipVariants } from '@/types/tooltip'
import { type TooltipProps } from '@/types/tooltip'

function Tooltip({
    className,
    tip,
    open = false,
    position,
    color,
    asChild = false,
    children,
    ...props
}: TooltipProps) {
    const Comp = asChild ? Slot : 'div'

    const tooltipClasses = cn(
        tooltipVariants({ position, color }),
        {
            'tooltip-open': open,
        },
        className
    )

    return (
        <Comp
            className={tooltipClasses}
            data-tip={tip || ''}
            {...props}
        >
            {children}
        </Comp>
    )
}

export { Tooltip }
