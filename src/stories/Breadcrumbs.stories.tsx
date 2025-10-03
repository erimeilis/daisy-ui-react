import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumbs, SimpleBreadcrumbs, BreadcrumbItem } from '../components/navigation/breadcrumbs';
import { IconHome, IconFolder, IconFile } from '@tabler/icons-react';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Breadcrumb navigation component showing the current page location using DaisyUI breadcrumbs classes.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of breadcrumb items',
    },
    separator: {
      control: 'text',
      description: 'Custom separator between items',
    },
  },
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic breadcrumbs
export const BasicBreadcrumbs: Story = {
  render: () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Web App', href: '/projects/web-app' },
      { label: 'Dashboard', current: true },
    ];

    return <Breadcrumbs items={items} />;
  },
};

// Breadcrumbs with icons
export const BreadcrumbsWithIcons: Story = {
  render: () => {
    const items = [
      { label: 'Home', href: '/', icon: IconHome },
      { label: 'Documents', href: '/documents', icon: IconFolder },
      { label: 'Reports', href: '/documents/reports', icon: IconFolder },
      { label: 'Annual Report 2024', current: true, icon: IconFile },
    ];

    return <Breadcrumbs items={items} />;
  },
};

// Different sizes
export const BreadcrumbsSizes: Story = {
  render: () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Product', current: true },
    ];

    return (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Extra Small</h3>
          <Breadcrumbs size="xs" items={items} />
        </div>

        <div>
          <h3 className="font-semibold mb-2">Small</h3>
          <Breadcrumbs size="sm" items={items} />
        </div>

        <div>
          <h3 className="font-semibold mb-2">Medium</h3>
          <Breadcrumbs size="md" items={items} />
        </div>

        <div>
          <h3 className="font-semibold mb-2">Large</h3>
          <Breadcrumbs size="lg" items={items} />
        </div>
      </div>
    );
  },
};

// Simple breadcrumbs
export const SimpleBreadcrumbsStory: Story = {
  render: () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library' },
      { label: 'Books', href: '/library/books' },
      { label: 'JavaScript Guide', active: true },
    ];

    return <SimpleBreadcrumbs items={items} />;
  },
};

// E-commerce breadcrumbs
export const EcommerceBreadcrumbs: Story = {
  render: () => {
    const items = [
      { label: 'Home', href: '/', icon: IconHome },
      { label: 'Electronics', href: '/electronics' },
      { label: 'Computers', href: '/electronics/computers' },
      { label: 'Laptops', href: '/electronics/computers/laptops' },
      { label: 'MacBook Pro 14"', current: true },
    ];

    return <Breadcrumbs items={items} />;
  },
};

// Dashboard breadcrumbs
export const DashboardBreadcrumbs: Story = {
  render: () => {
    const items = [
      { label: 'Dashboard', href: '/dashboard', icon: IconHome },
      { label: 'User Management', href: '/dashboard/users' },
      { label: 'Roles & Permissions', href: '/dashboard/users/roles' },
      { label: 'Edit Role', current: true },
    ];

    return (
      <div className="p-4 bg-base-200 rounded-lg">
        <Breadcrumbs items={items} />
      </div>
    );
  },
};

// Long breadcrumb path
export const LongBreadcrumbs: Story = {
  render: () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Company', href: '/company' },
      { label: 'Departments', href: '/company/departments' },
      { label: 'Engineering', href: '/company/departments/engineering' },
      { label: 'Teams', href: '/company/departments/engineering/teams' },
      { label: 'Frontend', href: '/company/departments/engineering/teams/frontend' },
      { label: 'Projects', href: '/company/departments/engineering/teams/frontend/projects' },
      { label: 'React Component Library', current: true },
    ];

    return (
      <div className="max-w-2xl">
        <Breadcrumbs items={items} />
      </div>
    );
  },
};

// Simple breadcrumbs with manual control
export const SimpleBreadcrumbsWithManualControl: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Using SimpleBreadcrumbs with children</h3>
        <SimpleBreadcrumbs>
          <BreadcrumbItem href="/" icon={IconHome}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="/projects" icon={IconFolder}>
            Projects
          </BreadcrumbItem>
          <BreadcrumbItem href="/projects/web-app">
            Web App
          </BreadcrumbItem>
          <BreadcrumbItem current>
            Dashboard
          </BreadcrumbItem>
        </SimpleBreadcrumbs>
      </div>
    </div>
  ),
};

// Interactive breadcrumbs
export const InteractiveBreadcrumbs: Story = {
  render: function InteractiveBreadcrumbs() {
    const [currentPath, setCurrentPath] = React.useState('/dashboard/users/edit');

    const getItems = (currentPath: string) => {
      const items = [
        { label: 'Dashboard', href: '/dashboard', icon: IconHome },
        { label: 'Users', href: '/dashboard/users' },
        { label: 'Edit User', href: '/dashboard/users/edit' },
      ];

      return items.map(item => ({
        ...item,
        current: item.href === currentPath,
        href: item.href === currentPath ? undefined : item.href,
      }));
    };

    return (
      <div className="space-y-4">
        <Breadcrumbs items={getItems(currentPath)} />

        <div className="text-sm text-gray-600">
          Current path: {currentPath}
        </div>

        <div className="flex gap-2">
          <button
            className="btn btn-sm"
            onClick={() => setCurrentPath('/dashboard')}
          >
            Go to Dashboard
          </button>
          <button
            className="btn btn-sm"
            onClick={() => setCurrentPath('/dashboard/users')}
          >
            Go to Users
          </button>
          <button
            className="btn btn-sm"
            onClick={() => setCurrentPath('/dashboard/users/edit')}
          >
            Go to Edit
          </button>
        </div>
      </div>
    );
  },
};