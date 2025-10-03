import type { Meta, StoryObj } from '@storybook/react';
import {
  Mask,
  Avatar,
  IconMask,
  MaskGroup,
  DecorativeMask
} from '../components/ui/mask';
import {
  IconUser,
  IconMail,
  IconSettings,
  IconCamera,
  IconMusic,
  IconPhone,
  IconHeart,
  IconStar
} from '@tabler/icons-react';

const meta: Meta<typeof Mask> = {
  title: 'UI/Mask',
  component: Mask,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Mask component for creating masked images and visual elements with various shapes.',
      },
    },
  },
  argTypes: {
    shape: {
      control: 'select',
      options: [
        'circle', 'squircle', 'heart', 'hexagon', 'hexagon-2', 'decagon',
        'pentagon', 'diamond', 'square', 'star', 'star-2', 'triangle',
        'triangle-2', 'triangle-3', 'triangle-4', 'parallelogram',
        'parallelogram-2', 'parallelogram-3', 'parallelogram-4',
        'half-1', 'half-2'
      ],
      description: 'Shape of the mask',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the mask',
    },
  },
  args: {
    shape: 'circle',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic mask with image
export const BasicMask: Story = {
  args: {
    src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    alt: 'Profile picture',
  },
};

// All mask shapes
export const AllShapes: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4 p-4">
      <div className="text-center">
        <Mask shape="circle" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Circle</p>
      </div>
      <div className="text-center">
        <Mask shape="squircle" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Squircle</p>
      </div>
      <div className="text-center">
        <Mask shape="heart" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Heart</p>
      </div>
      <div className="text-center">
        <Mask shape="hexagon" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Hexagon</p>
      </div>
      <div className="text-center">
        <Mask shape="pentagon" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Pentagon</p>
      </div>
      <div className="text-center">
        <Mask shape="diamond" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Diamond</p>
      </div>
      <div className="text-center">
        <Mask shape="square" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Square</p>
      </div>
      <div className="text-center">
        <Mask shape="star" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Star</p>
      </div>
      <div className="text-center">
        <Mask shape="triangle" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Triangle</p>
      </div>
      <div className="text-center">
        <Mask shape="parallelogram" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Parallelogram</p>
      </div>
      <div className="text-center">
        <Mask shape="half-1" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Half 1</p>
      </div>
      <div className="text-center">
        <Mask shape="half-2" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-2">Half 2</p>
      </div>
    </div>
  ),
};

// Different sizes
export const MaskSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <Mask shape="circle" size="xs" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-1">XS</p>
      </div>
      <div className="text-center">
        <Mask shape="circle" size="sm" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-1">SM</p>
      </div>
      <div className="text-center">
        <Mask shape="circle" size="md" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-1">MD</p>
      </div>
      <div className="text-center">
        <Mask shape="circle" size="lg" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-1">LG</p>
      </div>
      <div className="text-center">
        <Mask shape="circle" size="xl" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-1">XL</p>
      </div>
      <div className="text-center">
        <Mask shape="circle" size="2xl" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        <p className="text-xs mt-1">2XL</p>
      </div>
    </div>
  ),
};

// With background colors
export const WithBackgrounds: Story = {
  render: () => (
    <div className="flex gap-4">
      <Mask shape="circle" size="lg" backgroundColor="bg-primary">
        <div className="flex items-center justify-center h-full text-primary-content">
          <IconUser className="w-8 h-8" />
        </div>
      </Mask>
      <Mask shape="hexagon" size="lg" backgroundColor="bg-secondary">
        <div className="flex items-center justify-center h-full text-secondary-content">
          <IconPhone className="w-8 h-8" />
        </div>
      </Mask>
      <Mask shape="heart" size="lg" backgroundColor="bg-accent">
        <div className="flex items-center justify-center h-full text-accent-content">
          <IconHeart className="w-8 h-8" />
        </div>
      </Mask>
      <Mask shape="star" size="lg" backgroundColor="bg-success">
        <div className="flex items-center justify-center h-full text-success-content">
          <IconStar className="w-8 h-8" />
        </div>
      </Mask>
    </div>
  ),
};

