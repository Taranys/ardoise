module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'max-len': ['error', { code: 120 }],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'import/prefer-default-export': 'off',
        semi: ["error", "never"],
        '@typescript-eslint/semi': ["error", "never"],
    },
};
