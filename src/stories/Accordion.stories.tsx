import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion, AccordionItem } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/form/button';
import { IconHelpCircle, IconSettings, IconUser, IconCreditCard, IconShield } from '@tabler/icons-react';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Accordion component for collapsible content sections using DaisyUI collapse classes.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Name for the radio group (ensures only one accordion item is open)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    name: 'default-accordion',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic accordion
export const BasicAccordion: Story = {
  render: () => (
    <div className="w-96">
      <Accordion name="basic-accordion">
        <AccordionItem
          name="basic-accordion"
          title="What is React?"
          defaultOpen={true}
        >
          React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.
        </AccordionItem>

        <AccordionItem
          name="basic-accordion"
          title="How do I install dependencies?"
        >
          You can install dependencies using npm or yarn. Run <code>npm install</code> or <code>yarn install</code> in your project directory.
        </AccordionItem>

        <AccordionItem
          name="basic-accordion"
          title="What is TypeScript?"
        >
          TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static types to help catch errors early and improve code quality.
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="w-96">
      <Accordion name="icon-accordion">
        <AccordionItem
          name="icon-accordion"
          title={
            <div className="flex items-center gap-2">
              <IconSettings className="w-4 h-4" />
              Features
            </div>
          }
          icon="arrow"
          defaultOpen={true}
        >
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Responsive design</li>
            <li>Dark mode support</li>
            <li>Accessibility compliant</li>
            <li>TypeScript support</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          name="icon-accordion"
          title={
            <div className="flex items-center gap-2">
              <IconCreditCard className="w-4 h-4" />
              Pricing
            </div>
          }
          icon="plus"
        >
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Basic Plan</span>
              <Badge variant="primary">$9/month</Badge>
            </div>
            <div className="flex justify-between">
              <span>Pro Plan</span>
              <Badge variant="secondary">$19/month</Badge>
            </div>
            <div className="flex justify-between">
              <span>Enterprise Plan</span>
              <Badge variant="accent">$49/month</Badge>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          name="icon-accordion"
          title={
            <div className="flex items-center gap-2">
              <IconHelpCircle className="w-4 h-4" />
              Support
            </div>
          }
          icon="arrow"
        >
          <div className="space-y-2 text-sm">
            <p>We offer 24/7 support for all plans:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Email support</li>
              <li>Live chat</li>
              <li>Phone support (Pro+)</li>
              <li>Priority support (Enterprise)</li>
            </ul>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// Different icon styles
export const IconStyles: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="font-semibold mb-3">Arrow Icons</h3>
        <Accordion name="arrow-accordion">
          <AccordionItem
            name="arrow-accordion"
            title="Arrow Icon Style"
            icon="arrow"
            defaultOpen={true}
          >
            This accordion uses arrow icons that rotate when expanded.
          </AccordionItem>
          <AccordionItem
            name="arrow-accordion"
            title="Another Item"
            icon="arrow"
          >
            Click to expand this section.
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Plus Icons</h3>
        <Accordion name="plus-accordion">
          <AccordionItem
            name="plus-accordion"
            title="Plus Icon Style"
            icon="plus"
            defaultOpen={true}
          >
            This accordion uses plus icons that change to minus when expanded.
          </AccordionItem>
          <AccordionItem
            name="plus-accordion"
            title="Another Item"
            icon="plus"
          >
            Click to expand this section.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

// FAQ example
export const FAQ: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600">Find answers to common questions about our service</p>
      </div>

      <Accordion name="faq-accordion">
        <AccordionItem
          name="faq-accordion"
          title="How do I get started?"
          icon="plus"
          defaultOpen={true}
        >
          <div className="space-y-3 text-sm">
            <p>Getting started is easy! Just follow these steps:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Sign up for an account</li>
              <li>Verify your email address</li>
              <li>Complete your profile</li>
              <li>Start using our features</li>
            </ol>
            <div className="flex gap-2 mt-4">
              <Button size="sm" color="primary">Get Started</Button>
              <Button size="sm" style="outline">Learn More</Button>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          name="faq-accordion"
          title="What payment methods do you accept?"
          icon="plus"
        >
          <div className="space-y-3 text-sm">
            <p>We accept all major payment methods:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <IconCreditCard className="w-4 h-4" />
                <span>Credit Cards</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCreditCard className="w-4 h-4" />
                <span>Debit Cards</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCreditCard className="w-4 h-4" />
                <span>PayPal</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCreditCard className="w-4 h-4" />
                <span>Bank Transfer</span>
              </div>
            </div>
            <p>All payments are secured with 256-bit SSL encryption.</p>
          </div>
        </AccordionItem>

        <AccordionItem
          name="faq-accordion"
          title="Is my data secure?"
          icon="plus"
        >
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <IconShield className="w-5 h-5 text-success mt-0.5" />
              <div>
                <h4 className="font-semibold">Enterprise-grade security</h4>
                <p>We use industry-standard security measures to protect your data:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                  <li>End-to-end encryption</li>
                  <li>Regular security audits</li>
                  <li>SOC 2 Type II compliance</li>
                  <li>GDPR compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          name="faq-accordion"
          title="Can I cancel anytime?"
          icon="plus"
        >
          <div className="space-y-3 text-sm">
            <p>Yes, you can cancel your subscription at any time:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>No cancellation fees</li>
              <li>Access until the end of your billing period</li>
              <li>Easy one-click cancellation</li>
              <li>Export your data before leaving</li>
            </ul>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 text-xs">
                <strong>Note:</strong> Once you cancel, you'll lose access to premium features but can still access basic features.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          name="faq-accordion"
          title="Do you offer customer support?"
          icon="plus"
        >
          <div className="space-y-3 text-sm">
            <p>We offer multiple support channels:</p>
            <div className="grid gap-3">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Email Support</span>
                <Badge variant="success">24/7</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Live Chat</span>
                <Badge variant="primary">Business Hours</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Phone Support</span>
                <Badge variant="secondary">Premium Only</Badge>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <Button size="sm" color="primary">Contact Support</Button>
              <Button size="sm" style="outline">View Help Center</Button>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// Settings example
export const SettingsExample: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Account Settings</h2>
        <p className="text-sm text-gray-600">Manage your account preferences</p>
      </div>

      <Accordion name="settings-accordion">
        <AccordionItem
          name="settings-accordion"
          title={
            <div className="flex items-center gap-2">
              <IconUser className="w-4 h-4" />
              Profile Information
            </div>
          }
          icon="arrow"
          defaultOpen={true}
        >
          <div className="space-y-3 text-sm">
            <div className="grid gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="input input-bordered input-sm w-full" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="input input-bordered input-sm w-full" placeholder="john@example.com" />
              </div>
            </div>
            <Button size="sm" color="primary">Save Changes</Button>
          </div>
        </AccordionItem>

        <AccordionItem
          name="settings-accordion"
          title={
            <div className="flex items-center gap-2">
              <IconShield className="w-4 h-4" />
              Privacy & Security
            </div>
          }
          icon="arrow"
        >
          <div className="space-y-3 text-sm">
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Two-factor authentication</span>
                <input type="checkbox" className="toggle toggle-primary" />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Email notifications</span>
                <input type="checkbox" className="toggle toggle-primary" defaultChecked />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Marketing communications</span>
                <input type="checkbox" className="toggle toggle-primary" />
              </label>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          name="settings-accordion"
          title={
            <div className="flex items-center gap-2">
              <IconCreditCard className="w-4 h-4" />
              Billing & Subscription
            </div>
          }
          icon="arrow"
        >
          <div className="space-y-3 text-sm">
            <div className="card bg-base-200 p-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Pro Plan</h4>
                  <p className="text-xs opacity-70">$19/month</p>
                </div>
                <Badge variant="success">Active</Badge>
              </div>
            </div>
            <p className="text-xs opacity-70">Next billing date: March 15, 2024</p>
            <div className="flex gap-2">
              <Button size="sm" style="outline">Change Plan</Button>
              <Button size="sm" style="outline">Update Payment</Button>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};