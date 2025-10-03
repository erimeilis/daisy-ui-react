import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Navbar, NavbarBrand, NavbarMenu } from '../components/navigation/navbar';
import { Button } from '../components/form/button';
import {
  IconMenu2,
  IconBell,
  IconUser,
  IconSearch,
  IconShoppingCart,
  IconSettings,
  IconLogout,
  IconHeart,
} from '@tabler/icons-react';

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Top navigation bar component with flexible sections for branding, navigation, and actions using DaisyUI navbar classes.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the navbar',
    },
    shadow: {
      control: 'boolean',
      description: 'Add shadow to navbar',
    },
  },
  args: {
    size: 'md',
    shadow: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic navbar
export const BasicNavbar: Story = {
  render: () => (
    <Navbar>
      <div className="navbar-start">
        <NavbarBrand>
          <span className="text-xl font-bold">Brand</span>
        </NavbarBrand>
      </div>

      <div className="navbar-center">
        <NavbarMenu>
          <li><a href="#" className="btn btn-ghost">Home</a></li>
          <li><a href="#" className="btn btn-ghost">About</a></li>
          <li><a href="#" className="btn btn-ghost">Services</a></li>
          <li><a href="#" className="btn btn-ghost">Contact</a></li>
        </NavbarMenu>
      </div>

      <div className="navbar-end">
        <Button size="sm" color="primary">Sign In</Button>
      </div>
    </Navbar>
  ),
};

// Navbar with logo
export const NavbarWithLogo: Story = {
  render: () => (
    <Navbar>
      <div className="navbar-start">
        <NavbarBrand>
          <div className="w-8 h-8 bg-primary rounded-full mr-2"></div>
          <span className="text-xl font-bold">MyApp</span>
        </NavbarBrand>
      </div>

      <div className="navbar-center">
        <NavbarMenu>
          <li><a href="#" className="btn btn-ghost">Dashboard</a></li>
          <li><a href="#" className="btn btn-ghost">Projects</a></li>
          <li><a href="#" className="btn btn-ghost">Team</a></li>
        </NavbarMenu>
      </div>

      <div className="navbar-end">
        <Button size="sm" style="ghost">
          <IconBell className="w-4 h-4" />
        </Button>
        <div className="dropdown dropdown-end">
          <Button size="sm" style="ghost">
            <IconUser className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Navbar>
  ),
};

// Mobile responsive navbar
export const ResponsiveNavbar: Story = {
  render: () => (
    <Navbar>
      <div className="navbar-start">
        <div className="dropdown">
          <Button size="sm" style="ghost" className="lg:hidden">
            <IconMenu2 className="w-5 h-5" />
          </Button>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
        <NavbarBrand>
          <span className="text-xl font-bold">daisyUI</span>
        </NavbarBrand>
      </div>

      <div className="navbar-center hidden lg:flex">
        <NavbarMenu>
          <li><a href="#" className="btn btn-ghost">Homepage</a></li>
          <li><a href="#" className="btn btn-ghost">Portfolio</a></li>
          <li><a href="#" className="btn btn-ghost">About</a></li>
        </NavbarMenu>
      </div>

      <div className="navbar-end">
        <Button size="sm">Get started</Button>
      </div>
    </Navbar>
  ),
};

// E-commerce navbar
export const EcommerceNavbar: Story = {
  render: () => (
    <Navbar>
      <div className="navbar-start">
        <NavbarBrand>
          <span className="text-xl font-bold text-primary">ShopUI</span>
        </NavbarBrand>
      </div>

      <div className="navbar-center flex-1 max-w-md">
        <div className="form-control w-full">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered w-full"
            />
            <Button size="sm" color="primary">
              <IconSearch className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <Button size="sm" style="ghost">
          <IconHeart className="w-5 h-5" />
          <span className="badge badge-sm badge-primary">2</span>
        </Button>
        <Button size="sm" style="ghost">
          <IconShoppingCart className="w-5 h-5" />
          <span className="badge badge-sm badge-secondary">3</span>
        </Button>
        <Button size="sm" color="primary">Sign In</Button>
      </div>
    </Navbar>
  ),
};

// Dashboard navbar
export const DashboardNavbar: Story = {
  render: () => (
    <Navbar className="bg-base-200">
      <div className="navbar-start">
        <Button size="sm" style="ghost">
          <IconMenu2 className="w-5 h-5" />
        </Button>
        <NavbarBrand>
          <span className="text-lg font-semibold ml-2">Admin Dashboard</span>
        </NavbarBrand>
      </div>

      <div className="navbar-center">
        <div className="breadcrumbs text-sm">
          <ul>
            <li><a>Home</a></li>
            <li><a>Dashboard</a></li>
            <li>Analytics</li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <Button size="sm" style="ghost">
          <IconBell className="w-4 h-4" />
          <span className="badge badge-xs badge-error"></span>
        </Button>
        <div className="dropdown dropdown-end">
          <Button size="sm" style="ghost">
            <div className="avatar">
              <div className="w-6 rounded-full bg-primary flex items-center justify-center">
                <IconUser className="w-4 h-4 text-primary-content" />
              </div>
            </div>
          </Button>
          <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a><IconUser className="w-4 h-4" />Profile</a></li>
            <li><a><IconSettings className="w-4 h-4" />Settings</a></li>
            <li><a><IconLogout className="w-4 h-4" />Logout</a></li>
          </ul>
        </div>
      </div>
    </Navbar>
  ),
};

// Different sizes
export const NavbarSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Small Navbar</h3>
        <Navbar size="sm">
          <div className="navbar-start">
            <NavbarBrand>
              <span className="text-lg font-bold">Small</span>
            </NavbarBrand>
          </div>
          <div className="navbar-end">
            <Button size="xs">Sign In</Button>
          </div>
        </Navbar>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Medium Navbar (Default)</h3>
        <Navbar size="md">
          <div className="navbar-start">
            <NavbarBrand>
              <span className="text-xl font-bold">Medium</span>
            </NavbarBrand>
          </div>
          <div className="navbar-end">
            <Button size="sm">Sign In</Button>
          </div>
        </Navbar>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Large Navbar</h3>
        <Navbar size="lg">
          <div className="navbar-start">
            <NavbarBrand>
              <span className="text-2xl font-bold">Large</span>
            </NavbarBrand>
          </div>
          <div className="navbar-end">
            <Button size="md">Sign In</Button>
          </div>
        </Navbar>
      </div>
    </div>
  ),
};

