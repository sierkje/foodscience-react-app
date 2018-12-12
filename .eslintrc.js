const restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  root: true,
  parser: 'typescript-eslint-parser',
  extends: ['airbnb'],
  plugins: ['import', 'jsx-a11y', 'react', 'typescript'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // The ESLint browser environment defines all browser globals as valid,
    // even though most people don't know some of them exist (e.g. `name` or `status`).
    // This is dangerous as it hides accidentally undefined variables.
    // We blacklist the globals that we deem potentially confusing.
    // To use them, explicitly reference them, e.g. `window.name` or `window.status`.
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    semi: ['error', 'never'],
  },
}
