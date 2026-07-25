import type { Config } from 'tailwindcss'

import { cysurPreset } from '@cysur/tokens/tailwind'

const config: Config = {
  presets: [cysurPreset],
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [],
}

export default config
