import type { Config } from '../types';
import type { OptionsVue } from '../options';

import { GLOB_VUE } from '../globs';
import { interopDefault } from '../utils';
import genRules from './vue-rules';

export async function vue(options: OptionsVue = {}): Promise<Config[]> {
  const {
    ts,
    overrides,
    version = 3,
    a11y = true,
  } = options;

  const files = [GLOB_VUE];

  const [
    pluginVue,
    parserVue,
    pluginVueA11y,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
    ...a11y ? [interopDefault(import('eslint-plugin-vuejs-accessibility'))] : [],
  ] as const);

  const languageOptions = {
    parser: parserVue,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      extraFileExtensions: ['.vue'],
      parser: ts
        ? '@typescript-eslint/parser' // ? await interopDefault(import('@typescript-eslint/parser')) as any
        : null,
      sourceType: 'module',
    },
  };

  return [
    {
      name: 'h21/vue/rules' + (version === 3 ? '' : '-v2'),
      plugins: {
        vue: pluginVue,
        ...a11y ? { 'vue-a11y': pluginVueA11y } : {},
      },
      files,
      processor: pluginVue.processors.vue,
      languageOptions,
      rules: {
        ...genRules(options),
        ...overrides,

        //#region disabled in .vue
        'unicode-bom': 0,
        'max-lines': 0,
        '@stylistic/eol-last': 0,
        '@stylistic/linebreak-style': 0,
        '@stylistic/max-len': 0,
        '@stylistic/no-trailing-spaces': 0,
        //#endregion
      },
    },
  ];
}
