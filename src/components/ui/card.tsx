import * as React from 'react'
import {cn} from '@/lib/utils'
import {
    cardVariants,
    cardBodyVariants,
    cardTitleVariants,
    cardActionsVariants
} from '@/types/card'
import type {
    CardProps,
    CardActionsProps
} from '@/types/card'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({className, size, color, style, modifier, shadow, ...props}, ref) => (
        <div
            ref={ref}
            className={cn(cardVariants({size, color, style, modifier, shadow}), className)}
            {...props}
        />
    )
)
Card.displayName = 'Card'

const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => (
        <div
            ref={ref}
            className={cn(cardBodyVariants(), className)}
            {...props}
        />
    )
)
CardBody.displayName = 'CardBody'

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({className, ...props}, ref) => (
        <h2
            ref={ref}
            className={cn(cardTitleVariants(), className)}
            {...props}
        />
    )
)
CardTitle.displayName = 'CardTitle'

const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
    ({className, justify, ...props}, ref) => (
        <div
            ref={ref}
            className={cn(cardActionsVariants({justify}), className)}
            {...props}
        />
    )
)
CardActions.displayName = 'CardActions'

const CardFigure = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
    ({className, ...props}, ref) => (
        <figure
            ref={ref}
            className={cn(className)}
            {...props}
        />
    )
)
CardFigure.displayName = 'CardFigure'

export {
    Card,
    CardBody,
    CardTitle,
    CardActions,
    CardFigure
}
