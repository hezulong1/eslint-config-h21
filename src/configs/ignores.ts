import type { Config } from '../types';
import type { UserIgnores } from '../options';

import { globalIgnores } from '@eslint/config-helpers';
import { GLOB_EXCLUDE, GLOB_TS, GLOB_TSX } from '../globs';

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignore-files-with-ignores
 */
export async function ignores(userIgnores: UserIgnores, ignoreTypeScript = false): Promise<Config[]> {
  let ignores = [...GLOB_EXCLUDE];

  if (ignoreTypeScript) {
    ignores.push(GLOB_TS, GLOB_TSX);
  }

  if (typeof userIgnores === 'function') {
    ignores = userIgnores(ignores);
  } else {
    ignores = [...ignores, ...userIgnores];
  }

  return [globalIgnores(ignores, 'h21/ignores')];
}
