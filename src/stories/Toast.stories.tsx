import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast, ToastContainer, ToastProvider, type ToastMessage } from '../components/feedback/toast';
import { useToast, showToast } from '../lib/toast-service';
import { Button } from '../components/form/button';
import { IconCheck, IconX, IconAlertTriangle, IconInfoCircle, IconUser, IconSettings, IconHeart } from '@tabler/icons-react';

const meta: Meta<typeof ToastContainer> = {
  title: 'Feedback/Toast',
  component: ToastContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast notification component for displaying temporary messages with auto-dismiss, actions, and different variants.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top', 'bottom', 'center', 'start', 'end',
        'top-start', 'top-center', 'top-end',
        'middle-start', 'middle-center', 'middle-end',
        'bottom-start', 'bottom-center', 'bottom-end'
      ],
      description: 'Position of the toast container',
    },
    maxToasts: {
      control: 'number',
      description: 'Maximum number of toasts to display at once',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample toast data
const sampleToasts: ToastMessage[] = [
  {
    id: '1',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    variant: 'success',
    icon: <IconCheck className="w-5 h-5" />,
    dismissible: true,
    duration: 5000,
  },
  {
    id: '2',
    title: 'Warning',
    message: 'Please check your internet connection.',
    variant: 'warning',
    icon: <IconAlertTriangle className="w-5 h-5" />,
    dismissible: true,
    duration: 0,
  },
  {
    id: '3',
    message: 'New message received from John Doe.',
    variant: 'info',
    icon: <IconInfoCircle className="w-5 h-5" />,
    dismissible: true,
    duration: 3000,
  },
];

// Basic toast examples
export const BasicToasts: Story = {
  args: {
    toasts: sampleToasts,
    position: 'top-end',
    maxToasts: 5,
  },
};

// Different positions
export const Positions: Story = {
  render: function Component() {
    const positions = [
      { position: 'top-start' as const, label: 'Top Start' },
      { position: 'top-center' as const, label: 'Top Center' },
      { position: 'top-end' as const, label: 'Top End' },
      { position: 'bottom-start' as const, label: 'Bottom Start' },
      { position: 'bottom-center' as const, label: 'Bottom Center' },
      { position: 'bottom-end' as const, label: 'Bottom End' },
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {positions.map((pos) => (
          <div key={pos.position} className="relative h-32 border border-base-300 rounded-lg overflow-hidden">
            <div className="absolute top-2 left-2 text-xs font-medium">{pos.label}</div>
            <ToastContainer
              toasts={[{
                id: pos.position,
                message: `Toast at ${pos.label}`,
                variant: 'info',
                icon: <IconInfoCircle className="w-4 h-4" />,
                dismissible: false,
              }]}
              position={pos.position}
            />
          </div>
        ))}
      </div>
    );
  },
};

// Different variants
export const Variants: Story = {
  render: function Component() {
    const variants = [
      {
        variant: 'default' as const,
        title: 'Default Toast',
        message: 'This is a default notification.',
        icon: <IconInfoCircle className="w-5 h-5" />,
      },
      {
        variant: 'info' as const,
        title: 'Information',
        message: 'Here is some important information.',
        icon: <IconInfoCircle className="w-5 h-5" />,
      },
      {
        variant: 'success' as const,
        title: 'Success!',
        message: 'Your action was completed successfully.',
        icon: <IconCheck className="w-5 h-5" />,
      },
      {
        variant: 'warning' as const,
        title: 'Warning',
        message: 'Please review your input.',
        icon: <IconAlertTriangle className="w-5 h-5" />,
      },
      {
        variant: 'error' as const,
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        icon: <IconX className="w-5 h-5" />,
      },
    ];

    const toasts = variants.map((variant, index) => ({
      id: `variant-${index}`,
      ...variant,
      dismissible: true,
    }));

    return (
      <ToastContainer
        toasts={toasts}
        position="top-end"
        maxToasts={10}
      />
    );
  },
};

// Interactive example with useToast hook
export const InteractiveToasts: Story = {
  render: function Component() {
    const ToastDemo = () => {
      const { toasts, addToast, clearToasts } = useToast();

      const showSuccess = () => {
        addToast({
          title: 'Success!',
          message: 'Operation completed successfully.',
          variant: 'success',
          icon: <IconCheck className="w-5 h-5" />,
          duration: 3000,
        });
      };

      const showError = () => {
        addToast({
          title: 'Error',
          message: 'Something went wrong. Please try again.',
          variant: 'error',
          icon: <IconX className="w-5 h-5" />,
          duration: 0, // Don't auto dismiss errors
        });
      };

      const showWarning = () => {
        addToast({
          title: 'Warning',
          message: 'Please check your internet connection.',
          variant: 'warning',
          icon: <IconAlertTriangle className="w-5 h-5" />,
          duration: 5000,
        });
      };

      const showInfo = () => {
        addToast({
          message: 'New update available. Click to learn more.',
          variant: 'info',
          icon: <IconInfoCircle className="w-5 h-5" />,
          action: {
            label: 'Learn More',
            onClick: () => alert('Learning more...'),
          },
          duration: 0,
        });
      };

      const showWithAction = () => {
        addToast({
          title: 'Friend Request',
          message: 'John Doe wants to connect with you.',
          variant: 'default',
          icon: <IconUser className="w-5 h-5" />,
          action: {
            label: 'Accept',
            onClick: () => {
              alert('Friend request accepted!');
            },
          },
          duration: 0,
        });
      };

      return (
        <div className="space-y-4 p-6">
          <div className="flex flex-wrap gap-2">
            <Button size="sm" color="success" onClick={showSuccess}>
              Success Toast
            </Button>
            <Button size="sm" color="error" onClick={showError}>
              Error Toast
            </Button>
            <Button size="sm" color="warning" onClick={showWarning}>
              Warning Toast
            </Button>
            <Button size="sm" color="info" onClick={showInfo}>
              Info Toast
            </Button>
            <Button size="sm" color="secondary" onClick={showWithAction}>
              Toast with Action
            </Button>
            <Button size="sm" style="outline" onClick={clearToasts}>
              Clear All
            </Button>
          </div>

          <div className="text-sm text-gray-600">
            Active toasts: {toasts.length}
          </div>

          <ToastContainer
            toasts={toasts}
            position="top-end"
            maxToasts={5}
          />
        </div>
      );
    };

    return <ToastDemo />;
  },
};

// Global toast service example
export const GlobalToastService: Story = {
  render: function Component() {
    const GlobalToastDemo = () => {
      const handleSuccess = () => {
        showToast.success('Profile updated successfully!');
      };

      const handleError = () => {
        showToast.error('Failed to save changes. Please try again.');
      };

      const handleWarning = () => {
        showToast.warning('Your session will expire in 5 minutes.');
      };

      const handleInfo = () => {
        showToast.info('New features are now available in settings.');
      };

      return (
        <ToastProvider position="bottom-end" maxToasts={3}>
          <div className="space-y-4 p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Global Toast Service</h3>
              <p className="text-sm text-gray-600 mb-6">
                These toasts are managed by the global toast service
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <Button size="sm" color="success" onClick={handleSuccess}>
                Success
              </Button>
              <Button size="sm" color="error" onClick={handleError}>
                Error
              </Button>
              <Button size="sm" color="warning" onClick={handleWarning}>
                Warning
              </Button>
              <Button size="sm" color="info" onClick={handleInfo}>
                Info
              </Button>
            </div>
          </div>
        </ToastProvider>
      );
    };

    return <GlobalToastDemo />;
  },
};

// Complex toast with multiple actions
export const ComplexToasts: Story = {
  render: function Component() {
    const ComplexToastDemo = () => {
      const { toasts, addToast, clearToasts } = useToast();

      const showComplexToast = () => {
        addToast({
          title: 'Update Available',
          message: 'A new version of the app is available. Update now to get the latest features and bug fixes.',
          variant: 'info',
          icon: <IconSettings className="w-5 h-5" />,
          action: {
            label: 'Update Now',
            onClick: () => {
              alert('Updating app...');
            },
          },
          duration: 0,
        });
      };

      const showLongMessage = () => {
        addToast({
          title: 'Important Notice',
          message: 'Your account will be temporarily suspended due to unusual activity. Please contact our support team within 24 hours to resolve this issue and restore full access to your account.',
          variant: 'warning',
          icon: <IconAlertTriangle className="w-5 h-5" />,
          action: {
            label: 'Contact Support',
            onClick: () => alert('Opening support chat...'),
          },
          duration: 0,
        });
      };

      const showLikeNotification = () => {
        addToast({
          message: 'Sarah liked your photo "Sunset at the beach"',
          variant: 'default',
          icon: <IconHeart className="w-5 h-5 text-red-500" />,
          action: {
            label: 'View',
            onClick: () => alert('Opening photo...'),
          },
          duration: 8000,
        });
      };

      return (
        <div className="space-y-4 p-6 max-w-md mx-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Complex Toast Examples</h3>
          </div>

          <div className="flex flex-col gap-2">
            <Button size="sm" color="primary" onClick={showComplexToast}>
              Show Update Toast
            </Button>
            <Button size="sm" color="warning" onClick={showLongMessage}>
              Show Long Message
            </Button>
            <Button size="sm" color="secondary" onClick={showLikeNotification}>
              Show Like Notification
            </Button>
            <Button size="sm" style="outline" onClick={clearToasts}>
              Clear All Toasts
            </Button>
          </div>

          <ToastContainer
            toasts={toasts}
            position="bottom-center"
            maxToasts={3}
          />
        </div>
      );
    };

    return <ComplexToastDemo />;
  },
};

// Auto-dismiss timing examples
export const AutoDismissTiming: Story = {
  render: function Component() {
    const TimingDemo = () => {
      const { toasts, addToast, clearToasts } = useToast();

      const show3Second = () => {
        addToast({
          message: 'This toast will disappear in 3 seconds',
          variant: 'info',
          icon: <IconInfoCircle className="w-5 h-5" />,
          duration: 3000,
        });
      };

      const show10Second = () => {
        addToast({
          message: 'This toast will disappear in 10 seconds',
          variant: 'success',
          icon: <IconCheck className="w-5 h-5" />,
          duration: 10000,
        });
      };

      const showPersistent = () => {
        addToast({
          title: 'Persistent Toast',
          message: 'This toast will stay until manually dismissed',
          variant: 'warning',
          icon: <IconAlertTriangle className="w-5 h-5" />,
          duration: 0, // No auto dismiss
        });
      };

      return (
        <div className="space-y-4 p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Auto-Dismiss Timing</h3>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Button size="sm" color="info" onClick={show3Second}>
              3 Second Toast
            </Button>
            <Button size="sm" color="success" onClick={show10Second}>
              10 Second Toast
            </Button>
            <Button size="sm" color="warning" onClick={showPersistent}>
              Persistent Toast
            </Button>
            <Button size="sm" style="outline" onClick={clearToasts}>
              Clear All
            </Button>
          </div>

          <div className="text-center text-sm text-gray-600">
            Active toasts: {toasts.length}
          </div>

          <ToastContainer
            toasts={toasts}
            position="top-center"
            maxToasts={4}
          />
        </div>
      );
    };

    return <TimingDemo />;
  },
};

// Individual Toast component
export const IndividualToast: Story = {
  render: function Component() {
    const [dismissed, setDismissed] = React.useState<string[]>([]);

    const handleDismiss = (id: string) => {
      setDismissed(prev => [...prev, id]);
    };

    const toastData: ToastMessage = {
      id: 'individual-1',
      title: 'Individual Toast',
      message: 'This is a single toast component example',
      variant: 'success',
      icon: <IconCheck className="w-5 h-5" />,
      dismissible: true,
      action: {
        label: 'Action',
        onClick: () => alert('Action clicked!'),
      },
    };

    if (dismissed.includes(toastData.id)) {
      return (
        <div className="text-center p-8">
          <p className="text-gray-600 mb-4">Toast was dismissed</p>
          <Button
            size="sm"
            onClick={() => setDismissed(prev => prev.filter(id => id !== toastData.id))}
          >
            Show Again
          </Button>
        </div>
      );
    }

    return (
      <div className="p-8">
        <Toast
          toast={toastData}
          onDismiss={handleDismiss}
        />
      </div>
    );
  },
};