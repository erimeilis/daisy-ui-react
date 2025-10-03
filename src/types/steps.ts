import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const stepsVariants = cva(
    'steps',
    {
        variants: {
            // Direction variants
            direction: {
                horizontal: '',
                vertical: 'steps-vertical',
            },
            // Color variants
            color: {
                default: '',
                primary: 'steps-primary',
                secondary: 'steps-secondary',
                accent: 'steps-accent',
                info: 'steps-info',
                success: 'steps-success',
                warning: 'steps-warning',
                error: 'steps-error',
            },
        },
        defaultVariants: {
            direction: 'horizontal',
            color: 'default',
        },
    }
)

export const stepVariants = cva(
    'step',
    {
        variants: {
            // State variants
            state: {
                pending: '',
                active: 'step-primary',
                completed: 'step-primary',
                error: 'step-error',
            },
            // Color variants (for individual steps)
            color: {
                default: '',
                primary: 'step-primary',
                secondary: 'step-secondary',
                accent: 'step-accent',
                info: 'step-info',
                success: 'step-success',
                warning: 'step-warning',
                error: 'step-error',
            },
        },
        defaultVariants: {
            state: 'pending',
            color: 'default',
        },
    }
)

export interface StepItem {
    /**
     * Unique identifier for the step
     */
    id: string
    /**
     * Step title/label
     */
    title: React.ReactNode
    /**
     * Optional step description
     */
    description?: React.ReactNode
    /**
     * Custom icon for the step
     */
    icon?: React.ReactNode
    /**
     * Step state
     */
    state?: 'pending' | 'active' | 'completed' | 'error'
    /**
     * Whether the step is clickable
     */
    clickable?: boolean
    /**
     * Custom props for the step element
     */
    stepProps?: React.HTMLAttributes<HTMLLIElement>
}

export interface StepsProps
    extends Omit<React.HTMLAttributes<HTMLUListElement>, 'color'>,
        VariantProps<typeof stepsVariants> {
    /**
     * Array of step items
     */
    steps: StepItem[]
    /**
     * Current active step index
     */
    currentStep?: number
    /**
     * Callback fired when a step is clicked
     */
    onStepClick?: (stepIndex: number, step: StepItem) => void
    /**
     * Whether to show step descriptions
     * @default false
     */
    showDescriptions?: boolean
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface ProgressStepsProps extends Omit<StepsProps, 'currentStep'> {
    /**
     * Number of completed steps
     */
    completedSteps?: number
    /**
     * Whether to show progress bar
     * @default false
     */
    showProgress?: boolean
    /**
     * Whether to show percentage
     * @default false
     */
    showPercentage?: boolean
    /**
     * Custom progress bar props
     */
    progressProps?: React.HTMLAttributes<HTMLDivElement>
}

export interface SimpleStepProps
    extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'color'>,
        VariantProps<typeof stepVariants> {
    /**
     * Step content
     */
    children: React.ReactNode
    /**
     * Custom icon for the step
     */
    icon?: React.ReactNode
    /**
     * Step number (if no icon provided)
     */
    stepNumber?: number
    /**
     * Whether to use as a child component (renders as Slot)
     */
    asChild?: boolean
}

export interface StepConnectorProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Whether the connector is active (connecting completed steps)
     */
    active?: boolean
    /**
     * Connector orientation
     */
    orientation?: 'horizontal' | 'vertical'
}

export type StepsVariantProps = VariantProps<typeof stepsVariants>
export type StepVariantProps = VariantProps<typeof stepVariants>
