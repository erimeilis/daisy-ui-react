import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Menu,
  MenuItem,
  MenuTitle,
  MenuDetails,
  NavigationMenu,
  HorizontalMenu,
  SidebarMenu,
  BreadcrumbMenu,
} from '../components/navigation/menu';
import {
  IconHome,
  IconUser,
  IconSettings,
  IconMail,
  IconBell,
  IconHelp,
  IconFolder,
  IconFile,
  IconChartBar,
  IconLock,
} from '@tabler/icons-react';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Versatile menu component with support for vertical, horizontal, sidebar, and breadcrumb layouts using DaisyUI menu classes.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of menu items',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Menu orientation',
    },
    rounded: {
      control: 'boolean',
      description: 'Rounded menu corners',
    },
  },
  args: {
    size: 'md',
    orientation: 'vertical',
    rounded: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic vertical menu
export const BasicMenu: Story = {
  render: () => (
    <div className="w-64">
      <Menu>
        <MenuItem icon={IconHome} active>
          Home
        </MenuItem>
        <MenuItem icon={IconUser}>
          Profile
        </MenuItem>
        <MenuItem icon={IconSettings}>
          Settings
        </MenuItem>
        <MenuItem icon={IconMail}>
          Messages
        </MenuItem>
        <MenuItem disabled>
          Disabled Item
        </MenuItem>
      </Menu>
    </div>
  ),
};

// Menu with titles and sections
export const MenuWithSections: Story = {
  render: () => (
    <div className="w-64">
      <Menu>
        <MenuTitle>Main Navigation</MenuTitle>
        <MenuItem icon={IconHome} active>
          Dashboard
        </MenuItem>
        <MenuItem icon={IconChartBar}>
          Analytics
        </MenuItem>
        <MenuItem icon={IconUser}>
          Users
        </MenuItem>

        <MenuTitle>Account</MenuTitle>
        <MenuItem icon={IconSettings}>
          Settings
        </MenuItem>
        <MenuItem icon={IconLock}>
          Security
        </MenuItem>
        <MenuItem icon={IconHelp}>
          Help & Support
        </MenuItem>
      </Menu>
    </div>
  ),
};

// Menu with collapsible sections
export const MenuWithCollapsible: Story = {
  render: () => (
    <div className="w-64">
      <Menu>
        <MenuItem icon={IconHome} active>
          Dashboard
        </MenuItem>

        <MenuDetails summary="Projects" icon={IconFolder}>
          <MenuItem>Project Alpha</MenuItem>
          <MenuItem active>Project Beta</MenuItem>
          <MenuItem>Project Gamma</MenuItem>
        </MenuDetails>

        <MenuDetails summary="Documents" icon={IconFile}>
          <MenuItem>Reports</MenuItem>
          <MenuItem>Presentations</MenuItem>
          <MenuItem>Spreadsheets</MenuItem>
        </MenuDetails>

        <MenuItem icon={IconSettings}>
          Settings
        </MenuItem>
      </Menu>
    </div>
  ),
};

// Different sizes
export const MenuSizes: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="w-48">
        <h3 className="font-semibold mb-2 text-center">Extra Small</h3>
        <Menu size="xs">
          <MenuItem icon={IconHome}>Home</MenuItem>
          <MenuItem icon={IconUser}>Profile</MenuItem>
          <MenuItem icon={IconSettings}>Settings</MenuItem>
        </Menu>
      </div>

      <div className="w-52">
        <h3 className="font-semibold mb-2 text-center">Small</h3>
        <Menu size="sm">
          <MenuItem icon={IconHome}>Home</MenuItem>
          <MenuItem icon={IconUser}>Profile</MenuItem>
          <MenuItem icon={IconSettings}>Settings</MenuItem>
        </Menu>
      </div>

      <div className="w-56">
        <h3 className="font-semibold mb-2 text-center">Medium (Default)</h3>
        <Menu size="md">
          <MenuItem icon={IconHome}>Home</MenuItem>
          <MenuItem icon={IconUser}>Profile</MenuItem>
          <MenuItem icon={IconSettings}>Settings</MenuItem>
        </Menu>
      </div>

      <div className="w-60">
        <h3 className="font-semibold mb-2 text-center">Large</h3>
        <Menu size="lg">
          <MenuItem icon={IconHome}>Home</MenuItem>
          <MenuItem icon={IconUser}>Profile</MenuItem>
          <MenuItem icon={IconSettings}>Settings</MenuItem>
        </Menu>
      </div>
    </div>
  ),
};

