import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../components/form/checkbox';
import { Radio } from '../components/form/radio';
import { Toggle } from '../components/form/toggle';
import { Select } from '../components/form/select';
import { Textarea } from '../components/form/textarea';
import { Range } from '../components/form/range';
import { Rating } from '../components/form/rating';
import { Input } from '../components/form/input';
import { Button } from '../components/form/button';

// Create a wrapper component for the story
const FormComponentsShowcase = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    country: '',
    bio: '',
    newsletter: false,
    notifications: 'email',
    darkMode: false,
    volume: 50,
    rating: 3,
    plan: 'basic'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! Check console for data.');
    console.log('Form data:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Form Components Showcase</h1>
        <p className="text-gray-600">Complete collection of DaisyUI form components</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Text Inputs */}
        <div className="card bg-base-200 p-6">
          <h2 className="card-title mb-4">Text Inputs</h2>
          <div className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <Input
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <Input
                type="email"
                color="primary"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Select and Textarea */}
        <div className="card bg-base-200 p-6">
          <h2 className="card-title mb-4">Select & Textarea</h2>
          <div className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <Select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              >
                <option value="" disabled>Choose a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
              </Select>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <Textarea
                placeholder="Tell us about yourself..."
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Checkboxes and Radio */}
        <div className="card bg-base-200 p-6">
          <h2 className="card-title mb-4">Checkboxes & Radio</h2>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Subscribe to newsletter</span>
                <Checkbox
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                />
              </label>
            </div>

            <div>
              <span className="label-text font-semibold">Notification preferences:</span>
              <div className="mt-2 space-y-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Email notifications</span>
                    <Radio
                      name="notifications"
                      value="email"
                      checked={formData.notifications === 'email'}
                      onChange={(e) => setFormData({ ...formData, notifications: e.target.value })}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">SMS notifications</span>
                    <Radio
                      name="notifications"
                      value="sms"
                      checked={formData.notifications === 'sms'}
                      onChange={(e) => setFormData({ ...formData, notifications: e.target.value })}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">No notifications</span>
                    <Radio
                      name="notifications"
                      value="none"
                      checked={formData.notifications === 'none'}
                      onChange={(e) => setFormData({ ...formData, notifications: e.target.value })}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle, Range, Rating */}
        <div className="card bg-base-200 p-6">
          <h2 className="card-title mb-4">Interactive Controls</h2>
          <div className="space-y-6">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Dark mode</span>
                <Toggle
                  checked={formData.darkMode}
                  onChange={(e) => setFormData({ ...formData, darkMode: e.target.checked })}
                />
              </label>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Volume: {formData.volume}%</span>
              </label>
              <Range
                min={0}
                max={100}
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: Number(e.target.value) })}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Rate our service</span>
              </label>
              <Rating
                value={formData.rating}
                onChange={(value) => setFormData({ ...formData, rating: value })}
              />
            </div>
          </div>
        </div>

        {/* Plan Selection */}
        <div className="card bg-base-200 p-6">
          <h2 className="card-title mb-4">Plan Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 'basic', name: 'Basic', price: '$9/mo', features: ['1 user', '10 projects', 'Basic support'] },
              { id: 'pro', name: 'Pro', price: '$19/mo', features: ['5 users', 'Unlimited projects', 'Priority support'] },
              { id: 'enterprise', name: 'Enterprise', price: '$49/mo', features: ['Unlimited users', 'Advanced features', '24/7 support'] }
            ].map((plan) => (
              <div
                key={plan.id}
                className={`card border-2 cursor-pointer transition-colors ${
                  formData.plan === plan.id
                    ? 'border-primary bg-primary/5'
                    : 'border-base-300 hover:border-base-400'
                }`}
                onClick={() => setFormData({ ...formData, plan: plan.id })}
              >
                <div className="card-body p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{plan.name}</h3>
                      <p className="text-2xl font-bold text-primary">{plan.price}</p>
                    </div>
                    <Radio
                      name="plan"
                      value={plan.id}
                      checked={formData.plan === plan.id}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    />
                  </div>
                  <ul className="text-sm space-y-1 mt-2">
                    {plan.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Summary */}
        <div className="card bg-base-300 p-6">
          <h2 className="card-title mb-4">Form Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Personal Info:</strong>
              <ul className="mt-1 space-y-1">
                <li>Name: {formData.name || 'Not provided'}</li>
                <li>Email: {formData.email || 'Not provided'}</li>
                <li>Country: {formData.country || 'Not selected'}</li>
              </ul>
            </div>
            <div>
              <strong>Preferences:</strong>
              <ul className="mt-1 space-y-1">
                <li>Newsletter: {formData.newsletter ? 'Yes' : 'No'}</li>
                <li>Notifications: {formData.notifications}</li>
                <li>Dark mode: {formData.darkMode ? 'On' : 'Off'}</li>
                <li>Volume: {formData.volume}%</li>
                <li>Rating: {formData.rating}/5 stars</li>
                <li>Plan: {formData.plan}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" color="primary" size="lg">
            Submit Form
          </Button>
        </div>
      </form>
    </div>
  );
};

