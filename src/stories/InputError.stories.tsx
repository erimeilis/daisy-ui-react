import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import InputError from '../components/form/input-error';
import { Input } from '../components/form/input';
import { Textarea } from '../components/form/textarea';
import { Select } from '../components/form/select';
import { Button } from '../components/form/button';

const meta: Meta<typeof InputError> = {
  title: 'Form/InputError',
  component: InputError,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'InputError component for displaying validation error messages with an error icon.',
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'The error message to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    message: 'This field is required',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic error message
export const Default: Story = {
  args: {
    message: 'This field is required',
  },
};

// Different error messages
export const DifferentMessages: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <h4 className="font-medium mb-2">Validation Errors:</h4>
        <div className="space-y-2">
          <InputError message="This field is required" />
          <InputError message="Email address is invalid" />
          <InputError message="Password must be at least 8 characters" />
          <InputError message="Passwords do not match" />
          <InputError message="Username is already taken" />
        </div>
      </div>
    </div>
  ),
};

// Long error messages
export const LongMessages: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <h4 className="font-medium mb-2">Long Error Messages:</h4>
        <div className="space-y-2">
          <InputError message="Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters" />
          <InputError message="The file you're trying to upload is too large. Please choose a file smaller than 10MB and try again." />
          <InputError message="Your session has expired due to inactivity. Please log in again to continue using the application." />
        </div>
      </div>
    </div>
  ),
};

// With form inputs
export const WithInputs: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h4 className="font-medium mb-4">Form with Validation Errors:</h4>
        <div className="space-y-4">
          <div>
            <Input placeholder="Email address" />
            <InputError message="Please enter a valid email address" />
          </div>

          <div>
            <Input type="password" placeholder="Password" />
            <InputError message="Password must be at least 8 characters long" />
          </div>

          <div>
            <Input type="password" placeholder="Confirm password" />
            <InputError message="Passwords do not match" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// With different form elements
export const WithDifferentElements: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h4 className="font-medium mb-4">Various Form Elements with Errors:</h4>
        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <Input placeholder="Enter your full name" />
            <InputError message="Name must contain at least 2 characters" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <Select>
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </Select>
            <InputError message="Please select your country" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Bio</span>
            </label>
            <Textarea placeholder="Tell us about yourself" rows={3} />
            <InputError message="Bio must be between 10 and 500 characters" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Registration form example
export const RegistrationForm: Story = {
  render: function Component() {
    const [formData, setFormData] = React.useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [submitted, setSubmitted] = React.useState(false);

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!formData.username.trim()) {
        newErrors.username = 'Username is required';
      } else if (formData.username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters';
      }

      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email address is invalid';
      }

      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      if (validateForm()) {
        alert('Registration successful!');
      }
    };

    const handleChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      if (submitted) {
        // Re-validate on change after submission
        setTimeout(validateForm, 0);
      }
    };

    return (
      <div className="w-80">
        <h4 className="font-medium mb-4">User Registration</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <Input
              placeholder="Choose a username"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
            />
            {errors.username && <InputError message={errors.username} />}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            {errors.email && <InputError message={errors.email} />}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <Input
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
            {errors.password && <InputError message={errors.password} />}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <Input
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
            />
            {errors.confirmPassword && <InputError message={errors.confirmPassword} />}
          </div>

          <Button type="submit" color="primary" modifier="block">
            Create Account
          </Button>
        </form>
      </div>
    );
  },
};

