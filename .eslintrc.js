module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks'
    ],
    root: true,
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2,
            { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        indent: [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error', // Check rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true}],
        'react/jsx-curly-spacing': ['warn', {
            'when': 'never',
            'children': {
                'when': 'always'
            },
        }],
        'quotes': [2, 'single', { 'avoidEscape': true }]
    },
    globals: {
        __IS_DEV__: true
    }
}
