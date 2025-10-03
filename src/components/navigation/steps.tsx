import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { stepsVariants, stepVariants } from '@/types/steps'
import type {
    StepsProps
} from '@/types/steps'

/**
 * Steps component for showing progress through a multi-step process.
 *
 * Based on DaisyUI's steps component with support for horizontal/vertical
 * layouts, different colors, custom icons, and interactive step navigation.
 * Perfect for onboarding flows, multi-step forms, and process indicators.
 *
 * @example
 * ```tsx
 * const steps = [
 *   { id: '1', title: 'Account Info', state: 'completed' },
 *   { id: '2', title: 'Personal Details', state: 'active' },
 *   { id: '3', title: 'Verification', state: 'pending' },
 *   { id: '4', title: 'Complete', state: 'pending' }
 * ]
 *
 * <Steps
 *   steps={steps}
 *   currentStep={1}
 *   color="primary"
 *   onStepClick={handleStepClick}
 * />
 * ```
 */
function Steps({
    className,
    direction,
    color,
    steps,
    currentStep = 0,
    onStepClick,
    showDescriptions = false,
    asChild = false,
    ...props
}: StepsProps) {
    const Comp = asChild ? Slot : 'ul'

    return (
        <Comp
            className={cn(stepsVariants({ direction, color }), className)}
            {...props}
        >
            {steps.map((step, index) => {
                const isActive = index === currentStep
                const isCompleted = index < currentStep

                // Determine step state
                let stepState = step.state
                if (!stepState) {
                    if (isCompleted) stepState = 'completed'
                    else if (isActive) stepState = 'active'
                    else stepState = 'pending'
                }

                const isClickable = step.clickable && onStepClick

                return (
                    <li
                        key={step.id}
                        className={cn(
                            stepVariants({ state: stepState }),
                            isClickable && 'cursor-pointer hover:opacity-80',
                            step.stepProps?.className
                        )}
                        onClick={() => isClickable && onStepClick(index, step)}
                        {...step.stepProps}
                        data-content={step.icon ? undefined : (index + 1).toString()}
                    >
                        {step.icon && (
                            <div className="step-icon">
                                {step.icon}
                            </div>
                        )}

                        <div className="step-content">
                            <div className="step-title font-medium">
                                {step.title}
                            </div>
                            {showDescriptions && step.description && (
                                <div className="step-description text-sm opacity-70 mt-1">
                                    {step.description}
                                </div>
                            )}
                        </div>
                    </li>
                )
            })}
        </Comp>
    )
}

/**
 * ProgressSteps component alias for Steps
 *
 * Alternative name for the Steps component to provide better semantic meaning
 * when used in progress tracking contexts.
 */
const ProgressSteps = Steps

/**
 * SimpleStep component for individual step items
 *
 * Use this component inside a <ul className="steps"> container for manual step control.
 *
 * @example
 * ```tsx
 * <ul className="steps">
 *   <SimpleStep state="completed">Register</SimpleStep>
 *   <SimpleStep state="active">Choose plan</SimpleStep>
 *   <SimpleStep state="pending">Purchase</SimpleStep>
 * </ul>
 * ```
 */
function SimpleStep({
    children,
    state = 'pending',
    className,
    ...props
}: {
    children: React.ReactNode
    state?: 'completed' | 'active' | 'pending'
    className?: string
} & React.HTMLAttributes<HTMLLIElement>) {
    const stepClass = state === 'completed' || state === 'active'
        ? 'step step-primary'
        : 'step'

    return (
        <li className={cn(stepClass, className)} {...props}>
            {children}
        </li>
    )
}

export {
    Steps,
    ProgressSteps,
    SimpleStep
}
