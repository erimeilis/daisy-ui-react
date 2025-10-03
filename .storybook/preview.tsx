import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/index.css';

// All available DaisyUI themes
const daisyThemes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
    // Theme switcher for all DaisyUI themes
    backgrounds: {
      disable: true,
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'DaisyUI theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: daisyThemes.map((theme) => ({
          value: theme,
          title: theme.charAt(0).toUpperCase() + theme.slice(1),
        })),
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';

      // Apply theme to document root for global theme switching
      React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

      // Apply theme to the story container as well
      return (
        <div data-theme={theme} className="min-h-screen p-4">
          <div className="w-[90%] mx-auto">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;