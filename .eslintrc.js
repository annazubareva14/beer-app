module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/base',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'class-methods-use-this': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'no-param-reassign': 'error',
    camelcase: 'error',
    'no-duplicate-imports': 'error',
    'no-undef': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'block', 'block-like', 'multiline-block-like']
      },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'never',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        printWidth: 80,
        trailingComma: 'none',
        endOfLine: 'lf'
      }
    ],
    'lines-between-class-members': ['error', 'always'],
    'vue/padding-line-between-blocks': ['error', 'always']
  },
  overrides: [
    {
      files: ['**/__tests__/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};