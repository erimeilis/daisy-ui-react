import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card, CardBody, CardTitle, CardActions, CardFigure } from '../components/ui/card';
import { Button } from '../components/form/button';
import { Badge } from '../components/ui/badge';
import { IconHeart, IconShare, IconUser, IconCalendar, IconBookmark } from '@tabler/icons-react';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card component for displaying content in a structured container with various styles and layouts.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the card',
    },
    color: {
      control: 'select',
      options: ['default', 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the card',
    },
    style: {
      control: 'select',
      options: ['default', 'border', 'dash', 'soft', 'ghost'],
      description: 'The style variant of the card',
    },
    modifier: {
      control: 'select',
      options: ['default', 'side', 'image'],
      description: 'The modifier variant of the card',
    },
  },
  args: {
    size: 'md',
    color: 'default',
    style: 'default',
    modifier: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card
export const Basic: Story = {
  args: {
    children: (
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions className="justify-end">
          <Button size="sm" color="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    ),
  },
};

// With image
export const WithImage: Story = {
  render: () => (
    <Card className="w-96 shadow-xl">
      <CardFigure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="w-full h-48 object-cover"
        />
      </CardFigure>
      <CardBody>
        <CardTitle>Shoes!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions className="justify-end">
          <Button size="sm" color="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-start gap-4">
      <Card size="xs" className="shadow-lg">
        <CardBody>
          <CardTitle className="text-xs">XS Card</CardTitle>
          <p className="text-xs">Small content</p>
        </CardBody>
      </Card>

      <Card size="sm" className="shadow-lg">
        <CardBody>
          <CardTitle className="text-sm">SM Card</CardTitle>
          <p className="text-sm">Medium content</p>
        </CardBody>
      </Card>

      <Card size="md" className="shadow-lg">
        <CardBody>
          <CardTitle>MD Card</CardTitle>
          <p>Regular content</p>
        </CardBody>
      </Card>
    </div>
  ),
};

// Different styles
export const Styles: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <Card style="default" className="shadow-lg">
        <CardBody>
          <CardTitle>Default Card</CardTitle>
          <p>This is a default card with shadow.</p>
        </CardBody>
      </Card>

      <Card style="border" className="border">
        <CardBody>
          <CardTitle>Bordered Card</CardTitle>
          <p>This is a bordered card.</p>
        </CardBody>
      </Card>

      <Card style="default">
        <CardBody>
          <CardTitle>Default Card (no style)</CardTitle>
          <p>This is a default card with no special styling.</p>
        </CardBody>
      </Card>

      <Card modifier="side" className="shadow-lg">
        <CardFigure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="w-24 h-full object-cover"
          />
        </CardFigure>
        <CardBody>
          <CardTitle>Side Card</CardTitle>
          <p>Side layout card.</p>
        </CardBody>
      </Card>
    </div>
  ),
};

