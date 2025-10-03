import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../components/form/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkbox input component with various sizes and colors using DaisyUI checkbox classes.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the checkbox',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'],
      description: 'Color theme of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Show indeterminate state',
    },
  },
  args: {
    size: 'md',
    disabled: false,
    indeterminate: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic checkbox
export const BasicCheckbox: Story = {
  render: function Component() {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="space-y-4">
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p className="text-sm">Checked: {checked ? 'Yes' : 'No'}</p>
      </div>
    );
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Checkbox size="xs" defaultChecked />
        <span>Extra Small</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox size="sm" defaultChecked />
        <span>Small</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox size="md" defaultChecked />
        <span>Medium (Default)</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox size="lg" defaultChecked />
        <span>Large</span>
      </div>
    </div>
  ),
};

// Different colors
export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Checkbox color="primary" defaultChecked />
        <span>Primary</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox color="secondary" defaultChecked />
        <span>Secondary</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox color="accent" defaultChecked />
        <span>Accent</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox color="success" defaultChecked />
        <span>Success</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox color="warning" defaultChecked />
        <span>Warning</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox color="info" defaultChecked />
        <span>Info</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox color="error" defaultChecked />
        <span>Error</span>
      </div>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Checkbox defaultChecked />
        <span>Checked</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox />
        <span>Unchecked</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox indeterminate />
        <span>Indeterminate</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox disabled />
        <span>Disabled</span>
      </div>
      <div className="flex items-center gap-4">
        <Checkbox disabled defaultChecked />
        <span>Disabled Checked</span>
      </div>
    </div>
  ),
};

// Form example
export const FormExample: Story = {
  render: function Component() {
    const [formData, setFormData] = React.useState({
      terms: false,
      newsletter: true,
      updates: false,
      marketing: false,
    });

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, [name]: e.target.checked }));
    };

    return (
      <div className="w-80 space-y-6">
        <h3 className="font-semibold">Account Preferences</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Checkbox
              checked={formData.terms}
              onChange={handleChange('terms')}
              color="primary"
            />
            <div className="text-sm">
              <p>I agree to the terms and conditions</p>
              <p className="text-gray-500 text-xs">Required to create account</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              checked={formData.newsletter}
              onChange={handleChange('newsletter')}
              color="info"
            />
            <div className="text-sm">
              <p>Subscribe to newsletter</p>
              <p className="text-gray-500 text-xs">Weekly updates and news</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              checked={formData.updates}
              onChange={handleChange('updates')}
              color="success"
            />
            <div className="text-sm">
              <p>Product updates</p>
              <p className="text-gray-500 text-xs">New features and improvements</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              checked={formData.marketing}
              onChange={handleChange('marketing')}
              color="warning"
            />
            <div className="text-sm">
              <p>Marketing communications</p>
              <p className="text-gray-500 text-xs">Promotional offers and discounts</p>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-600">
          <p>Selected: {Object.entries(formData).filter(([, value]) => value).map(([key]) => key).join(', ') || 'None'}</p>
        </div>
      </div>
    );
  },
};

// Checkbox list
export const CheckboxList: Story = {
  render: function Component() {
    const [selected, setSelected] = React.useState<string[]>(['react']);

    const frameworks = [
      { id: 'react', name: 'React', description: 'A JavaScript library for building user interfaces' },
      { id: 'vue', name: 'Vue.js', description: 'The Progressive JavaScript Framework' },
      { id: 'angular', name: 'Angular', description: 'Platform for building mobile and desktop web applications' },
      { id: 'svelte', name: 'Svelte', description: 'Cybernetically enhanced web apps' },
      { id: 'solid', name: 'SolidJS', description: 'Simple and performant reactivity for building user interfaces' },
    ];

    const handleToggle = (id: string) => {
      setSelected(prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id]
      );
    };

    return (
      <div className="w-96 space-y-4">
        <h3 className="font-semibold">Choose your preferred frameworks:</h3>

        <div className="space-y-3">
          {frameworks.map((framework) => (
            <div key={framework.id} className="flex items-start gap-3">
              <Checkbox
                checked={selected.includes(framework.id)}
                onChange={() => handleToggle(framework.id)}
                color="primary"
              />
              <div className="text-sm">
                <p className="font-medium">{framework.name}</p>
                <p className="text-gray-500 text-xs">{framework.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-sm bg-base-200 p-3 rounded">
          <p>Selected frameworks: {selected.length}</p>
          <p className="text-xs text-gray-600">{selected.join(', ')}</p>
        </div>
      </div>
    );
  },
};