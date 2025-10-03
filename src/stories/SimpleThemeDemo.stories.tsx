import type { Meta, StoryObj } from '@storybook/react';
import { DAISY_THEMES } from '../lib/theme-controller';

const SimpleThemeDemo = () => {
  return (
    <div className="min-h-screen p-8 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">DaisyUI Theme Demo</h1>
          <p className="text-lg opacity-70 mb-8">
            Simple demonstration of DaisyUI themes with basic components
          </p>
        </div>

        {/* Color Palette */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Color Palette</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">Primary</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">Secondary</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">Accent</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neutral rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">Neutral</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="btn">Default</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-link">Link</button>
              <button className="btn btn-outline">Outline</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
              <button className="btn btn-error">Error</button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Sample Card</h2>
              <p>This card showcases the current theme colors and styling.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Action</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Another Card</h2>
              <p>Cards adapt beautifully to each theme with proper color schemes.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary btn-sm">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-4">
          <div className="alert alert-info">
            <span>This is an info alert showcasing the current theme colors.</span>
          </div>
          <div className="alert alert-success">
            <span>Success! Theme switching is working perfectly.</span>
          </div>
          <div className="alert alert-warning">
            <span>Warning: Some themes might be very different from others.</span>
          </div>
          <div className="alert alert-error">
            <span>Error alerts maintain consistency across all themes.</span>
          </div>
        </div>

        {/* Form Elements */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Form Elements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <input type="text" placeholder="Text input" className="input input-bordered w-full" />
                <input type="email" placeholder="Email input" className="input input-bordered w-full" />
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Checkbox option</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Radio option 1</span>
                    <input type="radio" name="radio-test" className="radio" />
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <input type="checkbox" className="toggle" />
                <progress className="progress progress-primary w-full" value="65" max="100"></progress>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked={false} />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked={false} />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked={false} />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked={true} />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked={false} />
                </div>
                <div className="flex gap-2">
                  <div className="badge badge-primary">Primary</div>
                  <div className="badge badge-secondary">Secondary</div>
                  <div className="badge badge-accent">Accent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theme List */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">All Available Themes (35 total)</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
              {DAISY_THEMES.map((themeName) => (
                <div key={themeName} className="badge badge-outline text-xs p-2">
                  {themeName}
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm opacity-70">
              Use the Storybook toolbar above to switch between themes and see this page transform!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof SimpleThemeDemo> = {
  title: 'All Themes',
  component: SimpleThemeDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Simple demonstration of all 35 DaisyUI themes using basic HTML elements and DaisyUI classes'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof SimpleThemeDemo>;

export const AllThemes: Story = {
  render: () => <SimpleThemeDemo />
};