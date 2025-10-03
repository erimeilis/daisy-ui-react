import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Swap,
  IconSwap,
  ThemeSwap,
  MenuSwap,
  PlayPauseSwap
} from '../components/ui/swap';
import {
  IconHeartFilled,
  IconHeart,
  IconSun,
  IconMoon,
  IconMenu2,
  IconX,
  IconPlayerPlay,
  IconPlayerPause,
  IconVolume,
  IconVolumeOff,
  IconThumbDown,
  IconThumbUp
} from '@tabler/icons-react';

const meta: Meta<typeof Swap> = {
  title: 'UI/Swap',
  component: Swap,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Swap component for toggling between two states with smooth animations. Perfect for like/unlike, theme switching, menu hamburger, and play/pause controls.',
      },
    },
  },
  argTypes: {
    animation: {
      control: 'select',
      options: ['default', 'rotate', 'flip'],
      description: 'The animation type for the swap transition',
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'active'],
      description: 'How the swap is triggered',
    },
    active: {
      control: 'boolean',
      description: 'Whether the swap is in active state',
    },
  },
  args: {
    animation: 'default',
    trigger: 'click',
    active: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic swap with custom content
export const BasicSwap: Story = {
  render: function Component() {
    const [isActive, setIsActive] = React.useState(false);

    return (
      <Swap
        active={isActive}
        onClick={() => setIsActive(!isActive)}
        className="cursor-pointer"
      >
        <div className="swap-off">👍</div>
        <div className="swap-on">👎</div>
      </Swap>
    );
  },
};

// Like/Unlike button
export const LikeButton: Story = {
  render: function Component() {
    const [liked, setLiked] = React.useState(false);

    return (
      <div className="text-center">
        <Swap
          active={liked}
          onClick={() => setLiked(!liked)}
          className="cursor-pointer text-2xl"
        >
          <IconHeart className="swap-off w-8 h-8 text-gray-400 hover:text-red-500 transition-colors" />
          <IconHeartFilled className="swap-on w-8 h-8 text-red-500" />
        </Swap>
        <p className="mt-2 text-sm">{liked ? 'Liked!' : 'Click to like'}</p>
      </div>
    );
  },
};

// Theme switcher with rotate animation
export const ThemeToggle: Story = {
  render: function Component() {
    const [isDark, setIsDark] = React.useState(false);

    return (
      <div className="text-center">
        <Swap
          animation="rotate"
          active={isDark}
          onClick={() => setIsDark(!isDark)}
          className="cursor-pointer"
        >
          <IconSun className="swap-off w-8 h-8 text-yellow-500" />
          <IconMoon className="swap-on w-8 h-8 text-blue-500" />
        </Swap>
        <p className="mt-2 text-sm">{isDark ? 'Dark Mode' : 'Light Mode'}</p>
      </div>
    );
  },
};

// Hamburger menu with flip animation
export const HamburgerMenu: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div className="text-center">
        <Swap
          animation="flip"
          active={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        >
          <IconMenu2 className="swap-off w-8 h-8" />
          <IconX className="swap-on w-8 h-8" />
        </Swap>
        <p className="mt-2 text-sm">{isOpen ? 'Close Menu' : 'Open Menu'}</p>
      </div>
    );
  },
};

// Play/Pause button
export const PlayPause: Story = {
  render: function Component() {
    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
      <div className="text-center">
        <Swap
          active={isPlaying}
          onClick={() => setIsPlaying(!isPlaying)}
          className="cursor-pointer btn btn-circle btn-primary"
        >
          <IconPlayerPlay className="swap-off w-6 h-6" />
          <IconPlayerPause className="swap-on w-6 h-6" />
        </Swap>
        <p className="mt-2 text-sm">{isPlaying ? 'Playing...' : 'Paused'}</p>
      </div>
    );
  },
};

