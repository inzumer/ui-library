import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'components/Button/index': 'src/components/Button/index.ts',
    'components/Input/index': 'src/components/Input/index.ts',
    'components/Card/index': 'src/components/Card/index.ts',
  },
  format: ['esm'],
  target: 'es2022',
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: true,
  outDir: 'dist',
  external: ['react', 'react-dom', '@cysur/tokens', 'class-variance-authority', 'clsx', 'tailwind-merge'],
})
