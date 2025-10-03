import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/form/select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile select dropdown component built with DaisyUI classes, supporting multiple colors, sizes, and states with options array or children.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the select',
    },
    style: {
      control: 'select',
      options: ['default', 'ghost'],
      description: 'The style variant of the select',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the select',
    },
    behaviour: {
      control: 'select',
      options: ['default', 'disabled'],
      description: 'The behavior state of the select',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
  },
  args: {
    color: 'default',
    style: 'default',
    size: 'md',
    behaviour: 'default',
    disabled: false,
    placeholder: 'Choose an option',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
];

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry', disabled: true },
  { value: 'kiwi', label: 'Kiwi' },
];

// Basic usage
export const Default: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const WithPlaceholder: Story = {
  args: {
    options: fruitOptions,
    placeholder: 'Choose your favorite fruit',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: countryOptions,
    defaultValue: 'us',
    placeholder: 'Select a country',
  },
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-96">
      <Select options={countryOptions} placeholder="Default" />
      <Select options={countryOptions} placeholder="Primary" color="primary" />
      <Select options={countryOptions} placeholder="Secondary" color="secondary" />
      <Select options={countryOptions} placeholder="Accent" color="accent" />
      <Select options={countryOptions} placeholder="Info" color="info" />
      <Select options={countryOptions} placeholder="Success" color="success" />
      <Select options={countryOptions} placeholder="Warning" color="warning" />
      <Select options={countryOptions} placeholder="Error" color="error" />
    </div>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Select options={countryOptions} placeholder="Extra Small" size="xs" />
      <Select options={countryOptions} placeholder="Small" size="sm" />
      <Select options={countryOptions} placeholder="Medium" size="md" />
      <Select options={countryOptions} placeholder="Large" size="lg" />
      <Select options={countryOptions} placeholder="Extra Large" size="xl" />
    </div>
  ),
};

// Style variations
export const Styles: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Select options={countryOptions} placeholder="Default Style" style="default" color="primary" />
      <Select options={countryOptions} placeholder="Ghost Style" style="ghost" color="primary" />
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Select options={countryOptions} placeholder="Normal" />
      <Select options={countryOptions} placeholder="Disabled" disabled />
      <Select options={countryOptions} placeholder="With Error" error="Please select a valid option" />
    </div>
  ),
};

// With disabled options
export const WithDisabledOptions: Story = {
  args: {
    options: fruitOptions,
    placeholder: 'Select a fruit (strawberry is out of stock)',
  },
};

// Using children instead of options prop
export const WithChildren: Story = {
  render: () => (
    <Select placeholder="Select a priority" color="primary">
      <option value="low">Low Priority</option>
      <option value="medium">Medium Priority</option>
      <option value="high">High Priority</option>
      <option value="urgent" disabled>Urgent (Not Available)</option>
    </Select>
  ),
};

// Grouped options using children
export const GroupedOptions: Story = {
  render: () => (
    <Select placeholder="Choose a programming language" color="accent" size="lg">
      <optgroup label="Frontend">
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="react">React</option>
        <option value="vue">Vue.js</option>
      </optgroup>
      <optgroup label="Backend">
        <option value="node">Node.js</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="go">Go</option>
      </optgroup>
      <optgroup label="Database">
        <option value="mysql">MySQL</option>
        <option value="postgresql">PostgreSQL</option>
        <option value="mongodb">MongoDB</option>
      </optgroup>
    </Select>
  ),
};

// Controlled component example
export const Controlled: Story = {
  render: function Component() {
    const [selectedValue, setSelectedValue] = useState('');
    const [showValue, setShowValue] = useState(false);

    return (
      <div className="space-y-4 w-80">
        <Select
          options={countryOptions}
          placeholder="Select a country"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          color="primary"
        />
        <button
          className="btn btn-outline btn-sm"
          onClick={() => setShowValue(!showValue)}
        >
          {showValue ? 'Hide Value' : 'Show Selected Value'}
        </button>
        {showValue && (
          <div className="alert alert-info">
            <span>Selected: {selectedValue || 'None'}</span>
          </div>
        )}
      </div>
    );
  },
};

// Form integration example
export const FormExample: Story = {
  render: () => (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">User Preferences</h2>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <Select
            options={countryOptions}
            placeholder="Select your country"
            color="primary"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Favorite Fruit</span>
          </label>
          <Select
            options={fruitOptions}
            placeholder="Choose a fruit"
            color="secondary"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Priority Level</span>
          </label>
          <Select placeholder="Select priority" color="accent">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Save Preferences</button>
        </div>
      </div>
    </div>
  ),
};

// Error state example
export const WithErrorValidation: Story = {
  render: function Component() {
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setCountry(value);

      if (!value) {
        setError('Please select a country');
      } else {
        setError('');
      }
    };

    return (
      <div className="w-80">
        <Select
          options={countryOptions}
          placeholder="Select a country"
          value={country}
          onChange={handleChange}
          error={error}
        />
      </div>
    );
  },
};