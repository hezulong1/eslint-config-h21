// AUTO GENERATED, DON'T EDIT!!!
// 2024-01-06 21:32:47

const rules = {
  ...require('./rules/_possibleProblems'),
  ...require('./rules/_suggestions'),
  ...require('./rules/_layoutFormatting'),
  ...require('./rules/_disableLegacy'),
  // Scope
  ...require('./rules/stylistic'),
  ...require('./rules/unicorn'),
  ...require('./rules/import'),
};
const vueRules = {
  ...require('./rules/vue'),
  'vue/block-order': [2, { order: [['script', 'template'], 'style'] }],
  'vue/no-deprecated-model-definition': 0,
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },

  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    // OUTPUT
    '*.min.*',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    'dist',
    'lib',
    'output',
    'out',
    'coverage',
    'temp',
    'public',
    '__snapshots__',
    // MARKDOWN
    'CHANGELOG.md',
    'LICENSE*',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    // EXTRA
    '!.vscode',
  ],

  plugins: [
    '@stylistic',
    'unicorn',
  ],

  extends: [
    'plugin:import/recommended',
  ],

  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.cjs', '.mjs', '.jsx'] },
    },
  },

  rules,

  overrides: [
    {
      files: ['*.vue'],
      extends: 'plugin:vue/recommended',
      parser: 'vue-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.vue'],
        ecmaVersion: 2022,
      },
      rules: vueRules,
    },
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