// Horizontal menu
export const HorizontalMenuStory: Story = {
  render: () => (
    <div className="w-full">
      <HorizontalMenu>
        <MenuItem icon={IconHome} active>
          Home
        </MenuItem>
        <MenuItem icon={IconChartBar}>
          Analytics
        </MenuItem>
        <MenuItem icon={IconUser}>
          Users
        </MenuItem>
        <MenuItem icon={IconSettings}>
          Settings
        </MenuItem>
        <MenuItem icon={IconHelp}>
          Help
        </MenuItem>
      </HorizontalMenu>
    </div>
  ),
};

// Sidebar menu example
export const SidebarMenuStory: Story = {
  render: () => (
    <div className="w-72 h-96 bg-base-200 rounded-lg overflow-hidden">
      <SidebarMenu>
        <MenuTitle>Dashboard</MenuTitle>
        <MenuItem icon={IconHome} active>
          Overview
        </MenuItem>
        <MenuItem icon={IconChartBar}>
          Analytics
        </MenuItem>
        <MenuItem icon={IconBell}>
          Notifications
        </MenuItem>

        <MenuTitle>Management</MenuTitle>
        <MenuItem icon={IconUser}>
          Users
        </MenuItem>
        <MenuItem icon={IconFolder}>
          Projects
        </MenuItem>
        <MenuItem icon={IconFile}>
          Documents
        </MenuItem>

        <MenuTitle>Settings</MenuTitle>
        <MenuItem icon={IconSettings}>
          Preferences
        </MenuItem>
        <MenuItem icon={IconLock}>
          Security
        </MenuItem>
        <MenuItem icon={IconHelp}>
          Support
        </MenuItem>
      </SidebarMenu>
    </div>
  ),
};

// Breadcrumb menu
export const BreadcrumbMenuStory: Story = {
  render: () => (
    <div className="w-full">
      <BreadcrumbMenu>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/projects">Projects</MenuItem>
        <MenuItem href="/projects/alpha">Project Alpha</MenuItem>
        <MenuItem active>Dashboard</MenuItem>
      </BreadcrumbMenu>
    </div>
  ),
};

// Navigation menu with data
export const NavigationMenuStory: Story = {
  render: function Component() {
    const navItems = [
      {
        label: 'Dashboard',
        href: '/dashboard',
        icon: IconHome,
        active: true,
      },
      {
        label: 'Projects',
        icon: IconFolder,
        children: [
          { label: 'All Projects', href: '/projects' },
          { label: 'My Projects', href: '/projects/mine' },
          { label: 'Shared', href: '/projects/shared' },
        ],
      },
      {
        label: 'Users',
        href: '/users',
        icon: IconUser,
      },
      {
        label: 'Settings',
        href: '/settings',
        icon: IconSettings,
      },
    ];

    return (
      <div className="w-64">
        <NavigationMenu items={navItems} />
      </div>
    );
  },
};

// Interactive menu with state
export const InteractiveMenu: Story = {
  render: function Component() {
    const [activeItem, setActiveItem] = React.useState('home');

    return (
      <div className="w-64">
        <Menu>
          <MenuTitle>Navigation</MenuTitle>
          <MenuItem
            icon={IconHome}
            active={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={IconChartBar}
            active={activeItem === 'analytics'}
            onClick={() => setActiveItem('analytics')}
          >
            Analytics
          </MenuItem>
          <MenuItem
            icon={IconUser}
            active={activeItem === 'users'}
            onClick={() => setActiveItem('users')}
          >
            Users
          </MenuItem>
          <MenuItem
            icon={IconSettings}
            active={activeItem === 'settings'}
            onClick={() => setActiveItem('settings')}
          >
            Settings
          </MenuItem>
        </Menu>

        <div className="mt-4 p-3 bg-base-200 rounded">
          <p className="text-sm">Active: {activeItem}</p>
        </div>
      </div>
    );
  },
};

// Mobile responsive menu
export const ResponsiveMenu: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Desktop (Vertical)</h3>
        <div className="hidden md:block w-64">
          <Menu>
            <MenuItem icon={IconHome} active>Dashboard</MenuItem>
            <MenuItem icon={IconChartBar}>Analytics</MenuItem>
            <MenuItem icon={IconUser}>Users</MenuItem>
            <MenuItem icon={IconSettings}>Settings</MenuItem>
          </Menu>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Mobile (Horizontal)</h3>
        <div className="md:hidden w-full">
          <HorizontalMenu size="sm">
            <MenuItem icon={IconHome} active>
              <span className="sr-only">Dashboard</span>
            </MenuItem>
            <MenuItem icon={IconChartBar}>
              <span className="sr-only">Analytics</span>
            </MenuItem>
            <MenuItem icon={IconUser}>
              <span className="sr-only">Users</span>
            </MenuItem>
            <MenuItem icon={IconSettings}>
              <span className="sr-only">Settings</span>
            </MenuItem>
          </HorizontalMenu>
        </div>
      </div>
    </div>
  ),
};