// Navbar with dropdown menu
export const NavbarWithDropdown: Story = {
  render: () => (
    <Navbar>
      <div className="navbar-start">
        <NavbarBrand>
          <span className="text-xl font-bold">Brand</span>
        </NavbarBrand>
      </div>

      <div className="navbar-center">
        <NavbarMenu>
          <li><a href="#" className="btn btn-ghost">Home</a></li>
          <li>
            <div className="dropdown">
              <Button style="ghost">
                Products
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="m7 10 5 5 5-5z"/>
                </svg>
              </Button>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Web Design</a></li>
                <li><a>Mobile Apps</a></li>
                <li><a>Consulting</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#" className="btn btn-ghost">About</a></li>
          <li><a href="#" className="btn btn-ghost">Contact</a></li>
        </NavbarMenu>
      </div>

      <div className="navbar-end">
        <Button size="sm" color="primary">Get Started</Button>
      </div>
    </Navbar>
  ),
};

// Fixed navbar
export const FixedNavbar: Story = {
  render: () => (
    <div className="min-h-screen">
      <div className="navbar bg-base-100 shadow-lg fixed top-0 z-50">
        <div className="navbar-start">
          <NavbarBrand>
            <span className="text-xl font-bold">Fixed Nav</span>
          </NavbarBrand>
        </div>

        <div className="navbar-center">
          <NavbarMenu>
            <li><a href="#" className="btn btn-ghost">Home</a></li>
            <li><a href="#" className="btn btn-ghost">Features</a></li>
            <li><a href="#" className="btn btn-ghost">Pricing</a></li>
          </NavbarMenu>
        </div>

        <div className="navbar-end">
          <Button size="sm" color="primary">Sign Up</Button>
        </div>
      </div>

      <div className="pt-16 p-8">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Fixed Navbar</h1>
              <p className="py-6">This navbar stays fixed at the top when scrolling.</p>
              <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <p key={i} className="text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};