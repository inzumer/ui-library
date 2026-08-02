import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../packages/ui/src/**/*.stories.@(ts|tsx)', '../docs/guide/**/*.mdx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
  ],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['./public'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    // Resolves the same @components/@utils/@styles/@themes/@tokens/@theme-types
    // aliases declared in each package's own tsconfig.json, scoped to
    // whichever package the importing file lives in.
    config.plugins = config.plugins ?? [];
    config.plugins.push(
      tsconfigPaths({
        projects: [
          resolve(__dirname, '../packages/ui/tsconfig.json'),
          resolve(__dirname, '../packages/tokens/tsconfig.json'),
        ],
      }),
    );

    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@inzumer/tokens': resolve(__dirname, '../packages/tokens/src/index.ts'),
    };
    return config;
  },
};

export default config;
