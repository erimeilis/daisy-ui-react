import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Fieldset } from '../components/form/fieldset';
import { Button } from '../components/form/button';
import { Input } from '../components/form/input';
import { Checkbox } from '../components/form/checkbox';
import { Radio } from '../components/form/radio';
import { Select } from '../components/form/select';
import { Textarea } from '../components/form/textarea';

const meta: Meta<typeof Fieldset> = {
  title: 'Form/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Fieldset component for grouping related form elements with an optional title and description.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the legend',
    },
    description: {
      control: 'text',
      description: 'Optional description text displayed below the title',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all form elements within the fieldset',
    },
  },
  args: {
    title: 'Form Section',
    description: 'Enter your information below',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic fieldset
export const Default: Story = {
  args: {
    title: 'Personal Information',
    description: 'Please provide your personal details',
    children: (
      <div className="space-y-4">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input type="email" placeholder="Email Address" />
      </div>
    ),
  },
};

// Without description
export const WithoutDescription: Story = {
  args: {
    title: 'Account Settings',
    children: (
      <div className="space-y-4">
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </div>
    ),
  },
};

// Without title
export const WithoutTitle: Story = {
  args: {
    description: 'Basic form without a title',
    children: (
      <div className="space-y-4">
        <Input placeholder="Search..." />
        <Button color="primary">Search</Button>
      </div>
    ),
  },
};

// Minimal (no title or description)
export const Minimal: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <Input placeholder="Simple input" />
        <Button>Submit</Button>
      </div>
    ),
  },
};

// Contact form
export const ContactForm: Story = {
  render: () => (
    <Fieldset
      title="Contact Information"
      description="How can we reach you?"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input type="email" placeholder="Email Address" className="md:col-span-2" />
        <Input type="tel" placeholder="Phone Number" className="md:col-span-2" />
        <Textarea placeholder="Message" rows={4} className="md:col-span-2" />
      </div>
    </Fieldset>
  ),
};

// Preferences form
export const PreferencesForm: Story = {
  render: () => (
    <Fieldset
      title="Notification Preferences"
      description="Choose how you'd like to be notified"
    >
      <div className="space-y-4">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Email notifications</span>
            <Checkbox defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">SMS notifications</span>
            <Checkbox />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Push notifications</span>
            <Checkbox defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Notification frequency</span>
          </label>
          <Select>
            <option>Immediately</option>
            <option>Daily digest</option>
            <option>Weekly digest</option>
            <option>Never</option>
          </Select>
        </div>
      </div>
    </Fieldset>
  ),
};

// Billing information
export const BillingForm: Story = {
  render: () => (
    <Fieldset
      title="Billing Information"
      description="Secure payment details"
    >
      <div className="space-y-4">
        <Input placeholder="Card Number" />
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="MM/YY" />
          <Input placeholder="CVC" />
        </div>
        <Input placeholder="Cardholder Name" />
        <div className="divider">Billing Address</div>
        <Input placeholder="Street Address" />
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="City" />
          <Input placeholder="ZIP Code" />
        </div>
        <Select>
          <option>Select Country</option>
          <option>United States</option>
          <option>Canada</option>
          <option>United Kingdom</option>
          <option>Australia</option>
        </Select>
      </div>
    </Fieldset>
  ),
};

// Radio group form
export const RadioGroupForm: Story = {
  render: () => (
    <Fieldset
      title="Shipping Options"
      description="Choose your preferred delivery method"
    >
      <div className="space-y-3">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">
              <div>
                <div className="font-medium">Standard Shipping</div>
                <div className="text-sm opacity-70">5-7 business days - Free</div>
              </div>
            </span>
            <Radio name="shipping" value="standard" defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">
              <div>
                <div className="font-medium">Express Shipping</div>
                <div className="text-sm opacity-70">2-3 business days - $9.99</div>
              </div>
            </span>
            <Radio name="shipping" value="express" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">
              <div>
                <div className="font-medium">Overnight Shipping</div>
                <div className="text-sm opacity-70">Next business day - $24.99</div>
              </div>
            </span>
            <Radio name="shipping" value="overnight" />
          </label>
        </div>
      </div>
    </Fieldset>
  ),
};

// Disabled fieldset
export const Disabled: Story = {
  render: () => (
    <Fieldset
      title="Account Settings"
      description="These settings are currently disabled"
      disabled
    >
      <div className="space-y-4">
        <Input placeholder="Username" disabled />
        <Input type="email" placeholder="Email" disabled />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Two-factor authentication</span>
            <Checkbox disabled />
          </label>
        </div>
        <Button disabled>Save Changes</Button>
      </div>
    </Fieldset>
  ),
};

