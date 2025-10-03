import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from '../components/layout/divider';
import { Button } from '../components/form/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Divider component for creating visual separators with optional text content, supporting horizontal and vertical orientations with different colors.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
    },
    color: {
      control: 'select',
      options: ['default', 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the divider',
    },
    position: {
      control: 'select',
      options: ['default', 'start', 'end'],
      description: 'Text position for vertical dividers',
    },
    children: {
      control: 'text',
      description: 'Optional text content to display on the divider',
    },
  },
  args: {
    orientation: 'horizontal',
    color: 'default',
    position: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic horizontal divider
export const Default: Story = {
  render: () => (
    <div className="w-80">
      <p>Content above the divider.</p>
      <Divider />
      <p>Content below the divider.</p>
    </div>
  ),
};

// Horizontal divider with text
export const WithText: Story = {
  args: {
    children: 'OR',
  },
  render: (args) => (
    <div className="w-80">
      <p>Sign in with your email and password.</p>
      <Divider {...args} />
      <p>Or continue with social login.</p>
    </div>
  ),
};

// Different orientations
export const Orientations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-semibold mb-4">Horizontal Divider:</h4>
        <div className="w-80">
          <p>Content above</p>
          <Divider>Horizontal</Divider>
          <p>Content below</p>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Vertical Divider:</h4>
        <div className="flex items-center h-20">
          <p>Left content</p>
          <Divider orientation="vertical">Vertical</Divider>
          <p>Right content</p>
        </div>
      </div>
    </div>
  ),
};

// Color variants
export const Colors: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h4 className="font-semibold mb-4">Horizontal Dividers - Different Colors:</h4>
        <div className="space-y-4">
          <div>
            <p>Default divider</p>
            <Divider>Default</Divider>
            <p>More content</p>
          </div>
          <div>
            <p>Primary divider</p>
            <Divider color="primary">Primary</Divider>
            <p>More content</p>
          </div>
          <div>
            <p>Secondary divider</p>
            <Divider color="secondary">Secondary</Divider>
            <p>More content</p>
          </div>
          <div>
            <p>Accent divider</p>
            <Divider color="accent">Accent</Divider>
            <p>More content</p>
          </div>
          <div>
            <p>Info divider</p>
            <Divider color="info">Info</Divider>
            <p>More content</p>
          </div>
          <div>
            <p>Success divider</p>
            <Divider color="success">Success</Divider>
            <p>More content</p>
          </div>
          <div>
            <p>Warning divider</p>
            <Divider color="warning">Warning</Divider>
            <p>More content</p>
          </div>
          <div>
            <p>Error divider</p>
            <Divider color="error">Error</Divider>
            <p>More content</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Vertical dividers with positions
export const VerticalPositions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-semibold mb-4">Vertical Divider Positions:</h4>
        <div className="space-y-6">
          <div className="flex items-center h-16 gap-4">
            <span>Left</span>
            <Divider orientation="vertical" position="default">Center</Divider>
            <span>Right</span>
          </div>
          <div className="flex items-center h-16 gap-4">
            <span>Left</span>
            <Divider orientation="vertical" position="start">Start</Divider>
            <span>Right</span>
          </div>
          <div className="flex items-center h-16 gap-4">
            <span>Left</span>
            <Divider orientation="vertical" position="end">End</Divider>
            <span>Right</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Login form example
export const LoginForm: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <h3 className="text-xl font-bold text-center">Sign In</h3>
      <div className="space-y-3">
        <input className="input input-bordered w-full" placeholder="Email" />
        <input className="input input-bordered w-full" type="password" placeholder="Password" />
        <Button color="primary" modifier="block">Sign In</Button>
      </div>
      <Divider>OR</Divider>
      <div className="space-y-2">
        <Button modifier="block" color="neutral">Continue with Google</Button>
        <Button modifier="block" color="neutral">Continue with GitHub</Button>
      </div>
      <Divider />
      <p className="text-center text-sm">
        Don't have an account? <a href="#" className="link link-primary">Sign up</a>
      </p>
    </div>
  ),
};

// Content sections
export const ContentSections: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <h2 className="text-xl font-bold">Article Title</h2>
        <p className="text-sm opacity-70">Published on March 15, 2024</p>
      </div>

      <Divider />

      <div>
        <h3 className="font-semibold mb-2">Introduction</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <Divider>Section Break</Divider>

      <div>
        <h3 className="font-semibold mb-2">Main Content</h3>
        <p className="text-sm">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <Divider color="primary">Key Points</Divider>

      <div>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Important point number one</li>
          <li>Another crucial detail</li>
          <li>Final key takeaway</li>
        </ul>
      </div>

      <Divider />

      <div>
        <h3 className="font-semibold mb-2">Conclusion</h3>
        <p className="text-sm">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  ),
};

// Card layouts with dividers
export const CardLayouts: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="w-80">
        <div className="p-6">
          <h3 className="font-bold text-lg">Profile Settings</h3>
          <p className="text-sm opacity-70">Manage your account preferences</p>
        </div>
        <Divider />
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span>Email notifications</span>
            <input type="checkbox" className="toggle toggle-primary" defaultChecked />
          </div>
          <div className="flex justify-between items-center">
            <span>SMS alerts</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
        </div>
        <Divider color="neutral" />
        <div className="p-6">
          <Button color="primary" size="sm">Save Changes</Button>
        </div>
      </Card>

      <Card className="w-80">
        <div className="p-6">
          <h3 className="font-bold text-lg">Order Summary</h3>
        </div>
        <Divider />
        <div className="p-6 space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$99.99</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$9.99</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$8.50</span>
          </div>
        </div>
        <Divider color="primary">Total</Divider>
        <div className="p-6">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>$118.48</span>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// Dashboard layout