// Volume toggle
export const VolumeToggle: Story = {
  render: function Component() {
    const [isMuted, setIsMuted] = React.useState(false);

    return (
      <div className="text-center">
        <Swap
          active={isMuted}
          onClick={() => setIsMuted(!isMuted)}
          className="cursor-pointer"
        >
          <IconVolume className="swap-off w-8 h-8 text-green-500" />
          <IconVolumeOff className="swap-off w-8 h-8 text-red-500" />
        </Swap>
        <p className="mt-2 text-sm">{isMuted ? 'Muted' : 'Volume On'}</p>
      </div>
    );
  },
};

// Text swap
export const TextSwapStory: Story = {
  render: function Component() {
    const [showMore, setShowMore] = React.useState(false);

    return (
      <div className="text-center max-w-xs">
        <div className="mb-4">
          <p>
            This is a short preview text.
            <Swap
              active={showMore}
              onClick={() => setShowMore(!showMore)}
              className="cursor-pointer inline-block ml-1"
            >
              <span className="swap-off text-primary underline">Show more</span>
              <span className="swap-on text-primary underline">Show less</span>
            </Swap>
          </p>
          {showMore && (
            <p className="mt-2 text-sm opacity-70">
              Here is the additional content that was hidden before. You can toggle this visibility using the swap component.
            </p>
          )}
        </div>
      </div>
    );
  },
};

// Hover trigger
export const HoverTrigger: Story = {
  render: () => (
    <div className="text-center">
      <Swap
        trigger="hover"
        className="cursor-pointer"
      >
        <div className="swap-off btn btn-primary">Hover me</div>
        <div className="swap-on btn btn-secondary">I'm hovered!</div>
      </Swap>
      <p className="mt-2 text-sm">Hover to see the swap</p>
    </div>
  ),
};

// All animations showcase
export const AnimationTypes: Story = {
  render: function Component() {
    const [states, setStates] = React.useState({
      default: false,
      rotate: false,
      flip: false
    });

    const toggleState = (type: keyof typeof states) => {
      setStates(prev => ({ ...prev, [type]: !prev[type] }));
    };

    return (
      <div className="flex gap-8 items-center">
        <div className="text-center">
          <Swap
            animation="default"
            active={states.default}
            onClick={() => toggleState('default')}
            className="cursor-pointer"
          >
            <IconThumbUp className="swap-off w-8 h-8 text-green-500" />
            <IconThumbDown className="swap-on w-8 h-8 text-red-500" />
          </Swap>
          <p className="mt-2 text-sm">Default</p>
        </div>

        <div className="text-center">
          <Swap
            animation="rotate"
            active={states.rotate}
            onClick={() => toggleState('rotate')}
            className="cursor-pointer"
          >
            <IconSun className="swap-off w-8 h-8 text-yellow-500" />
            <IconMoon className="swap-on w-8 h-8 text-blue-500" />
          </Swap>
          <p className="mt-2 text-sm">Rotate</p>
        </div>

        <div className="text-center">
          <Swap
            animation="flip"
            active={states.flip}
            onClick={() => toggleState('flip')}
            className="cursor-pointer"
          >
            <IconMenu2 className="swap-off w-8 h-8" />
            <IconX className="swap-on w-8 h-8" />
          </Swap>
          <p className="mt-2 text-sm">Flip</p>
        </div>
      </div>
    );
  },
};

// Predefined swap components showcase
export const PredefinedComponents: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Predefined Swap Components</h3>
      </div>

      <div className="flex gap-8 items-center justify-center flex-wrap">
        <div className="text-center">
          <ThemeSwap />
          <p className="mt-2 text-sm">Theme Swap</p>
        </div>

        <div className="text-center">
          <MenuSwap />
          <p className="mt-2 text-sm">Menu Swap</p>
        </div>

        <div className="text-center">
          <PlayPauseSwap />
          <p className="mt-2 text-sm">Play/Pause Swap</p>
        </div>

        <div className="text-center">
          <IconSwap
            offIcon={<IconHeart className="w-6 h-6" />}
            onIcon={<IconHeartFilled className="w-6 h-6" />}
          />
          <p className="mt-2 text-sm">Icon Swap</p>
        </div>
      </div>
    </div>
  ),
};