// Nested fieldsets
export const NestedFieldsets: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <Fieldset
        title="User Profile"
        description="Complete your profile information"
      >
        <div className="space-y-6">
          <Fieldset title="Basic Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input type="email" placeholder="Email" className="md:col-span-2" />
            </div>
          </Fieldset>

          <Fieldset title="Address Information">
            <div className="space-y-4">
              <Input placeholder="Street Address" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="City" />
                <Input placeholder="ZIP Code" />
              </div>
            </div>
          </Fieldset>

          <Fieldset title="Preferences">
            <div className="space-y-3">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Marketing emails</span>
                  <Checkbox />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Newsletter subscription</span>
                  <Checkbox defaultChecked />
                </label>
              </div>
            </div>
          </Fieldset>
        </div>
      </Fieldset>
    </div>
  ),
};

// Complex form with multiple sections
export const ComplexForm: Story = {
  render: function Component() {
    const [formData, setFormData] = React.useState({
      personalInfo: { firstName: '', lastName: '', email: '' },
      preferences: { notifications: true, newsletter: false },
      shipping: 'standard',
    });

    return (
      <div className="space-y-6 w-full max-w-2xl">
        <Fieldset
          title="Personal Information"
          description="Your basic details"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="First Name"
              value={formData.personalInfo.firstName}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, firstName: e.target.value }
              }))}
            />
            <Input
              placeholder="Last Name"
              value={formData.personalInfo.lastName}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, lastName: e.target.value }
              }))}
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="md:col-span-2"
              value={formData.personalInfo.email}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, email: e.target.value }
              }))}
            />
          </div>
        </Fieldset>

        <Fieldset
          title="Communication Preferences"
          description="How would you like to hear from us?"
        >
          <div className="space-y-3">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Email notifications</span>
                <Checkbox
                  checked={formData.preferences.notifications}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, notifications: e.target.checked }
                  }))}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Newsletter subscription</span>
                <Checkbox
                  checked={formData.preferences.newsletter}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, newsletter: e.target.checked }
                  }))}
                />
              </label>
            </div>
          </div>
        </Fieldset>

        <Fieldset
          title="Shipping Preferences"
          description="Choose your default shipping method"
        >
          <div className="space-y-3">
            {[
              { value: 'standard', label: 'Standard (5-7 days)', price: 'Free' },
              { value: 'express', label: 'Express (2-3 days)', price: '$9.99' },
              { value: 'overnight', label: 'Overnight', price: '$24.99' },
            ].map((option) => (
              <div key={option.value} className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    <div>
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm opacity-70">{option.price}</div>
                    </div>
                  </span>
                  <Radio
                    name="shipping"
                    value={option.value}
                    checked={formData.shipping === option.value}
                    onChange={(e) => setFormData(prev => ({ ...prev, shipping: e.target.value }))}
                  />
                </label>
              </div>
            ))}
          </div>
        </Fieldset>

        <div className="flex gap-4 justify-end">
          <Button color="neutral">Cancel</Button>
          <Button color="primary">Save Profile</Button>
        </div>

        <div className="mt-8 p-4 bg-base-200 rounded-lg">
          <h4 className="font-semibold mb-2">Current Form Data:</h4>
          <pre className="text-xs overflow-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

// Custom styling
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-6">
      <Fieldset
        title="Primary Theme"
        description="Styled with primary colors"
        className="border-primary bg-primary/5"
      >
        <div className="space-y-4">
          <Input placeholder="Primary input" className="border-primary/30" />
          <Button color="primary">Primary Button</Button>
        </div>
      </Fieldset>

      <Fieldset
        title="Success Theme"
        description="Styled with success colors"
        className="border-success bg-success/5"
      >
        <div className="space-y-4">
          <Input placeholder="Success input" className="border-success/30" />
          <Button color="success">Success Button</Button>
        </div>
      </Fieldset>

      <Fieldset
        title="Custom Padding"
        description="With custom padding and spacing"
        className="p-8"
      >
        <div className="space-y-6">
          <Input placeholder="Spacious input" />
          <Button>Spacious Button</Button>
        </div>
      </Fieldset>
    </div>
  ),
};

// Responsive layout
export const ResponsiveLayout: Story = {
  render: () => (
    <Fieldset
      title="Responsive Form"
      description="This form adapts to different screen sizes"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Input placeholder="Field 1" />
        <Input placeholder="Field 2" />
        <Input placeholder="Field 3" />
        <Input placeholder="Field 4" className="sm:col-span-2 lg:col-span-1" />
        <Input placeholder="Field 5" />
        <Input placeholder="Field 6" />
        <Textarea
          placeholder="Full width field"
          className="sm:col-span-2 lg:col-span-3"
          rows={3}
        />
        <div className="sm:col-span-2 lg:col-span-3 flex gap-2 justify-end">
          <Button color="neutral">Reset</Button>
          <Button color="primary">Submit</Button>
        </div>
      </div>
    </Fieldset>
  ),
};