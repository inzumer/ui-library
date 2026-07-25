// @ts-check
import a11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

import { base } from './base.js'

/** @type {import('eslint').Linter.Config[]} */
export const reactConfig = [
  ...base,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': a11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs['recommended'].rules,
      ...reactHooks.configs['recommended'].rules,
      ...a11y.configs['recommended'].rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]
