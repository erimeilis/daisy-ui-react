import type { Meta, StoryObj } from '@storybook/react';
import {
  Textarea,
  TextareaWithLabel,
  AutoResizeTextarea,
  SimpleTextarea,
  CodeTextarea
} from '../components/form/textarea';
import { useState } from 'react';

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile textarea component with multiple variants including auto-resize, label positioning, character counting, and code input support.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the textarea',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the textarea',
    },
    style: {
      control: 'select',
      options: ['default', 'bordered', 'ghost'],
      description: 'The style variant of the textarea',
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
    },
    resizable: {
      control: 'boolean',
      description: 'Allow textarea to be resized',
    },
    characterCount: {
      control: 'boolean',
      description: 'Show character count',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
  },
  args: {
    color: 'default',
    size: 'md',
    style: 'bordered',
    error: false,
    resizable: true,
    characterCount: false,
    disabled: false,
    placeholder: 'Enter your text here...',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    placeholder: 'Enter your message here...',
    rows: 4,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    rows: 4,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    placeholder: 'Describe your project...',
    helperText: 'Provide a detailed description of your project goals.',
    rows: 4,
  },
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <Textarea placeholder="Default" color="default" rows={3} />
      <Textarea placeholder="Primary" color="primary" rows={3} />
      <Textarea placeholder="Secondary" color="secondary" rows={3} />
      <Textarea placeholder="Accent" color="accent" rows={3} />
      <Textarea placeholder="Info" color="info" rows={3} />
      <Textarea placeholder="Success" color="success" rows={3} />
      <Textarea placeholder="Warning" color="warning" rows={3} />
      <Textarea placeholder="Error" color="error" rows={3} />
    </div>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Textarea placeholder="Extra Small" size="xs" rows={2} />
      <Textarea placeholder="Small" size="sm" rows={3} />
      <Textarea placeholder="Medium" size="md" rows={4} />
      <Textarea placeholder="Large" size="lg" rows={4} />
      <Textarea placeholder="Extra Large" size="xl" rows={4} />
    </div>
  ),
};

// Style variations
export const Styles: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Textarea placeholder="Default Style" style="default" rows={3} />
      <Textarea placeholder="Bordered Style" style="bordered" rows={3} />
      <Textarea placeholder="Ghost Style" style="ghost" rows={3} />
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Textarea placeholder="Normal state" rows={3} />
      <Textarea placeholder="Disabled state" disabled rows={3} />
      <Textarea
        placeholder="Error state"
        error
        errorMessage="This field is required"
        rows={3}
      />
      <Textarea
        placeholder="Success state"
        color="success"
        helperText="Looks good!"
        rows={3}
      />
    </div>
  ),
};

// Character counting
export const WithCharacterCount: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Textarea
        label="Short message"
        placeholder="Type a short message..."
        characterCount
        maxLength={100}
        rows={3}
      />
      <Textarea
        label="Tweet"
        placeholder="What's happening?"
        characterCount
        maxLength={280}
        color="primary"
        rows={4}
      />
    </div>
  ),
};

// Resize control
export const ResizeControl: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-2">Resizable (default)</h3>
        <Textarea
          placeholder="You can resize this textarea..."
          resizable
          rows={4}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Non-resizable</h3>
        <Textarea
          placeholder="This textarea cannot be resized..."
          resizable={false}
          rows={4}
        />
      </div>
    </div>
  ),
};

// TextareaWithLabel component variations
export const LabelPositions: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-2">Label on Top</h3>
        <TextareaWithLabel
          label="Project Description"
          placeholder="Describe your project..."
          labelPosition="top"
          required
          rows={4}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Label on Left</h3>
        <TextareaWithLabel
          label="Comments"
          placeholder="Add your comments..."
          labelPosition="left"
          rows={4}
        />
      </div>
    </div>
  ),
};

// Auto-resize textarea
export const AutoResize: Story = {
  render: function Component() {
    const [text, setText] = useState('');

    return (
      <div className="space-y-4 w-full max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2">Auto-resize Textarea</h3>
          <AutoResizeTextarea
            label="Expandable message"
            placeholder="Start typing and watch the textarea grow..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            characterCount
            minRows={3}
            maxRows={8}
            color="primary"
          />
        </div>
        <button
          className="btn btn-outline btn-sm"
          onClick={() => setText('')}
        >
          Clear
        </button>
      </div>
    );
  },
};

// Simple textarea
export const SimpleVariant: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <div>
        <h3 className="text-lg font-semibold mb-2">Simple Textarea</h3>
        <SimpleTextarea
          placeholder="Basic textarea without extra features..."
          rows={4}
          color="primary"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Non-resizable Simple</h3>
        <SimpleTextarea
          placeholder="Fixed size textarea..."
          rows={3}
          resizable={false}
          color="secondary"
        />
      </div>
    </div>
  ),
};

// Code textarea
export const CodeInput: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-2">Code Textarea</h3>
        <CodeTextarea
          placeholder="// Enter your code here..."
          rows={8}
          defaultValue={`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">JSON Input</h3>
        <CodeTextarea
          placeholder="Enter JSON data..."
          rows={6}
          color="accent"
          defaultValue={`{
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}`}
        />
      </div>
    </div>
  ),
};

// Form integration
export const FormExample: Story = {
  render: function Component() {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      comments: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!formData.title.trim()) {
        newErrors.title = 'Title is required';
      }

      if (!formData.description.trim()) {
        newErrors.description = 'Description is required';
      } else if (formData.description.length < 10) {
        newErrors.description = 'Description must be at least 10 characters';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Form submitted successfully!');
      }
    };

    return (
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Project Submission Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextareaWithLabel
              label="Project Title"
              placeholder="Enter project title..."
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              error={!!errors.title}
              errorMessage={errors.title}
              required
              rows={2}
            />

            <AutoResizeTextarea
              label="Project Description"
              placeholder="Describe your project in detail..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              error={!!errors.description}
              errorMessage={errors.description}
              characterCount
              maxLength={500}
              minRows={4}
              maxRows={8}
              color="primary"
            />

            <Textarea
              label="Additional Comments"
              placeholder="Any additional information..."
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              helperText="Optional: Add any extra details"
              rows={3}
              color="secondary"
            />

            <div className="card-actions justify-end">
              <button type="button" className="btn btn-outline">Cancel</button>
              <button type="submit" className="btn btn-primary">Submit Project</button>
            </div>
          </form>
        </div>
      </div>
    );
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blog post editor */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-lg">Blog Post Editor</h3>
            <AutoResizeTextarea
              label="Post Content"
              placeholder="Start writing your blog post..."
              characterCount
              maxLength={2000}
              minRows={6}
              maxRows={15}
              color="primary"
            />
          </div>
        </div>

        {/* Feedback form */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-lg">Customer Feedback</h3>
            <Textarea
              label="Your Feedback"
              placeholder="Tell us about your experience..."
              helperText="Your feedback helps us improve our service"
              characterCount
              maxLength={500}
              rows={5}
              color="accent"
            />
          </div>
        </div>

        {/* Code review */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-lg">Code Review</h3>
            <CodeTextarea
              placeholder="Paste your code for review..."
              rows={8}
              color="info"
            />
          </div>
        </div>

        {/* Contact form */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-lg">Contact Message</h3>
            <TextareaWithLabel
              label="Message"
              placeholder="How can we help you?"
              required
              characterCount
              maxLength={1000}
              rows={6}
              color="success"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};