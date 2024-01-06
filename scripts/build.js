const fs = require('fs-extra');
const { now, uniq, join, $, green } = require('./utils');

const args = process.argv.slice(2);

// Helper
const $req = (s, comma = true) => `require('./rules/${s}')${comma ? ',' : ''}`;
const [$1, $2, $3, $4] = Array.from({ length: 4 }).map((_, i) => $((i + 1) * 2));

// Config
const defaultConfig = {
  debug: args.includes('--debug'),
  ecmaVersion: 2022,
};

// Start
(async () => {
  await run('es.js', { ts: false, unicorn: true, stylistic: true });
  await run('es-vue2.js', { ts: false, unicorn: true, stylistic: true, vue2: true });
  await run('ts.js', { ts: true, unicorn: true, stylistic: true });
  await run('ts-vue2.js', { ts: true, unicorn: true, stylistic: true, vue2: true });
  console.log(green('\nBuild Success\n'));
})();

async function run(path, options) {
  const tpl_varRules = defaultConfig.debug
    ? `{}`
    : join([
      `{`,
      $1 + `...` + $req('_possibleProblems'),
      $1 + `...` + $req('_suggestions'),
      $1 + `...` + $req('_layoutFormatting'),
      $1 + `...` + $req('_disableLegacy'),
      $1 + `// Scope`,
      options.stylistic && ($1 + `...` + $req('stylistic')),
      options.unicorn && ($1 + `...` + $req('unicorn')),
      $1 + `...` + $req('import'),
      options.ts && ($1 + `...` + $req('typescript')),
      `}`,
    ]);

  const tpl_varVueRules = defaultConfig.debug
    ? `{}`
    : options.vue2
      ? join([
        `{`,
        $1 + `...` + $req('vue'),
        !options.ts && ($1 + `'vue/block-order': [2, { order: [['script', 'template'], 'style'] }],`),
        $1 + `'vue/no-deprecated-model-definition': 0,`,
        `}`,
      ])
      : $req('vue', false);

  const tpl_varTsOverrideRules = options.ts
    ? `\nconst tsOverrideRules = ${defaultConfig.debug ? `{}` : $req('typescriptOverride', false)};`
    : '';

  const tpl_propIgnorePatterns = join(uniq([
    '// OUTPUT',
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
    '// MARKDOWN',
    'CHANGELOG.md',
    'LICENSE*',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    '// EXTRA',
    '!.vscode',
  ]).map(s => $2 + (s.startsWith('//') ? s : `'${s}',`)));

  const tpl_propPlugins = (options.ts || options.stylistic || options.unicorn)
    ? join([
      `\n\n${$1}plugins: [`,
      options.stylistic && ($2 + `'@stylistic',`),
      options.ts && ($2 + `'@typescript-eslint',`),
      options.unicorn && ($2 + `'unicorn',`),
      $1 + `],`,
    ])
    : '';

  const tpl_propExtends = defaultConfig.debug
    ? `\n\n${$1}extends: [],`
    : join([
      `\n\n${$1}extends: [`,
      $2 + `'plugin:import/recommended',`,
      options.ts && ($2 + `'plugin:import/typescript',`),
      $1 + `],`,
    ]);

  const tpl_propSettings = options.ts
    ? ''
    : join([
      `\n\n${$1}settings: {`,
      $2 + `'import/resolver': {`,
      $3 + `node: { extensions: ['.js', '.cjs', '.mjs', '.jsx'] },`,
      $2 + `},`,
      $1 + `},`,
    ]);

  const tpl_propParser = options.ts
    ? `\n\n${$1}parser: '@typescript-eslint/parser',`
    : '';

  const tpl_vueTsParser = options.ts
    ? `\n${$4}parser: '@typescript-eslint/parser',`
    : '';

  const tpl_tsOverrides = options.ts
    ? join([
      `\n${$2}{`,
      $3 + `files: ['*.ts', '*.cts', '*.mts', '*.tsx'],`,
      $3 + `rules: tsOverrideRules,`,
      $2 + `},`,

      $2 + `{`,
      $3 + `files: ['*.js', '*.cjs', '*.mjs', '*.jsx'],`,
      $3 + `rules: {`,
      $4 + `'@typescript-eslint/no-var-requires': 0,`,
      $4 + `'@typescript-eslint/no-require-imports': 0,`,
      $3 + `},`,
      $2 + `},`,
    ])
    : '';

  let tpl = `
// AUTO GENERATED, DON'T EDIT!!!
// ${(defaultConfig.debug ? '[DEBUG] ' : '')}${now()}

const rules = <%= varRules %>;
const vueRules = <%= varVueRules %>;<%= varTsOverrideRules %>

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: <%= ecmaVersion %>,
    ecmaFeatures: {
      jsx: true,
    },
  },

  reportUnusedDisableDirectives: true,
  ignorePatterns: [
<%= propIgnorePatterns %>
  ],<%= propPlugins %><%= propExtends %><%= propSettings %><%= propParser %>

  rules,

  overrides: [
    {
      files: ['*.vue'],
      extends: 'plugin:vue/<%= vueVersion %>recommended',
      parser: 'vue-eslint-parser',
      parserOptions: {<%= vueTsParser %>
        extraFileExtensions: ['.vue'],
        ecmaVersion: <%= ecmaVersion %>,
      },
      rules: vueRules,
    },<%= tsOverrides %>
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
`.trimStart();

  tpl = tpl
    .replaceAll('<%= varRules %>', tpl_varRules)
    .replaceAll('<%= varVueRules %>', tpl_varVueRules)
    .replaceAll('<%= varTsOverrideRules %>', tpl_varTsOverrideRules)
    .replaceAll('<%= propIgnorePatterns %>', tpl_propIgnorePatterns)
    .replaceAll('<%= propPlugins %>', tpl_propPlugins)
    .replaceAll('<%= propExtends %>', tpl_propExtends)
    .replaceAll('<%= propSettings %>', tpl_propSettings)
    .replaceAll('<%= propParser %>', tpl_propParser)

    .replaceAll('<%= ecmaVersion %>', defaultConfig.ecmaVersion)
    .replaceAll('<%= vueVersion %>', options.vue2 ? '' : 'vue3-')
    .replaceAll('<%= vueTsParser %>', tpl_vueTsParser)
    .replaceAll('<%= tsOverrides %>', tpl_tsOverrides);

  await fs.writeFile(path, tpl, 'utf-8');
}
