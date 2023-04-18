module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'no-undef': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
  plugins: ['react', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
