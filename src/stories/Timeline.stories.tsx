import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Timeline } from '../components/data-display/timeline';
import {
  IconCheck,
  IconClock,
  IconTruck,
  IconPackage,
  IconUser,
  IconCalendar,
  IconMessage,
  IconX,
  IconAlertTriangle,
  IconShoppingCart,
  IconStar
} from '@tabler/icons-react';

const meta: Meta<typeof Timeline> = {
  title: 'Data Display/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Timeline component for displaying chronological events and processes. Perfect for order tracking, service history, and activity feeds.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the timeline',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'The alignment of the timeline (for vertical orientation)',
    },
    snap: {
      control: 'select',
      options: ['none', 'start', 'center', 'end'],
      description: 'Snap behavior for timeline items',
    },
    showTimestamps: {
      control: 'boolean',
      description: 'Whether to show timestamps',
    },
    showIcons: {
      control: 'boolean',
      description: 'Whether to show icons',
    },
  },
  args: {
    orientation: 'vertical',
    align: 'start',
    snap: 'none',
    showTimestamps: true,
    showIcons: true,
    events: [
      {
        id: '1',
        title: 'Order Placed',
        description: 'Your order has been received',
        timestamp: '2023-01-01 10:00 AM',
        status: 'success' as const,
        icon: <IconShoppingCart className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'Processing',
        description: 'Order is being prepared',
        timestamp: '2023-01-01 11:30 AM',
        status: 'primary' as const,
        icon: <IconPackage className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'Shipped',
        description: 'Package is on its way',
        timestamp: '2023-01-01 2:00 PM',
        status: 'info' as const,
        icon: <IconTruck className="w-4 h-4" />
      }
    ]
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic timeline
export const Basic: Story = {};

// Order tracking timeline
export const OrderTracking: Story = {
  args: {
    events: [
      {
        id: '1',
        title: 'Order Placed',
        description: 'Your order #12345 has been confirmed',
        timestamp: 'Jan 15, 2024 10:30 AM',
        status: 'success',
        icon: <IconShoppingCart className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'Payment Confirmed',
        description: 'Payment of $129.99 has been processed',
        timestamp: 'Jan 15, 2024 10:31 AM',
        status: 'success',
        icon: <IconCheck className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'Order Processing',
        description: 'Your items are being prepared for shipment',
        timestamp: 'Jan 15, 2024 2:15 PM',
        status: 'primary',
        icon: <IconPackage className="w-4 h-4" />
      },
      {
        id: '4',
        title: 'Shipped',
        description: 'Package dispatched via FedEx (Tracking: 1Z234567890)',
        timestamp: 'Jan 16, 2024 9:00 AM',
        status: 'info',
        icon: <IconTruck className="w-4 h-4" />
      },
      {
        id: '5',
        title: 'Out for Delivery',
        description: 'Your package is on the delivery truck',
        timestamp: 'Jan 17, 2024 8:30 AM',
        status: 'warning',
        icon: <IconClock className="w-4 h-4" />
      },
      {
        id: '6',
        title: 'Delivered',
        description: 'Package delivered to your doorstep',
        timestamp: 'Jan 17, 2024 3:45 PM',
        status: 'default',
        icon: <IconCheck className="w-4 h-4" />
      }
    ]
  }
};

// Project milestones
export const ProjectMilestones: Story = {
  args: {
    events: [
      {
        id: '1',
        title: 'Project Kickoff',
        description: 'Initial planning and team assembly completed',
        timestamp: 'Q1 2024',
        status: 'success',
        icon: <IconCheck className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'Design Phase',
        description: 'UI/UX designs and wireframes completed',
        timestamp: 'Q1 2024',
        status: 'success',
        icon: <IconCheck className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'Development Sprint 1',
        description: 'Core features and backend infrastructure',
        timestamp: 'Q2 2024',
        status: 'primary',
        icon: <IconClock className="w-4 h-4" />
      },
      {
        id: '4',
        title: 'Testing & QA',
        description: 'Quality assurance and bug fixing phase',
        timestamp: 'Q3 2024',
        status: 'warning',
        icon: <IconAlertTriangle className="w-4 h-4" />
      },
      {
        id: '5',
        title: 'Launch',
        description: 'Product release and marketing campaign',
        timestamp: 'Q4 2024',
        status: 'default',
        icon: <IconStar className="w-4 h-4" />
      }
    ]
  }
};

// Activity feed
export const ActivityFeed: Story = {
  args: {
    events: [
      {
        id: '1',
        title: 'Sarah commented on your post',
        description: 'Great work on the new feature! 👏',
        timestamp: '5 minutes ago',
        status: 'info',
        icon: <IconMessage className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'New team member joined',
        description: 'Alex Chen joined the Frontend team',
        timestamp: '2 hours ago',
        status: 'success',
        icon: <IconUser className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'Meeting reminder',
        description: 'Sprint planning meeting in 30 minutes',
        timestamp: '1 day ago',
        status: 'warning',
        icon: <IconCalendar className="w-4 h-4" />
      },
      {
        id: '4',
        title: 'Code review completed',
        description: 'PR #234 has been approved and merged',
        timestamp: '2 days ago',
        status: 'success',
        icon: <IconCheck className="w-4 h-4" />
      },
      {
        id: '5',
        title: 'Build failed',
        description: 'The latest deployment encountered errors',
        timestamp: '3 days ago',
        status: 'error',
        icon: <IconX className="w-4 h-4" />
      }
    ]
  }
};

// Different statuses
export const StatusVariations: Story = {
  args: {
    events: [
      {
        id: '1',
        title: 'Default Status',
        description: 'This is a default timeline item',
        timestamp: 'Now',
        status: 'default',
        icon: <IconMessage className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'Primary Status',
        description: 'This is a primary timeline item',
        timestamp: '1 min ago',
        status: 'primary',
        icon: <IconMessage className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'Secondary Status',
        description: 'This is a secondary timeline item',
        timestamp: '2 min ago',
        status: 'secondary',
        icon: <IconMessage className="w-4 h-4" />
      },
      {
        id: '4',
        title: 'Success Status',
        description: 'This is a success timeline item',
        timestamp: '3 min ago',
        status: 'success',
        icon: <IconCheck className="w-4 h-4" />
      },
      {
        id: '5',
        title: 'Warning Status',
        description: 'This is a warning timeline item',
        timestamp: '4 min ago',
        status: 'warning',
        icon: <IconAlertTriangle className="w-4 h-4" />
      },
      {
        id: '6',
        title: 'Error Status',
        description: 'This is an error timeline item',
        timestamp: '5 min ago',
        status: 'error',
        icon: <IconX className="w-4 h-4" />
      },
      {
        id: '7',
        title: 'Info Status',
        description: 'This is an info timeline item',
        timestamp: '6 min ago',
        status: 'info',
        icon: <IconMessage className="w-4 h-4" />
      }
    ]
  }
};

// Without timestamps
export const WithoutTimestamps: Story = {
  args: {
    showTimestamps: false,
    events: [
      {
        id: '1',
        title: 'First Step',
        description: 'Complete the initial setup',
        status: 'success',
        icon: <IconCheck className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'Second Step',
        description: 'Configure your preferences',
        status: 'primary',
        icon: <IconClock className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'Final Step',
        description: 'Review and submit',
        status: 'default',
        icon: <IconStar className="w-4 h-4" />
      }
    ]
  }
};

// Without icons
export const WithoutIcons: Story = {
  args: {
    showIcons: false,
    events: [
      {
        id: '1',
        title: 'Account Created',
        description: 'Your account has been successfully created',
        timestamp: 'Jan 1, 2024',
        status: 'success'
      },
      {
        id: '2',
        title: 'Profile Updated',
        description: 'Your profile information has been updated',
        timestamp: 'Jan 5, 2024',
        status: 'info'
      },
      {
        id: '3',
        title: 'Settings Changed',
        description: 'Your notification preferences have been modified',
        timestamp: 'Jan 10, 2024',
        status: 'primary'
      }
    ]
  }
};

// Horizontal timeline
export const Horizontal: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    orientation: 'horizontal',
    events: [
      {
        id: '1',
        title: 'Phase 1',
        description: 'Planning',
        timestamp: 'Q1',
        status: 'success',
        icon: <IconCheck className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'Phase 2',
        description: 'Development',
        timestamp: 'Q2',
        status: 'primary',
        icon: <IconClock className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'Phase 3',
        description: 'Testing',
        timestamp: 'Q3',
        status: 'warning',
        icon: <IconAlertTriangle className="w-4 h-4" />
      },
      {
        id: '4',
        title: 'Phase 4',
        description: 'Launch',
        timestamp: 'Q4',
        status: 'default',
        icon: <IconStar className="w-4 h-4" />
      }
    ]
  },
  render: (args) => (
    <div className="w-full p-8">
      <Timeline {...args} />
    </div>
  )
};