// Avatar component examples
export const AvatarExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Basic Avatars</h3>
        <div className="flex gap-4">
          <Avatar
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User 1"
            size="md"
          />
          <Avatar
            fallback="JD"
            size="md"
            backgroundColor="bg-primary text-primary-content"
          />
          <Avatar
            fallback={<IconUser className="w-6 h-6" />}
            size="md"
            backgroundColor="bg-secondary text-secondary-content"
          />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Avatar Sizes</h3>
        <div className="flex items-end gap-4">
          <Avatar fallback="XS" size="xs" />
          <Avatar fallback="SM" size="sm" />
          <Avatar fallback="MD" size="md" />
          <Avatar fallback="LG" size="lg" />
          <Avatar fallback="XL" size="xl" />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Avatars with Status</h3>
        <div className="flex gap-4">
          <Avatar
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Online User"
            size="lg"
            status="online"
            showStatus
          />
          <Avatar
            fallback="AW"
            size="lg"
            status="away"
            showStatus
            backgroundColor="bg-warning text-warning-content"
          />
          <Avatar
            fallback="BU"
            size="lg"
            status="busy"
            showStatus
            backgroundColor="bg-error text-error-content"
          />
          <Avatar
            fallback="OF"
            size="lg"
            status="offline"
            showStatus
            backgroundColor="bg-base-300 text-base-content"
          />
        </div>
      </div>
    </div>
  ),
};

// Icon mask examples
export const IconMaskExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Different Shapes</h3>
        <div className="flex gap-4">
          <IconMask shape="circle" size="lg" icon={<IconMail />} backgroundColor="bg-primary text-primary-content" />
          <IconMask shape="hexagon" size="lg" icon={<IconPhone />} backgroundColor="bg-secondary text-secondary-content" />
          <IconMask shape="diamond" size="lg" icon={<IconSettings />} backgroundColor="bg-accent text-accent-content" />
          <IconMask shape="star" size="lg" icon={<IconCamera />} backgroundColor="bg-success text-success-content" />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Different Sizes</h3>
        <div className="flex items-end gap-4">
          <IconMask shape="hexagon" size="sm" icon={<IconMusic />} iconSize="sm" backgroundColor="bg-info text-info-content" />
          <IconMask shape="hexagon" size="md" icon={<IconMusic />} iconSize="md" backgroundColor="bg-info text-info-content" />
          <IconMask shape="hexagon" size="lg" icon={<IconMusic />} iconSize="lg" backgroundColor="bg-info text-info-content" />
          <IconMask shape="hexagon" size="xl" icon={<IconMusic />} iconSize="xl" backgroundColor="bg-info text-info-content" />
        </div>
      </div>
    </div>
  ),
};

// Mask group examples
export const MaskGroupExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Avatar Group</h3>
        <MaskGroup spacing="sm">
          <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User 1" size="md" />
          <Avatar fallback="AB" size="md" backgroundColor="bg-primary text-primary-content" />
          <Avatar fallback="CD" size="md" backgroundColor="bg-secondary text-secondary-content" />
          <Avatar fallback="EF" size="md" backgroundColor="bg-accent text-accent-content" />
        </MaskGroup>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Overlapping Avatars</h3>
        <MaskGroup spacing="sm" overlap>
          <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User 1" size="md" />
          <Avatar fallback="AB" size="md" backgroundColor="bg-primary text-primary-content" />
          <Avatar fallback="CD" size="md" backgroundColor="bg-secondary text-secondary-content" />
          <Avatar fallback="EF" size="md" backgroundColor="bg-accent text-accent-content" />
        </MaskGroup>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Limited Group with Counter</h3>
        <MaskGroup spacing="sm" overlap max={3}>
          <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User 1" size="md" />
          <Avatar fallback="AB" size="md" backgroundColor="bg-primary text-primary-content" />
          <Avatar fallback="CD" size="md" backgroundColor="bg-secondary text-secondary-content" />
          <Avatar fallback="EF" size="md" backgroundColor="bg-accent text-accent-content" />
          <Avatar fallback="GH" size="md" backgroundColor="bg-success text-success-content" />
          <Avatar fallback="IJ" size="md" backgroundColor="bg-warning text-warning-content" />
        </MaskGroup>
      </div>
    </div>
  ),
};

