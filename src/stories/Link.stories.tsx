import type { Meta, StoryObj } from '@storybook/react';
import {
  Link,
  ExternalLink,
  ButtonLink,
  NavLink,
  BreadcrumbLink
} from '../components/ui/link';
import { useState } from 'react';
import {
  IconHome,
  IconUser,
  IconSettings,
  IconHelp,
  IconChevronRight
} from '@tabler/icons-react';

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile link component that restores default link styling with various color variants. Includes specialized variants for external links, button-like behavior, navigation, and breadcrumbs.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the link',
    },
    hover: {
      control: 'select',
      options: ['default', 'hover'],
      description: 'The hover variant of the link',
    },
    external: {
      control: 'boolean',
      description: 'Whether the link is external',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
  },
  args: {
    color: 'default',
    hover: 'default',
    external: false,
    disabled: false,
    children: 'Link text',
    href: '#',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    children: 'Default link',
    href: '#',
  },
};

export const WithHover: Story = {
  args: {
    children: 'Link with hover effect',
    href: '#',
    hover: 'hover',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled link',
    href: '#',
    disabled: true,
  },
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Link href="#" color="default">Default</Link>
        <Link href="#" color="neutral">Neutral</Link>
        <Link href="#" color="primary">Primary</Link>
        <Link href="#" color="secondary">Secondary</Link>
        <Link href="#" color="accent">Accent</Link>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="#" color="info">Info</Link>
        <Link href="#" color="success">Success</Link>
        <Link href="#" color="warning">Warning</Link>
        <Link href="#" color="error">Error</Link>
      </div>
    </div>
  ),
};

// Hover effects
export const HoverEffects: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Default (no hover effect)</h4>
        <div className="flex flex-wrap gap-4">
          <Link href="#" color="primary" hover="default">Primary Link</Link>
          <Link href="#" color="secondary" hover="default">Secondary Link</Link>
          <Link href="#" color="accent" hover="default">Accent Link</Link>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">With hover effect</h4>
        <div className="flex flex-wrap gap-4">
          <Link href="#" color="primary" hover="hover">Primary Link</Link>
          <Link href="#" color="secondary" hover="hover">Secondary Link</Link>
          <Link href="#" color="accent" hover="hover">Accent Link</Link>
        </div>
      </div>
    </div>
  ),
};

// External links
export const ExternalLinks: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Basic External Links</h4>
        <div className="flex flex-wrap gap-4">
          <ExternalLink href="https://example.com" color="primary">
            Visit Example.com
          </ExternalLink>
          <ExternalLink href="https://github.com" color="accent">
            GitHub
          </ExternalLink>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">With External Icons</h4>
        <div className="flex flex-wrap gap-4">
          <ExternalLink href="https://example.com" color="primary" showIcon>
            Visit Example.com
          </ExternalLink>
          <ExternalLink href="https://github.com" color="accent" showIcon>
            GitHub Repository
          </ExternalLink>
          <ExternalLink href="https://docs.example.com" color="info" showIcon>
            Documentation
          </ExternalLink>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Custom Icon Styling</h4>
        <div className="flex flex-wrap gap-4">
          <ExternalLink
            href="https://example.com"
            color="success"
            showIcon
            iconClassName="w-4 h-4"
          >
            Large Icon
          </ExternalLink>
          <ExternalLink
            href="https://example.com"
            color="warning"
            showIcon
            iconClassName="w-2 h-2"
          >
            Small Icon
          </ExternalLink>
        </div>
      </div>
    </div>
  ),
};