// Blog post card
export const BlogPost: Story = {
  render: () => (
    <Card className="w-96 shadow-xl">
      <CardFigure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Blog post"
          className="w-full h-48 object-cover"
        />
      </CardFigure>
      <CardBody>
        <div className="flex items-center gap-2 text-sm opacity-70 mb-2">
          <IconUser className="w-4 h-4" />
          <span>John Doe</span>
          <IconCalendar className="w-4 h-4 ml-2" />
          <span>March 15, 2024</span>
        </div>
        <CardTitle>Getting Started with React</CardTitle>
        <p>Learn the fundamentals of React development with this comprehensive guide. We'll cover components, state management, and best practices.</p>
        <div className="flex gap-2 my-2">
          <Badge variant="primary" size="sm">React</Badge>
          <Badge variant="secondary" size="sm">JavaScript</Badge>
          <Badge variant="accent" size="sm">Tutorial</Badge>
        </div>
        <CardActions className="justify-between">
          <div className="flex gap-2">
            <Button size="sm" style="ghost" icon={IconHeart}>24</Button>
            <Button size="sm" style="ghost" icon={IconShare}>Share</Button>
            <Button size="sm" style="ghost" icon={IconBookmark}>Save</Button>
          </div>
          <Button size="sm" color="primary">Read More</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

// Product card
export const ProductCard: Story = {
  render: () => (
    <Card className="w-80 shadow-xl">
      <CardFigure className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Product"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="error">-20%</Badge>
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant="success">New</Badge>
        </div>
      </CardFigure>
      <CardBody>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Premium Sneakers</CardTitle>
            <p className="text-sm opacity-70">Comfortable and stylish</p>
          </div>
          <Button size="sm" style="ghost" icon={IconHeart} />
        </div>
        <div className="flex items-center gap-2 my-2">
          <div className="rating rating-sm">
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
          </div>
          <span className="text-sm opacity-70">(142 reviews)</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold">$79.99</span>
          <span className="text-lg text-gray-500 line-through">$99.99</span>
        </div>
        <CardActions>
          <Button color="primary" modifier="block">Add to Cart</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

// Stats card
export const StatsCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      <Card className="shadow-lg">
        <CardBody className="text-center">
          <div className="text-3xl font-bold text-primary">2.5M</div>
          <div className="text-sm opacity-70">Total Users</div>
          <div className="text-xs text-success">+12% from last month</div>
        </CardBody>
      </Card>

      <Card className="shadow-lg">
        <CardBody className="text-center">
          <div className="text-3xl font-bold text-secondary">$45.2K</div>
          <div className="text-sm opacity-70">Revenue</div>
          <div className="text-xs text-success">+8% from last month</div>
        </CardBody>
      </Card>

      <Card className="shadow-lg">
        <CardBody className="text-center">
          <div className="text-3xl font-bold text-accent">98.5%</div>
          <div className="text-sm opacity-70">Uptime</div>
          <div className="text-xs text-error">-0.2% from last month</div>
        </CardBody>
      </Card>
    </div>
  ),
};

// Feature card
export const FeatureCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <Card className="shadow-lg">
        <CardBody>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <IconHeart className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Easy to Use</CardTitle>
          </div>
          <p>Our intuitive interface makes it simple for anyone to get started. No technical expertise required.</p>
          <CardActions className="justify-end mt-4">
            <Button size="sm" style="outline">Learn More</Button>
          </CardActions>
        </CardBody>
      </Card>

      <Card className="shadow-lg">
        <CardBody>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <IconShare className="w-6 h-6 text-secondary" />
            </div>
            <CardTitle>Fast & Reliable</CardTitle>
          </div>
          <p>Built with performance in mind. Experience lightning-fast load times and 99.9% uptime reliability.</p>
          <CardActions className="justify-end mt-4">
            <Button size="sm" style="outline">Learn More</Button>
          </CardActions>
        </CardBody>
      </Card>
    </div>
  ),
};

// Interactive card
export const Interactive: Story = {
  render: function InteractiveCard() {
    const [liked, setLiked] = React.useState(false);
    const [saved, setSaved] = React.useState(false);

    return (
      <Card className="w-96 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
        <CardFigure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Interactive"
            className="w-full h-48 object-cover"
          />
        </CardFigure>
        <CardBody>
          <CardTitle>Interactive Card</CardTitle>
          <p>This card responds to user interactions. Try clicking the action buttons!</p>
          <CardActions className="justify-between">
            <div className="flex gap-2">
              <Button
                size="sm"
                style="ghost"
                color={liked ? "error" : "default"}
                icon={IconHeart}
                onClick={() => setLiked(!liked)}
              >
                {liked ? "Liked!" : "Like"}
              </Button>
              <Button
                size="sm"
                style="ghost"
                color={saved ? "primary" : "default"}
                icon={IconBookmark}
                onClick={() => setSaved(!saved)}
              >
                {saved ? "Saved!" : "Save"}
              </Button>
            </div>
            <Button size="sm" color="primary">View Details</Button>
          </CardActions>
        </CardBody>
      </Card>
    );
  },
};