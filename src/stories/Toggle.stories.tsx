import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toggle } from '../components/form/toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Form/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle switch component for boolean settings using DaisyUI toggle classes.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the toggle',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'],
      description: 'Color theme of the toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle',
    },
  },
  args: {
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic toggle
export const BasicToggle: Story = {
  render: function Component() {
    const [enabled, setEnabled] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Toggle
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          <span>Toggle me</span>
        </div>
        <p className="text-sm">Status: {enabled ? 'Enabled' : 'Disabled'}</p>
      </div>
    );
  },
};

// Settings panel example
export const SettingsPanel: Story = {
  render: function Component() {
    const [settings, setSettings] = React.useState({
      darkMode: false,
      notifications: true,
      autoSave: true,
      emailUpdates: false,
      shareAnalytics: false,
    });

    const handleToggle = (key: keyof typeof settings) => {
      setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div className="w-80 space-y-6">
        <h3 className="font-semibold">Application Settings</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-gray-600">Switch to dark theme</p>
            </div>
            <Toggle
              checked={settings.darkMode}
              onChange={() => handleToggle('darkMode')}
              color="primary"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-gray-600">Receive app notifications</p>
            </div>
            <Toggle
              checked={settings.notifications}
              onChange={() => handleToggle('notifications')}
              color="success"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Auto Save</p>
              <p className="text-sm text-gray-600">Automatically save changes</p>
            </div>
            <Toggle
              checked={settings.autoSave}
              onChange={() => handleToggle('autoSave')}
              color="info"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Updates</p>
              <p className="text-sm text-gray-600">Receive email notifications</p>
            </div>
            <Toggle
              checked={settings.emailUpdates}
              onChange={() => handleToggle('emailUpdates')}
              color="warning"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Share Analytics</p>
              <p className="text-sm text-gray-600">Help improve our app</p>
            </div>
            <Toggle
              checked={settings.shareAnalytics}
              onChange={() => handleToggle('shareAnalytics')}
              color="secondary"
            />
          </div>
        </div>
      </div>
    );
  },
};