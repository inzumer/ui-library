import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'clsx',
  'class-variance-authority',
  'tailwind-merge',
]

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react/jsx-runtime': 'jsxRuntime',
  clsx: 'clsx',
  'class-variance-authority': 'ClassVarianceAuthority',
  'tailwind-merge': 'tailwindMerge',
}

const alias = {
  '@': resolve(__dirname, 'src'),
  '@components': resolve(__dirname, 'src/components'),
  '@hooks': resolve(__dirname, 'src/hooks'),
  '@utils': resolve(__dirname, 'src/utils'),
  '@styles': resolve(__dirname, 'src/styles'),
  '@tokens': resolve(__dirname, 'src/tokens'),
}

const format = (process.env.BUILD_FORMAT ?? 'es') as 'es' | 'cjs'

const isESM = format === 'es'

export default defineConfig({
  plugins: [
    react(),
    ...(isESM
      ? [
          dts({
            include: ['src'],
            exclude: [
              'src/**/*.test.tsx',
              'src/**/*.test.ts',
              'src/**/*.stories.tsx',
            ],
            outDir: 'dist/types',
            rollupTypes: true,
          }),
        ]
      : []),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: [format],
      ...(isESM ? {} : { fileName: () => 'index.js' }),
    },
    rollupOptions: {
      external,
      output: isESM
        ? {
            dir: 'dist/es',
            format: 'es',
            globals,
            preserveModules: true,
            preserveModulesRoot: 'src',
            entryFileNames: '[name].js',
          }
        : {
            dir: 'dist/cjs',
            format: 'cjs',
            globals,
          },
    },
    emptyOutDir: false,
    sourcemap: true,
  },
  resolve: { alias },
})
