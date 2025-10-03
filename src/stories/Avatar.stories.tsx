import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar, AvatarGroup, AvatarPlaceholder } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/form/button';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatar component for displaying user profile pictures with various sizes, shapes, and states including online indicators, placeholders, and group displays.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['default', 'circle', 'rounded', 'square'],
      description: 'The shape of the avatar',
    },
    online: {
      control: 'boolean',
      description: 'Show online indicator',
    },
    placeholder: {
      control: 'boolean',
      description: 'Use as placeholder avatar',
    },
  },
  args: {
    size: 'md',
    shape: 'circle',
    online: false,
    placeholder: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic avatar with image
export const BasicAvatar: Story = {
  args: {
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo1',
    alt: 'User Avatar',
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="xs"
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=xs"
        alt="Extra Small"
      />
      <Avatar
        size="sm"
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=sm"
        alt="Small"
      />
      <Avatar
        size="md"
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=md"
        alt="Medium"
      />
      <Avatar
        size="lg"
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=lg"
        alt="Large"
      />
      <Avatar
        size="xl"
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=xl"
        alt="Extra Large"
      />
    </div>
  ),
};

// Different shapes
export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Avatar
          shape="circle"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=circle"
          alt="Circle"
        />
        <p className="text-xs mt-2">Circle</p>
      </div>
      <div className="text-center">
        <Avatar
          shape="rounded"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=rounded"
          alt="Rounded"
        />
        <p className="text-xs mt-2">Rounded</p>
      </div>
      <div className="text-center">
        <Avatar
          shape="square"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=square"
          alt="Square"
        />
        <p className="text-xs mt-2">Square</p>
      </div>
    </div>
  ),
};

// Online status indicators
export const OnlineStatus: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="text-center">
        <Avatar
          online={true}
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=online"
          alt="Online User"
        />
        <p className="text-xs mt-2">Online</p>
      </div>
      <div className="text-center">
        <Avatar
          online={false}
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=offline"
          alt="Offline User"
        />
        <p className="text-xs mt-2">Offline</p>
      </div>
    </div>
  ),
};

// Placeholder avatars
export const Placeholders: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <AvatarPlaceholder size="sm">
          <span className="text-xs">JD</span>
        </AvatarPlaceholder>
        <p className="text-xs mt-2">Initials</p>
      </div>
      <div className="text-center">
        <AvatarPlaceholder>
          <span>AB</span>
        </AvatarPlaceholder>
        <p className="text-xs mt-2">Default</p>
      </div>
      <div className="text-center">
        <AvatarPlaceholder size="lg">
          <span>🧑</span>
        </AvatarPlaceholder>
        <p className="text-xs mt-2">Emoji</p>
      </div>
    </div>
  ),
};

// Avatar group
export const AvatarGroups: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Basic Group</h3>
        <AvatarGroup>
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1"
            alt="User 1"
          />
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2"
            alt="User 2"
          />
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3"
            alt="User 3"
          />
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user4"
            alt="User 4"
          />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">With Counter</h3>
        <AvatarGroup>
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=team1"
            alt="Team Member 1"
          />
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=team2"
            alt="Team Member 2"
          />
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=team3"
            alt="Team Member 3"
          />
          <AvatarPlaceholder>
            <span className="text-xs">+5</span>
          </AvatarPlaceholder>
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Small Group</h3>
        <AvatarGroup>
          <Avatar
            size="sm"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=small1"
            alt="Small 1"
          />
          <Avatar
            size="sm"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=small2"
            alt="Small 2"
          />
          <Avatar
            size="sm"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=small3"
            alt="Small 3"
          />
          <AvatarPlaceholder size="sm">
            <span className="text-xs">+12</span>
          </AvatarPlaceholder>
        </AvatarGroup>
      </div>
    </div>
  ),
};

// Real-world usage examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      {/* User Profile Card */}
      <div className="card bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <Avatar
            size="lg"
            online={true}
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=profile"
            alt="User Profile"
          />
          <div>
            <h3 className="font-bold">Sarah Johnson</h3>
            <p className="text-sm opacity-70">Frontend Developer</p>
            <Badge variant="success" size="sm">Online</Badge>
          </div>
        </div>
      </div>

      {/* Comment Thread */}
      <div className="space-y-3">
        <h4 className="font-semibold">Recent Comments</h4>

        <div className="flex gap-3">
          <Avatar
            size="sm"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=comment1"
            alt="Commenter 1"
          />
          <div className="flex-1">
            <div className="bg-base-200 rounded-lg p-3">
              <p className="font-semibold text-sm">Alex Chen</p>
              <p className="text-sm">Great work on this feature! 👍</p>
            </div>
            <p className="text-xs opacity-50 mt-1">2 minutes ago</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Avatar
            size="sm"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=comment2"
            alt="Commenter 2"
          />
          <div className="flex-1">
            <div className="bg-base-200 rounded-lg p-3">
              <p className="font-semibold text-sm">Morgan Taylor</p>
              <p className="text-sm">Thanks for the quick fix!</p>
            </div>
            <p className="text-xs opacity-50 mt-1">5 minutes ago</p>
          </div>
        </div>
      </div>

      {/* Team Collaboration */}
      <div className="card bg-base-200 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold">Project Team</h4>
            <p className="text-sm opacity-70">8 members</p>
          </div>
          <AvatarGroup>
            <Avatar
              size="sm"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=member1"
              alt="Member 1"
            />
            <Avatar
              size="sm"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=member2"
              alt="Member 2"
            />
            <Avatar
              size="sm"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=member3"
              alt="Member 3"
            />
            <AvatarPlaceholder size="sm">
              <span className="text-xs">+5</span>
            </AvatarPlaceholder>
          </AvatarGroup>
        </div>
        <Button size="sm" style="outline" className="w-full mt-3">
          View All Members
        </Button>
      </div>

      {/* User List */}
      <div className="space-y-2">
        <h4 className="font-semibold">Active Users</h4>

        {[
          { name: 'Emma Wilson', status: 'Designer', online: true, seed: 'emma' },
          { name: 'James Rodriguez', status: 'Developer', online: true, seed: 'james' },
          { name: 'Lisa Park', status: 'Manager', online: false, seed: 'lisa' },
        ].map((user) => (
          <div key={user.name} className="flex items-center gap-3 p-2 hover:bg-base-200 rounded">
            <Avatar
              size="sm"
              online={user.online}
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.seed}`}
              alt={user.name}
            />
            <div className="flex-1">
              <p className="font-medium text-sm">{user.name}</p>
              <p className="text-xs opacity-70">{user.status}</p>
            </div>
            <div className={`w-2 h-2 rounded-full ${user.online ? 'bg-success' : 'bg-gray-300'}`}></div>
          </div>
        ))}
      </div>
    </div>
  ),
};