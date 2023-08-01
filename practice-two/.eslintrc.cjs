module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'linebreak-style': 0,
    'react/require-default-props': 0, // Turn Off define propDefault
    'react/function-component-definition': 0, // Using Class const
    'react/button-has-type': 0, // Add rule to require button elements to have a type attribute
    'no-console': 'warn', // Add rule to warn when using console.log() and similar methods
    'no-unused-vars': 'error', // Add rule to error when variables are declared but not used
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': 0, // Close jsx ... props
    'react/jsx-wrap-multilines': 0, // config husky eslint to formatting
    'react/jsx-no-bind': 0,
    'implicit-arrow-linebreak': 0,
    'eslint-disable': 0,
    'function-paren-newline': 0,
    'no-confusing-arrow': 0,
    'operator-linebreak': 0,
    'max-len': 0,
  },
};
