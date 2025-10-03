import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress } from '../components/ui/progress';
import { Card, CardBody, CardTitle } from '../components/ui/card';
import { Button } from '../components/form/button';
import { IconDownload, IconUpload } from '@tabler/icons-react';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Progress component for displaying progress bars with various colors, sizes, and states including determinate and indeterminate modes.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The progress value (0-100)',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the progress bar',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the progress bar',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the progress is indeterminate (animated without specific value)',
    },
  },
  args: {
    value: 50,
    color: 'primary',
    size: 'md',
    indeterminate: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic progress bar
export const BasicProgress: Story = {
  args: {
    value: 75,
  },
};

// Different colors
export const Colors: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="text-sm mb-2">Default</p>
        <Progress value={70} />
      </div>
      <div>
        <p className="text-sm mb-2">Primary</p>
        <Progress value={70} color="primary" />
      </div>
      <div>
        <p className="text-sm mb-2">Secondary</p>
        <Progress value={70} color="secondary" />
      </div>
      <div>
        <p className="text-sm mb-2">Accent</p>
        <Progress value={70} color="accent" />
      </div>
      <div>
        <p className="text-sm mb-2">Info</p>
        <Progress value={70} color="info" />
      </div>
      <div>
        <p className="text-sm mb-2">Success</p>
        <Progress value={70} color="success" />
      </div>
      <div>
        <p className="text-sm mb-2">Warning</p>
        <Progress value={70} color="warning" />
      </div>
      <div>
        <p className="text-sm mb-2">Error</p>
        <Progress value={70} color="error" />
      </div>
    </div>
  ),
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="text-sm mb-2">Extra Small</p>
        <Progress value={60} size="xs" color="primary" />
      </div>
      <div>
        <p className="text-sm mb-2">Small</p>
        <Progress value={60} size="sm" color="primary" />
      </div>
      <div>
        <p className="text-sm mb-2">Medium</p>
        <Progress value={60} size="md" color="primary" />
      </div>
      <div>
        <p className="text-sm mb-2">Large</p>
        <Progress value={60} size="lg" color="primary" />
      </div>
    </div>
  ),
};

// Indeterminate progress
export const IndeterminateProgress: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="text-sm mb-2">Loading...</p>
        <Progress indeterminate color="primary" />
      </div>
      <div>
        <p className="text-sm mb-2">Processing...</p>
        <Progress indeterminate color="secondary" />
      </div>
      <div>
        <p className="text-sm mb-2">Uploading...</p>
        <Progress indeterminate color="success" />
      </div>
    </div>
  ),
};

// Progress with labels
export const WithLabels: Story = {
  render: function Component() {
    const [progress, setProgress] = React.useState(45);

    return (
      <div className="space-y-6 w-80">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Installation Progress</span>
            <span className="text-sm">{progress}%</span>
          </div>
          <Progress value={progress} color="primary" />
          <p className="text-xs text-gray-500 mt-1">Installing dependencies...</p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Download</span>
            <span className="text-sm">2.5 / 5.0 GB</span>
          </div>
          <Progress value={50} color="info" />
          <p className="text-xs text-gray-500 mt-1">Estimated time remaining: 3 minutes</p>
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => setProgress(Math.min(100, progress + 10))}
            disabled={progress >= 100}
          >
            +10%
          </Button>
          <Button
            size="sm"
            style="outline"
            onClick={() => setProgress(Math.max(0, progress - 10))}
            disabled={progress <= 0}
          >
            -10%
          </Button>
          <Button
            size="sm"
            color="secondary"
            onClick={() => setProgress(0)}
          >
            Reset
          </Button>
        </div>
      </div>
    );
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: function Component() {
    const [uploadProgress, setUploadProgress] = React.useState(0);
    const [downloadProgress, setDownloadProgress] = React.useState(0);
    const [skillProgress] = React.useState({
      react: 85,
      typescript: 75,
      css: 90,
      node: 70,
    });

    const simulateUpload = () => {
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
    };

    const simulateDownload = () => {
      setDownloadProgress(0);
      const interval = setInterval(() => {
        setDownloadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 150);
    };

    return (
      <div className="space-y-8 max-w-lg">
        {/* File Upload */}
        <Card>
          <CardBody>
            <CardTitle>File Upload</CardTitle>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">document.pdf</span>
                  <span className="text-sm">{Math.round(uploadProgress)}%</span>
                </div>
                <Progress
                  value={uploadProgress}
                  color={uploadProgress === 100 ? 'success' : 'primary'}
                />
                {uploadProgress === 100 && (
                  <p className="text-xs text-success mt-1">✓ Upload complete!</p>
                )}
              </div>
              <Button
                size="sm"
                onClick={simulateUpload}
                disabled={uploadProgress > 0 && uploadProgress < 100}
              >
                <IconUpload className="w-4 h-4 mr-2" />
                {uploadProgress === 0 ? 'Start Upload' : uploadProgress === 100 ? 'Upload Again' : 'Uploading...'}
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Download Progress */}
        <Card>
          <CardBody>
            <CardTitle>Download Manager</CardTitle>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">project-files.zip</span>
                  <span className="text-sm">{Math.round(downloadProgress)}%</span>
                </div>
                <Progress
                  value={downloadProgress}
                  color="info"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{downloadProgress === 100 ? 'Complete' : 'Downloading...'}</span>
                  <span>25.3 MB</span>
                </div>
              </div>
              <Button
                size="sm"
                color="info"
                onClick={simulateDownload}
                disabled={downloadProgress > 0 && downloadProgress < 100}
              >
                <IconDownload className="w-4 h-4 mr-2" />
                {downloadProgress === 0 ? 'Start Download' : downloadProgress === 100 ? 'Download Again' : 'Downloading...'}
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Skills Progress */}
        <Card>
          <CardBody>
            <CardTitle>Skills & Expertise</CardTitle>
            <div className="space-y-4">
              {Object.entries(skillProgress).map(([skill, value]) => (
                <div key={skill}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium capitalize">{skill}</span>
                    <span className="text-sm">{value}%</span>
                  </div>
                  <Progress
                    value={value}
                    color={value >= 80 ? 'success' : value >= 60 ? 'warning' : 'error'}
                    size="sm"
                  />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* System Status */}
        <Card>
          <CardBody>
            <CardTitle>System Resources</CardTitle>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>CPU Usage</span>
                  <span>45%</span>
                </div>
                <Progress value={45} color="primary" size="sm" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Memory</span>
                  <span>78%</span>
                </div>
                <Progress value={78} color="warning" size="sm" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Storage</span>
                  <span>92%</span>
                </div>
                <Progress value={92} color="error" size="sm" />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  },
};