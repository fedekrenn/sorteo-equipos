import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import * as importX from 'eslint-plugin-import-x'
import n from 'eslint-plugin-n'
import promise from 'eslint-plugin-promise'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { reactRefresh } from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  { ignores: ['dist', 'eslint.config.js', 'src/components/ui/**', 'src/lib/utils.js'] },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2020, __dirname: 'readonly' },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  importX.flatConfigs.recommended,
  n.configs['flat/recommended'],
  promise.configs['flat/recommended'],
  stylistic.configs.recommended,

  reactRefresh.configs.recommended(),

  {
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/prop-types': 'off',
      'import-x/no-unresolved': 'off',
      'n/no-missing-import': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  {
    files: ['vite.config.js'],
    languageOptions: {
      globals: { __dirname: 'readonly' },
    },
  },
]
