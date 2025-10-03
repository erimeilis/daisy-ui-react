import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components/ui/tooltip';
import { useState } from 'react';
import {
  IconInfoCircle,
  IconQuestionMark,
  IconAlertCircle,
  IconCheck,
  IconX,
  IconSettings,
  IconUser,
  IconHome,
  IconMail,
  IconShare,
  IconDownload,
  IconEdit,
  IconTrash,
  IconPhone,
  IconHeart,
  IconStar
} from '@tabler/icons-react';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component that displays helpful information on hover. Supports different positions, colors, and can be controlled programmatically. Perfect for providing additional context without cluttering the interface.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The position of the tooltip relative to the trigger',
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the tooltip',
    },
    tip: {
      control: 'text',
      description: 'The content of the tooltip',
    },
    open: {
      control: 'boolean',
      description: 'Force the tooltip to be visible',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
    },
  },
  args: {
    position: 'top',
    tip: 'This is a tooltip',
    open: false,
    asChild: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    tip: 'This is a tooltip',
    children: (
      <button className="btn btn-primary">
        Hover me
      </button>
    ),
  },
};

export const AlwaysVisible: Story = {
  args: {
    tip: 'This tooltip is always visible',
    open: true,
    children: (
      <button className="btn btn-secondary">
        Always visible tooltip
      </button>
    ),
  },
};

// Position variations
export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-16 p-16">
      <div className="text-center">
        <h4 className="text-sm font-medium mb-4">Top</h4>
        <Tooltip tip="Tooltip on top" position="top">
          <button className="btn btn-outline">Top</button>
        </Tooltip>
      </div>

      <div className="text-center">
        <h4 className="text-sm font-medium mb-4">Bottom</h4>
        <Tooltip tip="Tooltip on bottom" position="bottom">
          <button className="btn btn-outline">Bottom</button>
        </Tooltip>
      </div>

      <div className="text-center">
        <h4 className="text-sm font-medium mb-4">Left</h4>
        <Tooltip tip="Tooltip on left" position="left">
          <button className="btn btn-outline">Left</button>
        </Tooltip>
      </div>

      <div className="text-center">
        <h4 className="text-sm font-medium mb-4">Right</h4>
        <Tooltip tip="Tooltip on right" position="right">
          <button className="btn btn-outline">Right</button>
        </Tooltip>
      </div>
    </div>
  ),
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip tip="Neutral tooltip" color="neutral">
        <button className="btn btn-neutral">Neutral</button>
      </Tooltip>

      <Tooltip tip="Primary tooltip" color="primary">
        <button className="btn btn-primary">Primary</button>
      </Tooltip>

      <Tooltip tip="Secondary tooltip" color="secondary">
        <button className="btn btn-secondary">Secondary</button>
      </Tooltip>

      <Tooltip tip="Accent tooltip" color="accent">
        <button className="btn btn-accent">Accent</button>
      </Tooltip>

      <Tooltip tip="Info tooltip" color="info">
        <button className="btn btn-info">Info</button>
      </Tooltip>

      <Tooltip tip="Success tooltip" color="success">
        <button className="btn btn-success">Success</button>
      </Tooltip>

      <Tooltip tip="Warning tooltip" color="warning">
        <button className="btn btn-warning">Warning</button>
      </Tooltip>

      <Tooltip tip="Error tooltip" color="error">
        <button className="btn btn-error">Error</button>
      </Tooltip>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip tip="Get more information about this feature" position="top">
        <button className="btn btn-circle btn-outline">
          <IconInfoCircle size={20} />
        </button>
      </Tooltip>

      <Tooltip tip="Need help? Click for assistance" position="top" color="info">
        <button className="btn btn-circle btn-info">
          <IconQuestionMark size={20} />
        </button>
      </Tooltip>

      <Tooltip tip="Warning: This action cannot be undone" position="top" color="warning">
        <button className="btn btn-circle btn-warning">
          <IconAlertCircle size={20} />
        </button>
      </Tooltip>

      <Tooltip tip="Task completed successfully" position="top" color="success">
        <button className="btn btn-circle btn-success">
          <IconCheck size={20} />
        </button>
      </Tooltip>

      <Tooltip tip="Delete this item permanently" position="top" color="error">
        <button className="btn btn-circle btn-error">
          <IconX size={20} />
        </button>
      </Tooltip>
    </div>
  ),
};

