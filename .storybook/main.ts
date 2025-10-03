import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  viteFinal: async (config) => {
    const path = await import('path');
    const url = await import('url');

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Merge custom Vite configuration
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': path.resolve(__dirname, '../src'),
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...((config.optimizeDeps?.include as string[]) || []),
          '@storybook/addon-docs',
          '@tabler/icons-react',
          'react',
          'react-dom',
          'clsx',
          'tailwind-merge',
        ],
      },
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          external: [],
          output: {
            ...config.build?.rollupOptions?.output,
            manualChunks: undefined,
          },
        },
      },
    };
  },
};

export default config;