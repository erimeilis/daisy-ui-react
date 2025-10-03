import type { Meta, StoryObj } from '@storybook/react';
import { Range, RangeWithSteps, DualRange } from '../components/form/range';
import { useState } from 'react';
import { IconVolume, IconBrightness, IconTemperature, IconCurrencyDollar } from '@tabler/icons-react';

const meta: Meta<typeof Range> = {
  title: 'Form/Range',
  component: Range,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile range slider component built with DaisyUI classes, supporting different colors, sizes, value display, and dual range selection.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the range',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the range',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    showValue: {
      control: 'boolean',
      description: 'Show current value',
    },
    showMinMax: {
      control: 'boolean',
      description: 'Show min/max labels',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the range',
    },
  },
  args: {
    color: 'default',
    size: 'md',
    min: 0,
    max: 100,
    step: 1,
    showValue: false,
    showMinMax: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    defaultValue: 50,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 75,
    showValue: true,
  },
};

export const WithMinMax: Story = {
  args: {
    defaultValue: 30,
    showMinMax: true,
  },
};

export const Complete: Story = {
  args: {
    defaultValue: 60,
    showValue: true,
    showMinMax: true,
  },
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h4 className="text-sm font-medium mb-2">Default</h4>
        <Range defaultValue={25} showValue color="default" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Primary</h4>
        <Range defaultValue={35} showValue color="primary" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Secondary</h4>
        <Range defaultValue={45} showValue color="secondary" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Accent</h4>
        <Range defaultValue={55} showValue color="accent" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Info</h4>
        <Range defaultValue={65} showValue color="info" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Success</h4>
        <Range defaultValue={75} showValue color="success" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Warning</h4>
        <Range defaultValue={85} showValue color="warning" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Error</h4>
        <Range defaultValue={95} showValue color="error" />
      </div>
    </div>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h4 className="text-sm font-medium mb-2">Extra Small</h4>
        <Range defaultValue={25} size="xs" color="primary" showValue />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Small</h4>
        <Range defaultValue={50} size="sm" color="primary" showValue />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Medium</h4>
        <Range defaultValue={75} size="md" color="primary" showValue />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Large</h4>
        <Range defaultValue={90} size="lg" color="primary" showValue />
      </div>
    </div>
  ),
};

// Custom ranges and steps
export const CustomRanges: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h4 className="text-sm font-medium mb-2">Temperature (-10°C to 40°C)</h4>
        <Range
          min={-10}
          max={40}
          defaultValue={22}
          showValue
          showMinMax
          formatValue={(val) => `${val}°C`}
          color="warning"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Volume (0% to 100%)</h4>
        <Range
          min={0}
          max={100}
          step={5}
          defaultValue={75}
          showValue
          showMinMax
          formatValue={(val) => `${val}%`}
          color="accent"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Price ($10 to $1000)</h4>
        <Range
          min={10}
          max={1000}
          step={10}
          defaultValue={250}
          showValue
          showMinMax
          formatValue={(val) => `$${val}`}
          color="success"
        />
      </div>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h4 className="text-sm font-medium mb-2">Normal</h4>
        <Range defaultValue={50} showValue color="primary" />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Disabled</h4>
        <Range defaultValue={50} showValue color="primary" disabled />
      </div>
    </div>
  ),
};

