import type { Meta, StoryObj } from '@storybook/react';
import {
  Loading,
  LoadingOverlay,
  LoadingButton,
  LoadingDots,
  LoadingSpinner,
  LoadingRing,
  LoadingBall,
  LoadingBars,
  LoadingInfinity,
  LoadingText
} from '../components/ui/loading';
import { useState } from 'react';
import { IconDownload, IconUpload, IconDeviceFloppy, IconRefresh } from '@tabler/icons-react';

const meta: Meta<typeof Loading> = {
  title: 'UI/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile loading component with multiple animation types including spinner, dots, ring, ball, bars, and infinity. Includes overlay, button integration, and text combinations.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity'],
      description: 'The animation type of the loading indicator',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the loading indicator',
    },
    color: {
      control: 'text',
      description: 'The color of the loading indicator (Tailwind color name)',
    },
  },
  args: {
    type: 'spinner',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {},
};

export const WithColor: Story = {
  args: {
    color: 'primary',
  },
};

// Animation types
export const AnimationTypes: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">Spinner</h4>
        <Loading type="spinner" size="lg" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">Dots</h4>
        <Loading type="dots" size="lg" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">Ring</h4>
        <Loading type="ring" size="lg" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">Ball</h4>
        <Loading type="ball" size="lg" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">Bars</h4>
        <Loading type="bars" size="lg" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">Infinity</h4>
        <Loading type="infinity" size="lg" />
      </div>
    </div>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">XS:</span>
        <Loading type="spinner" size="xs" />
        <Loading type="dots" size="xs" />
        <Loading type="ring" size="xs" />
        <Loading type="ball" size="xs" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">SM:</span>
        <Loading type="spinner" size="sm" />
        <Loading type="dots" size="sm" />
        <Loading type="ring" size="sm" />
        <Loading type="ball" size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">MD:</span>
        <Loading type="spinner" size="md" />
        <Loading type="dots" size="md" />
        <Loading type="ring" size="md" />
        <Loading type="ball" size="md" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">LG:</span>
        <Loading type="spinner" size="lg" />
        <Loading type="dots" size="lg" />
        <Loading type="ring" size="lg" />
        <Loading type="ball" size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">XL:</span>
        <Loading type="spinner" size="xl" />
        <Loading type="dots" size="xl" />
        <Loading type="ring" size="xl" />
        <Loading type="ball" size="xl" />
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
        <Loading type="spinner" size="lg" />
        <Loading type="dots" size="lg" />
        <Loading type="ring" size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Primary:</span>
        <Loading type="spinner" size="lg" color="primary" />
        <Loading type="dots" size="lg" color="primary" />
        <Loading type="ring" size="lg" color="primary" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Secondary:</span>
        <Loading type="spinner" size="lg" color="secondary" />
        <Loading type="dots" size="lg" color="secondary" />
        <Loading type="ring" size="lg" color="secondary" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Accent:</span>
        <Loading type="spinner" size="lg" color="accent" />
        <Loading type="dots" size="lg" color="accent" />
        <Loading type="ring" size="lg" color="accent" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Success:</span>
        <Loading type="spinner" size="lg" color="success" />
        <Loading type="dots" size="lg" color="success" />
        <Loading type="ring" size="lg" color="success" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Warning:</span>
        <Loading type="spinner" size="lg" color="warning" />
        <Loading type="dots" size="lg" color="warning" />
        <Loading type="ring" size="lg" color="warning" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm">Error:</span>
        <Loading type="spinner" size="lg" color="error" />
        <Loading type="dots" size="lg" color="error" />
        <Loading type="ring" size="lg" color="error" />
      </div>
    </div>
  ),
};

// Pre-configured components
export const PreConfigured: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">LoadingSpinner</h4>
        <LoadingSpinner size="lg" color="primary" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">LoadingDots</h4>
        <LoadingDots size="lg" color="secondary" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">LoadingRing</h4>
        <LoadingRing size="lg" color="accent" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">LoadingBall</h4>
        <LoadingBall size="lg" color="info" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">LoadingBars</h4>
        <LoadingBars size="lg" color="success" />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium mb-2">LoadingInfinity</h4>
        <LoadingInfinity size="lg" color="warning" />
      </div>
    </div>
  ),
};

// Loading with text
export const WithText: Story = {
  render: () => (
    <div className="space-y-4">
      <LoadingText text="Loading..." />
      <LoadingText text="Processing data..." type="dots" color="primary" />
      <LoadingText text="Uploading files..." type="bars" color="accent" />
      <LoadingText text="Analyzing..." type="ring" color="info" />
      <LoadingText text="Please wait..." type="infinity" color="warning" />
      <LoadingText
        text="Custom styled text"
        type="spinner"
        color="success"
        textClassName="text-lg font-semibold text-success"
      />
    </div>
  ),
};

