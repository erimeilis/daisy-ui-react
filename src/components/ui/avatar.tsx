import { cn } from '@/lib/utils'
import { avatarVariants, avatarInnerVariants, avatarGroupVariants } from '@/types/avatar'
import type { AvatarProps, AvatarGroupProps } from '@/types/avatar'

/**
 * DaisyUI Avatar Component
 *
 * A flexible avatar component that can display images, placeholders, and status indicators.
 * Supports different sizes, shapes, and online/offline status indicators.
 */
function Avatar({
    className,
    placeholder,
    online,
    offline,
    src,
    alt,
    size = 'md',
    shape = 'rounded',
    fallback,
    children,
    ...props
}: AvatarProps) {
    const renderContent = () => {
        if (children) {
            return children
        }

        if (src) {
            return <img src={src} alt={alt} />
        }

        if (fallback) {
            return <span>{fallback}</span>
        }

        return null
    }

    return (
        <div
            className={cn(avatarVariants({placeholder, online, offline}), className)}
            {...props}
        >
            <div className={cn(avatarInnerVariants({size, shape}))}>
                {renderContent()}
            </div>
        </div>
    )
}

/**
 * DaisyUI Avatar Group Component
 *
 * Groups multiple avatars together with overlapping spacing.
 * Useful for showing teams, participants, or multiple users.
 */
function AvatarGroup({
    className,
    spacing,
    children,
    ...props
}: AvatarGroupProps) {
    return (
        <div
            className={cn(avatarGroupVariants({spacing}), className)}
            {...props}
        >
            {children}
        </div>
    )
}

/**
 * Avatar Placeholder Component
 *
 * A placeholder avatar for displaying initials, icons, or other fallback content.
 */
function AvatarPlaceholder({
    className,
    size = 'md',
    shape = 'rounded',
    children,
    ...props
}: Omit<AvatarProps, 'placeholder'>) {
    return (
        <Avatar
            placeholder={true}
            size={size}
            shape={shape}
            className={cn('bg-neutral text-neutral-content', className)}
            {...props}
        >
            {children}
        </Avatar>
    )
}

export {Avatar, AvatarGroup, AvatarPlaceholder}
