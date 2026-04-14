import type { Config } from '../types';
import { GLOB_JSX, GLOB_TSX } from '../globs';
import type { OptionsJsx } from '../options';

export async function jsx(options: OptionsJsx = {}): Promise<Config[]> {
  const {
    ts,
  } = options;

  return [
    {
      name: 'h21/jsx/setup',
      files: ts ? [GLOB_JSX, GLOB_TSX] : [GLOB_JSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
    },
  ];
}