// Controlled tooltips
export const Controlled: Story = {
  render: function Component() {
    const [showTooltip1, setShowTooltip1] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);

    return (
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Tooltip
            tip="This tooltip is controlled by state"
            open={showTooltip1}
            color="primary"
          >
            <button className="btn btn-primary">
              Controlled Tooltip
            </button>
          </Tooltip>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => setShowTooltip1(!showTooltip1)}
          >
            {showTooltip1 ? 'Hide' : 'Show'} Tooltip
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Tooltip
            tip="Toggle me with the button!"
            open={showTooltip2}
            color="accent"
            position="bottom"
          >
            <div className="badge badge-accent badge-lg">
              Hover or toggle me
            </div>
          </Tooltip>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => setShowTooltip2(!showTooltip2)}
          >
            Toggle
          </button>
        </div>
      </div>
    );
  },
};

// Different trigger elements
export const DifferentTriggers: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center">
        <Tooltip tip="Button with tooltip">
          <button className="btn btn-primary">Button</button>
        </Tooltip>

        <Tooltip tip="Badge with helpful info" color="secondary">
          <div className="badge badge-secondary">Badge</div>
        </Tooltip>

        <Tooltip tip="Avatar shows user details" color="accent">
          <div className="avatar">
            <div className="w-10 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
              <IconUser size={16} />
            </div>
          </div>
        </Tooltip>

        <Tooltip tip="Click to go home" color="info">
          <IconHome size={24} className="text-info cursor-pointer" />
        </Tooltip>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <Tooltip tip="Input field for email address" position="bottom">
          <input type="email" placeholder="Email" className="input input-bordered" />
        </Tooltip>

        <Tooltip tip="Select your country" position="bottom" color="primary">
          <select className="select select-bordered">
            <option disabled selected>Country</option>
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
          </select>
        </Tooltip>
      </div>

      <div className="flex gap-4">
        <Tooltip tip="Regular text can have tooltips too" color="neutral">
          <span className="text-info cursor-help underline decoration-dotted">
            Hover over this text
          </span>
        </Tooltip>

        <Tooltip tip="Links with additional context" color="primary">
          <a href="#" className="link link-primary">
            Important Link
          </a>
        </Tooltip>
      </div>
    </div>
  ),
};

