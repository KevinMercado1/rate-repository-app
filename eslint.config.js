import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import tsesLint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    // General configuration for TypeScript and JavaScript files
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      js,
      react,
      'react-native': reactNative,
      '@typescript-eslint': tsesLint, // Ensure the plugin is properly referenced
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      'react-native/no-unused-styles': 'warn',
      'react-native/no-inline-styles': 'warn',
    },
  },
  {
    // Configuration specifically for TypeScript files
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...tsesLint.configs.recommended.rules,
    },
  },
  {
    // Configuration specifically for JavaScript/React files
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
    },
  },
];