// Loading buttons
export const LoadingButtons: Story = {
  render: function Component() {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

    const simulateLoading = (key: string, duration = 2000) => {
      setLoadingStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setLoadingStates(prev => ({ ...prev, [key]: false }));
      }, duration);
    };

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <LoadingButton
            loading={loadingStates.save}
            buttonClassName="btn-primary"
            onClick={() => simulateLoading('save')}
          >
            <IconDeviceFloppy size={16} />
            Save Changes
          </LoadingButton>

          <LoadingButton
            loading={loadingStates.download}
            buttonClassName="btn-secondary"
            type="dots"
            onClick={() => simulateLoading('download')}
          >
            <IconDownload size={16} />
            Download
          </LoadingButton>

          <LoadingButton
            loading={loadingStates.upload}
            buttonClassName="btn-accent"
            type="bars"
            onClick={() => simulateLoading('upload')}
          >
            <IconUpload size={16} />
            Upload
          </LoadingButton>

          <LoadingButton
            loading={loadingStates.refresh}
            buttonClassName="btn-outline"
            type="ring"
            onClick={() => simulateLoading('refresh')}
          >
            <IconRefresh size={16} />
            Refresh
          </LoadingButton>
        </div>

        <div className="flex flex-wrap gap-4">
          <LoadingButton
            loading={loadingStates.process}
            buttonClassName="btn-success btn-sm"
            size="xs"
            onClick={() => simulateLoading('process')}
          >
            Process
          </LoadingButton>

          <LoadingButton
            loading={loadingStates.submit}
            buttonClassName="btn-warning"
            type="infinity"
            onClick={() => simulateLoading('submit')}
          >
            Submit Form
          </LoadingButton>

          <LoadingButton
            loading={loadingStates.delete}
            buttonClassName="btn-error"
            type="ball"
            onClick={() => simulateLoading('delete')}
          >
            Delete Item
          </LoadingButton>
        </div>
      </div>
    );
  },
};

