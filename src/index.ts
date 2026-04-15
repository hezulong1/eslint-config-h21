import { ignores } from './configs/ignores';
import { javascript } from './configs/javascript';
import { disables } from './configs/disables';
import { stylistic } from './configs/stylistic';
import { jsx } from './configs/jsx';
import { unicorn } from './configs/unicorn';
import { typescript } from './configs/typescript';
import { imports } from './configs/imports';
import { vue } from './configs/vue';

import type { Config } from './types';
import { resolveOptions, type Options } from './options';
import { FlatConfigComposer } from 'eslint-flat-config-utils';

export default function setup(options?: Options) {
  const {
    ignores: userIgnores,
    jsConfig,
    tsConfig,
    styleConfig,
    jsxConfig,
    vueConfig,
    importsConfig,
    unicornConfig,
  } = resolveOptions(options);

  const configs: Promise<Config[]>[] = [
    ignores(userIgnores, !tsConfig),
    javascript(jsConfig),
    imports(importsConfig),
    unicorn(unicornConfig),
  ];

  if (styleConfig) {
    configs.push(stylistic(styleConfig));
  }

  if (tsConfig) {
    configs.push(typescript(tsConfig));
  }

  if (vueConfig) {
    configs.push(vue(vueConfig));
  }

  if (jsxConfig) {
    configs.push(jsx(jsxConfig));
  }

  configs.push(disables());

  const composer = new FlatConfigComposer<Config, string>();
  composer.append(...configs);

  return composer;
}
