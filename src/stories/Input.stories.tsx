import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from '../components/form/input';
import { IconSearch, IconUser, IconMail, IconLock, IconEye, IconEyeOff } from '@tabler/icons-react';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Input component for forms with various styles, colors, and sizes.',
      },
    },
  },
  argTypes: {
    style: {
      control: 'select',
      options: ['default', 'ghost'],
      description: 'The style variant of the input',
    },
    color: {
      control: 'select',
      options: ['default', 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the input',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
  args: {
    style: 'default',
    color: 'default',
    size: 'md',
    type: 'text',
    placeholder: 'Enter text...',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic inputs
export const Default: Story = {
  args: {
    placeholder: 'Default input',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    placeholder: 'Primary input',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    placeholder: 'Secondary input',
  },
};

// All colors
export const Colors: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input color="default" placeholder="Default color" />
      <Input color="neutral" placeholder="Neutral color" />
      <Input color="primary" placeholder="Primary color" />
      <Input color="secondary" placeholder="Secondary color" />
      <Input color="accent" placeholder="Accent color" />
      <Input color="info" placeholder="Info color" />
      <Input color="success" placeholder="Success color" />
      <Input color="warning" placeholder="Warning color" />
      <Input color="error" placeholder="Error color" />
    </div>
  ),
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="xs" placeholder="Extra small (xs)" />
      <Input size="sm" placeholder="Small (sm)" />
      <Input size="md" placeholder="Medium (md) - default" />
      <Input size="lg" placeholder="Large (lg)" />
      <Input size="xl" placeholder="Extra large (xl)" />
    </div>
  ),
};

// Input styles
export const Styles: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input style="default" placeholder="Default style" />
      <Input style="ghost" placeholder="Ghost style" />
    </div>
  ),
};

// Input types
export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="tel" placeholder="Phone input" />
      <Input type="url" placeholder="URL input" />
      <Input type="search" placeholder="Search input" />
    </div>
  ),
};

// With icons (using wrapper divs)
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      {/* Search input */}
      <div className="relative">
        <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
        <Input className="pl-10" placeholder="Search..." />
      </div>

      {/* User input */}
      <div className="relative">
        <IconUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
        <Input className="pl-10" placeholder="Username" />
      </div>

      {/* Email input */}
      <div className="relative">
        <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
        <Input type="email" className="pl-10" placeholder="Email address" />
      </div>

      {/* Password with toggle */}
      <div className="relative">
        <IconLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
        <Input type="password" className="pl-10 pr-10" placeholder="Password" />
        <IconEye className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50 cursor-pointer hover:opacity-100" />
      </div>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input placeholder="Normal state" />
      <Input placeholder="Focused state" className="focus:ring-2" />
      <Input placeholder="Disabled state" disabled />
      <Input placeholder="Read-only state" readOnly />
      <Input color="success" placeholder="Success state" defaultValue="Valid input" />
      <Input color="warning" placeholder="Warning state" defaultValue="Check this value" />
      <Input color="error" placeholder="Error state" defaultValue="Invalid input" />
    </div>
  ),
};

// Form layouts
export const FormLayouts: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      {/* Basic form */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Form</h3>
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <Input placeholder="Enter your name" />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <Input type="email" placeholder="Enter your email" />
        </div>
      </div>

      {/* Form with validation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Validation</h3>
        <div>
          <label className="label">
            <span className="label-text">Username</span>
            <span className="label-text-alt">Required</span>
          </label>
          <Input color="success" placeholder="john_doe" defaultValue="valid_username" />
          <label className="label">
            <span className="label-text-alt text-success">Username is available</span>
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <Input type="password" color="error" placeholder="Password" defaultValue="123" />
          <label className="label">
            <span className="label-text-alt text-error">Password must be at least 8 characters</span>
          </label>
        </div>
      </div>
    </div>
  ),
};

// Input groups
export const InputGroups: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      {/* With button */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Input with Button</h3>
        <div className="join w-full">
          <Input className="join-item flex-1" placeholder="Search..." />
          <button className="btn join-item btn-primary">Search</button>
        </div>
      </div>

      {/* With dropdown */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Input with Dropdown</h3>
        <div className="join w-full">
          <select className="select select-bordered join-item">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
          <Input className="join-item flex-1" placeholder="Amount" type="number" />
        </div>
      </div>

      {/* With prefix/suffix */}
      <div>
        <h3 className="text-lg font-semibold mb-4">With Prefix/Suffix</h3>
        <div className="join w-full">
          <span className="join-item bg-base-200 px-3 flex items-center">$</span>
          <Input className="join-item flex-1" placeholder="0.00" type="number" />
          <span className="join-item bg-base-200 px-3 flex items-center">USD</span>
        </div>
      </div>
    </div>
  ),
};

// Interactive password toggle
export const PasswordToggle: Story = {
  render: function Component() {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="w-80">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="relative">
          <IconLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
          <Input
            type={showPassword ? 'text' : 'password'}
            className="pl-10 pr-10"
            placeholder="Enter password"
            defaultValue="mypassword123"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IconEyeOff className="w-4 h-4 opacity-50 hover:opacity-100" />
            ) : (
              <IconEye className="w-4 h-4 opacity-50 hover:opacity-100" />
            )}
          </button>
        </div>
        <label className="label">
          <span className="label-text-alt">Click the eye icon to toggle visibility</span>
        </label>
      </div>
    );
  },
};

// Real-time validation
export const RealTimeValidation: Story = {
  render: function Component() {
    const [email, setEmail] = React.useState('');
    const [isValid, setIsValid] = React.useState<boolean | null>(null);

    React.useEffect(() => {
      if (email.length === 0) {
        setIsValid(null);
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(email));
      }
    }, [email]);

    const getInputColor = () => {
      if (isValid === null) return 'default';
      return isValid ? 'success' : 'error';
    };

    const getStatusText = () => {
      if (isValid === null) return 'Enter your email address';
      return isValid ? 'Valid email address' : 'Please enter a valid email';
    };

    const getStatusColor = () => {
      if (isValid === null) return '';
      return isValid ? 'text-success' : 'text-error';
    };

    return (
      <div className="w-80">
        <label className="label">
          <span className="label-text">Email Address</span>
        </label>
        <div className="relative">
          <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
          <Input
            type="email"
            color={getInputColor()}
            className="pl-10"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label className="label">
          <span className={`label-text-alt ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </label>
      </div>
    );
  },
};