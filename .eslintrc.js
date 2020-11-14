module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'react-app',
    'google',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'new-cap': 'off',
    'camelcase': 'off',
    'require-jsdoc': 'off',
    'max-len': ['error', 100],
    'indent': ['error', 2],
  },
};
