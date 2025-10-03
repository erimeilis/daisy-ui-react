import type { Preview, StoryContext } from '@storybook/react';
import type { StoryFn } from '@storybook/react';
import React from 'react';
import '../src/index.css';

const withTheme = (Story: StoryFn, context: StoryContext) => {
  const theme = context.globals.theme || 'light';

  // Set theme immediately without using hooks (decorators don't support hooks)
  document.documentElement.setAttribute('data-theme', theme);

  return React.createElement(
    'div',
    { 'data-theme': theme, className: 'min-h-screen' },
    React.createElement(Story as React.ComponentType, context.args)
  );
};

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'auto',
      values: [
        { name: 'auto', value: 'transparent' },
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
    docs: {
      toc: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'DaisyUI theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
          'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween',
          'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy',
          'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn',
          'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
          'dim', 'nord', 'sunset', 'caramellatte', 'abyss', 'silk'
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;