import type { PickierConfig } from 'pickier'

const config: Partial<PickierConfig> = {
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
  ],

  lint: {
    extensions: ['ts', 'js'],
    reporter: 'stylish',
    cache: false,
    maxWarnings: -1,
  },

  rules: {
    noConsole: 'off',
    noDebugger: 'warn',
  },

  pluginRules: {
    'ts/no-top-level-await': 'off',
    'style/brace-style': 'off',
    'style/max-statements-per-line': 'off',
    'indent': 'off',
    'style/indent': 'off',
    '@stylistic/indent': 'off',
    'quotes': 'off',
    'style/quotes': 'off',
    '@stylistic/quotes': 'off',
  },
}

export default config