// Decorative masks
export const DecorativeMasks: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Gradient Backgrounds</h3>
        <div className="flex gap-4">
          <DecorativeMask shape="circle" size="lg" gradient="from-primary to-secondary" />
          <DecorativeMask shape="hexagon" size="lg" gradient="from-secondary to-accent" />
          <DecorativeMask shape="star" size="lg" gradient="from-accent to-success" />
          <DecorativeMask shape="diamond" size="lg" gradient="from-success to-warning" />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Animated Masks</h3>
        <div className="flex gap-4">
          <DecorativeMask shape="circle" size="lg" backgroundColor="bg-primary" animate="pulse" />
          <DecorativeMask shape="hexagon" size="lg" backgroundColor="bg-secondary" animate="spin" />
          <DecorativeMask shape="star" size="lg" backgroundColor="bg-accent" animate="ping" />
          <DecorativeMask shape="triangle" size="lg" backgroundColor="bg-success" animate="bounce" />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Pattern Overlays</h3>
        <div className="flex gap-4">
          <DecorativeMask shape="square" size="lg" backgroundColor="bg-primary" pattern="dots" />
          <DecorativeMask shape="circle" size="lg" backgroundColor="bg-secondary" pattern="lines" />
          <DecorativeMask shape="hexagon" size="lg" backgroundColor="bg-accent" pattern="grid" />
        </div>
      </div>
    </div>
  ),
};

// Real-world usage examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* User Profile Card */}
      <div className="card bg-base-100 shadow-xl w-80">
        <div className="card-body items-center text-center">
          <Avatar
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Profile"
            size="xl"
            status="online"
            showStatus
          />
          <h2 className="card-title">Sarah Wilson</h2>
          <p>Senior Frontend Developer</p>
          <div className="flex gap-2 mt-4">
            <IconMask shape="circle" size="sm" icon={<IconMail />} backgroundColor="bg-primary text-primary-content" />
            <IconMask shape="circle" size="sm" icon={<IconPhone />} backgroundColor="bg-secondary text-secondary-content" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="card bg-base-100 shadow-xl w-96">
        <div className="card-body">
          <h2 className="card-title">Development Team</h2>
          <div className="flex justify-between items-center">
            <MaskGroup spacing="sm" overlap max={4}>
              <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Team Lead" size="md" />
              <Avatar fallback="JS" size="md" backgroundColor="bg-primary text-primary-content" />
              <Avatar fallback="MK" size="md" backgroundColor="bg-secondary text-secondary-content" />
              <Avatar fallback="AL" size="md" backgroundColor="bg-accent text-accent-content" />
              <Avatar fallback="RB" size="md" backgroundColor="bg-success text-success-content" />
              <Avatar fallback="CT" size="md" backgroundColor="bg-warning text-warning-content" />
            </MaskGroup>
            <button className="btn btn-sm btn-primary">View All</button>
          </div>
        </div>
      </div>

      {/* Feature Icons */}
      <div className="grid grid-cols-4 gap-4 w-80">
        <div className="text-center">
          <IconMask shape="hexagon" size="lg" icon={<IconPhone />} backgroundColor="bg-primary text-primary-content" />
          <p className="text-xs mt-2">Calls</p>
        </div>
        <div className="text-center">
          <IconMask shape="hexagon" size="lg" icon={<IconMail />} backgroundColor="bg-secondary text-secondary-content" />
          <p className="text-xs mt-2">Messages</p>
        </div>
        <div className="text-center">
          <IconMask shape="hexagon" size="lg" icon={<IconCamera />} backgroundColor="bg-accent text-accent-content" />
          <p className="text-xs mt-2">Camera</p>
        </div>
        <div className="text-center">
          <IconMask shape="hexagon" size="lg" icon={<IconSettings />} backgroundColor="bg-success text-success-content" />
          <p className="text-xs mt-2">Settings</p>
        </div>
      </div>
    </div>
  ),
};