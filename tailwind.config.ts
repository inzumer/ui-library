import type { Config } from 'tailwindcss'

import { cysurPreset } from './packages/tokens/src/tailwind/preset'

const config: Config = {
  presets: [cysurPreset],
  content: [
    './packages/ui/src/**/*.{ts,tsx}',
    './packages/tokens/src/**/*.{ts,tsx}',
    './apps/**/*.{ts,tsx}',
  ],
  plugins: [],
}

export default config
