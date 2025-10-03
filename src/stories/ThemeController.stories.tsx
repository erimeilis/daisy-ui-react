import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider, useTheme, ThemeSwitcher, DAISY_THEMES } from '../lib/theme-controller';
import { Select } from '../components/form/select';
import { Radio } from '../components/form/radio';
import { Toggle } from '../components/form/toggle';
import { Button } from '../components/form/button';
import { Card, CardBody, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const meta: Meta = {
  title: 'UI/Theme Controller',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Advanced theme controller with multiple input types: dropdown, radio buttons, and toggle switches. Demonstrates dynamic theme switching across all 35+ DaisyUI themes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Enhanced theme controller with multiple input types
const EnhancedThemeController = () => {
  const { theme, setTheme } = useTheme();
  const [controlType, setControlType] = React.useState<'dropdown' | 'radio' | 'toggle'>('dropdown');

  // Popular themes for quick access
  const popularThemes = ['light', 'dark', 'cupcake', 'synthwave', 'cyberpunk', 'valentine'];

  // Categorized themes
  const themeCategories = {
    'Light Themes': ['light', 'cupcake', 'emerald', 'corporate', 'garden', 'lofi', 'pastel', 'fantasy', 'wireframe', 'cmyk'],
    'Dark Themes': ['dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula', 'business', 'night', 'coffee'],
    'Colorful Themes': ['valentine', 'cyberpunk', 'retro', 'aqua', 'acid', 'lemonade', 'winter'],
    'Nature Themes': ['autumn', 'garden', 'forest'],
  };

  const renderDropdownController = () => (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text font-semibold">Choose Theme (Dropdown)</span>
      </label>
      <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <optgroup label="Popular">
          {popularThemes.map((themeName) => (
            <option key={themeName} value={themeName}>
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </option>
          ))}
        </optgroup>
        {Object.entries(themeCategories).map(([category, themes]) => (
          <optgroup key={category} label={category}>
            {themes.map((themeName) => (
              <option key={themeName} value={themeName}>
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>
    </div>
  );

  const renderRadioController = () => (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Choose Theme (Radio)</span>
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto p-4 border rounded-lg">
        {DAISY_THEMES.map((themeName) => (
          <div key={themeName} className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <Radio
                name="theme-radio"
                value={themeName}
                checked={theme === themeName}
                onChange={(e) => setTheme(e.target.value)}
                size="sm"
              />
              <span className="label-text text-sm">
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderToggleController = () => (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold">Popular Themes (Toggles)</span>
      </label>
      <div className="space-y-3">
        {popularThemes.map((themeName) => (
          <div key={themeName} className="form-control">
            <label className="label cursor-pointer justify-between">
              <span className="label-text">
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </span>
              <Toggle
                checked={theme === themeName}
                onChange={() => setTheme(themeName)}
                color={theme === themeName ? 'primary' : 'default'}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Theme Controller</h1>
          <p className="text-lg opacity-70">
            Dynamic theme switching with multiple input types
          </p>
          <Badge variant="primary" className="mt-2">
            Current: {theme}
          </Badge>
        </div>

        {/* Control Type Selector */}
        <div className="text-center mb-8">
          <div className="btn-group">
            <Button
              size="sm"
              color={controlType === 'dropdown' ? 'primary' : 'ghost'}
              onClick={() => setControlType('dropdown')}
            >
              Dropdown
            </Button>
            <Button
              size="sm"
              color={controlType === 'radio' ? 'primary' : 'ghost'}
              onClick={() => setControlType('radio')}
            >
              Radio
            </Button>
            <Button
              size="sm"
              color={controlType === 'toggle' ? 'primary' : 'ghost'}
              onClick={() => setControlType('toggle')}
            >
              Toggle
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Theme Controller */}
          <Card>
            <CardBody>
              <CardTitle>Theme Controls</CardTitle>
              {controlType === 'dropdown' && renderDropdownController()}
              {controlType === 'radio' && renderRadioController()}
              {controlType === 'toggle' && renderToggleController()}
            </CardBody>
          </Card>

          {/* Theme Preview */}
          <Card>
            <CardBody>
              <CardTitle>Theme Preview</CardTitle>
              <div className="space-y-4">
                {/* Color swatches */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-12 bg-primary rounded flex items-center justify-center text-primary-content text-xs font-bold">
                    Primary
                  </div>
                  <div className="h-12 bg-secondary rounded flex items-center justify-center text-secondary-content text-xs font-bold">
                    Secondary
                  </div>
                  <div className="h-12 bg-accent rounded flex items-center justify-center text-accent-content text-xs font-bold">
                    Accent
                  </div>
                  <div className="h-12 bg-neutral rounded flex items-center justify-center text-neutral-content text-xs font-bold">
                    Neutral
                  </div>
                </div>

                {/* Semantic colors */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-8 bg-info rounded flex items-center justify-center text-info-content text-xs">
                    Info
                  </div>
                  <div className="h-8 bg-success rounded flex items-center justify-center text-success-content text-xs">
                    Success
                  </div>
                  <div className="h-8 bg-warning rounded flex items-center justify-center text-warning-content text-xs">
                    Warning
                  </div>
                  <div className="h-8 bg-error rounded flex items-center justify-center text-error-content text-xs">
                    Error
                  </div>
                </div>

                {/* Sample components */}
                <div className="space-y-3">
                  <Button color="primary" size="sm">Primary Button</Button>
                  <Button style="outline" color="secondary" size="sm">Outline Button</Button>
                  <div className="flex gap-2">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="accent">Accent</Badge>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Theme Grid Display */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6">All Available Themes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {DAISY_THEMES.map((themeName) => (
              <button
                key={themeName}
                className={`p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                  theme === themeName
                    ? 'border-primary bg-primary/10'
                    : 'border-base-300 hover:border-primary/50'
                }`}
                onClick={() => setTheme(themeName)}
                data-theme={themeName}
              >
                <div className="text-xs font-semibold mb-2">
                  {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                </div>
                <div className="grid grid-cols-4 gap-1 h-6">
                  <div className="bg-primary rounded-sm"></div>
                  <div className="bg-secondary rounded-sm"></div>
                  <div className="bg-accent rounded-sm"></div>
                  <div className="bg-neutral rounded-sm"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllInputTypes: Story = {
  render: () => (
    <ThemeProvider>
      <EnhancedThemeController />
    </ThemeProvider>
  ),
};

// Simple dropdown theme controller
export const DropdownController: Story = {
  render: () => (
    <ThemeProvider>
      <div className="p-6 bg-base-100 min-h-screen">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Dropdown Theme Controller</h2>
          <ThemeSwitcher />

          <div className="mt-8 space-y-4">
            <div className="card bg-base-200 p-4">
              <h3 className="font-bold">Theme Preview</h3>
              <p className="opacity-70">This content adapts to the selected theme</p>
              <div className="flex gap-2 mt-4 justify-center">
                <Button color="primary" size="sm">Primary</Button>
                <Button color="secondary" size="sm">Secondary</Button>
                <Button color="accent" size="sm">Accent</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

// Radio-based theme controller for popular themes only
export const RadioController: Story = {
  render: function Component() {
    const popularThemes = ['light', 'dark', 'cupcake', 'synthwave', 'cyberpunk', 'valentine', 'aqua', 'luxury'];

    return (
      <ThemeProvider>
        <ThemeRadioController themes={popularThemes} />
      </ThemeProvider>
    );
  },
};

const ThemeRadioController = ({ themes }: { themes: string[] }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-6 bg-base-100 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Popular Theme Selection</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {themes.map((themeName) => (
            <div key={themeName} className="form-control">
              <label className="label cursor-pointer flex-col gap-2 p-4 border rounded-lg hover:bg-base-200">
                <div className="flex items-center gap-2">
                  <Radio
                    name="theme"
                    value={themeName}
                    checked={theme === themeName}
                    onChange={(e) => setTheme(e.target.value)}
                  />
                  <span className="label-text font-semibold">
                    {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                  </span>
                </div>

                {/* Color preview */}
                <div className="w-full h-6 rounded overflow-hidden" data-theme={themeName}>
                  <div className="grid grid-cols-4 h-full">
                    <div className="bg-primary"></div>
                    <div className="bg-secondary"></div>
                    <div className="bg-accent"></div>
                    <div className="bg-neutral"></div>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Badge variant="primary" size="lg">
            Current Theme: {theme}
          </Badge>
        </div>
      </div>
    </div>
  );
};