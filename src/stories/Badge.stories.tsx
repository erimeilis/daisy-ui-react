import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from '../components/ui/badge';
import { IconStar, IconCheck, IconX, IconHeart } from '@tabler/icons-react';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge component for displaying small status indicators, labels, and counts.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'neutral', 'ghost'],
      description: 'The color variant of the badge',
    },
    styleVariant: {
      control: 'select',
      options: ['default', 'outline', 'dash', 'soft'],
      description: 'The style variant of the badge',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the badge',
    },
  },
  args: {
    children: 'Badge',
    variant: 'primary',
    styleVariant: 'default',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic badges
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent',
  },
};

// All color variants
export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  ),
};

// Style variants
export const Styles: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="primary" styleVariant="default">Default</Badge>
        <Badge variant="primary" styleVariant="outline">Outline</Badge>
        <Badge variant="primary" styleVariant="dash">Dash</Badge>
        <Badge variant="primary" styleVariant="soft">Soft</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="success" styleVariant="default">Default</Badge>
        <Badge variant="success" styleVariant="outline">Outline</Badge>
        <Badge variant="success" styleVariant="dash">Dash</Badge>
        <Badge variant="success" styleVariant="soft">Soft</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="warning" styleVariant="default">Default</Badge>
        <Badge variant="warning" styleVariant="outline">Outline</Badge>
        <Badge variant="warning" styleVariant="dash">Dash</Badge>
        <Badge variant="warning" styleVariant="soft">Soft</Badge>
      </div>
    </div>
  ),
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge variant="primary" size="xs">XS</Badge>
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="md">Medium</Badge>
      <Badge variant="primary" size="lg">Large</Badge>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">
        <IconStar className="w-3 h-3 mr-1" />
        Starred
      </Badge>
      <Badge variant="success">
        <IconCheck className="w-3 h-3 mr-1" />
        Verified
      </Badge>
      <Badge variant="error">
        <IconX className="w-3 h-3 mr-1" />
        Failed
      </Badge>
      <Badge variant="info">
        <IconHeart className="w-3 h-3 mr-1" />
        Favorite
      </Badge>
    </div>
  ),
};

// Numbers and counts
export const Numbers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">1</Badge>
      <Badge variant="secondary">99</Badge>
      <Badge variant="error">999+</Badge>
      <Badge variant="success">New</Badge>
      <Badge variant="warning">!</Badge>
    </div>
  ),
};

// Status indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span>Server Status:</span>
        <Badge variant="success">Online</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Build Status:</span>
        <Badge variant="warning">Building</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Deploy Status:</span>
        <Badge variant="error">Failed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>User Status:</span>
        <Badge variant="info">Active</Badge>
      </div>
    </div>
  ),
};

// In context examples
export const InContext: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      {/* In buttons */}
      <div className="space-y-2">
        <h4 className="font-semibold">In Buttons:</h4>
        <div className="flex gap-2">
          <button className="btn btn-primary">
            Notifications
            <Badge variant="error" size="sm">3</Badge>
          </button>
          <button className="btn btn-ghost">
            Messages
            <Badge variant="success" size="sm">12</Badge>
          </button>
        </div>
      </div>

      {/* In lists */}
      <div className="space-y-2">
        <h4 className="font-semibold">In Lists:</h4>
        <ul className="space-y-2">
          <li className="flex justify-between items-center p-2 bg-base-200 rounded">
            <span>Frontend Tasks</span>
            <Badge variant="primary">5</Badge>
          </li>
          <li className="flex justify-between items-center p-2 bg-base-200 rounded">
            <span>Backend Issues</span>
            <Badge variant="error">2</Badge>
          </li>
          <li className="flex justify-between items-center p-2 bg-base-200 rounded">
            <span>Completed</span>
            <Badge variant="success">12</Badge>
          </li>
        </ul>
      </div>

      {/* In cards */}
      <div className="space-y-2">
        <h4 className="font-semibold">In Cards:</h4>
        <div className="card bg-base-200 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">Project Alpha</h3>
              <p className="text-sm opacity-70">Development in progress</p>
            </div>
            <Badge variant="warning">In Progress</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Interactive example
export const Interactive: Story = {
  render: function InteractiveBadge() {
    const [count, setCount] = React.useState(0);
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleClick = () => {
      setStatus('loading');
      setCount(prev => prev + 1);

      setTimeout(() => {
        setStatus(Math.random() > 0.3 ? 'success' : 'error');
        setTimeout(() => setStatus('idle'), 2000);
      }, 1000);
    };

    const getStatusBadge = () => {
      switch (status) {
        case 'loading':
          return <Badge variant="warning">Loading...</Badge>;
        case 'success':
          return <Badge variant="success">Success!</Badge>;
        case 'error':
          return <Badge variant="error">Error!</Badge>;
        default:
          return <Badge variant="neutral">Idle</Badge>;
      }
    };

    return (
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
          <button
            className="btn btn-primary"
            onClick={handleClick}
            disabled={status === 'loading'}
          >
            Click me!
            <Badge variant="primary" size="sm">{count}</Badge>
          </button>
          {getStatusBadge()}
        </div>
        <p className="text-sm opacity-70">
          Click the button to see the badge status change
        </p>
      </div>
    );
  },
};