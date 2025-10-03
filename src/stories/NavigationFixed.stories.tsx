import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../components/form/button';
import { Avatar } from '../components/ui/avatar';
import { IconHome, IconUser, IconSettings, IconMenu2 } from '@tabler/icons-react';

// Simple working navigation demo
const SimpleNavigation = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  return (
    <div className="min-h-screen bg-base-100">
      {/* Simple Navbar */}
      <div className="navbar bg-base-200 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IconMenu2 className="w-5 h-5" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Navigation Demo</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <Avatar size="sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=demo" />
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li><a>Profile</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 space-y-8">
        {/* Simple Breadcrumbs */}
        <div className="card bg-base-200 p-6">
          <h2 className="card-title mb-4">Breadcrumbs</h2>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a>
                  <IconHome className="w-4 h-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a>Documents</a>
              </li>
              <li>Add Document</li>
            </ul>
          </div>
        </div>

        {/* Simple Tabs */}
        <div className="card bg-base-200 p-6">
          <h2 className="card-title mb-4">Tabs</h2>
          <div className="tabs tabs-boxed">
            <a className={`tab ${activeTab === 'home' ? 'tab-active' : ''}`} onClick={() => setActiveTab('home')}>
              Home
            </a>
            <a className={`tab ${activeTab === 'profile' ? 'tab-active' : ''}`} onClick={() => setActiveTab('profile')}>
              Profile
            </a>
            <a className={`tab ${activeTab === 'settings' ? 'tab-active' : ''}`} onClick={() => setActiveTab('settings')}>
              Settings
            </a>
          </div>

          {/* Tab Content */}
          <div className="mt-4 p-4 bg-base-100 rounded-lg">
            {activeTab === 'home' && (
              <div>
                <h3 className="font-bold text-lg">Home Content</h3>
                <p>Welcome to the home tab!</p>
              </div>
            )}
            {activeTab === 'profile' && (
              <div>
                <h3 className="font-bold text-lg">Profile Content</h3>
                <p>Your profile information.</p>
              </div>
            )}
            {activeTab === 'settings' && (
              <div>
                <h3 className="font-bold text-lg">Settings Content</h3>
                <p>Application settings.</p>
              </div>
            )}
          </div>
        </div>

        {/* Simple Menu */}
        <div className="card bg-base-200 p-6">
          <h2 className="card-title mb-4">Menu</h2>
          <ul className="menu bg-base-100 w-56 rounded-box">
            <li>
              <a>
                <IconHome className="w-5 h-5" />
                Item 1
              </a>
            </li>
            <li>
              <a>
                <IconUser className="w-5 h-5" />
                Item 2
              </a>
            </li>
            <li>
              <details open>
                <summary>
                  <IconSettings className="w-5 h-5" />
                  Parent
                </summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Simple Steps */}
        <div className="card bg-base-200 p-6">
          <h2 className="card-title mb-4">Steps</h2>
          <ul className="steps">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof SimpleNavigation> = {
  title: 'UI/Navigation Fixed',
  component: SimpleNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Working navigation components showcase with proper DaisyUI classes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllNavigationComponents: Story = {
  render: () => <SimpleNavigation />,
};

export const NavbarOnly: Story = {
  render: () => (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Brand</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button size="sm">Login</Button>
      </div>
    </div>
  ),
};

export const BreadcrumbsOnly: Story = {
  render: () => (
    <div className="p-6">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>
              <IconHome className="w-4 h-4 mr-2" />
              Home
            </a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
    </div>
  ),
};

export const TabsOnly: Story = {
  render: function Component() {
    const [active, setActive] = React.useState('tab1');
    return (
      <div className="p-6">
        <div className="tabs tabs-lifted">
          <a className={`tab ${active === 'tab1' ? 'tab-active' : ''}`} onClick={() => setActive('tab1')}>
            Tab 1
          </a>
          <a className={`tab ${active === 'tab2' ? 'tab-active' : ''}`} onClick={() => setActive('tab2')}>
            Tab 2
          </a>
          <a className={`tab ${active === 'tab3' ? 'tab-active' : ''}`} onClick={() => setActive('tab3')}>
            Tab 3
          </a>
        </div>
      </div>
    );
  },
};

export const MenuOnly: Story = {
  render: () => (
    <div className="p-6">
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li className="menu-title">Navigation</li>
        <li><a><IconHome className="w-5 h-5" />Home</a></li>
        <li><a><IconUser className="w-5 h-5" />Profile</a></li>
        <li><a><IconSettings className="w-5 h-5" />Settings</a></li>
      </ul>
    </div>
  ),
};

export const StepsOnly: Story = {
  render: () => (
    <div className="p-6">
      <ul className="steps">
        <li className="step step-primary">Start</li>
        <li className="step step-primary">Progress</li>
        <li className="step">End</li>
      </ul>
    </div>
  ),
};