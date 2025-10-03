import type { Meta, StoryObj } from '@storybook/react';
import { Stack, HStack, VStack, Center, Spacer, Container, Grid } from '../components/layout/stack';
import { Button } from '../components/form/button';
import { Card, CardBody } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Stack component for organizing elements in flexible layouts with support for different directions, spacing, alignment, and wrapping options.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['column', 'row', 'column-reverse', 'row-reverse'],
      description: 'Stack direction',
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spacing between items',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Cross-axis alignment',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Main-axis alignment',
    },
    wrap: {
      control: 'select',
      options: ['none', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap behavior',
    },
  },
  args: {
    direction: 'column',
    spacing: 'md',
    align: 'stretch',
    justify: 'start',
    wrap: 'none',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic vertical stack
export const BasicStack: Story = {
  render: (args) => (
    <Stack {...args} className="w-64">
      <Card>
        <CardBody>Item 1</CardBody>
      </Card>
      <Card>
        <CardBody>Item 2</CardBody>
      </Card>
      <Card>
        <CardBody>Item 3</CardBody>
      </Card>
    </Stack>
  ),
};

// Horizontal stack
export const HorizontalStack: Story = {
  render: () => (
    <HStack spacing="md" align="center" className="w-full">
      <Button size="sm">Action 1</Button>
      <Button size="sm" color="secondary">Action 2</Button>
      <Button size="sm" color="accent">Action 3</Button>
    </HStack>
  ),
};

// Vertical stack shorthand
export const VerticalStack: Story = {
  render: () => (
    <VStack spacing="lg" align="start" className="w-64">
      <h2 className="text-xl font-bold">Title</h2>
      <p className="text-base-content/70">
        This is a description that provides more details about the content.
      </p>
      <HStack spacing="sm">
        <Button size="sm">Primary</Button>
        <Button size="sm" style="outline">Secondary</Button>
      </HStack>
    </VStack>
  ),
};

// Different spacing options
export const SpacingOptions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-2">No spacing</h3>
        <HStack spacing="none">
          <Badge>Badge 1</Badge>
          <Badge>Badge 2</Badge>
          <Badge>Badge 3</Badge>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Small spacing</h3>
        <HStack spacing="sm">
          <Badge>Badge 1</Badge>
          <Badge>Badge 2</Badge>
          <Badge>Badge 3</Badge>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Medium spacing</h3>
        <HStack spacing="md">
          <Badge>Badge 1</Badge>
          <Badge>Badge 2</Badge>
          <Badge>Badge 3</Badge>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Large spacing</h3>
        <HStack spacing="lg">
          <Badge>Badge 1</Badge>
          <Badge>Badge 2</Badge>
          <Badge>Badge 3</Badge>
        </HStack>
      </div>
    </div>
  ),
};

// Alignment options
export const AlignmentOptions: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Align Start</h3>
        <HStack align="start" className="h-20 bg-base-200 p-4">
          <div className="bg-primary text-primary-content p-2 rounded">Small</div>
          <div className="bg-secondary text-secondary-content p-4 rounded">Medium</div>
          <div className="bg-accent text-accent-content p-6 rounded">Large</div>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Align Center</h3>
        <HStack align="center" className="h-20 bg-base-200 p-4">
          <div className="bg-primary text-primary-content p-2 rounded">Small</div>
          <div className="bg-secondary text-secondary-content p-4 rounded">Medium</div>
          <div className="bg-accent text-accent-content p-6 rounded">Large</div>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Align End</h3>
        <HStack align="end" className="h-20 bg-base-200 p-4">
          <div className="bg-primary text-primary-content p-2 rounded">Small</div>
          <div className="bg-secondary text-secondary-content p-4 rounded">Medium</div>
          <div className="bg-accent text-accent-content p-6 rounded">Large</div>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Align Stretch</h3>
        <HStack align="stretch" className="h-20 bg-base-200 p-4">
          <div className="bg-primary text-primary-content p-2 rounded flex items-center justify-center">Small</div>
          <div className="bg-secondary text-secondary-content p-2 rounded flex items-center justify-center">Medium</div>
          <div className="bg-accent text-accent-content p-2 rounded flex items-center justify-center">Large</div>
        </HStack>
      </div>
    </div>
  ),
};

// Justify content options
export const JustifyOptions: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Justify Start</h3>
        <HStack justify="start" className="w-full bg-base-200 p-4">
          <Badge>Item 1</Badge>
          <Badge>Item 2</Badge>
          <Badge>Item 3</Badge>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Justify Center</h3>
        <HStack justify="center" className="w-full bg-base-200 p-4">
          <Badge>Item 1</Badge>
          <Badge>Item 2</Badge>
          <Badge>Item 3</Badge>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Justify End</h3>
        <HStack justify="end" className="w-full bg-base-200 p-4">
          <Badge>Item 1</Badge>
          <Badge>Item 2</Badge>
          <Badge>Item 3</Badge>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Justify Between</h3>
        <HStack justify="between" className="w-full bg-base-200 p-4">
          <Badge>Item 1</Badge>
          <Badge>Item 2</Badge>
          <Badge>Item 3</Badge>
        </HStack>
      </div>
    </div>
  ),
};