// Complex content tooltips
export const ComplexContent: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <Tooltip tip="Short and sweet!" color="primary">
        <button className="btn btn-primary">Short Tip</button>
      </Tooltip>

      <Tooltip
        tip="This is a longer tooltip that provides more detailed information about the feature or action that will be performed when you click this button."
        color="secondary"
        position="bottom"
      >
        <button className="btn btn-secondary">Long Description</button>
      </Tooltip>

      <Tooltip
        tip="Multi-line tooltip content. Line 2 of information. Line 3 with more details."
        color="accent"
        position="left"
      >
        <button className="btn btn-accent">Multi-line</button>
      </Tooltip>

      <Tooltip
        tip="Tooltip with special characters"
        color="info"
        position="right"
      >
        <button className="btn btn-info">Special Chars</button>
      </Tooltip>
    </div>
  ),
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      {/* Toolbar with tooltips */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title mb-4">Document Editor Toolbar</h3>
          <div className="flex gap-2">
            <Tooltip tip="Create new document" position="bottom">
              <button className="btn btn-square btn-outline">
                <IconHome size={16} />
              </button>
            </Tooltip>

            <Tooltip tip="Edit current document" position="bottom" color="primary">
              <button className="btn btn-square btn-primary">
                <IconEdit size={16} />
              </button>
            </Tooltip>

            <Tooltip tip="Download document as PDF" position="bottom" color="success">
              <button className="btn btn-square btn-outline">
                <IconDownload size={16} />
              </button>
            </Tooltip>

            <Tooltip tip="Share with team members" position="bottom" color="info">
              <button className="btn btn-square btn-outline">
                <IconShare size={16} />
              </button>
            </Tooltip>

            <div className="divider divider-horizontal"></div>

            <Tooltip tip="Document settings and preferences" position="bottom">
              <button className="btn btn-square btn-outline">
                <IconSettings size={16} />
              </button>
            </Tooltip>

            <Tooltip tip="Delete document permanently" position="bottom" color="error">
              <button className="btn btn-square btn-outline">
                <IconTrash size={16} />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* User profile card with tooltips */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title mb-4">User Profile</h3>
          <div className="flex items-center gap-4">
            <Tooltip tip="Profile picture - Click to change" color="primary">
              <div className="avatar cursor-pointer">
                <div className="w-16 rounded-full bg-primary text-primary-content flex items-center justify-center">
                  <IconUser size={24} />
                </div>
              </div>
            </Tooltip>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-semibold">John Doe</h4>
                <Tooltip tip="Verified user account" color="success">
                  <IconCheck size={16} className="text-success" />
                </Tooltip>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <Tooltip tip="Send email to john.doe@example.com" color="info">
                  <div className="flex items-center gap-1 text-info cursor-pointer">
                    <IconMail size={16} />
                    <span className="text-sm">Email</span>
                  </div>
                </Tooltip>

                <Tooltip tip="Call +1 (555) 123-4567" color="info">
                  <div className="flex items-center gap-1 text-info cursor-pointer">
                    <IconPhone size={16} />
                    <span className="text-sm">Phone</span>
                  </div>
                </Tooltip>
              </div>
            </div>

            <Tooltip tip="Add to favorites" color="error" position="left">
              <button className="btn btn-circle btn-outline">
                <IconHeart size={16} />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Product card with interactive tooltips */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title mb-4">Product Information</h3>
          <div className="flex gap-6">
            <Tooltip tip="Product image - Click to view full size" position="right">
              <div className="w-32 h-32 bg-base-200 rounded-lg flex items-center justify-center cursor-pointer">
                <span className="text-base-content/50">Image</span>
              </div>
            </Tooltip>

            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-semibold">Premium Wireless Headphones</h4>
                <Tooltip tip="Premium quality certified product" color="warning">
                  <IconStar size={16} className="text-warning" />
                </Tooltip>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-primary">$299.99</span>
                <Tooltip tip="Original price before discount" color="neutral">
                  <span className="text-lg text-base-content/60 line-through">$399.99</span>
                </Tooltip>
                <div className="badge badge-success">25% OFF</div>
              </div>

              <div className="flex gap-2">
                <Tooltip tip="Add to shopping cart" color="primary">
                  <button className="btn btn-primary">Add to Cart</button>
                </Tooltip>

                <Tooltip tip="Save for later purchase" color="secondary">
                  <button className="btn btn-outline">Wishlist</button>
                </Tooltip>

                <Tooltip tip="Compare with similar products" color="info">
                  <button className="btn btn-outline">Compare</button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form with helpful tooltips */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title mb-4">Registration Form</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  First Name
                  <Tooltip tip="Enter your legal first name as it appears on official documents" color="info" position="right">
                    <IconInfoCircle size={14} className="text-info" />
                  </Tooltip>
                </span>
              </label>
              <input type="text" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  Email Address
                  <Tooltip tip="We'll send verification and important updates to this email" color="warning" position="right">
                    <IconAlertCircle size={14} className="text-warning" />
                  </Tooltip>
                </span>
              </label>
              <input type="email" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  Password
                  <Tooltip tip="Must be at least 8 characters with uppercase, lowercase, number, and special character" color="info" position="right">
                    <IconQuestionMark size={14} className="text-info" />
                  </Tooltip>
                </span>
              </label>
              <input type="password" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-1">
                  Phone Number
                  <span className="text-xs text-base-content/60">(Optional)</span>
                  <Tooltip tip="Phone number for account recovery and two-factor authentication" color="neutral" position="right">
                    <IconInfoCircle size={14} className="text-base-content/60" />
                  </Tooltip>
                </span>
              </label>
              <input type="tel" className="input input-bordered" />
            </div>
          </div>

          <div className="form-control mt-4">
            <label className="label cursor-pointer">
              <span className="label-text flex items-center gap-1">
                <input type="checkbox" className="checkbox" />
                I agree to the terms and conditions
                <Tooltip tip="Click to read our complete terms of service and privacy policy" color="primary" position="top">
                  <span className="link link-primary text-sm">Read more</span>
                </Tooltip>
              </span>
            </label>
          </div>

          <div className="card-actions justify-end mt-6">
            <Tooltip tip="Create your account and start using our services" color="success">
              <button className="btn btn-primary">Create Account</button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Tooltip positioning demo
export const PositioningDemo: Story = {
  render: () => (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        {/* Center element */}
        <div className="w-32 h-32 bg-primary rounded-lg flex items-center justify-center text-primary-content font-semibold">
          Center
        </div>

        {/* Top tooltip */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <Tooltip tip="Top position tooltip" position="top" open>
            <div className="w-20 h-8 bg-base-200 rounded flex items-center justify-center text-sm">
              Top
            </div>
          </Tooltip>
        </div>

        {/* Bottom tooltip */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <Tooltip tip="Bottom position tooltip" position="bottom" open>
            <div className="w-20 h-8 bg-base-200 rounded flex items-center justify-center text-sm">
              Bottom
            </div>
          </Tooltip>
        </div>

        {/* Left tooltip */}
        <div className="absolute left-0 top-1/2 transform -translate-x-24 -translate-y-1/2">
          <Tooltip tip="Left position tooltip" position="left" open>
            <div className="w-20 h-8 bg-base-200 rounded flex items-center justify-center text-sm">
              Left
            </div>
          </Tooltip>
        </div>

        {/* Right tooltip */}
        <div className="absolute right-0 top-1/2 transform translate-x-24 -translate-y-1/2">
          <Tooltip tip="Right position tooltip" position="right" open>
            <div className="w-20 h-8 bg-base-200 rounded flex items-center justify-center text-sm">
              Right
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};