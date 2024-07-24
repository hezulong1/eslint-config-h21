const globals = require('globals');
const { ecmaVersion } = require('./config');
const utils = require('./scripts/utils');

const ignores = utils.uniq([
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.svelte-kit',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',
  '**/vite.config.*.timestamp-*',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
]);

const pure = o => Object.fromEntries(
  Object.entries(o).flatMap(
    ([k, v]) => (v === 0 || v === 'off') ? [] : [[k, v]],
  ),
);

module.exports = async function (useTs = false, useVue2 = false) {
  let rules = {
    ...pure(require('./rules/_possibleProblems')),
    ...pure(require('./rules/_suggestions')),
    ...pure(require('./rules/_layoutFormatting')),
    // 禁止项不做移除
    ...require('./rules/_disableLegacy'),
    ...pure(require('./rules/stylistic')),
    ...pure(require('./rules/unicorn')),
    // 继承项不做移除
    ...require('./rules/importX'),
    ...pure(require('./rules/vue')[useVue2 ? 'vue2' : 'vue3'](useTs)),
  };

  if (useTs) {
    rules = { ...rules, ...require('./rules/typescript') };
  }

  const baseSetup = {
    name: 'h21/base/setup',
    ignores,
    plugins: {
      '@stylistic': require('@stylistic/eslint-plugin'),
      'unicorn': require('eslint-plugin-unicorn'),
      'import': require('eslint-plugin-import-x'),
      'vue': require('eslint-plugin-vue'),
    },
    languageOptions: {
      ecmaVersion,
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion,
        ecmaFeatures: { jsx: true },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      'import/resolver': { node: { extensions: ['.js', '.cjs', '.mjs', '.jsx'] } },
    },
  };
  if (useTs) {
    baseSetup.languageOptions.parserOptions.parser = require('@typescript-eslint/parser');
    baseSetup.plugins['@typescript-eslint'] = require('@typescript-eslint/eslint-plugin');
    baseSetup.settings['import/resolver'].node.extensions = ['.ts', '.cts', '.mts', '.tsx'];
  }

  const overrideVue = {
    name: 'h21/override/vue',
    files: ['**/*.vue'],
    processor: 'vue/vue',
    languageOptions: {
      parser: require('vue-eslint-parser'),
      parserOptions: {
        ecmaVersion,
        ecmaFeatures: { jsx: true },
        extraFileExtensions: ['.vue'],
      },
    },
    rules: require('./rules/vueOverride'),
  };
  if (useTs) {
    overrideVue.languageOptions.parserOptions.parser = require('@typescript-eslint/parser');
    overrideVue.rules = {
      ...require('./rules/typescriptOverride'),
      ...overrideVue.rules,
    };
  }

  const overrides = [
    overrideVue,
  ];

  if (useTs) {
    overrides.push(
      {
        name: 'h21/override/ts',
        files: ['**/*.?([cm])ts?(x)'],
        rules: require('./rules/typescriptOverride'),
      },
      {
        name: 'h21/override/dts',
        files: ['**/*.d.ts'],
        rules: {
          'import/newline-after-import': 0,
          'no-var': 0,
        },
      },
      {
        name: 'h21/override/js',
        files: ['**/*.?([cm])js?(x)'],
        rules: {
          '@typescript-eslint/no-var-requires': 0,
          '@typescript-eslint/no-require-imports': 0,
        },
      },
    );
  }

  overrides.push({
    name: 'h21/override/in-scripts',
    files: ['scripts/**/*', '**/*.config.*'],
    rules: {
      'no-console': 0,
    },
  });

  const options = [
    baseSetup,
    {
      name: 'h21/base/rules',
      rules,
    },
    ...overrides,
  ];

  return options;
};
