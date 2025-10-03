import type { Meta, StoryObj } from '@storybook/react';
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonButton,
  SkeletonCard,
  SkeletonList,
  SkeletonTable,
  SkeletonFeed
} from '../components/layout/skeleton';
import { useState } from 'react';

const meta: Meta<typeof Skeleton> = {
  title: 'Layout/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A loading placeholder component that shows a shimmer animation while content is being loaded. Includes pre-built layouts for common use cases like cards, lists, tables, and feeds.',
      },
    },
  },
  argTypes: {
    shape: {
      control: 'select',
      options: ['default', 'circle', 'square', 'rounded', 'rounded-lg', 'rounded-xl'],
      description: 'The shape of the skeleton',
    },
    animation: {
      control: 'select',
      options: ['default', 'pulse', 'none'],
      description: 'The animation type of the skeleton',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton (CSS value)',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (CSS value)',
    },
  },
  args: {
    shape: 'default',
    animation: 'default',
    width: '200px',
    height: '20px',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {},
};

export const WithCustomSize: Story = {
  args: {
    width: '300px',
    height: '40px',
  },
};

// Shape variations
export const Shapes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Default:</span>
        <Skeleton width="200px" height="20px" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Circle:</span>
        <Skeleton shape="circle" width="50px" height="50px" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Square:</span>
        <Skeleton shape="square" width="50px" height="50px" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Rounded:</span>
        <Skeleton shape="rounded" width="200px" height="40px" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Rounded LG:</span>
        <Skeleton shape="rounded-lg" width="200px" height="60px" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Rounded XL:</span>
        <Skeleton shape="rounded-xl" width="200px" height="80px" />
      </div>
    </div>
  ),
};

// Animation variations
export const Animations: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Default Animation</h4>
        <Skeleton width="300px" height="20px" animation="default" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Pulse Animation</h4>
        <Skeleton width="300px" height="20px" animation="pulse" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">No Animation</h4>
        <Skeleton width="300px" height="20px" animation="none" />
      </div>
    </div>
  ),
};

// Pre-built components
export const PreBuiltComponents: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-2xl">
      <div>
        <h4 className="text-lg font-medium mb-4">Skeleton Text</h4>
        <SkeletonText lines={3} />
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Skeleton Avatars</h4>
        <div className="flex items-center gap-4">
          <SkeletonAvatar size="xs" />
          <SkeletonAvatar size="sm" />
          <SkeletonAvatar size="md" />
          <SkeletonAvatar size="lg" />
          <SkeletonAvatar size="xl" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Skeleton Images</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkeletonImage height="150px" />
          <SkeletonImage height="150px" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-4">Skeleton Buttons</h4>
        <div className="flex gap-4">
          <SkeletonButton size="sm" />
          <SkeletonButton size="md" />
          <SkeletonButton size="lg" />
        </div>
      </div>
    </div>
  ),
};

// Text variations
export const TextVariations: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-lg">
      <div>
        <h4 className="text-sm font-medium mb-2">1 Line</h4>
        <SkeletonText lines={1} />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">3 Lines (Default)</h4>
        <SkeletonText lines={3} />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">5 Lines</h4>
        <SkeletonText lines={5} />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Custom Last Line Width</h4>
        <SkeletonText lines={4} lastLineWidth="40%" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Custom Line Height</h4>
        <SkeletonText lines={3} lineHeight="1.5rem" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">No Animation</h4>
        <SkeletonText lines={3} animation="none" />
      </div>
    </div>
  ),
};

// Card layouts
export const CardLayouts: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <div>
        <h4 className="text-sm font-medium mb-4">Basic Card</h4>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <SkeletonCard />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-4">Card with Avatar</h4>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <SkeletonCard showAvatar />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-4">Card with Image</h4>
        <div className="card bg-base-100 shadow-xl">
          <SkeletonCard showImage imageHeight="200px" />
          <div className="card-body">
            <SkeletonText lines={2} />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-4">Full Card Layout</h4>
        <div className="card bg-base-100 shadow-xl">
          <SkeletonCard showImage showAvatar textLines={4} imageHeight="150px" />
        </div>
      </div>
    </div>
  ),
};

// List layouts
export const ListLayouts: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <div>
        <h4 className="text-sm font-medium mb-4">Simple List</h4>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <SkeletonList items={4} />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-4">List with Avatars</h4>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <SkeletonList items={5} showAvatar />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Table layout
export const TableLayout: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <h4 className="text-sm font-medium mb-4">Data Table</h4>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <SkeletonTable rows={5} columns={4} />
        </div>
      </div>

      <h4 className="text-sm font-medium mb-4 mt-8">Table without Header</h4>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <SkeletonTable rows={3} columns={3} showHeader={false} />
        </div>
      </div>
    </div>
  ),
};

// Feed layout
export const FeedLayout: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <h4 className="text-sm font-medium mb-4">Social Media Feed</h4>
      <SkeletonFeed posts={3} />
    </div>
  ),
};

