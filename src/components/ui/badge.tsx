import {cn} from '@/lib/utils'
import { badgeVariants } from '@/types/badge'
import type { BadgeProps } from '@/types/badge'

function Badge({
                   className,
                   variant,
                   styleVariant,
                   size,
                   shape,
                   ...props
               }: BadgeProps) {
    return (
        <span
            className={cn(badgeVariants({variant, styleVariant, size, shape}), className)}
            {...props}
        />
    )
}

export {Badge}
