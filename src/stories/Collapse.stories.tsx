import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Collapse } from '../components/ui/collapse';
import { Button } from '../components/form/button';
import { Card, CardBody } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { IconChevronDown, IconChevronUp, IconEye, IconEyeOff, IconCode, IconList, IconPhoto } from '@tabler/icons-react';

const meta: Meta<typeof Collapse> = {
  title: 'UI/Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Collapse component for showing and hiding content with smooth animations. Perfect for expandable sections, details panels, and content organization.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the collapse is open',
    },
    title: {
      control: 'text',
      description: 'The title/label for the collapse trigger',
    },
  },
  args: {
    open: false,
    title: 'Click to expand',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic collapse
export const BasicCollapse: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div className="w-96">
        <Collapse
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          title="Basic Collapse Example"
        >
          <div className="p-4 bg-base-200 rounded-lg">
            <p>
              This is the collapsible content. You can put any content here including text, images,
              forms, or other components. The collapse animation is smooth and provides a great
              user experience.
            </p>
          </div>
        </Collapse>
      </div>
    );
  },
};

// Multiple collapse sections
export const MultipleSections: Story = {
  render: function Component() {
    const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
      section1: false,
      section2: false,
      section3: false,
    });

    const toggleSection = (section: string) => {
      setOpenSections(prev => ({
        ...prev,
        [section]: !prev[section],
      }));
    };

    return (
      <div className="w-96 space-y-4">
        <Collapse
          open={openSections.section1}
          onToggle={() => toggleSection('section1')}
          title="Project Overview"
        >
          <div className="p-4 bg-base-200 rounded-lg">
            <h4 className="font-semibold mb-2">React Component Library</h4>
            <p className="text-sm">
              A comprehensive collection of reusable React components built with TypeScript
              and styled with TailwindCSS and DaisyUI.
            </p>
            <div className="flex gap-2 mt-3">
              <Badge variant="primary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="accent">TailwindCSS</Badge>
            </div>
          </div>
        </Collapse>

        <Collapse
          open={openSections.section2}
          onToggle={() => toggleSection('section2')}
          title="Technical Requirements"
        >
          <div className="p-4 bg-base-200 rounded-lg">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Node.js 18+ and npm 8+</li>
              <li>React 18+ with TypeScript</li>
              <li>TailwindCSS 3.4+ for styling</li>
              <li>DaisyUI 5.0+ for component classes</li>
              <li>Storybook 8.6+ for documentation</li>
            </ul>
          </div>
        </Collapse>

        <Collapse
          open={openSections.section3}
          onToggle={() => toggleSection('section3')}
          title="Getting Started"
        >
          <div className="p-4 bg-base-200 rounded-lg">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">1. Installation</p>
                <code className="text-xs bg-base-300 px-2 py-1 rounded">npm install @company/ui-components</code>
              </div>
              <div>
                <p className="text-sm font-medium">2. Import components</p>
                <code className="text-xs bg-base-300 px-2 py-1 rounded">import {`{ Button, Card }`} from '@company/ui-components'</code>
              </div>
              <div>
                <p className="text-sm font-medium">3. Use in your app</p>
                <code className="text-xs bg-base-300 px-2 py-1 rounded">&lt;Button color="primary"&gt;Click me&lt;/Button&gt;</code>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    );
  },
};

