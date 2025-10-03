import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem
} from '../components/ui/dropdown';
import { Button } from '../components/form/button';
import { IconChevronDown, IconUser, IconSettings, IconLogout, IconEdit, IconTrash } from '@tabler/icons-react';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown component for displaying contextual menus and option lists with various trigger types and positioning.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['default', 'top', 'bottom', 'left', 'right', 'end'],
      description: 'The position of the dropdown relative to the trigger',
    },
    trigger: {
      control: 'select',
      options: ['default', 'hover', 'click', 'focus'],
      description: 'How the dropdown is triggered',
    },
    open: {
      control: 'boolean',
      description: 'Force the dropdown to be open',
    },
  },
  args: {
    position: 'bottom',
    trigger: 'click',
    open: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic dropdown with button trigger
export const BasicDropdown: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button style="outline">
          Options
          <IconChevronDown className="w-4 h-4" />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>
          <a>Item 1</a>
        </DropdownItem>
        <DropdownItem>
          <a>Item 2</a>
        </DropdownItem>
        <DropdownItem>
          <a>Item 3</a>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

// Dropdown with icons and actions
export const WithIcons: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary">
          User Menu
          <IconUser className="w-4 h-4" />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>
          <a className="flex items-center gap-2">
            <IconUser className="w-4 h-4" />
            Profile
          </a>
        </DropdownItem>
        <DropdownItem>
          <a className="flex items-center gap-2">
            <IconSettings className="w-4 h-4" />
            Settings
          </a>
        </DropdownItem>
        <DropdownItem>
          <a className="flex items-center gap-2">
            <IconLogout className="w-4 h-4" />
            Logout
          </a>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

// Different positions
export const Positions: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Dropdown position="top">
        <DropdownTrigger>
          <Button size="sm">Top</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem><a>Item 1</a></DropdownItem>
          <DropdownItem><a>Item 2</a></DropdownItem>
          <DropdownItem><a>Item 3</a></DropdownItem>
        </DropdownContent>
      </Dropdown>

      <Dropdown position="bottom">
        <DropdownTrigger>
          <Button size="sm">Bottom</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem><a>Item 1</a></DropdownItem>
          <DropdownItem><a>Item 2</a></DropdownItem>
          <DropdownItem><a>Item 3</a></DropdownItem>
        </DropdownContent>
      </Dropdown>

      <Dropdown position="left">
        <DropdownTrigger>
          <Button size="sm">Left</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem><a>Item 1</a></DropdownItem>
          <DropdownItem><a>Item 2</a></DropdownItem>
          <DropdownItem><a>Item 3</a></DropdownItem>
        </DropdownContent>
      </Dropdown>

      <Dropdown position="right">
        <DropdownTrigger>
          <Button size="sm">Right</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem><a>Item 1</a></DropdownItem>
          <DropdownItem><a>Item 2</a></DropdownItem>
          <DropdownItem><a>Item 3</a></DropdownItem>
        </DropdownContent>
      </Dropdown>

      <Dropdown position="end">
        <DropdownTrigger>
          <Button size="sm">End</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem><a>Item 1</a></DropdownItem>
          <DropdownItem><a>Item 2</a></DropdownItem>
          <DropdownItem><a>Item 3</a></DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
};

// Hover trigger
export const HoverTrigger: Story = {
  render: () => (
    <Dropdown trigger="hover">
      <DropdownTrigger>
        <Button color="secondary">
          Hover me
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>
          <a>Appears on hover</a>
        </DropdownItem>
        <DropdownItem>
          <a>No click needed</a>
        </DropdownItem>
        <DropdownItem>
          <a>Great for menus</a>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

// Dropdown with dividers and headers
export const WithDividersAndHeaders: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button style="outline">
          Actions
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <li className="menu-title">
          <span>User Actions</span>
        </li>
        <DropdownItem>
          <a className="flex items-center gap-2">
            <IconEdit className="w-4 h-4" />
            Edit Profile
          </a>
        </DropdownItem>
        <DropdownItem>
          <a className="flex items-center gap-2">
            <IconSettings className="w-4 h-4" />
            Account Settings
          </a>
        </DropdownItem>

        <li className="divider"></li>

        <li className="menu-title">
          <span>Danger Zone</span>
        </li>
        <DropdownItem>
          <a className="flex items-center gap-2 text-error">
            <IconTrash className="w-4 h-4" />
            Delete Account
          </a>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

// Force open dropdown
export const ForceOpen: Story = {
  render: () => (
    <Dropdown open={true}>
      <DropdownTrigger>
        <Button disabled>
          Always Open
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>
          <a>This dropdown</a>
        </DropdownItem>
        <DropdownItem>
          <a>is always open</a>
        </DropdownItem>
        <DropdownItem>
          <a>for demonstration</a>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

// Dropdown as select-style menu
export const SelectStyle: Story = {
  render: function Component() {
    const [selected, setSelected] = React.useState('Option 1');

    return (
      <Dropdown>
        <DropdownTrigger>
          <Button style="outline" className="justify-between w-48">
            {selected}
            <IconChevronDown className="w-4 h-4" />
          </Button>
        </DropdownTrigger>
        <DropdownContent>
          {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option) => (
            <DropdownItem key={option}>
              <a
                className={`${selected === option ? 'bg-primary text-primary-content' : ''}`}
                onClick={() => setSelected(option)}
              >
                {option}
              </a>
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>
    );
  },
};

// Context menu style
export const ContextMenu: Story = {
  render: () => (
    <div className="text-center">
      <p className="mb-4 text-sm opacity-70">Right-click the box below</p>
      <Dropdown trigger="click">
        <DropdownTrigger>
          <div className="w-32 h-32 bg-base-300 rounded-lg flex items-center justify-center cursor-context-menu">
            Right-click me
          </div>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>
            <a className="flex items-center gap-2">
              <IconEdit className="w-4 h-4" />
              Edit
            </a>
          </DropdownItem>
          <DropdownItem>
            <a>Copy</a>
          </DropdownItem>
          <DropdownItem>
            <a>Paste</a>
          </DropdownItem>
          <li className="divider"></li>
          <DropdownItem>
            <a className="flex items-center gap-2 text-error">
              <IconTrash className="w-4 h-4" />
              Delete
            </a>
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
};