// Center component
export const CenterComponent: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Centered Content</h3>
        <Center minHeight="200px" className="bg-base-200 border rounded">
          <div className="text-center">
            <div className="text-4xl mb-2">🎯</div>
            <p>Perfectly centered content</p>
          </div>
        </Center>
      </div>
    </div>
  ),
};

// Spacer component
export const SpacerComponent: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Using Spacer</h3>
        <HStack className="w-full bg-base-200 p-4">
          <Badge>Left</Badge>
          <Spacer />
          <Badge>Right</Badge>
        </HStack>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Multiple Spacers</h3>
        <HStack className="w-full bg-base-200 p-4">
          <Badge>Start</Badge>
          <Spacer />
          <Badge>Middle</Badge>
          <Spacer />
          <Badge>End</Badge>
        </HStack>
      </div>
    </div>
  ),
};

// Container component
export const ContainerComponent: Story = {
  render: () => (
    <div className="space-y-6 w-full">
      <div>
        <h3 className="font-semibold mb-2">Small Container</h3>
        <Container maxWidth="sm" padding="md" className="bg-base-200">
          <p>This content is contained within a small container with medium padding.</p>
        </Container>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Large Container</h3>
        <Container maxWidth="lg" padding="lg" className="bg-base-200">
          <VStack spacing="md">
            <h2 className="text-xl font-bold">Large Container</h2>
            <p>This content is contained within a large container with large padding. It provides more space for content to breathe.</p>
            <HStack spacing="sm">
              <Button size="sm">Action 1</Button>
              <Button size="sm" style="outline">Action 2</Button>
            </HStack>
          </VStack>
        </Container>
      </div>
    </div>
  ),
};

// Grid component
export const GridComponent: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Fixed Grid (3 columns)</h3>
        <Grid columns={3} spacing="md">
          <Card><CardBody>Item 1</CardBody></Card>
          <Card><CardBody>Item 2</CardBody></Card>
          <Card><CardBody>Item 3</CardBody></Card>
          <Card><CardBody>Item 4</CardBody></Card>
          <Card><CardBody>Item 5</CardBody></Card>
          <Card><CardBody>Item 6</CardBody></Card>
        </Grid>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Responsive Grid</h3>
        <Grid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="sm">
          <Card><CardBody>Responsive 1</CardBody></Card>
          <Card><CardBody>Responsive 2</CardBody></Card>
          <Card><CardBody>Responsive 3</CardBody></Card>
          <Card><CardBody>Responsive 4</CardBody></Card>
        </Grid>
      </div>
    </div>
  ),
};

// Complex layout example
export const ComplexLayout: Story = {
  render: () => (
    <Container maxWidth="lg" padding="md">
      <VStack spacing="lg">
        {/* Header */}
        <HStack justify="between" align="center" className="w-full">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <HStack spacing="sm">
            <Button size="sm" style="outline">Settings</Button>
            <Button size="sm">New Item</Button>
          </HStack>
        </HStack>

        {/* Stats Grid */}
        <Grid columns={{ sm: 1, md: 2, lg: 4 }} spacing="md">
          <Card>
            <CardBody>
              <VStack spacing="sm" align="start">
                <div className="text-2xl font-bold">1,234</div>
                <div className="text-sm text-base-content/70">Total Users</div>
              </VStack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <VStack spacing="sm" align="start">
                <div className="text-2xl font-bold">$12,345</div>
                <div className="text-sm text-base-content/70">Revenue</div>
              </VStack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <VStack spacing="sm" align="start">
                <div className="text-2xl font-bold">567</div>
                <div className="text-sm text-base-content/70">Orders</div>
              </VStack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <VStack spacing="sm" align="start">
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm text-base-content/70">Satisfaction</div>
              </VStack>
            </CardBody>
          </Card>
        </Grid>

        {/* Main Content */}
        <Grid columns={{ sm: 1, lg: 3 }} spacing="lg" className="w-full">
          <div className="lg:col-span-2">
            <Card>
              <CardBody>
                <VStack spacing="md" align="start">
                  <h2 className="text-lg font-semibold">Recent Activity</h2>
                  <VStack spacing="sm" className="w-full">
                    <HStack justify="between" className="w-full">
                      <span>User registered</span>
                      <Badge size="sm">2 min ago</Badge>
                    </HStack>
                    <HStack justify="between" className="w-full">
                      <span>Order completed</span>
                      <Badge size="sm">5 min ago</Badge>
                    </HStack>
                    <HStack justify="between" className="w-full">
                      <span>Payment received</span>
                      <Badge size="sm">10 min ago</Badge>
                    </HStack>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </div>

          <div>
            <Card>
              <CardBody>
                <VStack spacing="md" align="start">
                  <h2 className="text-lg font-semibold">Quick Actions</h2>
                  <VStack spacing="sm" className="w-full">
                    <Button style="outline" className="w-full">Add User</Button>
                    <Button style="outline" className="w-full">Create Order</Button>
                    <Button style="outline" className="w-full">Generate Report</Button>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </div>
        </Grid>
      </VStack>
    </Container>
  ),
};