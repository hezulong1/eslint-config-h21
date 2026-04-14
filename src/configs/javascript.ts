import type { Config } from '../types';
import type { OptionsJs } from '../options';
import rules from './javascript-rules';

export async function javascript(opts: OptionsJs = {}): Promise<Config[]> {
  const {
    globals,
    overrides,
  } = opts;

  return [
    {
      name: 'h21/js/rules',
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      languageOptions: {
        globals,
        ecmaVersion: 'latest',
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: 'latest',
          ecmaFeatures: { jsx: true },
        },
      },
      rules: {
        ...rules,
        ...overrides,
      },
    },
  ];
}