const meta: Meta<typeof FormComponentsShowcase> = {
  title: 'Form/Form Components',
  component: FormComponentsShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive showcase of all DaisyUI form components including inputs, selects, checkboxes, radios, toggles, ranges, and ratings.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllFormComponents: Story = {
  render: () => <FormComponentsShowcase />,
};

// Individual component stories
export const CheckboxVariants: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h3 className="text-lg font-semibold">Checkbox Variants</h3>
      <div className="space-y-3">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Default checkbox</span>
            <Checkbox defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Primary checkbox</span>
            <Checkbox color="primary" defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Secondary checkbox</span>
            <Checkbox color="secondary" defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Accent checkbox</span>
            <Checkbox color="accent" defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Success checkbox</span>
            <Checkbox color="success" defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Warning checkbox</span>
            <Checkbox color="warning" defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Error checkbox</span>
            <Checkbox color="error" defaultChecked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Disabled checkbox</span>
            <Checkbox disabled />
          </label>
        </div>
      </div>
    </div>
  ),
};

export const RadioGroups: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <h3 className="text-lg font-semibold">Radio Button Groups</h3>

      <div>
        <h4 className="font-medium mb-3">Color variants:</h4>
        <div className="space-y-2">
          {['default', 'primary', 'secondary', 'accent', 'success', 'warning', 'error'].map((color) => (
            <div key={color} className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text capitalize">{color} radio</span>
                <Radio
                  name="color-demo"
                  color={color as 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
                  defaultChecked={color === 'primary'}
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">Size variants:</h4>
        <div className="space-y-2">
          {['xs', 'sm', 'md', 'lg'].map((size) => (
            <div key={size} className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Size {size}</span>
                <Radio
                  name="size-demo"
                  size={size as 'xs' | 'sm' | 'md' | 'lg'}
                  defaultChecked={size === 'md'}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const ToggleVariants: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h3 className="text-lg font-semibold">Toggle Variants</h3>
      <div className="space-y-3">
        {['default', 'primary', 'secondary', 'accent', 'success', 'warning', 'error'].map((color) => (
          <div key={color} className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text capitalize">{color} toggle</span>
              <Toggle
                color={color as 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
                defaultChecked={color === 'primary'}
              />
            </label>
          </div>
        ))}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Disabled toggle</span>
            <Toggle disabled />
          </label>
        </div>
      </div>
    </div>
  ),
};

export const RangeSliders: Story = {
  render: function Component() {
    const [values, setValues] = React.useState({
      default: 25,
      primary: 40,
      secondary: 60,
      accent: 80
    });

    return (
      <div className="space-y-6 p-6">
        <h3 className="text-lg font-semibold">Range Sliders</h3>
        <div className="space-y-4">
          {Object.entries(values).map(([color, value]) => (
            <div key={color}>
              <label className="label">
                <span className="label-text capitalize">{color} range: {value}%</span>
              </label>
              <Range
                min={0}
                max={100}
                value={value}
                color={color as 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
                onChange={(e) => setValues({
                  ...values,
                  [color]: Number(e.target.value)
                })}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const RatingControls: Story = {
  render: function Component() {
    const [ratings, setRatings] = React.useState({
      default: 3,
      primary: 4,
      secondary: 2,
      accent: 5
    });

    return (
      <div className="space-y-6 p-6">
        <h3 className="text-lg font-semibold">Rating Controls</h3>
        <div className="space-y-4">
          {Object.entries(ratings).map(([color, rating]) => (
            <div key={color}>
              <label className="label">
                <span className="label-text capitalize">{color} rating: {rating}/5</span>
              </label>
              <Rating
                value={rating}
                color={color as 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'}
                onChange={(value) => setRatings({
                  ...ratings,
                  [color]: value
                })}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
};