// Custom triggers
export const CustomTriggers: Story = {
  render: function Component() {
    const [showCode, setShowCode] = React.useState(false);
    const [showDetails, setShowDetails] = React.useState(false);
    const [showGallery, setShowGallery] = React.useState(false);

    return (
      <div className="w-96 space-y-6">
        {/* Button trigger */}
        <div>
          <Button
            onClick={() => setShowCode(!showCode)}
            style="outline"
            className="mb-3"
          >
            <IconCode className="w-4 h-4 mr-2" />
            {showCode ? 'Hide' : 'Show'} Code Example
          </Button>
          <Collapse open={showCode}>
            <Card>
              <CardBody>
                <pre className="text-xs bg-base-300 p-3 rounded overflow-x-auto">
                  <code>{`import { Button } from '@/components/ui/button';

function MyComponent() {
  return (
    <Button color="primary">
      Click me
    </Button>
  );
}`}</code>
                </pre>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        {/* Link-style trigger */}
        <div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="link link-primary flex items-center gap-2 mb-3"
          >
            <IconList className="w-4 h-4" />
            {showDetails ? 'Hide' : 'Show'} Technical Details
            {showDetails ? (
              <IconChevronUp className="w-4 h-4" />
            ) : (
              <IconChevronDown className="w-4 h-4" />
            )}
          </button>
          <Collapse open={showDetails}>
            <div className="bg-base-200 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Bundle Size:</strong><br />
                  45.2 KB (gzipped)
                </div>
                <div>
                  <strong>Dependencies:</strong><br />
                  React, TailwindCSS
                </div>
                <div>
                  <strong>Browser Support:</strong><br />
                  Chrome, Firefox, Safari, Edge
                </div>
                <div>
                  <strong>TypeScript:</strong><br />
                  Full type definitions included
                </div>
              </div>
            </div>
          </Collapse>
        </div>

        {/* Icon trigger */}
        <div>
          <div
            onClick={() => setShowGallery(!showGallery)}
            className="flex items-center justify-between p-3 bg-base-200 rounded-lg cursor-pointer hover:bg-base-300 transition-colors mb-3"
          >
            <div className="flex items-center gap-2">
              <IconPhoto className="w-5 h-5" />
              <span className="font-medium">Image Gallery</span>
              <Badge variant="info">{showGallery ? 'Expanded' : 'Collapsed'}</Badge>
            </div>
            {showGallery ? (
              <IconEyeOff className="w-5 h-5" />
            ) : (
              <IconEye className="w-5 h-5" />
            )}
          </div>
          <Collapse open={showGallery}>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </Collapse>
        </div>
      </div>
    );
  },
};

