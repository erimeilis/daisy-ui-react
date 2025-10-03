import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chat, SimpleChatBubble } from '@/components/ui/chat';
import type { ChatMessage } from '@/components/ui/chat';

const meta: Meta<typeof Chat> = {
  title: 'UI/Chat',
  component: Chat,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Chat component for displaying conversation messages with support for avatars, timestamps, different colors, and positions.',
      },
    },
  },
  argTypes: {
    showAvatars: {
      control: 'boolean',
      description: 'Whether to show avatars',
    },
    showTimestamps: {
      control: 'boolean',
      description: 'Whether to show timestamps',
    },
    showNames: {
      control: 'boolean',
      description: 'Whether to show sender names',
    },
    defaultAvatar: {
      control: 'text',
      description: 'Default avatar URL for messages without custom avatars',
    },
  },
  args: {
    showAvatars: true,
    showTimestamps: true,
    showNames: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const sampleMessages: ChatMessage[] = [
  {
    id: '1',
    content: 'Hello! How can I help you today?',
    sender: {
      name: 'Support Agent',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    position: 'start',
    color: 'primary',
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    content: 'I need help with my account settings.',
    sender: {
      name: 'You',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    position: 'end',
    timestamp: '10:31 AM',
  },
  {
    id: '3',
    content: 'Of course! I can help you with that. What specific settings would you like to change?',
    sender: {
      name: 'Support Agent',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    position: 'start',
    color: 'primary',
    timestamp: '10:32 AM',
  },
];

const longConversation: ChatMessage[] = [
  {
    id: '1',
    content: 'Welcome to our support chat! How can I assist you today?',
    sender: { name: 'Bot', avatar: 'https://i.pravatar.cc/150?img=3' },
    position: 'start',
    color: 'info',
    timestamp: '9:00 AM',
  },
  {
    id: '2',
    content: 'Hi! I\'m having trouble with my order.',
    sender: { name: 'Customer', avatar: 'https://i.pravatar.cc/150?img=4' },
    position: 'end',
    timestamp: '9:01 AM',
  },
  {
    id: '3',
    content: 'I\'m sorry to hear that. Let me connect you with a human agent.',
    sender: { name: 'Bot', avatar: 'https://i.pravatar.cc/150?img=3' },
    position: 'start',
    color: 'info',
    timestamp: '9:02 AM',
  },
  {
    id: '4',
    content: 'Hello! I\'m Sarah, and I\'ll be helping you today. What seems to be the issue with your order?',
    sender: { name: 'Sarah', avatar: 'https://i.pravatar.cc/150?img=5' },
    position: 'start',
    color: 'success',
    timestamp: '9:05 AM',
  },
  {
    id: '5',
    content: 'Great! My order #12345 hasn\'t arrived yet, and it was supposed to be delivered yesterday.',
    sender: { name: 'Customer', avatar: 'https://i.pravatar.cc/150?img=4' },
    position: 'end',
    timestamp: '9:06 AM',
  },
  {
    id: '6',
    content: 'Let me check that for you right away. One moment please...',
    sender: { name: 'Sarah', avatar: 'https://i.pravatar.cc/150?img=5' },
    position: 'start',
    color: 'success',
    timestamp: '9:07 AM',
  },
  {
    id: '7',
    content: 'I found your order! It looks like there was a delay in shipping due to weather conditions. Your package is currently out for delivery and should arrive today by 6 PM.',
    sender: { name: 'Sarah', avatar: 'https://i.pravatar.cc/150?img=5' },
    position: 'start',
    color: 'success',
    timestamp: '9:10 AM',
    footer: 'Delivered • Read',
  },
  {
    id: '8',
    content: 'That\'s a relief! Thank you so much for checking. Is there any way to track it?',
    sender: { name: 'Customer', avatar: 'https://i.pravatar.cc/150?img=4' },
    position: 'end',
    timestamp: '9:11 AM',
  },
  {
    id: '9',
    content: 'Absolutely! I\'ve sent the tracking link to your email. You can also track it here: TR123456789US',
    sender: { name: 'Sarah', avatar: 'https://i.pravatar.cc/150?img=5' },
    position: 'start',
    color: 'success',
    timestamp: '9:12 AM',
  },
];

// Basic chat
export const Default: Story = {
  args: {
    messages: sampleMessages,
  },
};

// Without avatars
export const WithoutAvatars: Story = {
  args: {
    messages: sampleMessages,
    showAvatars: false,
  },
};

// Without timestamps
export const WithoutTimestamps: Story = {
  args: {
    messages: sampleMessages,
    showTimestamps: false,
  },
};

// Without names
export const WithoutNames: Story = {
  args: {
    messages: sampleMessages,
    showNames: false,
  },
};

// Minimal chat (no avatars, names, or timestamps)
export const Minimal: Story = {
  args: {
    messages: sampleMessages,
    showAvatars: false,
    showTimestamps: false,
    showNames: false,
  },
};

// Different bubble colors
export const BubbleColors: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Chat
        messages={[
          {
            id: '1',
            content: 'Primary message',
            sender: { name: 'User' },
            position: 'start',
            color: 'primary',
          },
          {
            id: '2',
            content: 'Secondary message',
            sender: { name: 'User' },
            position: 'start',
            color: 'secondary',
          },
          {
            id: '3',
            content: 'Accent message',
            sender: { name: 'User' },
            position: 'start',
            color: 'accent',
          },
          {
            id: '4',
            content: 'Info message',
            sender: { name: 'User' },
            position: 'start',
            color: 'info',
          },
          {
            id: '5',
            content: 'Success message',
            sender: { name: 'User' },
            position: 'start',
            color: 'success',
          },
          {
            id: '6',
            content: 'Warning message',
            sender: { name: 'User' },
            position: 'start',
            color: 'warning',
          },
          {
            id: '7',
            content: 'Error message',
            sender: { name: 'User' },
            position: 'start',
            color: 'error',
          },
        ]}
        showAvatars={false}
        showTimestamps={false}
      />
    </div>
  ),
};

// Different positions
export const Positions: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Chat
        messages={[
          {
            id: '1',
            content: 'Message from start position (left)',
            sender: { name: 'Other' },
            position: 'start',
            color: 'primary',
          },
          {
            id: '2',
            content: 'Message from end position (right)',
            sender: { name: 'You' },
            position: 'end',
          },
          {
            id: '3',
            content: 'Another start message',
            sender: { name: 'Other' },
            position: 'start',
            color: 'secondary',
          },
          {
            id: '4',
            content: 'Another end message',
            sender: { name: 'You' },
            position: 'end',
          },
        ]}
        showAvatars={false}
        showTimestamps={false}
      />
    </div>
  ),
};

