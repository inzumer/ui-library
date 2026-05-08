import type { Preview, Decorator } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/styles/globals.css'

// Only apply background wrapper in canvas (story) mode, not in docs mode.
// In docs mode Storybook controls the layout — wrapping breaks the iframe height.
const withDarkBackground: Decorator = (Story, context) => {
  if (context.viewMode === 'docs') return <Story />
  const isDark = (context.globals['theme'] as string) === 'dark'
  return (
    <div className={isDark ? 'bg-neutral-900 min-h-screen p-8' : 'bg-white min-h-screen p-8'}>
      <Story />
    </div>
  )
}

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    withDarkBackground,
  ],
  parameters: {
    docs: {
      toc: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'requiredFirst',
    },
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      },
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' } },
        mobileLg: { name: 'Mobile LG', styles: { width: '430px', height: '932px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } },
      },
    },
  },
}

export default preview
