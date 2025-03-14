import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.config({
    'parserOptions': {
      'ecmaVersion': 12,
      'sourceType': 'module'
    },
    rules: {
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'no-multi-spaces': ['error'],
      'react/no-unescaped-entities': 'off',
    },
  })
];

export default eslintConfig;