// Loading simulation
export const LoadingSimulation: Story = {
  render: function Component() {
    const [loadingStates, setLoadingStates] = useState({
      profile: false,
      posts: false,
      comments: false,
      dashboard: false,
    });

    const simulateLoading = (key: keyof typeof loadingStates) => {
      setLoadingStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setLoadingStates(prev => ({ ...prev, [key]: false }));
      }, 3000);
    };

    return (
      <div className="space-y-8 w-full max-w-4xl">
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => simulateLoading('profile')}
          >
            Load Profile
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => simulateLoading('posts')}
          >
            Load Posts
          </button>
          <button
            className="btn btn-accent btn-sm"
            onClick={() => simulateLoading('comments')}
          >
            Load Comments
          </button>
          <button
            className="btn btn-info btn-sm"
            onClick={() => simulateLoading('dashboard')}
          >
            Load Dashboard
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">User Profile</h3>
              {loadingStates.profile ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <SkeletonAvatar size="lg" />
                    <div className="flex-1">
                      <Skeleton height="1.5rem" width="60%" className="mb-2" />
                      <Skeleton height="1rem" width="40%" />
                    </div>
                  </div>
                  <SkeletonText lines={2} />
                  <div className="flex gap-2">
                    <SkeletonButton size="sm" />
                    <SkeletonButton size="sm" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="avatar">
                      <div className="w-16 rounded-full bg-primary text-primary-content flex items-center justify-center">
                        <span className="text-xl">JD</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">John Doe</h4>
                      <p className="text-base-content/70">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-base-content/80">
                    Passionate developer with 5+ years of experience in React and TypeScript.
                    Love building user-friendly applications.
                  </p>
                  <div className="flex gap-2">
                    <button className="btn btn-primary btn-sm">Follow</button>
                    <button className="btn btn-outline btn-sm">Message</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Posts List */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Recent Posts</h3>
              {loadingStates.posts ? (
                <SkeletonList items={3} showAvatar />
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">A</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Alice Johnson</div>
                      <div className="text-sm text-base-content/70">Just launched my new project!</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-primary text-primary-content rounded-full w-8">
                        <span className="text-xs">B</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Bob Smith</div>
                      <div className="text-sm text-base-content/70">Great article on React hooks</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-secondary text-secondary-content rounded-full w-8">
                        <span className="text-xs">C</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Carol Davis</div>
                      <div className="text-sm text-base-content/70">Working on something amazing</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Comments */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Comments</h3>
              {loadingStates.comments ? (
                <SkeletonFeed posts={1} />
              ) : (
                <div className="space-y-4">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                        <span className="text-sm">A</span>
                      </div>
                    </div>
                    <div className="chat-bubble">Great work on this feature!</div>
                  </div>
                  <div className="chat chat-end">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full bg-secondary text-secondary-content flex items-center justify-center">
                        <span className="text-sm">B</span>
                      </div>
                    </div>
                    <div className="chat-bubble chat-bubble-secondary">Thanks! It was fun to build.</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dashboard */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Dashboard</h3>
              {loadingStates.dashboard ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton height="60px" shape="rounded" />
                    <Skeleton height="60px" shape="rounded" />
                  </div>
                  <SkeletonTable rows={3} columns={3} />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="stat bg-primary text-primary-content rounded">
                      <div className="stat-value">1.2K</div>
                      <div className="stat-title">Users</div>
                    </div>
                    <div className="stat bg-secondary text-secondary-content rounded">
                      <div className="stat-value">4.3K</div>
                      <div className="stat-title">Views</div>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="table table-compact">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Status</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Project A</td>
                          <td><span className="badge badge-success">Active</span></td>
                          <td>2024-01-15</td>
                        </tr>
                        <tr>
                          <td>Project B</td>
                          <td><span className="badge badge-warning">Pending</span></td>
                          <td>2024-01-12</td>
                        </tr>
                        <tr>
                          <td>Project C</td>
                          <td><span className="badge badge-error">Inactive</span></td>
                          <td>2024-01-10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-6xl">
      {/* E-commerce product grid */}
      <div>
        <h3 className="text-lg font-semibold mb-4">E-commerce Product Grid</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <SkeletonImage height="200px" />
              <div className="card-body">
                <Skeleton height="1.25rem" width="80%" className="mb-2" />
                <Skeleton height="1rem" width="60%" className="mb-2" />
                <div className="flex justify-between items-center">
                  <Skeleton height="1.5rem" width="30%" />
                  <SkeletonButton size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog post list */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Blog Post List</h3>
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex gap-4">
                  <SkeletonImage width="120px" height="80px" />
                  <div className="flex-1 space-y-2">
                    <Skeleton height="1.5rem" width="85%" />
                    <SkeletonText lines={2} />
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <SkeletonAvatar size="xs" />
                        <Skeleton height="0.875rem" width="80px" />
                      </div>
                      <Skeleton height="0.875rem" width="60px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User profile with activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Activity Feed</h3>
          <SkeletonFeed posts={2} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">User Info</h3>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="text-center">
                <SkeletonAvatar size="xl" className="mx-auto mb-4" />
                <Skeleton height="1.5rem" width="60%" className="mx-auto mb-2" />
                <Skeleton height="1rem" width="40%" className="mx-auto mb-4" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Skeleton height="1rem" width="30%" />
                  <Skeleton height="1rem" width="20%" />
                </div>
                <div className="flex justify-between">
                  <Skeleton height="1rem" width="35%" />
                  <Skeleton height="1rem" width="25%" />
                </div>
                <div className="flex justify-between">
                  <Skeleton height="1rem" width="25%" />
                  <Skeleton height="1rem" width="30%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data analytics dashboard */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Analytics Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <Skeleton height="2rem" width="50%" className="mx-auto mb-2" />
                <Skeleton height="1rem" width="70%" className="mx-auto" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <Skeleton height="1.5rem" width="40%" className="mb-4" />
              <Skeleton height="200px" width="100%" />
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <Skeleton height="1.5rem" width="35%" className="mb-4" />
              <SkeletonTable rows={5} columns={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};