// Nested collapse
export const NestedCollapse: Story = {
  render: function Component() {
    const [parentOpen, setParentOpen] = React.useState(false);
    const [childOpen, setChildOpen] = React.useState({
      child1: false,
      child2: false,
    });

    return (
      <div className="w-96">
        <Collapse
          open={parentOpen}
          onToggle={() => setParentOpen(!parentOpen)}
          title="🗂️ Project Documentation"
        >
          <div className="p-4 bg-base-200 rounded-lg space-y-4">
            <p className="text-sm">
              Comprehensive documentation for the project including guides, API references, and examples.
            </p>

            <div className="space-y-2">
              <Collapse
                open={childOpen.child1}
                onToggle={() => setChildOpen(prev => ({ ...prev, child1: !prev.child1 }))}
                title="📖 User Guide"
              >
                <div className="p-3 bg-base-100 rounded-lg">
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Getting Started</li>
                    <li>Basic Usage</li>
                    <li>Advanced Features</li>
                    <li>Troubleshooting</li>
                    <li>Best Practices</li>
                  </ul>
                </div>
              </Collapse>

              <Collapse
                open={childOpen.child2}
                onToggle={() => setChildOpen(prev => ({ ...prev, child2: !prev.child2 }))}
                title="🔌 API Reference"
              >
                <div className="p-3 bg-base-100 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Authentication:</strong> Bearer token required
                    </div>
                    <div>
                      <strong>Base URL:</strong> https://api.example.com/v1
                    </div>
                    <div>
                      <strong>Rate Limit:</strong> 1000 requests per hour
                    </div>
                    <div>
                      <strong>Response Format:</strong> JSON
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </Collapse>
      </div>
    );
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: function Component() {
    const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({});

    const toggleSection = (section: string) => {
      setOpenSections(prev => ({
        ...prev,
        [section]: !prev[section],
      }));
    };

    return (
      <div className="max-w-2xl space-y-6">
        {/* Order Details */}
        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold">Order #12345</h3>
                <p className="text-sm text-gray-600">Placed on March 15, 2024</p>
              </div>
              <Badge variant="success">Delivered</Badge>
            </div>

            <Collapse
              open={openSections.orderDetails}
              onToggle={() => toggleSection('orderDetails')}
              title="View Order Details"
            >
              <div className="space-y-4">
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Items Ordered</h4>
                  <div className="space-y-2">
                    {[
                      { name: 'Wireless Headphones', price: '$99.99', qty: 1 },
                      { name: 'USB-C Cable', price: '$14.99', qty: 2 },
                      { name: 'Phone Case', price: '$24.99', qty: 1 },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.name} x{item.qty}</span>
                        <span>{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t mt-3 pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$154.97</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Shipping Address</h4>
                  <p className="text-sm">
                    John Doe<br />
                    123 Main Street<br />
                    New York, NY 10001
                  </p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Tracking Information</h4>
                  <p className="text-sm">
                    Tracking Number: <code className="bg-base-200 px-1 rounded">1Z999AA1234567890</code>
                  </p>
                  <Button size="sm" style="outline" className="mt-2">Track Package</Button>
                </div>
              </div>
            </Collapse>
          </CardBody>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardBody>
            <h3 className="font-bold mb-4">Privacy & Data Settings</h3>

            <div className="space-y-3">
              <Collapse
                open={openSections.dataCollection}
                onToggle={() => toggleSection('dataCollection')}
                title="Data Collection Preferences"
              >
                <div className="space-y-3">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <div>
                        <span className="label-text">Analytics & Performance</span>
                        <span className="label-text-alt block">Help us improve by sharing usage data</span>
                      </div>
                      <input type="checkbox" className="toggle" defaultChecked />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <div>
                        <span className="label-text">Marketing Communications</span>
                        <span className="label-text-alt block">Receive emails about new features</span>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <div>
                        <span className="label-text">Third-party Integrations</span>
                        <span className="label-text-alt block">Allow connections to external services</span>
                      </div>
                      <input type="checkbox" className="toggle" defaultChecked />
                    </label>
                  </div>
                </div>
              </Collapse>

              <Collapse
                open={openSections.dataExport}
                onToggle={() => toggleSection('dataExport')}
                title="Data Export & Deletion"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Export Your Data</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Download a copy of all your data including profile information, settings, and activity history.
                    </p>
                    <Button size="sm" style="outline">Request Data Export</Button>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-sm mb-2">Delete Account</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button size="sm" color="error" style="outline">Delete Account</Button>
                  </div>
                </div>
              </Collapse>
            </div>
          </CardBody>
        </Card>

        {/* Help Center */}
        <Card>
          <CardBody>
            <h3 className="font-bold mb-4">Frequently Asked Questions</h3>

            <div className="space-y-2">
              {[
                {
                  question: "How do I reset my password?",
                  answer: "You can reset your password by clicking 'Forgot Password' on the login page. We'll send you an email with instructions to create a new password."
                },
                {
                  question: "Can I change my username?",
                  answer: "Currently, usernames cannot be changed after account creation. If you need a different username, you'll need to create a new account."
                },
                {
                  question: "How do I delete my account?",
                  answer: "You can delete your account from the Privacy Settings section. Please note that this action is permanent and cannot be undone."
                },
                {
                  question: "Is my data secure?",
                  answer: "Yes, we use industry-standard encryption and security measures to protect your data. We're also compliant with GDPR and other privacy regulations."
                }
              ].map((faq, index) => (
                <Collapse
                  key={index}
                  open={openSections[`faq${index}`]}
                  onToggle={() => toggleSection(`faq${index}`)}
                  title={faq.question}
                >
                  <div className="p-3 bg-base-200 rounded-lg">
                    <p className="text-sm">{faq.answer}</p>
                  </div>
                </Collapse>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    );
  },
};