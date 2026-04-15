import type { Config } from '../types';
import type { OptionsImports } from '../options';
import pluginImport from 'eslint-plugin-import-lite';

export async function imports(options: OptionsImports = {}): Promise<Config[]> {
  const {
    overrides,
    style,
  } = options;

  return [
    {
      name: 'h21/imports/rules',
      plugins: {
        import: pluginImport,
      },
      rules: {
        // 'import/consistent-type-specifier-style': 0, // use `@typescript-eslint/consistent-type-imports` instead
        'import/first': 2,
        'import/no-duplicates': 2,
        // 'import/no-mutable-exports': 0,

        ...style
          ? {
              'import/newline-after-import': [2, { count: 1, considerComments: false }],
            }
          : {},

        ...overrides,
      },
    },
  ];
}
