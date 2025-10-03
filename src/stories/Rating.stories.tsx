import type { Meta, StoryObj } from '@storybook/react';
import { Rating, SimpleRating, RatingDistribution } from '../components/form/rating';
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
  title: 'Form/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile rating component supporting different shapes, colors, sizes, and both interactive and display-only modes. Perfect for reviews, feedback, and rating displays.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the rating',
    },
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Gap between rating items',
    },
    shape: {
      control: 'select',
      options: ['star', 'heart', 'circle', 'triangle', 'square', 'hexagon', 'decagon'],
      description: 'Shape of the rating items',
    },
    color: {
      control: 'select',
      options: ['default', 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'Color of filled rating items',
    },
    max: {
      control: 'number',
      description: 'Maximum rating value',
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the rating is interactive',
    },
    allowHalf: {
      control: 'boolean',
      description: 'Whether to allow half ratings',
    },
  },
  args: {
    size: 'md',
    gap: 'sm',
    shape: 'star',
    color: 'default',
    max: 5,
    interactive: true,
    allowHalf: false,
    defaultValue: 0,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    defaultValue: 3,
  },
};

export const NonInteractive: Story = {
  args: {
    value: 4,
    interactive: false,
  },
};

export const WithHalfRatings: Story = {
  args: {
    defaultValue: 3.5,
    allowHalf: true,
  },
};

// Shape variations
export const Shapes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Star:</span>
        <Rating shape="star" defaultValue={4} color="warning" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Heart:</span>
        <Rating shape="heart" defaultValue={4} color="error" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Circle:</span>
        <Rating shape="circle" defaultValue={4} color="primary" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Triangle:</span>
        <Rating shape="triangle" defaultValue={4} color="accent" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Square:</span>
        <Rating shape="square" defaultValue={4} color="secondary" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Hexagon:</span>
        <Rating shape="hexagon" defaultValue={4} color="info" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Decagon:</span>
        <Rating shape="decagon" defaultValue={4} color="success" />
      </div>
    </div>
  ),
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Default:</span>
        <Rating defaultValue={4} color="default" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Neutral:</span>
        <Rating defaultValue={4} color="neutral" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Primary:</span>
        <Rating defaultValue={4} color="primary" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Secondary:</span>
        <Rating defaultValue={4} color="secondary" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Accent:</span>
        <Rating defaultValue={4} color="accent" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Info:</span>
        <Rating defaultValue={4} color="info" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Success:</span>
        <Rating defaultValue={4} color="success" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Warning:</span>
        <Rating defaultValue={4} color="warning" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Error:</span>
        <Rating defaultValue={4} color="error" />
      </div>
    </div>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">XS:</span>
        <Rating size="xs" defaultValue={4} color="primary" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Small:</span>
        <Rating size="sm" defaultValue={4} color="primary" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Medium:</span>
        <Rating size="md" defaultValue={4} color="primary" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">Large:</span>
        <Rating size="lg" defaultValue={4} color="primary" />
      </div>
    </div>
  ),
};

// Gap variations
export const Gaps: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">No Gap</h4>
        <Rating gap="none" defaultValue={4} color="primary" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Small Gap</h4>
        <Rating gap="sm" defaultValue={4} color="primary" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Medium Gap</h4>
        <Rating gap="md" defaultValue={4} color="primary" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Large Gap</h4>
        <Rating gap="lg" defaultValue={4} color="primary" />
      </div>
    </div>
  ),
};

// Interactive vs Non-interactive
export const InteractiveStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Interactive (hover to change)</h4>
        <Rating defaultValue={3} interactive color="warning" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Non-interactive (display only)</h4>
        <Rating value={4} interactive={false} color="warning" />
      </div>
    </div>
  ),
};

// Half ratings
export const HalfRatings: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Whole Numbers Only</h4>
        <Rating defaultValue={4} allowHalf={false} color="warning" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Half Ratings Allowed</h4>
        <Rating defaultValue={3.5} allowHalf color="warning" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Display: 4.5 stars</h4>
        <Rating value={4.5} allowHalf interactive={false} color="warning" />
      </div>
    </div>
  ),
};

// Controlled component
export const Controlled: Story = {
  render: function Component() {
    const [rating, setRating] = useState(3);
    const [halfRating, setHalfRating] = useState(2.5);

    return (
      <div className="space-y-6">
        <div className="card bg-base-100 shadow-lg p-4">
          <h3 className="font-semibold mb-2">Product Rating</h3>
          <div className="flex items-center gap-4">
            <Rating
              value={rating}
              onRatingChange={setRating}
              color="warning"
              size="lg"
            />
            <span className="text-lg font-medium">{rating}/5</span>
          </div>
          <p className="text-sm text-base-content/70 mt-2">
            Current rating: {rating} stars
          </p>
        </div>

        <div className="card bg-base-100 shadow-lg p-4">
          <h3 className="font-semibold mb-2">Service Rating (Half Stars)</h3>
          <div className="flex items-center gap-4">
            <Rating
              value={halfRating}
              onRatingChange={setHalfRating}
              allowHalf
              color="accent"
              size="lg"
              shape="heart"
            />
            <span className="text-lg font-medium">{halfRating}/5</span>
          </div>
          <p className="text-sm text-base-content/70 mt-2">
            Current rating: {halfRating} hearts
          </p>
        </div>
      </div>
    );
  },
};

