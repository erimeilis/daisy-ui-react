import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Stats } from '../components/data-display/stat';
import { Card, CardBody } from '../components/ui/card';
import {
  IconUsers,
  IconShoppingCart,
  IconCurrencyDollar,
  IconTrendingUp,
  IconTrendingDown,
  IconEye,
  IconDownload,
  IconClock,
  IconTarget,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconHeart,
  IconStar
} from '@tabler/icons-react';

const meta: Meta<typeof Stats> = {
  title: 'Data Display/Stats',
  component: Stats,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Stats component for displaying numeric data and statistics with titles, descriptions, and optional figures/icons.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stats
export const BasicStats: Story = {
  args: {
    stats: [
      {
        id: '1',
        title: 'Total Users',
        value: '1,234',
        description: 'Active users this month',
      },
      {
        id: '2',
        title: 'Revenue',
        value: '$89.4K',
        description: 'Monthly revenue',
      },
      {
        id: '3',
        title: 'Orders',
        value: '456',
        description: 'New orders today',
      },
    ],
  },
};

// Stats with icons
export const WithIcons: Story = {
  args: {
    stats: [
      {
        id: '1',
        title: 'Total Users',
        value: '2,847',
        description: '↗️ 12% more than last month',
        figure: <IconUsers className="w-8 h-8 text-primary" />,
      },
      {
        id: '2',
        title: 'Orders',
        value: '1,203',
        description: '↗️ 8% more than last month',
        figure: <IconShoppingCart className="w-8 h-8 text-secondary" />,
      },
      {
        id: '3',
        title: 'Revenue',
        value: '$12,847',
        description: '↘️ 3% less than last month',
        figure: <IconCurrencyDollar className="w-8 h-8 text-accent" />,
      },
    ],
  },
};

// Different layouts and styles
export const DifferentLayouts: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Horizontal layout */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal Layout</h3>
        <Stats
          stats={[
            {
              id: '1',
              title: 'Downloads',
              value: '31K',
              description: 'This month',
              figure: <IconDownload className="w-6 h-6" />,
            },
            {
              id: '2',
              title: 'Users',
              value: '4.2K',
              description: 'Active now',
              figure: <IconUsers className="w-6 h-6" />,
            },
            {
              id: '3',
              title: 'Revenue',
              value: '$74K',
              description: 'Last 30 days',
              figure: <IconCurrencyDollar className="w-6 h-6" />,
            },
          ]}
        />
      </div>

      {/* Vertical layout in cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Page Views',
              value: '123,456',
              description: '+12% from yesterday',
              icon: <IconEye className="w-8 h-8 text-info" />,
              trend: 'up',
            },
            {
              title: 'Likes',
              value: '9,876',
              description: '+5% from yesterday',
              icon: <IconHeart className="w-8 h-8 text-error" />,
              trend: 'up',
            },
            {
              title: 'Bounce Rate',
              value: '23.5%',
              description: '-2% from yesterday',
              icon: <IconTrendingDown className="w-8 h-8 text-warning" />,
              trend: 'down',
            },
          ].map((stat, index) => (
            <Card key={index}>
              <CardBody className="text-center">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.title}</div>
                <div className={`text-xs mt-1 ${
                  stat.trend === 'up' ? 'text-success' : 'text-error'
                }`}>
                  {stat.description}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Real-world dashboard example
export const DashboardExample: Story = {
  render: function Component() {
    const dashboardStats = [
      {
        id: 'revenue',
        title: 'Total Revenue',
        value: '$45,231.89',
        description: '+20.1% from last month',
        figure: <IconCurrencyDollar className="w-8 h-8 text-success" />,
        trend: 'up',
      },
      {
        id: 'subscriptions',
        title: 'Subscriptions',
        value: '+2,350',
        description: '+180.1% from last month',
        figure: <IconUsers className="w-8 h-8 text-primary" />,
        trend: 'up',
      },
      {
        id: 'sales',
        title: 'Sales',
        value: '+12,234',
        description: '+19% from last month',
        figure: <IconShoppingCart className="w-8 h-8 text-secondary" />,
        trend: 'up',
      },
      {
        id: 'active',
        title: 'Active Now',
        value: '+573',
        description: '+201 since last hour',
        figure: <IconEye className="w-8 h-8 text-info" />,
        trend: 'up',
      },
    ];

    return (
      <div className="space-y-6 max-w-4xl">
        <div>
          <h2 className="text-2xl font-bold mb-2">Dashboard Overview</h2>
          <p className="text-gray-600">Key metrics for your business</p>
        </div>

        <Stats stats={dashboardStats} />

        {/* Additional metrics in grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            {
              title: 'Avg. Order Value',
              value: '$127.50',
              change: '+$12.30',
              trend: 'up',
            },
            {
              title: 'Conversion Rate',
              value: '3.24%',
              change: '+0.15%',
              trend: 'up',
            },
            {
              title: 'Return Rate',
              value: '2.1%',
              change: '-0.3%',
              trend: 'down',
            },
            {
              title: 'Customer Satisfaction',
              value: '4.8/5',
              change: '+0.2',
              trend: 'up',
            },
          ].map((metric, index) => (
            <div key={index} className="bg-base-200 p-4 rounded-lg">
              <div className="text-sm text-gray-600">{metric.title}</div>
              <div className="text-xl font-bold mt-1">{metric.value}</div>
              <div className={`text-xs mt-1 flex items-center ${
                metric.trend === 'up' ? 'text-success' : 'text-error'
              }`}>
                {metric.trend === 'up' ? (
                  <IconTrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <IconTrendingDown className="w-3 h-3 mr-1" />
                )}
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Social media stats
export const SocialMediaStats: Story = {
  render: () => (
    <div className="max-w-2xl">
      <h3 className="text-xl font-bold mb-6 text-center">Social Media Analytics</h3>

      <Stats
        stats={[
          {
            id: 'twitter',
            title: 'Twitter',
            value: '12.5K',
            description: 'Followers (+150 this week)',
            figure: <IconBrandTwitter className="w-8 h-8 text-blue-400" />,
          },
          {
            id: 'facebook',
            title: 'Facebook',
            value: '8.9K',
            description: 'Page likes (+89 this week)',
            figure: <IconBrandFacebook className="w-8 h-8 text-blue-600" />,
          },
          {
            id: 'instagram',
            title: 'Instagram',
            value: '15.2K',
            description: 'Followers (+234 this week)',
            figure: <IconBrandInstagram className="w-8 h-8 text-pink-500" />,
          },
        ]}
      />

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="text-center p-4 bg-base-200 rounded-lg">
          <IconTarget className="w-6 h-6 mx-auto mb-2 text-primary" />
          <div className="text-lg font-bold">94.2%</div>
          <div className="text-sm text-gray-600">Engagement Rate</div>
        </div>
        <div className="text-center p-4 bg-base-200 rounded-lg">
          <IconClock className="w-6 h-6 mx-auto mb-2 text-secondary" />
          <div className="text-lg font-bold">2.5h</div>
          <div className="text-sm text-gray-600">Avg. Response Time</div>
        </div>
      </div>
    </div>
  ),
};

// E-commerce stats
export const EcommerceStats: Story = {
  render: () => (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-xl font-bold text-center">E-commerce Dashboard</h3>

      {/* Main stats */}
      <Stats
        stats={[
          {
            id: 'orders',
            title: 'Total Orders',
            value: '1,847',
            description: 'Last 30 days',
            figure: <IconShoppingCart className="w-8 h-8 text-primary" />,
          },
          {
            id: 'revenue',
            title: 'Revenue',
            value: '$125,847',
            description: 'Last 30 days',
            figure: <IconCurrencyDollar className="w-8 h-8 text-success" />,
          },
          {
            id: 'customers',
            title: 'New Customers',
            value: '847',
            description: 'Last 30 days',
            figure: <IconUsers className="w-8 h-8 text-secondary" />,
          },
        ]}
      />

      {/* Product performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            product: 'Wireless Headphones',
            sales: '324',
            revenue: '$32,400',
            rating: '4.8',
          },
          {
            product: 'Smart Watch',
            sales: '256',
            revenue: '$51,200',
            rating: '4.6',
          },
          {
            product: 'Laptop Stand',
            sales: '189',
            revenue: '$9,450',
            rating: '4.9',
          },
          {
            product: 'Wireless Mouse',
            sales: '445',
            revenue: '$13,350',
            rating: '4.7',
          },
        ].map((product, index) => (
          <Card key={index}>
            <CardBody>
              <h4 className="font-semibold text-sm mb-3">{product.product}</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Sales:</span>
                  <span className="font-medium">{product.sales}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-medium text-success">{product.revenue}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <IconStar className="w-3 h-3 text-yellow-500 mr-1" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  ),
};