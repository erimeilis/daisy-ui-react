import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../components/ui/icon';
import {
  IconHome,
  IconUser,
  IconSettings,
  IconMail,
  IconBell,
  IconPlus,
  IconX,
  IconCheck,
  IconAlertTriangle,
  IconInfoCircle,
  IconDownload,
  IconUpload,
  IconSearch,
  IconMenu,
  IconArrowRight,
  IconHeart,
  IconStar,
} from '@tabler/icons-react';

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Icon wrapper component for Tabler icons with consistent sizing and styling.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'number',
      description: 'Icon size in pixels',
    },
    stroke: {
      control: 'number',
      description: 'Stroke width',
    },
  },
  args: {
    size: 16,
    stroke: 2,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic icon
export const BasicIcon: Story = {
  args: {
    iconNode: IconHome,
  },
};

// Different sizes
export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Icon iconNode={IconStar} size={12} />
        <p className="text-xs mt-1">12px</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconStar} size={16} />
        <p className="text-xs mt-1">16px</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconStar} size={20} />
        <p className="text-xs mt-1">20px</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconStar} size={24} />
        <p className="text-xs mt-1">24px</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconStar} size={32} />
        <p className="text-xs mt-1">32px</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconStar} size={48} />
        <p className="text-xs mt-1">48px</p>
      </div>
    </div>
  ),
};

// Icon gallery
export const IconGallery: Story = {
  render: () => (
    <div className="grid grid-cols-8 gap-4 p-4">
      <div className="text-center">
        <Icon iconNode={IconHome} size={24} />
        <p className="text-xs mt-1">Home</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconUser} size={24} />
        <p className="text-xs mt-1">User</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconSettings} size={24} />
        <p className="text-xs mt-1">Settings</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconMail} size={24} />
        <p className="text-xs mt-1">Mail</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconBell} size={24} />
        <p className="text-xs mt-1">Bell</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconHeart} size={24} />
        <p className="text-xs mt-1">Heart</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconStar} size={24} />
        <p className="text-xs mt-1">Star</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconPlus} size={24} />
        <p className="text-xs mt-1">Plus</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconX} size={24} />
        <p className="text-xs mt-1">Close</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconCheck} size={24} />
        <p className="text-xs mt-1">Check</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconAlertTriangle} size={24} />
        <p className="text-xs mt-1">Warning</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconInfoCircle} size={24} />
        <p className="text-xs mt-1">Info</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconDownload} size={24} />
        <p className="text-xs mt-1">Download</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconUpload} size={24} />
        <p className="text-xs mt-1">Upload</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconSearch} size={24} />
        <p className="text-xs mt-1">Search</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconMenu} size={24} />
        <p className="text-xs mt-1">Menu</p>
      </div>
    </div>
  ),
};

// Different stroke weights
export const StrokeWeights: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="text-center">
        <Icon iconNode={IconHeart} size={32} stroke={1} />
        <p className="text-xs mt-1">Stroke 1</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconHeart} size={32} stroke={1.5} />
        <p className="text-xs mt-1">Stroke 1.5</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconHeart} size={32} stroke={2} />
        <p className="text-xs mt-1">Stroke 2</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconHeart} size={32} stroke={2.5} />
        <p className="text-xs mt-1">Stroke 2.5</p>
      </div>
      <div className="text-center">
        <Icon iconNode={IconHeart} size={32} stroke={3} />
        <p className="text-xs mt-1">Stroke 3</p>
      </div>
    </div>
  ),
};

// With colors
export const ColoredIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon iconNode={IconHeart} size={32} className="text-red-500" />
      <Icon iconNode={IconStar} size={32} className="text-yellow-500" />
      <Icon iconNode={IconCheck} size={32} className="text-green-500" />
      <Icon iconNode={IconInfoCircle} size={32} className="text-blue-500" />
      <Icon iconNode={IconAlertTriangle} size={32} className="text-orange-500" />
      <Icon iconNode={IconX} size={32} className="text-gray-500" />
    </div>
  ),
};

// In buttons and interface elements
export const InContext: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button className="btn btn-primary">
          <Icon iconNode={IconPlus} size={16} />
          Add Item
        </button>
        <button className="btn btn-secondary">
          <Icon iconNode={IconDownload} size={16} />
          Download
        </button>
        <button className="btn btn-outline">
          <Icon iconNode={IconSearch} size={16} />
          Search
        </button>
      </div>

      <div className="flex items-center gap-2 p-3 bg-base-200 rounded">
        <Icon iconNode={IconInfoCircle} size={20} className="text-info" />
        <span>This is an informational message with an icon</span>
      </div>

      <div className="flex items-center justify-between p-3 border rounded">
        <div className="flex items-center gap-2">
          <Icon iconNode={IconUser} size={20} />
          <span>User Profile</span>
        </div>
        <Icon iconNode={IconArrowRight} size={16} className="text-gray-400" />
      </div>
    </div>
  ),
};