// Simple rating component
export const SimpleRatingExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Basic Display</h4>
        <SimpleRating value={4.2} color="warning" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">With Value Display</h4>
        <SimpleRating value={4.7} showValue color="warning" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">With Review Count</h4>
        <SimpleRating value={4.5} showValue showCount count={1234} color="warning" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Custom Format</h4>
        <SimpleRating
          value={3.8}
          showValue
          showCount
          count={567}
          formatValue={(val) => `${val}/5.0`}
          color="accent"
          shape="heart"
        />
      </div>
    </div>
  ),
};

// Rating distribution
export const RatingDistributionExample: Story = {
  render: function Component() {
    const distribution = [
      { stars: 5, count: 150, percentage: 60 },
      { stars: 4, count: 75, percentage: 30 },
      { stars: 3, count: 15, percentage: 6 },
      { stars: 2, count: 7, percentage: 3 },
      { stars: 1, count: 3, percentage: 1 },
    ];

    const totalReviews = distribution.reduce((sum, item) => sum + item.count, 0);
    const averageRating = distribution.reduce((sum, item) => sum + (item.stars * item.count), 0) / totalReviews;

    return (
      <div className="card bg-base-100 shadow-xl p-6 w-80">
        <h2 className="card-title mb-4">Customer Reviews</h2>

        <div className="flex items-center gap-4 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold">{averageRating.toFixed(1)}</div>
            <SimpleRating value={averageRating} color="warning" size="sm" />
            <div className="text-sm text-base-content/70">{totalReviews} reviews</div>
          </div>
        </div>

        <RatingDistribution distribution={distribution} />
      </div>
    );
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: function Component() {
    const [productRating, setProductRating] = useState(0);
    const [serviceRating, setServiceRating] = useState(0);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Product cards with ratings */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-xl w-24 h-24">
                <span className="text-3xl">📱</span>
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Smartphone Pro</h2>
            <SimpleRating
              value={4.6}
              showValue
              showCount
              count={2847}
              color="warning"
            />
            <p className="text-base-content/70">Latest flagship smartphone with amazing features</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Review form */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Leave a Review</h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Quality</span>
              </label>
              <div className="flex items-center gap-2">
                <Rating
                  value={productRating}
                  onRatingChange={setProductRating}
                  color="warning"
                  size="lg"
                />
                <span className="text-sm">{productRating}/5</span>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Customer Service</span>
              </label>
              <div className="flex items-center gap-2">
                <Rating
                  value={serviceRating}
                  onRatingChange={setServiceRating}
                  color="accent"
                  shape="heart"
                  size="lg"
                />
                <span className="text-sm">{serviceRating}/5</span>
              </div>
            </div>

            <div className="form-control mt-4">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write your review..."
                rows={3}
              />
            </div>

            <div className="card-actions justify-end mt-4">
              <button className="btn btn-outline">Cancel</button>
              <button className="btn btn-primary">Submit Review</button>
            </div>
          </div>
        </div>

        {/* Restaurant rating */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              🍕 Tony's Pizza
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Food Quality</span>
                <SimpleRating value={4.8} showValue color="warning" size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Service</span>
                <SimpleRating value={4.2} showValue color="info" size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Ambiance</span>
                <SimpleRating value={4.5} showValue color="accent" size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Value</span>
                <SimpleRating value={4.0} showValue color="success" size="sm" />
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center font-semibold">
              <span>Overall Rating</span>
              <SimpleRating value={4.4} showValue showCount count={156} color="warning" />
            </div>
          </div>
        </div>

        {/* Movie rating */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">🎬 The Great Movie</h2>
            <div className="flex items-center justify-between mb-4">
              <SimpleRating
                value={4.7}
                showValue
                showCount
                count={8932}
                color="warning"
                size="lg"
              />
              <div className="badge badge-primary">New</div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Critics Score:</span>
                <div className="flex items-center gap-1">
                  <Rating value={5} max={5} interactive={false} color="success" size="xs" />
                  <span>92%</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Audience Score:</span>
                <div className="flex items-center gap-1">
                  <Rating value={4} max={5} interactive={false} color="info" size="xs" />
                  <span>87%</span>
                </div>
              </div>
            </div>

            <div className="card-actions justify-end mt-4">
              <button className="btn btn-outline btn-sm">Watch Trailer</button>
              <button className="btn btn-primary btn-sm">Watch Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Different contexts
export const DifferentContexts: Story = {
  render: () => (
    <div className="space-y-6">
      {/* App ratings */}
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <div className="avatar">
          <div className="w-12 rounded-lg bg-primary/20 flex items-center justify-center">
            📱
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">Social Media App</h3>
          <SimpleRating value={4.2} showValue showCount count={15670} color="primary" />
        </div>
        <button className="btn btn-primary btn-sm">Install</button>
      </div>

      {/* Book ratings */}
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <div className="avatar">
          <div className="w-12 rounded-lg bg-accent/20 flex items-center justify-center">
            📚
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">The Great Novel</h3>
          <SimpleRating value={4.8} showValue showCount count={2341} color="accent" />
        </div>
        <button className="btn btn-outline btn-sm">Read Sample</button>
      </div>

      {/* Hotel ratings */}
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <div className="avatar">
          <div className="w-12 rounded-lg bg-warning/20 flex items-center justify-center">
            🏨
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">Grand Hotel</h3>
          <SimpleRating value={4.5} showValue showCount count={876} color="warning" />
        </div>
        <button className="btn btn-success btn-sm">Book Now</button>
      </div>
    </div>
  ),
};