module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'prettier',
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue',
    'prettier',
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': 2,
    'no-console': 2,
    'vue/multi-word-component-names': 'off'
  }
}
