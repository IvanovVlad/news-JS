import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import ppeslint from 'eslint-plugin-prettier/recommended';
import pieslint from 'eslint-plugin-import';

export default defineConfig([
    {
        files: ['**/*.{js,ts}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.strict,
            tseslint.configs.stylistic,
            pieslint.flatConfigs.recommended,
            pieslint.flatConfigs.typescript,
        ],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        env: {
            es6: true,
            browser: true,
            node: true,
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
