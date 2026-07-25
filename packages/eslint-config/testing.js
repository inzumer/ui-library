// @ts-check
import vitest from 'eslint-plugin-vitest'

/** @type {import('eslint').Linter.Config[]} */
export const testing = [
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', '**/test/**'],
    plugins: { vitest },
    rules: {
      ...vitest.configs['recommended'].rules,
      'vitest/consistent-test-it': ['error', { fn: 'it' }],
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-focused-tests': 'error',
      'vitest/prefer-to-be': 'error',
      'vitest/prefer-to-have-length': 'error',
    },
  },
]
