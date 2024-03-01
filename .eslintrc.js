const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['prettier', '@typescript-eslint', 'unused-imports', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'react/display-name': 0,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)', '*.js', '*.jsx'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      typescript: {
        paths: ['src'],
      },
    },
  },
};
