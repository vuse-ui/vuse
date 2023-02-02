module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 2,
    'no-console': 2,
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error', { endOfLine: 'lf' }],
  },
};