// Complex timeline with rich content
export const Complex: Story = {
  args: {
    events: [
      {
        id: '1',
        title: 'System Update v2.1.0',
        description: (
          <div className="space-y-2">
            <p>Major system update with new features:</p>
            <ul className="list-disc list-inside text-sm">
              <li>Enhanced security protocols</li>
              <li>Improved performance</li>
              <li>New dashboard layout</li>
            </ul>
            <div className="flex gap-2 mt-2">
              <span className="badge badge-success badge-sm">Security</span>
              <span className="badge badge-info badge-sm">Performance</span>
              <span className="badge badge-primary badge-sm">UI</span>
            </div>
          </div>
        ),
        timestamp: 'March 15, 2024 2:00 PM',
        status: 'success',
        icon: <IconCheck className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'Scheduled Maintenance',
        description: (
          <div className="space-y-2">
            <p>Database maintenance and optimization</p>
            <div className="alert alert-warning p-2">
              <IconAlertTriangle className="w-4 h-4" />
              <span className="text-xs">Service may be temporarily unavailable</span>
            </div>
          </div>
        ),
        timestamp: 'March 20, 2024 1:00 AM',
        status: 'warning',
        icon: <IconAlertTriangle className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'New Feature: AI Assistant',
        description: (
          <div className="space-y-2">
            <p>Introducing our new AI-powered assistant to help with your tasks.</p>
            <button className="btn btn-primary btn-xs">Try it now</button>
          </div>
        ),
        timestamp: 'March 25, 2024 10:00 AM',
        status: 'primary',
        icon: <IconStar className="w-4 h-4" />
      }
    ]
  }
};