// Contact form with validation
export const ContactForm: Story = {
  render: function Component() {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [touched, setTouched] = React.useState<Record<string, boolean>>({});

    const validateField = (field: string, value: string) => {
      switch (field) {
        case 'name':
          if (!value.trim()) return 'Name is required';
          if (value.trim().length < 2) return 'Name must be at least 2 characters';
          break;
        case 'email':
          if (!value.trim()) return 'Email is required';
          if (!/\S+@\S+\.\S+/.test(value)) return 'Email address is invalid';
          break;
        case 'subject':
          if (!value.trim()) return 'Subject is required';
          break;
        case 'message':
          if (!value.trim()) return 'Message is required';
          if (value.trim().length < 10) return 'Message must be at least 10 characters';
          break;
      }
      return '';
    };

    const handleChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));

      if (touched[field]) {
        const error = validateField(field, value);
        setErrors(prev => ({ ...prev, [field]: error }));
      }
    };

    const handleBlur = (field: string) => {
      setTouched(prev => ({ ...prev, [field]: true }));
      const error = validateField(field, formData[field as keyof typeof formData]);
      setErrors(prev => ({ ...prev, [field]: error }));
    };

    return (
      <div className="w-80">
        <h4 className="font-medium mb-4">Contact Us</h4>
        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <Input
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
            />
            {errors.name && <InputError message={errors.name} />}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
            />
            {errors.email && <InputError message={errors.email} />}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <Input
              placeholder="What is this about?"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              onBlur={() => handleBlur('subject')}
            />
            {errors.subject && <InputError message={errors.subject} />}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <Textarea
              placeholder="Type your message here..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
            />
            {errors.message && <InputError message={errors.message} />}
          </div>

          <Button color="primary" modifier="block">
            Send Message
          </Button>
        </div>
      </div>
    );
  },
};

// Custom styling
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <h4 className="font-medium mb-4">Custom Styled Errors:</h4>
        <div className="space-y-4">
          <div>
            <Input placeholder="Input with custom error" />
            <InputError
              message="Custom styled error message"
              className="bg-red-100 text-red-800 border-red-300"
            />
          </div>

          <div>
            <Input placeholder="Input with larger error" />
            <InputError
              message="Larger error message"
              className="text-sm p-2"
            />
          </div>

          <div>
            <Input placeholder="Input with centered error" />
            <InputError
              message="Centered error message"
              className="justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// No error state
export const NoError: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <h4 className="font-medium mb-4">Form without Errors:</h4>
        <div className="space-y-4">
          <div>
            <Input placeholder="Valid input" />
            <InputError message="" />
          </div>

          <div>
            <Input placeholder="Another valid input" />
            <InputError />
          </div>

          <div>
            <Input placeholder="Third valid input" />
            {/* No InputError component - this is also valid */}
          </div>
        </div>
      </div>
    </div>
  ),
};

// Multiple errors
export const MultipleErrors: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <h4 className="font-medium mb-4">Field with Multiple Validation Issues:</h4>
        <div>
          <Input placeholder="Password with multiple issues" type="password" />
          <div className="space-y-1">
            <InputError message="Password is too short" />
            <InputError message="Password must contain uppercase letters" />
            <InputError message="Password must contain numbers" />
            <InputError message="Password must contain special characters" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Real-time validation
export const RealTimeValidation: Story = {
  render: function Component() {
    const [password, setPassword] = React.useState('');

    const getPasswordErrors = (pwd: string) => {
      const errors = [];
      if (pwd.length < 8) errors.push('Must be at least 8 characters');
      if (!/[A-Z]/.test(pwd)) errors.push('Must contain uppercase letter');
      if (!/[a-z]/.test(pwd)) errors.push('Must contain lowercase letter');
      if (!/\d/.test(pwd)) errors.push('Must contain a number');
      if (!/[!@#$%^&*]/.test(pwd)) errors.push('Must contain special character');
      return errors;
    };

    const errors = getPasswordErrors(password);

    return (
      <div className="w-80">
        <h4 className="font-medium mb-4">Real-time Password Validation:</h4>
        <div>
          <label className="label">
            <span className="label-text">Create Password</span>
          </label>
          <Input
            type="password"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="space-y-1 mt-1">
            {errors.map((error, index) => (
              <InputError key={index} message={error} />
            ))}
            {password && errors.length === 0 && (
              <div className="badge badge-success badge-sm mt-1">
                Password is strong!
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
};