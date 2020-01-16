"use strict";

/* eslint-disable global-require */
module.exports = {
  rules: {
    'no-invariant-violation': require('./rules/no-invariant-violation')
  },
  configs: {
    recommended: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'react-native-a11y/no-invariant-violation': 'error'
      }
    },
    strict: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {}
    }
  }
};