// Service history timeline
export const ServiceHistory: Story = {
  args: {
    events: [
      {
        id: '1',
        title: 'Service Request Created',
        description: 'Issue reported: Network connectivity problems in Building A',
        timestamp: 'Today, 9:15 AM',
        status: 'info',
        icon: <IconMessage className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'Assigned to Technician',
        description: 'Ticket #SR-2024-001 assigned to John Smith',
        timestamp: 'Today, 9:20 AM',
        status: 'primary',
        icon: <IconUser className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'On-site Investigation',
        description: 'Technician arrived and began diagnosing the issue',
        timestamp: 'Today, 10:30 AM',
        status: 'warning',
        icon: <IconClock className="w-4 h-4" />
      },
      {
        id: '4',
        title: 'Issue Identified',
        description: 'Faulty network switch in server room - replacement required',
        timestamp: 'Today, 11:15 AM',
        status: 'error',
        icon: <IconX className="w-4 h-4" />
      },
      {
        id: '5',
        title: 'Resolution In Progress',
        description: 'New switch installed, testing connectivity',
        timestamp: 'Today, 2:30 PM',
        status: 'primary',
        icon: <IconClock className="w-4 h-4" />
      },
      {
        id: '6',
        title: 'Service Restored',
        description: 'Network connectivity fully restored and verified',
        timestamp: 'Today, 3:00 PM',
        status: 'success',
        icon: <IconCheck className="w-4 h-4" />
      }
    ]
  }
};

// Interactive timeline
export const Interactive: Story = {
  args: {
    events: []
  },
  render: function Component() {
    const [completedSteps, setCompletedSteps] = React.useState(1);

    const handleNextStep = () => {
      if (completedSteps < 4) {
        setCompletedSteps(completedSteps + 1);
      }
    };

    const handleReset = () => {
      setCompletedSteps(1);
    };

    const events = [
      {
        id: '1',
        title: 'Create Account',
        description: 'Sign up with your email address',
        timestamp: completedSteps >= 1 ? 'Completed' : 'Pending',
        status: (completedSteps >= 1 ? 'success' : 'default') as 'success' | 'default',
        icon: completedSteps >= 1 ? <IconCheck className="w-4 h-4" /> : <IconUser className="w-4 h-4" />
      },
      {
        id: '2',
        title: 'Verify Email',
        description: 'Check your inbox and click the verification link',
        timestamp: completedSteps >= 2 ? 'Completed' : 'Pending',
        status: (completedSteps >= 2 ? 'success' : completedSteps === 1 ? 'primary' : 'default') as 'success' | 'primary' | 'default',
        icon: completedSteps >= 2 ? <IconCheck className="w-4 h-4" /> : <IconMessage className="w-4 h-4" />
      },
      {
        id: '3',
        title: 'Setup Profile',
        description: 'Add your personal information and preferences',
        timestamp: completedSteps >= 3 ? 'Completed' : 'Pending',
        status: (completedSteps >= 3 ? 'success' : completedSteps === 2 ? 'primary' : 'default') as 'success' | 'primary' | 'default',
        icon: completedSteps >= 3 ? <IconCheck className="w-4 h-4" /> : <IconUser className="w-4 h-4" />
      },
      {
        id: '4',
        title: 'Welcome!',
        description: 'You\'re all set! Start exploring the platform',
        timestamp: completedSteps >= 4 ? 'Completed' : 'Pending',
        status: (completedSteps >= 4 ? 'success' : completedSteps === 3 ? 'primary' : 'default') as 'success' | 'primary' | 'default',
        icon: completedSteps >= 4 ? <IconCheck className="w-4 h-4" /> : <IconStar className="w-4 h-4" />
      }
    ];

    return (
      <div className="space-y-6 max-w-md">
        <Timeline events={events} />

        <div className="flex gap-2 justify-center">
          <button
            className="btn btn-primary btn-sm"
            onClick={handleNextStep}
            disabled={completedSteps >= 4}
          >
            {completedSteps >= 4 ? 'Complete!' : 'Next Step'}
          </button>
          <button
            className="btn btn-ghost btn-sm"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        <div className="text-center text-sm opacity-70">
          Step {completedSteps} of 4
        </div>
      </div>
    );
  }
};