// Controlled component
export const Controlled: Story = {
  render: function Component() {
    const [volume, setVolume] = useState(75);
    const [brightness, setBrightness] = useState(50);

    return (
      <div className="space-y-6 w-80">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-lg flex items-center gap-2">
              <IconVolume size={20} />
              Volume Control
            </h3>
            <Range
              value={volume}
              onValueChange={setVolume}
              showValue
              showMinMax
              formatValue={(val) => `${val}%`}
              color="primary"
            />
            <div className="text-sm text-base-content/70">
              Current volume: {volume}%
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-lg flex items-center gap-2">
              <IconBrightness size={20} />
              Brightness
            </h3>
            <Range
              value={brightness}
              onValueChange={setBrightness}
              showValue
              showMinMax
              formatValue={(val) => `${val}%`}
              color="accent"
            />
            <div className="text-sm text-base-content/70">
              Current brightness: {brightness}%
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Range with steps
export const WithSteps: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h4 className="text-sm font-medium mb-2">Quality Settings</h4>
        <RangeWithSteps
          min={0}
          max={4}
          step={1}
          defaultValue={2}
          showSteps
          stepLabels={['Low', 'Medium', 'High', 'Ultra', 'Max']}
          color="primary"
          showValue
        />
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Priority Levels</h4>
        <RangeWithSteps
          min={1}
          max={5}
          step={1}
          defaultValue={3}
          showSteps
          stepLabels={['1', '2', '3', '4', '5']}
          color="warning"
          showValue
        />
      </div>
    </div>
  ),
};

// Dual range
export const DualRangeExample: Story = {
  render: function Component() {
    const [priceRange, setPriceRange] = useState<[number, number]>([200, 800]);
    const [ageRange, setAgeRange] = useState<[number, number]>([25, 65]);

    return (
      <div className="space-y-6 w-80">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-lg flex items-center gap-2">
              <IconCurrencyDollar size={20} />
              Price Range
            </h3>
            <DualRange
              min={0}
              max={1000}
              step={10}
              minValue={priceRange[0]}
              maxValue={priceRange[1]}
              onRangeChange={(min, max) => setPriceRange([min, max])}
              showValue
              formatValue={(val) => `$${val}`}
              color="success"
            />
            <div className="text-sm text-base-content/70">
              Selected range: ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-lg">Age Range</h3>
            <DualRange
              min={18}
              max={80}
              minValue={ageRange[0]}
              maxValue={ageRange[1]}
              onRangeChange={(min, max) => setAgeRange([min, max])}
              showValue
              formatValue={(val) => `${val} years`}
              color="info"
            />
            <div className="text-sm text-base-content/70">
              Selected range: {ageRange[0]} - {ageRange[1]} years
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: function Component() {
    const [settings, setSettings] = useState({
      volume: 75,
      brightness: 60,
      temperature: 22,
      quality: 2,
      priceMin: 100,
      priceMax: 500,
    });

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Media player controls */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Media Player</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconVolume size={16} />
                  <span className="text-sm font-medium">Volume</span>
                </div>
                <Range
                  value={settings.volume}
                  onValueChange={(val) => setSettings(s => ({ ...s, volume: val }))}
                  showValue
                  formatValue={(val) => `${val}%`}
                  color="primary"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconBrightness size={16} />
                  <span className="text-sm font-medium">Brightness</span>
                </div>
                <Range
                  value={settings.brightness}
                  onValueChange={(val) => setSettings(s => ({ ...s, brightness: val }))}
                  showValue
                  formatValue={(val) => `${val}%`}
                  color="accent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Environment controls */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Environment</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconTemperature size={16} />
                  <span className="text-sm font-medium">Temperature</span>
                </div>
                <Range
                  min={16}
                  max={30}
                  value={settings.temperature}
                  onValueChange={(val) => setSettings(s => ({ ...s, temperature: val }))}
                  showValue
                  showMinMax
                  formatValue={(val) => `${val}°C`}
                  color="warning"
                />
              </div>
              <div>
                <span className="text-sm font-medium">Video Quality</span>
                <RangeWithSteps
                  min={0}
                  max={4}
                  step={1}
                  value={settings.quality}
                  onValueChange={(val) => setSettings(s => ({ ...s, quality: val }))}
                  showSteps
                  stepLabels={['360p', '480p', '720p', '1080p', '4K']}
                  color="info"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filter interface */}
        <div className="card bg-base-100 shadow-xl md:col-span-2">
          <div className="card-body">
            <h2 className="card-title">Product Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconCurrencyDollar size={16} />
                  <span className="text-sm font-medium">Price Range</span>
                </div>
                <DualRange
                  min={0}
                  max={1000}
                  step={25}
                  minValue={settings.priceMin}
                  maxValue={settings.priceMax}
                  onRangeChange={(min, max) => setSettings(s => ({ ...s, priceMin: min, priceMax: max }))}
                  showValue
                  formatValue={(val) => `$${val}`}
                  color="success"
                />
              </div>
              <div className="flex items-center">
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Selected Range</div>
                    <div className="stat-value text-lg">${settings.priceMin} - ${settings.priceMax}</div>
                    <div className="stat-desc">Out of $0 - $1000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Interactive playground
export const InteractivePlayground: Story = {
  render: function Component() {
    const [value, setValue] = useState(50);
    const [config, setConfig] = useState({
      min: 0,
      max: 100,
      step: 1,
      showValue: true,
      showMinMax: true,
      color: 'primary' as const,
      size: 'md' as const,
    });

    return (
      <div className="space-y-6 w-full max-w-2xl">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Range Playground</h2>

            {/* Main range */}
            <div className="py-4">
              <Range
                min={config.min}
                max={config.max}
                step={config.step}
                value={value}
                onValueChange={setValue}
                showValue={config.showValue}
                showMinMax={config.showMinMax}
                color={config.color}
                size={config.size}
              />
            </div>

            {/* Configuration */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Min Value</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered input-sm w-full"
                  value={config.min}
                  onChange={(e) => setConfig(c => ({ ...c, min: Number(e.target.value) }))}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Max Value</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered input-sm w-full"
                  value={config.max}
                  onChange={(e) => setConfig(c => ({ ...c, max: Number(e.target.value) }))}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Step</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered input-sm w-full"
                  value={config.step}
                  onChange={(e) => setConfig(c => ({ ...c, step: Number(e.target.value) }))}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Current Value</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered input-sm w-full"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={config.showValue}
                  onChange={(e) => setConfig(c => ({ ...c, showValue: e.target.checked }))}
                />
                <span className="label-text ml-2">Show Value</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={config.showMinMax}
                  onChange={(e) => setConfig(c => ({ ...c, showMinMax: e.target.checked }))}
                />
                <span className="label-text ml-2">Show Min/Max</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  },
};