const globals = require('globals');
const unicorn = require('eslint-plugin-unicorn');
const _stylistic = require('@stylistic/eslint-plugin');
const importx = require('eslint-plugin-import-x');
const { ecmaVersion } = require('./config');

const ignores = [
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
];

const pure = o => Object.fromEntries(
  Object.entries(o).flatMap(
    ([k, v]) => (v === 0 || v === 'off') ? [] : [[k, v]],
  ),
);

const languageOptions = {
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
};

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
    // ...pure(require('./rules/vue')[useVue2 ? 'vue2' : 'vue3'](useTs)),
  };

  if (useTs) {
    rules = { ...rules, ...require('./rules/typescript') };
  }

  return [
    {
      ignores,
      languageOptions,
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
    {
      plugins: {
        unicorn,
        '@stylistic': _stylistic,
        import: importx,
      },
      rules,
    },
  ];
};
