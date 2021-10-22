module.exports = {
  extends: [
    'standard',
    'plugin:jest/recommended',
  ],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ["error", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
  },
}