export const DashboardLayout: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Badge variant="success">Online</Badge>
          <Button size="sm">Settings</Button>
        </div>
      </div>

      <Divider />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="stat">
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-primary">2,543</div>
            <div className="stat-desc">↗︎ 12% (30 days)</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="stat">
            <div className="stat-title">Revenue</div>
            <div className="stat-value text-secondary">$15,234</div>
            <div className="stat-desc">↗︎ 8% (30 days)</div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="stat">
            <div className="stat-title">Orders</div>
            <div className="stat-value text-accent">156</div>
            <div className="stat-desc">↘︎ 3% (30 days)</div>
          </div>
        </Card>
      </div>

      <Divider color="primary">Recent Activity</Divider>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-base-200 rounded">
          <div>
            <p className="font-medium">New user registered</p>
            <p className="text-xs opacity-70">2 minutes ago</p>
          </div>
          <Badge variant="info" size="sm">New</Badge>
        </div>
        <div className="flex items-center justify-between p-3 bg-base-200 rounded">
          <div>
            <p className="font-medium">Order #1234 completed</p>
            <p className="text-xs opacity-70">5 minutes ago</p>
          </div>
          <Badge variant="success" size="sm">Completed</Badge>
        </div>
        <div className="flex items-center justify-between p-3 bg-base-200 rounded">
          <div>
            <p className="font-medium">Payment received</p>
            <p className="text-xs opacity-70">10 minutes ago</p>
          </div>
          <Badge variant="primary" size="sm">Payment</Badge>
        </div>
      </div>
    </div>
  ),
};

// Rich content dividers
export const RichContent: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <h4 className="font-semibold mb-4">Dividers with Rich Content:</h4>
        <div className="space-y-4">
          <div>
            <p>Basic content section</p>
            <Divider>
              <Badge variant="primary" size="sm">Section 1</Badge>
            </Divider>
            <p>Another content section</p>
          </div>

          <Divider>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Completed Steps</span>
            </div>
          </Divider>

          <div>
            <p>More content here</p>
            <Divider>
              <div className="flex items-center gap-2">
                <div className="loading loading-spinner loading-xs"></div>
                <span>Processing...</span>
              </div>
            </Divider>
            <p>Final content section</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Sidebar with vertical dividers
export const SidebarLayout: Story = {
  render: () => (
    <div className="flex h-80 w-full max-w-2xl border rounded-lg overflow-hidden">
      <div className="w-48 p-4 bg-base-200">
        <h3 className="font-semibold mb-4">Navigation</h3>
        <ul className="space-y-2">
          <li><a href="#" className="block p-2 hover:bg-base-300 rounded">Dashboard</a></li>
          <li><a href="#" className="block p-2 hover:bg-base-300 rounded">Users</a></li>
          <li><a href="#" className="block p-2 hover:bg-base-300 rounded">Settings</a></li>
        </ul>
      </div>

      <Divider orientation="vertical" />

      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">Main Content</h2>
        <p className="text-sm mb-4">
          This is the main content area. The vertical divider separates
          the sidebar from the main content.
        </p>
        <div className="space-y-2">
          <Button size="sm" color="primary">Primary Action</Button>
          <Button size="sm" color="secondary">Secondary Action</Button>
        </div>
      </div>

      <Divider orientation="vertical" />

      <div className="w-48 p-4 bg-base-200">
        <h3 className="font-semibold mb-4">Sidebar</h3>
        <div className="space-y-3">
          <div className="p-2 bg-base-300 rounded">
            <p className="text-xs font-medium">Widget 1</p>
            <p className="text-xs opacity-70">Some info</p>
          </div>
          <div className="p-2 bg-base-300 rounded">
            <p className="text-xs font-medium">Widget 2</p>
            <p className="text-xs opacity-70">More info</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Custom styling
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8 w-80">
      <div>
        <h4 className="font-semibold mb-4">Custom Styled Dividers:</h4>
        <div className="space-y-4">
          <div>
            <p>Content with thick divider</p>
            <Divider className="border-t-4">Thick Border</Divider>
            <p>More content</p>
          </div>

          <div>
            <p>Content with dashed divider</p>
            <Divider className="border-dashed">Dashed Style</Divider>
            <p>More content</p>
          </div>

          <div>
            <p>Content with dotted divider</p>
            <Divider className="border-dotted">Dotted Style</Divider>
            <p>More content</p>
          </div>

          <div>
            <p>Content with gradient divider</p>
            <Divider className="bg-gradient-to-r from-primary to-secondary text-primary-content">
              Gradient
            </Divider>
            <p>More content</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// No text dividers
export const NoText: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div>
        <h4 className="font-semibold mb-4">Dividers without Text:</h4>
        <div className="space-y-4">
          <div>
            <p>First section of content that needs separation.</p>
            <Divider />
            <p>Second section that follows the divider.</p>
            <Divider color="primary" />
            <p>Third section with a colored divider above.</p>
            <Divider color="accent" />
            <p>Final section with another colored divider.</p>
          </div>
        </div>
      </div>
    </div>
  ),
};