import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/form/button';
import { IconHeart, IconPlus, IconStar } from '@tabler/icons-react';

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component built with DaisyUI classes, supporting multiple variants, sizes, states, and icons.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the button',
    },
    style: {
      control: 'select',
      options: ['default', 'outline', 'dash', 'soft', 'ghost', 'link'],
      description: 'The style variant of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'icon'],
      description: 'The size of the button',
    },
    modifier: {
      control: 'select',
      options: ['default', 'circle', 'square', 'wide', 'block'],
      description: 'Additional modifiers for the button',
    },
    processing: {
      control: 'boolean',
      description: 'Show processing/loading state',
    },
    success: {
      control: 'boolean',
      description: 'Show success state with check icon',
    },
    fail: {
      control: 'boolean',
      description: 'Show error state with X icon',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
  args: {
    children: 'Button',
    color: 'primary',
    style: 'default',
    size: 'md',
    modifier: 'default',
    processing: false,
    success: false,
    fail: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button variations
export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary Button',
  },
};

export const Accent: Story = {
  args: {
    color: 'accent',
    children: 'Accent Button',
  },
};

// Style variations
export const Outline: Story = {
  args: {
    color: 'primary',
    style: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    color: 'primary',
    style: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    color: 'primary',
    style: 'link',
    children: 'Link Button',
  },
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs" color="primary">XS</Button>
      <Button size="sm" color="primary">Small</Button>
      <Button size="md" color="primary">Medium</Button>
      <Button size="lg" color="primary">Large</Button>
      <Button size="xl" color="primary">XL</Button>
    </div>
  ),
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button color="neutral">Neutral</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </div>
  ),
};

// State variations
export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button color="primary">Normal</Button>
      <Button color="primary" processing>Processing</Button>
      <Button color="primary" success>Success</Button>
      <Button color="primary" fail>Failed</Button>
      <Button color="primary" disabled>Disabled</Button>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button color="primary" icon={IconHeart}>With Icon</Button>
      <Button color="secondary" icon={IconStar}>Starred</Button>
      <Button color="accent" icon={IconPlus}>Add Item</Button>
    </div>
  ),
};

// Icon only buttons
export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="icon" color="primary" icon={IconHeart} />
      <Button size="icon" color="secondary" icon={IconStar} />
      <Button size="icon" color="accent" icon={IconPlus} />
      <Button size="icon" color="primary" icon={IconHeart} modifier="square" />
      <Button size="icon" color="secondary" icon={IconStar} modifier="circle" />
    </div>
  ),
};

// Modifiers
export const Modifiers: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button color="primary" modifier="wide">Wide Button</Button>
      </div>
      <div>
        <Button color="primary" modifier="block">Block Button</Button>
      </div>
      <div className="flex gap-2">
        <Button color="primary" modifier="square">Square</Button>
        <Button color="primary" modifier="circle">Circle</Button>
      </div>
    </div>
  ),
};

// Interactive example
export const Interactive: Story = {
  args: {
    color: 'primary',
    children: 'Click me!',
    onClick: () => alert('Button clicked!'),
  },
};