// Long conversation
export const LongConversation: Story = {
  render: () => (
    <div className="w-96 max-h-96 overflow-y-auto border rounded-lg p-4">
      <Chat messages={longConversation} />
    </div>
  ),
};

// With rich content
export const RichContent: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Chat
        messages={[
          {
            id: '1',
            content: (
              <div>
                <p>Here's your order summary:</p>
                <div className="mt-2 p-2 bg-base-200 rounded">
                  <strong>Order #12345</strong>
                  <br />
                  Total: $99.99
                  <br />
                  Status: Shipped
                </div>
              </div>
            ),
            sender: { name: 'Support', avatar: 'https://i.pravatar.cc/150?img=6' },
            position: 'start',
            color: 'info',
            timestamp: '2:30 PM',
          },
          {
            id: '2',
            content: (
              <div>
                <p>Perfect! Thanks for the summary.</p>
                <div className="flex gap-2 mt-2">
                  <button className="btn btn-xs btn-primary">Track Order</button>
                  <button className="btn btn-xs btn-ghost">Download Receipt</button>
                </div>
              </div>
            ),
            sender: { name: 'You', avatar: 'https://i.pravatar.cc/150?img=7' },
            position: 'end',
            timestamp: '2:31 PM',
          },
        ]}
      />
    </div>
  ),
};

// With default avatar fallback
export const DefaultAvatarFallback: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Chat
        messages={[
          {
            id: '1',
            content: 'I have a custom avatar',
            sender: { name: 'User with Avatar', avatar: 'https://i.pravatar.cc/150?img=8' },
            position: 'start',
            color: 'primary',
          },
          {
            id: '2',
            content: 'I use the default avatar',
            sender: { name: 'User without Avatar' },
            position: 'end',
          },
          {
            id: '3',
            content: 'I also use the default avatar',
            sender: { name: 'Another User' },
            position: 'start',
            color: 'secondary',
          },
        ]}
        defaultAvatar="https://i.pravatar.cc/150?img=9"
        showTimestamps={false}
      />
    </div>
  ),
};

