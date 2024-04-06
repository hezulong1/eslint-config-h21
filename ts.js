// AUTO GENERATED, DON'T EDIT!!!
// 2024-01-12 16:44:19

const vueOverrideRules = require('./rules/vueOverride');
const tsOverrideRules = require('./rules/typescriptOverride');

const rules = {
  ...require('./rules/_possibleProblems'),
  ...require('./rules/_suggestions'),
  ...require('./rules/_layoutFormatting'),
  ...require('./rules/_disableLegacy'),
  // Scope
  ...require('./rules/stylistic'),
  ...require('./rules/unicorn'),
  ...require('./rules/import'),
  ...require('./rules/typescript'),
  ...require('./rules/vue3').vue3,
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
    '@typescript-eslint',
    'unicorn',
    'vue',
  ],

  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],

  parser: '@typescript-eslint/parser',

  rules,

  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 2022,
      },
      rules: vueOverrideRules,
    },
    {
      files: ['*.ts', '*.cts', '*.mts', '*.tsx'],
      rules: tsOverrideRules,
    },
    {
      files: ['*.js', '*.cjs', '*.mjs', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-require-imports': 0,
      },
    },
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 0,
      },
    },
  ],
};
