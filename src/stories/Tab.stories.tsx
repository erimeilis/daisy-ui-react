import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from '../components/navigation/tab';
import { useState } from 'react';
import {
  IconUser,
  IconSettings,
  IconBell,
  IconLock,
  IconChartBar,
  IconHome,
  IconMail,
  IconCreditCard,
  IconShield
} from '@tabler/icons-react';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tab',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile tabs component for organizing content into multiple panels. Supports different styles, sizes, keyboard navigation, and both controlled and uncontrolled modes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'lifted', 'boxed'],
      description: 'The style variant of the tabs',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the tabs',
    },
  },
  args: {
    variant: 'default',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicTabItems = [
  {
    id: 'profile',
    label: 'Profile',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Profile Information</h3>
        <p className="text-base-content/70">
          Manage your personal information and account settings here.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input type="text" className="input input-bordered w-full" defaultValue="John" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input type="text" className="input input-bordered w-full" defaultValue="Doe" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
        <div className="space-y-4">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Email notifications</span>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Dark mode</span>
              <input type="checkbox" className="toggle toggle-secondary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Push notifications</span>
              <input type="checkbox" className="toggle toggle-accent" defaultChecked />
            </label>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'help',
    label: 'Help',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Help & Support</h3>
        <p className="text-base-content/70 mb-4">
          Find answers to common questions and get support.
        </p>
        <div className="space-y-2">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How do I reset my password?
            </div>
            <div className="collapse-content">
              <p>Click on the "Forgot Password" link on the login page...</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How do I update my profile?
            </div>
            <div className="collapse-content">
              <p>Go to the Profile tab and edit your information...</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// Basic usage
export const Default: Story = {
  args: {
    items: basicTabItems,
  },
};

// Style variations
export const Variants: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default</h3>
        <Tabs items={basicTabItems} variant="default" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Bordered</h3>
        <Tabs items={basicTabItems} variant="bordered" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Lifted</h3>
        <Tabs items={basicTabItems} variant="lifted" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Boxed</h3>
        <Tabs items={basicTabItems} variant="boxed" />
      </div>
    </div>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Extra Small</h3>
        <Tabs items={basicTabItems} size="xs" variant="boxed" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <Tabs items={basicTabItems} size="sm" variant="boxed" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium</h3>
        <Tabs items={basicTabItems} size="md" variant="boxed" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <Tabs items={basicTabItems} size="lg" variant="boxed" />
      </div>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: function Component() {
    const iconTabItems = [
      {
        id: 'profile',
        label: (
          <div className="flex items-center gap-2">
            <IconUser size={16} />
            Profile
          </div>
        ),
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <IconUser size={20} />
              Profile Information
            </h3>
            <p className="text-base-content/70">
              Manage your personal information and account details.
            </p>
          </div>
        ),
      },
      {
        id: 'settings',
        label: (
          <div className="flex items-center gap-2">
            <IconSettings size={16} />
            Settings
          </div>
        ),
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <IconSettings size={20} />
              Account Settings
            </h3>
            <p className="text-base-content/70">
              Configure your account preferences and privacy settings.
            </p>
          </div>
        ),
      },
      {
        id: 'notifications',
        label: (
          <div className="flex items-center gap-2">
            <IconBell size={16} />
            Notifications
          </div>
        ),
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <IconBell size={20} />
              Notification Settings
            </h3>
            <p className="text-base-content/70">
              Control how and when you receive notifications.
            </p>
          </div>
        ),
      },
      {
        id: 'security',
        label: (
          <div className="flex items-center gap-2">
            <IconLock size={16} />
            Security
          </div>
        ),
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <IconLock size={20} />
              Security Settings
            </h3>
            <p className="text-base-content/70">
              Manage your password, two-factor authentication, and security preferences.
            </p>
          </div>
        ),
        disabled: false,
      },
    ];

    return <Tabs items={iconTabItems} variant="bordered" size="lg" />;
  },
};

