import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Steps, ProgressSteps, SimpleStep } from '../components/navigation/steps';
import { IconCheck, IconUser, IconCreditCard, IconShoppingCart, IconTruck } from '@tabler/icons-react';

const meta: Meta<typeof Steps> = {
  title: 'Navigation/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Steps component for showing progress through a multi-step process using DaisyUI steps classes.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the steps',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'Color theme for steps',
    },
  },
  args: {
    direction: 'horizontal',
    color: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic horizontal steps
export const HorizontalSteps: Story = {
  render: function Component() {
    const steps = [
      { id: '1', title: 'Choose plan', state: 'completed' as const },
      { id: '2', title: 'Create account', state: 'completed' as const },
      { id: '3', title: 'Payment', state: 'active' as const },
      { id: '4', title: 'Confirmation', state: 'pending' as const },
    ];

    return (
      <div className="w-full max-w-lg">
        <Steps steps={steps} currentStep={2} />
      </div>
    );
  },
};

// Vertical steps
export const VerticalSteps: Story = {
  render: function Component() {
    const steps = [
      { id: '1', title: 'Order placed', state: 'completed' as const, icon: <IconCheck className="w-4 h-4" /> },
      { id: '2', title: 'Payment confirmed', state: 'completed' as const, icon: <IconCreditCard className="w-4 h-4" /> },
      { id: '3', title: 'Preparing shipment', state: 'active' as const, icon: <IconShoppingCart className="w-4 h-4" /> },
      { id: '4', title: 'In transit', state: 'pending' as const, icon: <IconTruck className="w-4 h-4" /> },
      { id: '5', title: 'Delivered', state: 'pending' as const, icon: <IconCheck className="w-4 h-4" /> },
    ];

    return (
      <div className="w-64">
        <Steps steps={steps} direction="vertical" currentStep={2} color="primary" />
      </div>
    );
  },
};

// Interactive wizard
export const InteractiveWizard: Story = {
  render: function Component() {
    const [currentStep, setCurrentStep] = React.useState(0);
    const stepData = [
      { id: '1', title: 'Personal Info', description: 'Enter your personal information', icon: <IconUser className="w-4 h-4" />, clickable: true },
      { id: '2', title: 'Address', description: 'Provide your address details', clickable: true },
      { id: '3', title: 'Payment', description: 'Payment information', icon: <IconCreditCard className="w-4 h-4" />, clickable: true },
      { id: '4', title: 'Review', description: 'Review your information', clickable: true },
      { id: '5', title: 'Complete', description: 'Setup complete', icon: <IconCheck className="w-4 h-4" />, clickable: true },
    ];

    const nextStep = () => {
      if (currentStep < stepData.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };

    const prevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    const handleStepClick = (stepIndex: number) => {
      setCurrentStep(stepIndex);
    };

    return (
      <div className="w-full max-w-2xl space-y-8">
        <Steps
          steps={stepData}
          currentStep={currentStep}
          onStepClick={handleStepClick}
          showDescriptions
          color="primary"
        />

        <div className="bg-base-200 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-4">
            Step {currentStep + 1}: {stepData[currentStep].title}
          </h3>

          {currentStep === 0 && (
            <div className="space-y-4">
              <p>Enter your personal information</p>
              <input className="input input-bordered w-full" placeholder="Full Name" />
              <input className="input input-bordered w-full" placeholder="Email" />
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <p>Provide your address details</p>
              <input className="input input-bordered w-full" placeholder="Street Address" />
              <input className="input input-bordered w-full" placeholder="City, State, ZIP" />
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <p>Payment information</p>
              <input className="input input-bordered w-full" placeholder="Card Number" />
              <input className="input input-bordered w-full" placeholder="Expiry Date" />
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <p>Review your information</p>
              <div className="text-sm space-y-2">
                <p>✓ Personal info completed</p>
                <p>✓ Address provided</p>
                <p>✓ Payment method added</p>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center space-y-4">
              <div className="text-4xl">🎉</div>
              <p className="font-semibold">Congratulations!</p>
              <p>Your setup is complete.</p>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            className="btn btn-outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={nextStep}
            disabled={currentStep === stepData.length - 1}
          >
            {currentStep === stepData.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    );
  },
};

// Simple steps for manual control
export const SimpleSteps: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="font-semibold">Manual Step Control</h3>
      <ul className="steps">
        <SimpleStep state="completed">Register</SimpleStep>
        <SimpleStep state="completed">Choose plan</SimpleStep>
        <SimpleStep state="active">Purchase</SimpleStep>
        <SimpleStep state="pending">Receive Product</SimpleStep>
      </ul>
    </div>
  ),
};

// Progress steps with progress bar
export const WithProgressBar: Story = {
  render: function Component() {
    const [completedSteps, setCompletedSteps] = React.useState(2);
    const steps = [
      { id: '1', title: 'Setup Account', description: 'Create your account' },
      { id: '2', title: 'Verify Email', description: 'Check your email' },
      { id: '3', title: 'Add Profile', description: 'Complete your profile' },
      { id: '4', title: 'Invite Team', description: 'Invite team members' },
      { id: '5', title: 'Launch', description: 'Start using the app' },
    ];

    return (
      <div className="w-full max-w-2xl space-y-6">
        <ProgressSteps
          steps={steps}
          completedSteps={completedSteps}
          showProgress
          showPercentage
          showDescriptions
          color="success"
        />

        <div className="flex gap-2">
          <button
            className="btn btn-sm btn-outline"
            onClick={() => setCompletedSteps(Math.max(0, completedSteps - 1))}
            disabled={completedSteps === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setCompletedSteps(Math.min(steps.length, completedSteps + 1))}
            disabled={completedSteps === steps.length}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
};