// Group chat simulation
export const GroupChat: Story = {
  render: function Component() {
    const [messages, setMessages] = React.useState<ChatMessage[]>([
      {
        id: '1',
        content: 'Hey everyone! How\'s the project going?',
        sender: { name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=10' },
        position: 'start',
        color: 'primary',
        timestamp: '10:00 AM',
      },
      {
        id: '2',
        content: 'Going great! Just finished the frontend components.',
        sender: { name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=11' },
        position: 'start',
        color: 'success',
        timestamp: '10:01 AM',
      },
      {
        id: '3',
        content: 'Nice work Bob! I\'m working on the backend API.',
        sender: { name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=12' },
        position: 'start',
        color: 'info',
        timestamp: '10:02 AM',
      },
    ]);

    const addMessage = () => {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        content: 'This is a new message!',
        sender: { name: 'You', avatar: 'https://i.pravatar.cc/150?img=13' },
        position: 'end',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, newMessage]);
    };

    return (
      <div className="w-96 space-y-4">
        <div className="max-h-80 overflow-y-auto border rounded-lg p-4">
          <Chat messages={messages} />
        </div>
        <button className="btn btn-primary w-full" onClick={addMessage}>
          Send Message
        </button>
      </div>
    );
  },
};

// Individual messages displayed in Chat component
export const IndividualMessage: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="font-semibold mb-4">Individual Chat Messages:</h3>
      <Chat
        messages={[
          {
            id: '1',
            content: 'This is a standalone chat message',
            sender: { name: 'John', avatar: 'https://i.pravatar.cc/150?img=14' },
            position: 'start',
            color: 'primary',
            timestamp: '3:00 PM',
          },
          {
            id: '2',
            content: 'Another standalone message',
            sender: { name: 'Jane' },
            position: 'end',
            timestamp: '3:01 PM',
          },
        ]}
        showAvatars
        showTimestamps
        showNames
      />
    </div>
  ),
};

// Simple chat bubbles
export const SimpleBubbles: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <h3 className="font-semibold">Simple Chat Bubbles:</h3>
      <div className="space-y-2">
        <div className="chat chat-start">
          <SimpleChatBubble color="primary">
            Simple bubble with primary color
          </SimpleChatBubble>
        </div>
        <div className="chat chat-end">
          <SimpleChatBubble color="secondary">
            Simple bubble with secondary color
          </SimpleChatBubble>
        </div>
        <div className="chat chat-start">
          <SimpleChatBubble color="accent">
            Simple bubble with accent color
          </SimpleChatBubble>
        </div>
      </div>
    </div>
  ),
};

// Chat variations showcase
export const Showcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
      <div>
        <h3 className="font-semibold mb-4">Customer Support Chat</h3>
        <div className="border rounded-lg p-4 max-h-80 overflow-y-auto">
          <Chat
            messages={[
              {
                id: '1',
                content: 'Hello! Welcome to our support. How can I help you today?',
                sender: { name: 'Support Bot', avatar: 'https://i.pravatar.cc/150?img=15' },
                position: 'start',
                color: 'info',
                timestamp: '9:00 AM',
              },
              {
                id: '2',
                content: 'Hi! I need help with my billing.',
                sender: { name: 'Customer' },
                position: 'end',
                timestamp: '9:01 AM',
              },
              {
                id: '3',
                content: 'I\'ll connect you with our billing specialist right away.',
                sender: { name: 'Support Bot', avatar: 'https://i.pravatar.cc/150?img=15' },
                position: 'start',
                color: 'info',
                timestamp: '9:02 AM',
              },
              {
                id: '4',
                content: 'Hi there! I\'m here to help with your billing questions.',
                sender: { name: 'Billing Specialist', avatar: 'https://i.pravatar.cc/150?img=16' },
                position: 'start',
                color: 'success',
                timestamp: '9:05 AM',
              },
            ]}
          />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Team Chat</h3>
        <div className="border rounded-lg p-4 max-h-80 overflow-y-auto">
          <Chat
            messages={[
              {
                id: '1',
                content: 'Daily standup in 5 minutes!',
                sender: { name: 'Team Lead', avatar: 'https://i.pravatar.cc/150?img=17' },
                position: 'start',
                color: 'warning',
                timestamp: '9:55 AM',
              },
              {
                id: '2',
                content: 'On my way!',
                sender: { name: 'Developer 1' },
                position: 'end',
                timestamp: '9:56 AM',
              },
              {
                id: '3',
                content: 'Same here, joining now.',
                sender: { name: 'Developer 2', avatar: 'https://i.pravatar.cc/150?img=18' },
                position: 'start',
                timestamp: '9:57 AM',
              },
              {
                id: '4',
                content: 'Great! See you all in the meeting room.',
                sender: { name: 'Team Lead', avatar: 'https://i.pravatar.cc/150?img=17' },
                position: 'start',
                color: 'success',
                timestamp: '9:58 AM',
              },
            ]}
            showTimestamps={false}
          />
        </div>
      </div>
    </div>
  ),
};