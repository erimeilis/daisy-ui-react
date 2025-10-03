import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from '../components/form/radio';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Radio button component for single selection from a group using DaisyUI radio classes.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the radio button',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'],
      description: 'Color theme of the radio button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the radio button',
    },
  },
  args: {
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic radio group
export const BasicRadio: Story = {
  render: function Component() {
    const [selected, setSelected] = React.useState('option1');

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Radio
              name="basic-group"
              value="option1"
              checked={selected === 'option1'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <label>Option 1</label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              name="basic-group"
              value="option2"
              checked={selected === 'option2'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <label>Option 2</label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              name="basic-group"
              value="option3"
              checked={selected === 'option3'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <label>Option 3</label>
          </div>
        </div>
        <p className="text-sm">Selected: {selected}</p>
      </div>
    );
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Radio size="xs" name="size-xs" defaultChecked />
        <span>Extra Small</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio size="sm" name="size-sm" defaultChecked />
        <span>Small</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio size="md" name="size-md" defaultChecked />
        <span>Medium (Default)</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio size="lg" name="size-lg" defaultChecked />
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
        <Radio color="primary" name="color-primary" defaultChecked />
        <span>Primary</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio color="secondary" name="color-secondary" defaultChecked />
        <span>Secondary</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio color="accent" name="color-accent" defaultChecked />
        <span>Accent</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio color="success" name="color-success" defaultChecked />
        <span>Success</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio color="warning" name="color-warning" defaultChecked />
        <span>Warning</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio color="info" name="color-info" defaultChecked />
        <span>Info</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio color="error" name="color-error" defaultChecked />
        <span>Error</span>
      </div>
    </div>
  ),
};

// Settings example
export const SettingsExample: Story = {
  render: function Component() {
    const [theme, setTheme] = React.useState('system');
    const [notifications, setNotifications] = React.useState('all');

    return (
      <div className="w-80 space-y-6">
        <div>
          <h3 className="font-semibold mb-3">Theme Preference</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Radio
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={(e) => setTheme(e.target.value)}
                color="primary"
              />
              <label>Light mode</label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={(e) => setTheme(e.target.value)}
                color="primary"
              />
              <label>Dark mode</label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                name="theme"
                value="system"
                checked={theme === 'system'}
                onChange={(e) => setTheme(e.target.value)}
                color="primary"
              />
              <label>System preference</label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Notifications</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Radio
                name="notifications"
                value="all"
                checked={notifications === 'all'}
                onChange={(e) => setNotifications(e.target.value)}
                color="success"
              />
              <label>All notifications</label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                name="notifications"
                value="important"
                checked={notifications === 'important'}
                onChange={(e) => setNotifications(e.target.value)}
                color="warning"
              />
              <label>Important only</label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                name="notifications"
                value="none"
                checked={notifications === 'none'}
                onChange={(e) => setNotifications(e.target.value)}
                color="error"
              />
              <label>None</label>
            </div>
          </div>
        </div>

        <div className="text-xs bg-base-200 p-3 rounded">
          <p>Theme: {theme}</p>
          <p>Notifications: {notifications}</p>
        </div>
      </div>
    );
  },
};