const fs = require('fs-extra');
const prettier = require('prettier');
const utils = require('./utils');
const CONFIG = require('../config');

const tpl = `
// AUTO GENERATED, DON'T EDIT!!!
// ${utils.now()}

module.exports = CODE
`;
const prettierOptions = {
  parser: 'babel',
  semi: true,
  singleQuote: true,
  printWidth: 120,
};
const pure = o => Object.fromEntries(
  Object.entries(o).flatMap(
    ([k, v]) => (v === 0 || v === 'off') ? [] : [[k, v]],
  ),
);

// Startup
compile();

function compile() {
  const target = {
    'ts': build('ts', 'vue3'),
    'ts-vue2': build('ts', 'vue2'),
    'es': build('es', 'vue3'),
    'es-vue2': build('es', 'vue2'),
  };

  Object.entries(target).forEach(async ([name, rawObject]) => {
    const code = await prettier.format(
      tpl.replace('CODE', JSON.stringify(rawObject)),
      prettierOptions,
    );
    const filename = name + '.js';
    await fs.writeFile(filename, code, 'utf8');
    console.log(utils.green(`${filename} generate success.\n`));
  });
}

function build(targetType, vueVersion) {
  const useTs = targetType === 'ts';
  const useVue2 = vueVersion === 'vue2';
  const result = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },

    parserOptions: {
      sourceType: 'module',
      ecmaVersion: CONFIG.ecamVersion,
      ecmaFeatures: {
        jsx: true,
      },
    },

    reportUnusedDisableDirectives: true,

    ignorePatterns: utils.uniq([
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
    ]),

    plugins: utils.array([
      '@stylistic',
      useTs && '@typescript-eslint',
      'unicorn',
      'vue',
    ]),

    extends: utils.array([
      'plugin:import/recommended',
      useTs && 'plugin:import/typescript',
    ]),
  };

  if (useTs) {
    result.parser = '@typescript-eslint/parser';
  } else {
    result.setting = {
      'import/resolver': {
        node: { extensions: ['.js', '.cjs', '.mjs', '.jsx'] },
      },
    };
  }

  result.rules = {
    ...pure(require('../rules/_possibleProblems')),
    ...pure(require('../rules/_suggestions')),
    ...pure(require('../rules/_layoutFormatting')),
    // 禁止项不做移除
    ...require('../rules/_disableLegacy'),
    ...pure(require('../rules/stylistic')),
    ...pure(require('../rules/unicorn')),
    // 继承项不做移除
    ...require('../rules/import'),
    ...pure(require('../rules/vue')[useVue2 ? 'vue2' : 'vue3'](useTs)),
  };

  if (useTs) {
    result.rules = { ...result.rules, ...require('../rules/typescript') };
  }

  const overrideVue = {
    files: ['*.vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      extraFileExtensions: ['.vue'],
      ecmaVersion: CONFIG.ecamVersion,
    },
    rules: require('../rules/vueOverride'),
  };
  if (useTs) {
    overrideVue.parserOptions.parser = '@typescript-eslint/parser';
  }
  result.overrides = [
    overrideVue,
  ];

  if (useTs) {
    result.overrides.push(
      {
        files: ['*.ts', '*.cts', '*.mts', '*.tsx'],
        rules: require('../rules/typescriptOverride'),
      },
      {
        files: ['**/*.d.ts'],
        rules: {
          'import/newline-after-import': 0,
          'no-var': 0,
        },
      },
      {
        files: ['*.js', '*.cjs', '*.mjs', '*.jsx'],
        rules: {
          '@typescript-eslint/no-var-requires': 0,
          '@typescript-eslint/no-require-imports': 0,
        },
      },
    );
  }

  result.overrides.push({
    files: ['scripts/**/*'],
    rules: {
      'no-console': 0,
    },
  });

  return result;
}
