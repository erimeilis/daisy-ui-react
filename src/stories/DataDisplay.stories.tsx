import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Table, TableWrapper, TableHead, TableBody, TableRow, TableCell, TableHeaderCell
} from '../components/data-display/table';
import {
  Progress, ProgressWithLabel, IndeterminateProgress, CircularProgress, StepProgress
} from '../components/ui/progress';
import {
  Stats, MetricCard
} from '../components/data-display/stat';
import { Badge } from '../components/ui/badge';
import { Avatar } from '../components/ui/avatar';
import { Button } from '../components/form/button';
import {
  IconTrendingUp, IconTrendingDown, IconUsers, IconActivity, IconShoppingCart, IconCurrencyDollar,
  IconWifi, IconPhone, IconMessage, IconClock, IconStar, IconDownload,
} from '@tabler/icons-react';

// Create a wrapper component for the story
const DataDisplayShowcase = () => {
  const [tableData] = React.useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '1 day ago' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', status: 'Inactive', lastLogin: '1 week ago' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', lastLogin: '3 hours ago' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Pending', lastLogin: 'Never' },
  ]);

  const [progressValues, setProgressValues] = React.useState({
    cpu: 65,
    memory: 80,
    disk: 45,
    network: 30
  });

  const [stepProgress, setStepProgress] = React.useState(2);

  const statsData = [
    {
      id: '1',
      title: 'Total Users',
      value: '89,400',
      description: '↗︎ 400 (22%)',
      figure: <IconUsers className="w-8 h-8" />,
      background: 'primary' as const,
      descriptionColor: 'success' as const
    },
    {
      id: '2',
      title: 'Page Views',
      value: '2.6M',
      description: '↘︎ 90 (14%)',
      figure: <IconActivity className="w-8 h-8" />,
      background: 'secondary' as const,
      descriptionColor: 'error' as const
    },
    {
      id: '3',
      title: 'New Orders',
      value: '1,200',
      description: '↗︎ 200 (40%)',
      figure: <IconShoppingCart className="w-8 h-8" />,
      background: 'accent' as const,
      descriptionColor: 'success' as const
    },
    {
      id: '4',
      title: 'Revenue',
      value: '$89,400',
      description: '↗︎ $4,200 (90%)',
      figure: <IconCurrencyDollar className="w-8 h-8" />,
      background: 'info' as const,
      descriptionColor: 'success' as const
    }
  ];

  const steps = ['Planning', 'Development', 'Testing', 'Deployment', 'Launch'];

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'Active': { color: 'success' as const, text: 'Active' },
      'Inactive': { color: 'error' as const, text: 'Inactive' },
      'Pending': { color: 'warning' as const, text: 'Pending' }
    };
    const config = statusMap[status as keyof typeof statusMap] || { color: 'default' as const, text: status };
    return <Badge variant={config.color}>{config.text}</Badge>;
  };

  const getRoleBadge = (role: string) => {
    const roleMap = {
      'Admin': { color: 'primary' as const },
      'Moderator': { color: 'secondary' as const },
      'User': { color: 'accent' as const }
    };
    const config = roleMap[role as keyof typeof roleMap] || { color: 'default' as const };
    return <Badge variant={config.color} styleVariant="outline">{role}</Badge>;
  };

  // Simulate progress updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgressValues(prev => ({
        cpu: Math.max(10, Math.min(90, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(10, Math.min(90, prev.memory + (Math.random() - 0.5) * 8)),
        disk: Math.max(10, Math.min(90, prev.disk + (Math.random() - 0.5) * 5)),
        network: Math.max(10, Math.min(90, prev.network + (Math.random() - 0.5) * 15))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Data Display Components</h1>
        <p className="text-lg text-gray-600">Tables, Progress bars, and Statistics showcase</p>
      </div>

      {/* Statistics Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Statistics</h2>

        <div>
          <h3 className="text-lg font-medium mb-4">Dashboard Stats</h3>
          <Stats stats={statsData} shadow="lg" />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Telecom Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              metric="Data Usage"
              value="15.2"
              unit="GB"
              change="+12%"
              changeType="positive"
              period="this month"
              metricIcon={<IconWifi className="w-6 h-6" />}
            />
            <MetricCard
              metric="Call Duration"
              value="1234"
              unit="minutes"
              change="-5%"
              changeType="negative"
              period="this week"
              metricIcon={<IconPhone className="w-6 h-6" />}
            />
            <MetricCard
              metric="Messages Sent"
              value="892"
              unit="SMS"
              change="+23%"
              changeType="positive"
              period="today"
              metricIcon={<IconMessage className="w-6 h-6" />}
            />
            <MetricCard
              metric="Uptime"
              value="99.9"
              unit="%"
              change="0%"
              changeType="neutral"
              period="this month"
              metricIcon={<IconClock className="w-6 h-6" />}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Vertical Stats</h3>
          <Stats
            stats={statsData.slice(0, 2)}
            direction="vertical"
            shadow="md"
            className="max-w-xs"
          />
        </div>
      </div>

      {/* Progress Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Progress Indicators</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">System Resources</h3>
            <div className="space-y-4">
              <ProgressWithLabel
                label="CPU Usage"
                value={Math.round(progressValues.cpu)}
                color="primary"
                labelPosition="inline"
              />
              <ProgressWithLabel
                label="Memory"
                value={Math.round(progressValues.memory)}
                color="secondary"
                labelPosition="inline"
              />
              <ProgressWithLabel
                label="Disk Space"
                value={Math.round(progressValues.disk)}
                color="accent"
                labelPosition="inline"
              />
              <ProgressWithLabel
                label="Network"
                value={Math.round(progressValues.network)}
                color="info"
                labelPosition="inline"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Circular Progress</h3>
            <div className="flex justify-around items-center">
              <CircularProgress
                value={Math.round(progressValues.cpu)}
                color="primary"
                showValue
                radius={40}
                strokeWidth={6}
              />
              <CircularProgress
                value={Math.round(progressValues.memory)}
                color="secondary"
                showValue
                radius={40}
                strokeWidth={6}
              />
              <CircularProgress
                indeterminate
                color="accent"
                radius={40}
                strokeWidth={6}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Step Progress</h3>
          <div className="max-w-2xl">
            <StepProgress
              steps={steps}
              currentStep={stepProgress}
              color="primary"
              showLabels
            />
            <div className="flex gap-2 mt-4">
              <Button
                size="sm"
                onClick={() => setStepProgress(Math.max(0, stepProgress - 1))}
                disabled={stepProgress === 0}
              >
                Previous
              </Button>
              <Button
                size="sm"
                onClick={() => setStepProgress(Math.min(steps.length - 1, stepProgress + 1))}
                disabled={stepProgress === steps.length - 1}
              >
                Next
              </Button>
              <Button
                size="sm"
                style="outline"
                onClick={() => setStepProgress(0)}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Progress Sizes & Colors</h3>
          <div className="space-y-3">
            <Progress value={25} size="xs" color="primary" />
            <Progress value={50} size="sm" color="secondary" />
            <Progress value={75} size="md" color="accent" />
            <Progress value={90} size="lg" color="success" />
            <Progress value={100} size="xl" color="info" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Indeterminate Progress</h3>
          <div className="space-y-3">
            <IndeterminateProgress color="primary" />
            <IndeterminateProgress color="secondary" size="sm" />
            <IndeterminateProgress color="accent" size="lg" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Data Tables</h2>

        <div>
          <h3 className="text-lg font-medium mb-4">User Management Table</h3>
          <TableWrapper>
            <Table modifier="zebra">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Avatar</TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Role</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Last Login</TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>
                      <Avatar
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                        alt={user.name}
                        size="sm"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold">{user.name}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm opacity-70">{user.email}</div>
                    </TableCell>
                    <TableCell>
                      {getRoleBadge(user.role)}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(user.status)}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{user.lastLogin}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="xs" style="outline">Edit</Button>
                        <Button size="xs" color="error" style="outline">Delete</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Compact Table</h3>
            <TableWrapper>
              <Table size="sm">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>#</TableHeaderCell>
                    <TableHeaderCell>Product</TableHeaderCell>
                    <TableHeaderCell>Price</TableHeaderCell>
                    <TableHeaderCell>Stock</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Laptop</TableCell>
                    <TableCell>$999</TableCell>
                    <TableCell><Badge variant="success">In Stock</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Mouse</TableCell>
                    <TableCell>$29</TableCell>
                    <TableCell><Badge variant="warning">Low Stock</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Keyboard</TableCell>
                    <TableCell>$79</TableCell>
                    <TableCell><Badge variant="error">Out of Stock</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableWrapper>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Performance Metrics</h3>
            <TableWrapper>
              <Table size="xs">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Metric</TableHeaderCell>
                    <TableHeaderCell>Value</TableHeaderCell>
                    <TableHeaderCell>Trend</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell>Response Time</TableCell>
                    <TableCell>120ms</TableCell>
                    <TableCell><IconTrendingUp className="w-4 h-4 text-success" /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>Error Rate</TableCell>
                    <TableCell>0.01%</TableCell>
                    <TableCell><IconTrendingDown className="w-4 h-4 text-success" /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>Throughput</TableCell>
                    <TableCell>1.2K req/s</TableCell>
                    <TableCell><IconTrendingUp className="w-4 h-4 text-success" /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>CPU Usage</TableCell>
                    <TableCell>65%</TableCell>
                    <TableCell><IconTrendingUp className="w-4 h-4 text-warning" /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableWrapper>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Large Table with Pinned Columns</h3>
          <TableWrapper>
            <Table size="lg" modifier="zebra pinCols">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Position</TableHeaderCell>
                  <TableHeaderCell>Department</TableHeaderCell>
                  <TableHeaderCell>Salary</TableHeaderCell>
                  <TableHeaderCell>Start Date</TableHeaderCell>
                  <TableHeaderCell>Performance</TableHeaderCell>
                  <TableHeaderCell>Rating</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><strong>John Smith</strong></TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Engineering</TableCell>
                  <TableCell>$95,000</TableCell>
                  <TableCell>2020-01-15</TableCell>
                  <TableCell><Progress value={85} size="sm" color="success" /></TableCell>
                  <TableCell>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <IconStar key={i} className={`w-4 h-4 ${i < 4 ? 'text-warning fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Sarah Johnson</strong></TableCell>
                  <TableCell>Product Manager</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>$105,000</TableCell>
                  <TableCell>2019-03-22</TableCell>
                  <TableCell><Progress value={92} size="sm" color="success" /></TableCell>
                  <TableCell>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <IconStar key={i} className={`w-4 h-4 ${i < 5 ? 'text-warning fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Mike Davis</strong></TableCell>
                  <TableCell>Designer</TableCell>
                  <TableCell>Design</TableCell>
                  <TableCell>$75,000</TableCell>
                  <TableCell>2021-06-10</TableCell>
                  <TableCell><Progress value={78} size="sm" color="primary" /></TableCell>
                  <TableCell>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <IconStar key={i} className={`w-4 h-4 ${i < 4 ? 'text-warning fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof DataDisplayShowcase> = {
  title: 'UI/Data Display',
  component: DataDisplayShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive showcase of data display components including tables, progress indicators, and statistics.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllDataDisplay: Story = {
  render: () => <DataDisplayShowcase />,
};

// Individual component stories
export const TableVariants: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <h3 className="text-lg font-semibold">Table Variants</h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Basic Table</h4>
          <TableWrapper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Job</TableHeaderCell>
                  <TableHeaderCell>Company</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Cy Ganderton</TableCell>
                  <TableCell>Quality Control Specialist</TableCell>
                  <TableCell>Littel, Schaden and Vandervort</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hart Hagerty</TableCell>
                  <TableCell>Desktop Support Technician</TableCell>
                  <TableCell>Zemlak, Daniel and Leannon</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brice Swyre</TableCell>
                  <TableCell>Tax Accountant</TableCell>
                  <TableCell>Carroll Group</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        <div>
          <h4 className="font-medium mb-3">Zebra Striped Table</h4>
          <TableWrapper>
            <Table modifier="zebra">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Job</TableHeaderCell>
                  <TableHeaderCell>Company</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Cy Ganderton</TableCell>
                  <TableCell>Quality Control Specialist</TableCell>
                  <TableCell>Littel, Schaden and Vandervort</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hart Hagerty</TableCell>
                  <TableCell>Desktop Support Technician</TableCell>
                  <TableCell>Zemlak, Daniel and Leannon</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brice Swyre</TableCell>
                  <TableCell>Tax Accountant</TableCell>
                  <TableCell>Carroll Group</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        <div>
          <h4 className="font-medium mb-3">Table Sizes</h4>
          <div className="space-y-4">
            {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
              <div key={size}>
                <p className="text-sm text-gray-600 mb-2">Size: {size}</p>
                <TableWrapper>
                  <Table size={size}>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Job</TableHeaderCell>
                        <TableHeaderCell>Company</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cy Ganderton</TableCell>
                        <TableCell>Quality Control Specialist</TableCell>
                        <TableCell>Littel, Schaden and Vandervort</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ProgressVariants: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <h3 className="text-lg font-semibold">Progress Variants</h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Basic Progress</h4>
          <div className="space-y-3 max-w-lg">
            <Progress value={0} />
            <Progress value={25} color="primary" />
            <Progress value={50} color="secondary" />
            <Progress value={75} color="accent" />
            <Progress value={100} color="success" />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Progress with Labels</h4>
          <div className="space-y-3 max-w-lg">
            <ProgressWithLabel label="Loading..." value={45} showValue />
            <ProgressWithLabel label="Upload" value={78} color="info" showValue />
            <ProgressWithLabel label="Processing" value={92} color="success" showValue />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Circular Progress</h4>
          <div className="flex gap-6">
            <CircularProgress value={25} color="primary" showValue />
            <CircularProgress value={50} color="secondary" showValue />
            <CircularProgress value={75} color="accent" showValue />
            <CircularProgress indeterminate color="info" />
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Indeterminate Progress</h4>
          <div className="space-y-3 max-w-lg">
            <IndeterminateProgress />
            <IndeterminateProgress color="primary" />
            <IndeterminateProgress color="secondary" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const StatVariants: Story = {
  render: function Component() {
    const statsData = [
      {
        id: '1',
        title: 'Downloads',
        value: '31K',
        description: 'Jan 1st - Feb 1st',
        figure: <IconDownload className="w-8 h-8" />
      },
      {
        id: '2',
        title: 'Users',
        value: '4,200',
        description: '↗︎ 400 (22%)',
        figure: <IconUsers className="w-8 h-8" />,
        descriptionColor: 'success' as const
      },
      {
        id: '3',
        title: 'New Registers',
        value: '1,200',
        description: '↘︎ 90 (14%)',
        figure: <IconActivity className="w-8 h-8" />,
        descriptionColor: 'error' as const
      }
    ];

    return (
      <div className="space-y-8 p-6">
        <h3 className="text-lg font-semibold">Stat Variants</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Horizontal Stats</h4>
            <Stats stats={statsData} shadow="lg" />
          </div>

          <div>
            <h4 className="font-medium mb-3">Vertical Stats</h4>
            <Stats stats={statsData.slice(0, 2)} direction="vertical" shadow="md" />
          </div>

          <div>
            <h4 className="font-medium mb-3">Colored Stats</h4>
            <Stats
              stats={[
                { ...statsData[0], background: 'primary' as const },
                { ...statsData[1], background: 'secondary' as const },
                { ...statsData[2], background: 'accent' as const }
              ]}
              shadow="lg"
            />
          </div>

          <div>
            <h4 className="font-medium mb-3">Metric Cards</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard
                metric="Revenue"
                value="12628"
                unit="USD"
                change="+4.75%"
                changeType="positive"
                period="from last week"
                metricIcon={<IconCurrencyDollar className="w-6 h-6" />}
              />
              <MetricCard
                metric="Orders"
                value="1340"
                change="-2.1%"
                changeType="negative"
                period="from yesterday"
                metricIcon={<IconShoppingCart className="w-6 h-6" />}
              />
              <MetricCard
                metric="Visitors"
                value="5420"
                change="+0.5%"
                changeType="neutral"
                period="from last hour"
                metricIcon={<IconUsers className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};