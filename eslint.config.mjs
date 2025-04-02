import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import vitestPlugin from '@vitest/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const languageOptions = {
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.vitest,
    },
    parserOptions: {
      project: ['./tsconfig.json', './tsconfig.test.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
};

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  languageOptions,
  vitestPlugin.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
);
