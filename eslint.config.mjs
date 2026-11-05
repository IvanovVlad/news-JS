import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from '@typescript-eslint/eslint-plugin';
import ppeslint from 'eslint-plugin-prettier/recommended';
import pieslint from 'eslint-plugin-import';
import globals from 'globals';

export default defineConfig([
    {
        ignores: ['dist/**'],
    },
    {
        files: ['**/*.{js,ts}'],
        extends: [
            js.configs.recommended,
            tseslint.configs['flat/recommended'],
            tseslint.configs['flat/stylistic'],
            pieslint.flatConfigs.recommended,
            pieslint.flatConfigs.typescript,
        ],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
            globals: { ...globals.browser, ...globals.node },
        },
        rules: {
            'no-debugger': 'off',
            'no-console': 0,
            'class-methods-use-this': 'off',
            '@typescript-eslint/no-explicit-any': 'error',
        },
    },
    ppeslint,
]);