// Button links
export const ButtonLinks: Story = {
  render: function Component() {
    const [clickCount, setClickCount] = useState(0);
    const [message, setMessage] = useState('');

    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Button-like Links</h4>
          <div className="flex flex-wrap gap-4">
            <ButtonLink
              color="primary"
              onClick={() => {
                setClickCount(prev => prev + 1);
                setMessage('Primary button clicked!');
              }}
            >
              Primary Action
            </ButtonLink>
            <ButtonLink
              color="secondary"
              onClick={() => setMessage('Secondary action triggered')}
            >
              Secondary Action
            </ButtonLink>
            <ButtonLink
              color="accent"
              onClick={() => setMessage('Accent action performed')}
            >
              Accent Action
            </ButtonLink>
            <ButtonLink
              color="error"
              disabled
            >
              Disabled Action
            </ButtonLink>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Interactive Demo</h4>
          <div className="card bg-base-100 shadow-lg p-4">
            <p className="mb-2">Click count: {clickCount}</p>
            {message && (
              <div className="alert alert-info mb-2">
                <span>{message}</span>
              </div>
            )}
            <div className="flex gap-2">
              <ButtonLink
                color="success"
                onClick={() => setMessage('')}
              >
                Clear Message
              </ButtonLink>
              <ButtonLink
                color="warning"
                onClick={() => setClickCount(0)}
              >
                Reset Count
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Navigation links
export const NavigationLinks: Story = {
  render: function Component() {
    const [activeNav, setActiveNav] = useState('home');

    const navItems = [
      { id: 'home', label: 'Home', icon: IconHome },
      { id: 'profile', label: 'Profile', icon: IconUser },
      { id: 'settings', label: 'Settings', icon: IconSettings },
      { id: 'help', label: 'Help', icon: IconHelp },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Navigation Menu</h4>
          <nav className="bg-base-200 rounded-lg p-4">
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <NavLink
                    href={`#${item.id}`}
                    active={activeNav === item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveNav(item.id);
                    }}
                    className="flex items-center gap-2"
                  >
                    <item.icon size={16} />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Horizontal Navigation</h4>
          <nav className="bg-base-200 rounded-lg p-2">
            <div className="flex gap-1">
              {navItems.map(item => (
                <NavLink
                  key={item.id}
                  href={`#${item.id}`}
                  active={activeNav === item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav(item.id);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded"
                >
                  <item.icon size={16} />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">With Disabled Item</h4>
          <nav className="bg-base-200 rounded-lg p-4">
            <ul className="space-y-2">
              <li>
                <NavLink href="#available" className="flex items-center gap-2">
                  <IconHome size={16} />
                  Available Link
                </NavLink>
              </li>
              <li>
                <NavLink href="#disabled" disabled className="flex items-center gap-2">
                  <IconSettings size={16} />
                  Disabled Link
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  },
};

// Breadcrumb links
export const BreadcrumbLinks: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-2">Basic Breadcrumbs</h4>
        <nav className="breadcrumbs text-sm">
          <ul>
            <li>
              <BreadcrumbLink href="/">
                <IconHome size={16} />
                Home
              </BreadcrumbLink>
            </li>
            <li>
              <BreadcrumbLink href="/products">
                Products
              </BreadcrumbLink>
            </li>
            <li>
              <BreadcrumbLink href="/products/electronics">
                Electronics
              </BreadcrumbLink>
            </li>
            <li>
              <BreadcrumbLink current>
                Laptop
              </BreadcrumbLink>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Custom Separator</h4>
        <nav className="flex items-center space-x-2 text-sm">
          <BreadcrumbLink href="/" className="flex items-center gap-1">
            <IconHome size={16} />
            Dashboard
          </BreadcrumbLink>
          <IconChevronRight size={14} className="text-base-content/50" />
          <BreadcrumbLink href="/users">
            Users
          </BreadcrumbLink>
          <IconChevronRight size={14} className="text-base-content/50" />
          <BreadcrumbLink href="/users/profile">
            Profile
          </BreadcrumbLink>
          <IconChevronRight size={14} className="text-base-content/50" />
          <BreadcrumbLink current>
            Edit Profile
          </BreadcrumbLink>
        </nav>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">With Different Colors</h4>
        <nav className="breadcrumbs text-sm">
          <ul>
            <li>
              <BreadcrumbLink href="/" color="primary">
                <IconHome size={16} />
                Home
              </BreadcrumbLink>
            </li>
            <li>
              <BreadcrumbLink href="/blog" color="secondary">
                Blog
              </BreadcrumbLink>
            </li>
            <li>
              <BreadcrumbLink href="/blog/category" color="accent">
                Category
              </BreadcrumbLink>
            </li>
            <li>
              <BreadcrumbLink current>
                Article Title
              </BreadcrumbLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  ),
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      {/* Article with links */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Article with Various Links</h2>
          <p className="text-base-content/80">
            This is an example article that demonstrates different types of links in context.
            You can learn more about this topic in our{' '}
            <Link href="/docs" color="primary" hover="hover">
              documentation
            </Link>
            {' '}or visit the{' '}
            <ExternalLink href="https://github.com/example" color="accent" showIcon>
              GitHub repository
            </ExternalLink>
            {' '}for source code.
          </p>
          <p className="text-base-content/80">
            For questions, please{' '}
            <ButtonLink
              color="info"
              onClick={() => alert('Contact form would open here')}
            >
              contact our support team
            </ButtonLink>
            {' '}or check out our{' '}
            <Link href="/faq" color="success" hover="hover">
              frequently asked questions
            </Link>
            .
          </p>
          <div className="card-actions justify-end">
            <Link href="/share" color="primary" className="btn btn-outline btn-sm">
              Share Article
            </Link>
            <ExternalLink
              href="https://twitter.com/share"
              color="info"
              className="btn btn-outline btn-sm"
              showIcon
            >
              Tweet This
            </ExternalLink>
          </div>
        </div>
      </div>

      {/* Navigation footer */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Website Footer Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" color="neutral" hover="hover">About Us</Link></li>
                <li><Link href="/careers" color="neutral" hover="hover">Careers</Link></li>
                <li><Link href="/contact" color="neutral" hover="hover">Contact</Link></li>
                <li><Link href="/press" color="neutral" hover="hover">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/pricing" color="neutral" hover="hover">Pricing</Link></li>
                <li><Link href="/features" color="neutral" hover="hover">Features</Link></li>
                <li><Link href="/integrations" color="neutral" hover="hover">Integrations</Link></li>
                <li><Link href="/api" color="neutral" hover="hover">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/docs" color="neutral" hover="hover">Documentation</Link></li>
                <li><Link href="/blog" color="neutral" hover="hover">Blog</Link></li>
                <li><Link href="/help" color="neutral" hover="hover">Help Center</Link></li>
                <li><Link href="/community" color="neutral" hover="hover">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" color="neutral" hover="hover">Privacy Policy</Link></li>
                <li><Link href="/terms" color="neutral" hover="hover">Terms of Service</Link></li>
                <li><Link href="/cookies" color="neutral" hover="hover">Cookie Policy</Link></li>
                <li><Link href="/gdpr" color="neutral" hover="hover">GDPR</Link></li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <ExternalLink href="https://twitter.com/company" color="info" showIcon>
                Twitter
              </ExternalLink>
              <ExternalLink href="https://github.com/company" color="neutral" showIcon>
                GitHub
              </ExternalLink>
              <ExternalLink href="https://linkedin.com/company" color="primary" showIcon>
                LinkedIn
              </ExternalLink>
            </div>
            <p className="text-sm text-base-content/70">
              © 2024 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Product page with breadcrumbs and actions */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <nav className="breadcrumbs text-sm mb-4">
            <ul>
              <li>
                <BreadcrumbLink href="/">
                  <IconHome size={16} />
                  Home
                </BreadcrumbLink>
              </li>
              <li>
                <BreadcrumbLink href="/products">
                  Products
                </BreadcrumbLink>
              </li>
              <li>
                <BreadcrumbLink href="/products/electronics">
                  Electronics
                </BreadcrumbLink>
              </li>
              <li>
                <BreadcrumbLink current>
                  Wireless Headphones
                </BreadcrumbLink>
              </li>
            </ul>
          </nav>

          <h2 className="card-title">Premium Wireless Headphones</h2>
          <p className="text-base-content/80 mb-4">
            High-quality wireless headphones with noise cancellation and premium sound quality.
            Check out our{' '}
            <Link href="/reviews" color="primary" hover="hover">
              customer reviews
            </Link>
            {' '}or view the{' '}
            <ExternalLink href="https://manufacturer.com/specs" color="info" showIcon>
              detailed specifications
            </ExternalLink>
            .
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <ButtonLink
              color="primary"
              onClick={() => alert('Added to cart!')}
              className="btn btn-primary"
            >
              Add to Cart
            </ButtonLink>
            <ButtonLink
              color="secondary"
              onClick={() => alert('Added to wishlist!')}
              className="btn btn-outline"
            >
              Add to Wishlist
            </ButtonLink>
            <Link href="/compare" color="accent" className="btn btn-ghost">
              Compare Products
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href="/shipping" color="info" hover="hover" className="text-sm">
              Shipping Information
            </Link>
            <Link href="/returns" color="warning" hover="hover" className="text-sm">
              Return Policy
            </Link>
            <Link href="/warranty" color="success" hover="hover" className="text-sm">
              Warranty Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Link states
export const LinkStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-2">Normal Links</h4>
        <div className="flex flex-wrap gap-4">
          <Link href="#" color="primary">Normal Link</Link>
          <Link href="#" color="secondary">Secondary Link</Link>
          <Link href="#" color="accent">Accent Link</Link>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Disabled Links</h4>
        <div className="flex flex-wrap gap-4">
          <Link href="#" color="primary" disabled>Disabled Primary</Link>
          <Link href="#" color="secondary" disabled>Disabled Secondary</Link>
          <Link href="#" color="accent" disabled>Disabled Accent</Link>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Mix of States</h4>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-4">
            <Link href="#" color="success">Available Link</Link>
            <Link href="#" color="warning" disabled>Temporarily Disabled</Link>
            <Link href="#" color="error" disabled>Permanently Disabled</Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <ExternalLink href="https://example.com" color="info">External Available</ExternalLink>
            <ExternalLink href="https://example.com" color="neutral" disabled>External Disabled</ExternalLink>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink color="primary" onClick={() => alert('Clicked!')}>
              Active Button
            </ButtonLink>
            <ButtonLink color="secondary" disabled>
              Disabled Button
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  ),
};