// Loading overlay
export const LoadingOverlays: Story = {
  render: function Component() {
    const [overlayStates, setOverlayStates] = useState<Record<string, boolean>>({});

    const toggleOverlay = (key: string) => {
      setOverlayStates(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div className="space-y-6">
        <div className="flex gap-4">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => toggleOverlay('card')}
          >
            Toggle Card Overlay
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => toggleOverlay('content')}
          >
            Toggle Content Overlay
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card with overlay */}
          <LoadingOverlay
            show={overlayStates.card}
            type="spinner"
            color="primary"
          >
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">User Profile</h2>
                <p>
                  This card shows how loading overlays work with structured content.
                  When loading is active, the content becomes dimmed and a spinner appears.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="stat bg-primary text-primary-content rounded">
                    <div className="stat-value">1,234</div>
                    <div className="stat-title">Followers</div>
                  </div>
                  <div className="stat bg-secondary text-secondary-content rounded">
                    <div className="stat-value">567</div>
                    <div className="stat-title">Following</div>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Edit Profile</button>
                </div>
              </div>
            </div>
          </LoadingOverlay>

          {/* Content with different overlay */}
          <LoadingOverlay
            show={overlayStates.content}
            type="dots"
            color="accent"
            backdrop={false}
            overlayClassName="bg-accent/10 rounded-lg"
          >
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Data Analytics</h2>
                <p>
                  This example shows a custom overlay without backdrop,
                  demonstrating different visual approaches.
                </p>
                <div className="overflow-x-auto">
                  <table className="table table-compact">
                    <thead>
                      <tr>
                        <th>Metric</th>
                        <th>Value</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Revenue</td>
                        <td>$45.2K</td>
                        <td className="text-success">+12%</td>
                      </tr>
                      <tr>
                        <td>Users</td>
                        <td>1,234</td>
                        <td className="text-warning">-2%</td>
                      </tr>
                      <tr>
                        <td>Sessions</td>
                        <td>5,678</td>
                        <td className="text-success">+8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </LoadingOverlay>
        </div>
      </div>
    );
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: function Component() {
    const [states, setStates] = useState({
      formSubmitting: false,
      dataLoading: false,
      fileUploading: false,
      pageLoading: false,
    });

    const simulateAction = (key: keyof typeof states, duration = 3000) => {
      setStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setStates(prev => ({ ...prev, [key]: false }));
      }, duration);
    };

    return (
      <div className="space-y-8 w-full max-w-4xl">
        {/* Form submission */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Contact Form</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" className="input input-bordered" defaultValue="John Doe" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" className="input input-bordered" defaultValue="john@example.com" />
              </div>
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered" defaultValue="Hello, I'm interested in your services..." />
              </div>
            </div>
            <div className="card-actions justify-end">
              <LoadingButton
                loading={states.formSubmitting}
                buttonClassName="btn-primary"
                onClick={() => simulateAction('formSubmitting')}
              >
                Send Message
              </LoadingButton>
            </div>
          </div>
        </div>

        {/* Data dashboard */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center mb-4">
              <h2 className="card-title">Sales Dashboard</h2>
              <button
                className="btn btn-outline btn-sm"
                onClick={() => simulateAction('dataLoading')}
              >
                <IconRefresh size={16} />
                Refresh Data
              </button>
            </div>

            <LoadingOverlay
              show={states.dataLoading}
              type="bars"
              color="primary"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="stat bg-primary text-primary-content rounded-lg">
                  <div className="stat-title">Total Sales</div>
                  <div className="stat-value">$89.4K</div>
                  <div className="stat-desc">↗︎ 12% increase</div>
                </div>
                <div className="stat bg-secondary text-secondary-content rounded-lg">
                  <div className="stat-title">Orders</div>
                  <div className="stat-value">1,234</div>
                  <div className="stat-desc">↗︎ 8% increase</div>
                </div>
                <div className="stat bg-accent text-accent-content rounded-lg">
                  <div className="stat-title">Customers</div>
                  <div className="stat-value">567</div>
                  <div className="stat-desc">↘︎ 2% decrease</div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#1001</td>
                        <td>Alice Johnson</td>
                        <td>$129.99</td>
                        <td><span className="badge badge-success">Completed</span></td>
                      </tr>
                      <tr>
                        <td>#1002</td>
                        <td>Bob Smith</td>
                        <td>$89.50</td>
                        <td><span className="badge badge-warning">Processing</span></td>
                      </tr>
                      <tr>
                        <td>#1003</td>
                        <td>Carol Davis</td>
                        <td>$199.99</td>
                        <td><span className="badge badge-info">Shipped</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </LoadingOverlay>
          </div>
        </div>

        {/* File upload */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">File Upload</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select files to upload</span>
              </label>
              <input type="file" className="file-input file-input-bordered" multiple />
            </div>

            {states.fileUploading && (
              <div className="mt-4">
                <LoadingText
                  text="Uploading files... Please don't close this window."
                  type="bars"
                  color="accent"
                  className="justify-center"
                />
                <progress className="progress progress-accent w-full mt-2" value="70" max="100"></progress>
              </div>
            )}

            <div className="card-actions justify-end">
              <LoadingButton
                loading={states.fileUploading}
                buttonClassName="btn-accent"
                type="bars"
                onClick={() => simulateAction('fileUploading', 5000)}
              >
                <IconUpload size={16} />
                Upload Files
              </LoadingButton>
            </div>
          </div>
        </div>

        {/* Page loading simulation */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Page Loading Simulation</h2>
            <p className="text-base-content/70 mb-4">
              Demonstrates full-page loading overlay that would typically cover the entire application.
            </p>

            <LoadingOverlay
              show={states.pageLoading}
              type="infinity"
              size="xl"
              color="primary"
              overlayClassName="bg-base-100/95 z-50"
            >
              <div className="min-h-[200px] p-6 border-2 border-dashed border-base-300 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Page Content</h3>
                <p className="text-base-content/70 mb-4">
                  This represents the main content of your application that would be
                  covered by a full-page loading overlay.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="card bg-base-200">
                    <div className="card-body">
                      <h4 className="card-title">Section 1</h4>
                      <p>Some content here...</p>
                    </div>
                  </div>
                  <div className="card bg-base-200">
                    <div className="card-body">
                      <h4 className="card-title">Section 2</h4>
                      <p>More content here...</p>
                    </div>
                  </div>
                </div>
              </div>
            </LoadingOverlay>

            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => simulateAction('pageLoading', 4000)}
              >
                Simulate Page Load
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Loading states showcase
export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Inline loading indicators */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">Inline Loading States</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Checking connection status</span>
              <LoadingDots size="sm" color="info" />
            </div>
            <div className="flex items-center justify-between">
              <span>Validating credentials</span>
              <LoadingSpinner size="sm" color="warning" />
            </div>
            <div className="flex items-center justify-between">
              <span>Synchronizing data</span>
              <LoadingBars size="sm" color="success" />
            </div>
          </div>
        </div>
      </div>

      {/* Loading placeholders */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">Loading Placeholders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-6 border border-dashed border-base-300 rounded-lg">
              <LoadingSpinner size="lg" color="primary" />
              <p className="mt-2 text-sm text-base-content/70">Loading user data...</p>
            </div>
            <div className="text-center p-6 border border-dashed border-base-300 rounded-lg">
              <LoadingInfinity size="lg" color="accent" />
              <p className="mt-2 text-sm text-base-content/70">Processing request...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Different contexts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="alert alert-info">
          <LoadingSpinner size="sm" />
          <span>Information loading...</span>
        </div>
        <div className="alert alert-warning">
          <LoadingDots size="sm" />
          <span>Processing warning...</span>
        </div>
        <div className="alert alert-success">
          <LoadingBars size="sm" />
          <span>Success operation...</span>
        </div>
      </div>
    </div>
  ),
};