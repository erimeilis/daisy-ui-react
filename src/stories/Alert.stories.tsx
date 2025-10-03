import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Alert } from '../components/feedback/alert';
import { IconInfoCircle, IconCheck, IconAlertTriangle, IconX } from '@tabler/icons-react';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Alert component for displaying important messages with different severity levels and styles.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the alert',
    },
    style: {
      control: 'select',
      options: ['default', 'outline', 'dash', 'soft'],
      description: 'The style variant of the alert',
    },
    direction: {
      control: 'select',
      options: ['default', 'vertical', 'horizontal'],
      description: 'The layout direction of the alert',
    },
  },
  args: {
    children: 'This is an alert message',
    color: 'info',
    style: 'default',
    direction: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic alerts by color
export const Info: Story = {
  args: {
    color: 'info',
    children: (
      <>
        <IconInfoCircle className="w-6 h-6" />
        <span>This is an informational alert.</span>
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    children: (
      <>
        <IconCheck className="w-6 h-6" />
        <span>Your action was completed successfully!</span>
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: (
      <>
        <IconAlertTriangle className="w-6 h-6" />
        <span>Please review your information before proceeding.</span>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    children: (
      <>
        <IconX className="w-6 h-6" />
        <span>An error occurred. Please try again.</span>
      </>
    ),
  },
};

// All colors showcase
export const AllColors: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert color="default">
        <IconInfoCircle className="w-6 h-6" />
        <span>Default alert message</span>
      </Alert>
      <Alert color="info">
        <IconInfoCircle className="w-6 h-6" />
        <span>Info alert message</span>
      </Alert>
      <Alert color="success">
        <IconCheck className="w-6 h-6" />
        <span>Success alert message</span>
      </Alert>
      <Alert color="warning">
        <IconAlertTriangle className="w-6 h-6" />
        <span>Warning alert message</span>
      </Alert>
      <Alert color="error">
        <IconX className="w-6 h-6" />
        <span>Error alert message</span>
      </Alert>
    </div>
  ),
};

// Style variations
export const Styles: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert color="info" style="default">
        <IconInfoCircle className="w-6 h-6" />
        <span>Default style alert</span>
      </Alert>
      <Alert color="info" style="outline">
        <IconInfoCircle className="w-6 h-6" />
        <span>Outline style alert</span>
      </Alert>
      <Alert color="info" style="dash">
        <IconInfoCircle className="w-6 h-6" />
        <span>Dash style alert</span>
      </Alert>
      <Alert color="info" style="soft">
        <IconInfoCircle className="w-6 h-6" />
        <span>Soft style alert</span>
      </Alert>
    </div>
  ),
};

// Without icons
export const WithoutIcons: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert color="info">
        <span>Simple info message without icon</span>
      </Alert>
      <Alert color="success">
        <span>Simple success message without icon</span>
      </Alert>
      <Alert color="warning">
        <span>Simple warning message without icon</span>
      </Alert>
      <Alert color="error">
        <span>Simple error message without icon</span>
      </Alert>
    </div>
  ),
};

// With action buttons
export const WithActions: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert color="info">
        <IconInfoCircle className="w-6 h-6" />
        <div className="flex-1">
          <h3 className="font-bold">New update available!</h3>
          <div className="text-xs">We've released a new version with bug fixes and improvements.</div>
        </div>
        <button className="btn btn-sm">Update</button>
      </Alert>

      <Alert color="warning">
        <IconAlertTriangle className="w-6 h-6" />
        <div className="flex-1">
          <h3 className="font-bold">Account expiring soon</h3>
          <div className="text-xs">Your account will expire in 3 days. Renew to keep your data.</div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm">Later</button>
          <button className="btn btn-warning btn-sm">Renew</button>
        </div>
      </Alert>
    </div>
  ),
};

// Complex content
export const Complex: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Alert color="error">
        <IconX className="w-6 h-6" />
        <div className="flex-1">
          <h3 className="font-bold">Validation failed</h3>
          <div className="text-xs mt-1">
            Please fix the following errors:
            <ul className="list-disc list-inside mt-1">
              <li>Email address is required</li>
              <li>Password must be at least 8 characters</li>
              <li>Phone number format is invalid</li>
            </ul>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm">×</button>
      </Alert>

      <Alert color="success">
        <IconCheck className="w-6 h-6" />
        <div className="flex-1">
          <h3 className="font-bold">Payment successful!</h3>
          <div className="text-xs mt-1">
            <p>Your payment of $29.99 has been processed.</p>
            <p className="mt-1">
              <strong>Transaction ID:</strong> TXN-123456789
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm">View Receipt</button>
      </Alert>
    </div>
  ),
};

// Interactive example
export const Interactive: Story = {
  render: function InteractiveAlert() {
    const [visible, setVisible] = React.useState(true);

    if (!visible) {
      return (
        <button
          className="btn btn-primary"
          onClick={() => setVisible(true)}
        >
          Show Alert
        </button>
      );
    }

    return (
      <Alert color="warning">
        <IconAlertTriangle className="w-6 h-6" />
        <span>This alert can be dismissed by clicking the X button.</span>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => setVisible(false)}
        >
          ×
        </button>
      </Alert>
    );
  },
};