// With disabled tabs
export const WithDisabledTabs: Story = {
  render: function Component() {
    const tabItems = [
      {
        id: 'available',
        label: 'Available',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Available Content</h3>
            <p>This tab is available and can be accessed.</p>
          </div>
        ),
      },
      {
        id: 'disabled',
        label: 'Disabled',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Disabled Content</h3>
            <p>This content should not be accessible.</p>
          </div>
        ),
        disabled: true,
      },
      {
        id: 'another',
        label: 'Another Tab',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Another Tab</h3>
            <p>This is another available tab.</p>
          </div>
        ),
      },
    ];

    return (
      <div className="space-y-4">
        <p className="text-sm text-base-content/70">
          The middle tab is disabled and cannot be selected. Use arrow keys to navigate.
        </p>
        <Tabs items={tabItems} variant="boxed" />
      </div>
    );
  },
};

// Controlled tabs
export const Controlled: Story = {
  render: function Component() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const dashboardTabs = [
      {
        id: 'dashboard',
        label: (
          <div className="flex items-center gap-2">
            <IconHome size={16} />
            Dashboard
          </div>
        ),
        content: (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="stat bg-primary text-primary-content rounded-lg">
                <div className="stat-title">Total Users</div>
                <div className="stat-value">1,234</div>
                <div className="stat-desc">↗︎ 12% increase</div>
              </div>
              <div className="stat bg-secondary text-secondary-content rounded-lg">
                <div className="stat-title">Revenue</div>
                <div className="stat-value">$45.6K</div>
                <div className="stat-desc">↗︎ 8% increase</div>
              </div>
              <div className="stat bg-accent text-accent-content rounded-lg">
                <div className="stat-title">Orders</div>
                <div className="stat-value">567</div>
                <div className="stat-desc">↘︎ 3% decrease</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'analytics',
        label: (
          <div className="flex items-center gap-2">
            <IconChartBar size={16} />
            Analytics
          </div>
        ),
        content: (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Analytics Overview</h3>
            <div className="space-y-4">
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title">Page Views</h4>
                  <div className="stat-value text-primary">25,489</div>
                  <p className="text-sm text-base-content/70">Last 30 days</p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title">Conversion Rate</h4>
                  <div className="stat-value text-secondary">3.2%</div>
                  <p className="text-sm text-base-content/70">↗︎ 0.5% from last month</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'reports',
        label: 'Reports',
        content: (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Reports</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="btn btn-outline">Generate Monthly Report</button>
              <button className="btn btn-outline">Generate Quarterly Report</button>
              <button className="btn btn-outline">Generate Annual Report</button>
              <button className="btn btn-outline">Custom Report</button>
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className="w-full max-w-4xl">
        <div className="mb-4 flex items-center gap-4">
          <span className="text-sm font-medium">Current Tab: </span>
          <span className="badge badge-primary">{activeTab}</span>
          <button
            className="btn btn-sm btn-outline"
            onClick={() => setActiveTab('analytics')}
          >
            Go to Analytics
          </button>
        </div>
        <Tabs
          items={dashboardTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="lifted"
          size="lg"
        />
      </div>
    );
  },
};

// Simple Tab component usage
export const SimpleTabs: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Tab List</h3>
        <div className="tabs">
          <Tab active>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bordered Tabs</h3>
        <div className="tabs tabs-bordered">
          <Tab>First</Tab>
          <Tab active>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Boxed Tabs</h3>
        <div className="tabs tabs-boxed">
          <Tab>Home</Tab>
          <Tab active>Profile</Tab>
          <Tab>Settings</Tab>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Lifted Tabs</h3>
        <div className="tabs tabs-lifted">
          <Tab active>Documents</Tab>
          <Tab>Images</Tab>
          <Tab>Videos</Tab>
        </div>
      </div>
    </div>
  ),
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: function Component() {
    const [profileTab, setProfileTab] = useState('personal');

    const profileTabs = [
      {
        id: 'personal',
        label: (
          <div className="flex items-center gap-2">
            <IconUser size={16} />
            Personal Info
          </div>
        ),
        content: (
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input type="text" className="input input-bordered" defaultValue="John" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input type="text" className="input input-bordered" defaultValue="Doe" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" className="input input-bordered" defaultValue="john.doe@example.com" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="tel" className="input input-bordered" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'contact',
        label: (
          <div className="flex items-center gap-2">
            <IconMail size={16} />
            Contact
          </div>
        ),
        content: (
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Contact Information</h2>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea className="textarea textarea-bordered" defaultValue="123 Main St, Anytown, USA 12345" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Emergency Contact</span>
                    </label>
                    <input type="text" className="input input-bordered" defaultValue="Jane Doe" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Emergency Phone</span>
                    </label>
                    <input type="tel" className="input input-bordered" defaultValue="+1 (555) 987-6543" />
                  </div>
                </div>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">Update Contact</button>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'billing',
        label: (
          <div className="flex items-center gap-2">
            <IconCreditCard size={16} />
            Billing
          </div>
        ),
        content: (
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Billing Information</h2>
              <div className="space-y-4">
                <div className="alert alert-info">
                  <IconCreditCard size={20} />
                  <span>Your next billing date is March 15, 2024</span>
                </div>
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Current Plan</div>
                    <div className="stat-value">Pro</div>
                    <div className="stat-desc">$29/month</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Usage</div>
                    <div className="stat-value">76%</div>
                    <div className="stat-desc">of monthly quota</div>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h3 className="card-title">Payment Method</h3>
                    <div className="flex items-center gap-2">
                      <IconCreditCard size={16} />
                      <span>•••• •••• •••• 1234</span>
                      <span className="badge badge-primary">Primary</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-outline">Change Plan</button>
                <button className="btn btn-primary">Update Payment</button>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'security',
        label: (
          <div className="flex items-center gap-2">
            <IconShield size={16} />
            Security
          </div>
        ),
        content: (
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Security Settings</h2>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Two-factor authentication</span>
                    <input type="checkbox" className="toggle toggle-success" defaultChecked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Login email notifications</span>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Security alerts</span>
                    <input type="checkbox" className="toggle toggle-warning" />
                  </label>
                </div>
                <div className="divider"></div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Recent Login Activity</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Chrome on Windows</span>
                      <span className="text-base-content/60">2 hours ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Safari on iPhone</span>
                      <span className="text-base-content/60">1 day ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Firefox on macOS</span>
                      <span className="text-base-content/60">3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-outline">Change Password</button>
                <button className="btn btn-primary">Save Security Settings</button>
              </div>
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className="w-full max-w-4xl">
        <Tabs
          items={profileTabs}
          activeTab={profileTab}
          onTabChange={setProfileTab}
          variant="boxed"
          size="md"
        />
      </div>
    );
  },
};

// Navigation tabs
export const NavigationTabs: Story = {
  render: function Component() {
    const navigationTabs = [
      {
        id: 'overview',
        label: 'Overview',
        content: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="card bg-primary text-primary-content">
                <div className="card-body">
                  <h3 className="card-title">Tasks</h3>
                  <div className="stat-value">24</div>
                  <p>Active tasks</p>
                </div>
              </div>
              <div className="card bg-secondary text-secondary-content">
                <div className="card-body">
                  <h3 className="card-title">Team Members</h3>
                  <div className="stat-value">8</div>
                  <p>People working</p>
                </div>
              </div>
              <div className="card bg-accent text-accent-content">
                <div className="card-body">
                  <h3 className="card-title">Completion</h3>
                  <div className="stat-value">67%</div>
                  <p>Project progress</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'tasks',
        label: 'Tasks',
        content: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Task Management</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Assignee</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Design wireframes</td>
                    <td><span className="badge badge-success">Completed</span></td>
                    <td>Alice Johnson</td>
                    <td>2024-01-15</td>
                  </tr>
                  <tr>
                    <td>Implement authentication</td>
                    <td><span className="badge badge-warning">In Progress</span></td>
                    <td>Bob Smith</td>
                    <td>2024-01-20</td>
                  </tr>
                  <tr>
                    <td>Write documentation</td>
                    <td><span className="badge badge-error">Pending</span></td>
                    <td>Carol Davis</td>
                    <td>2024-01-25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        id: 'team',
        label: 'Team',
        content: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson', 'Eve Brown', 'Frank Miller'].map((name) => (
                <div key={name} className="card bg-base-200">
                  <div className="card-body">
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                          <span>{name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">{name}</h3>
                        <p className="text-sm text-base-content/70">Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: 'settings',
        label: 'Settings',
        content: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Project Settings</h2>
            <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project Name</span>
                </label>
                <input type="text" className="input input-bordered" defaultValue="My Awesome Project" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea className="textarea textarea-bordered" defaultValue="This is an amazing project that will change the world." />
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Public project</span>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Enable notifications</span>
                  <input type="checkbox" className="toggle toggle-secondary" defaultChecked />
                </label>
              </div>
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className="w-full max-w-6xl">
        <Tabs items={navigationTabs} variant="lifted" size="lg" />
      </div>
    );
  },
};