import type { CodeStyle } from './types';
import { defaults } from './defaults';

export type UserIgnores = string[] | ((originals: string[]) => string[]);

export interface OptionsOverrides {
  overrides?: Record<string, any>;
}

export interface OptionsJs extends OptionsOverrides {
  globals?: Record<string, any>;
}

export interface OptionsStyle extends OptionsOverrides, CodeStyle {
  jsx?: boolean;
}

export interface OptionsImports extends OptionsOverrides {
  style?: boolean;
}

export interface OptionsTs extends OptionsOverrides {
  jsx?: boolean;
}

export interface OptionsJsx extends OptionsOverrides {
  ts?: boolean;
  style?: boolean | CodeStyle;
  a11y?: boolean;
}

export interface OptionsVue extends OptionsOverrides {
  ts?: boolean;
  style?: boolean | CodeStyle;
  /**
   * @see https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/
   * @default true
   */
  a11y?: boolean;
  /**
   * @default 3. Set to `2` or `3` to specify the Vue version.
   */
  version?: 2 | 3;
}

export interface Options {
  // Basic
  ignores?: UserIgnores;
  globals?: Record<string, any>;
  js?: OptionsOverrides;

  // Sub-configs
  imports?: OptionsOverrides;
  unicorn?: OptionsOverrides;
  style?: boolean | OptionsStyle;
  ts?: boolean | OptionsTs;
  jsx?: boolean | OptionsJsx;
  vue?: boolean | 2 | 3 | OptionsVue;
}

export function resolveOptions(options: Options = {}) {
  const ignores = typeof options.ignores !== 'undefined' ? options.ignores : [];
  const globals = typeof options.globals !== 'undefined' ? options.globals : {};

  const jsConfig = <OptionsJs>{ globals, ...options.js };
  const tsConfig = typeof options.ts === 'object' ? options.ts : options.ts ? {} : false;

  const styleConfig = typeof options.style === 'object' ? options.style : options.style ? {} : false;
  if (styleConfig) {
    if (typeof styleConfig.indent === 'undefined') {
      styleConfig.indent = defaults.indent;
    }
    if (typeof styleConfig.semi === 'undefined') {
      styleConfig.semi = defaults.semi;
    }
  }

  const importsConfig = <OptionsImports>{ style: Boolean(styleConfig), ...options.imports };
  const unicornConfig = <OptionsOverrides>{ ...options.unicorn };

  const jsxConfig = typeof options.jsx === 'object' ? options.jsx : options.jsx ? {} : false;
  if (jsxConfig) {
    if (typeof jsxConfig.ts === 'undefined') {
      jsxConfig.ts = Boolean(tsConfig);
    }
    if (typeof jsxConfig.style === 'undefined') {
      jsxConfig.style = styleConfig;
    }
    if (styleConfig) {
      styleConfig.jsx = true;
    }
    if (tsConfig) {
      tsConfig.jsx = true;
    }
  }

  const vueConfig = typeof options.vue === 'object'
    ? options.vue
    : options.vue === 2 || options.vue === 3
      ? <OptionsVue>{ version: options.vue }
      : options.vue === true
        ? <OptionsVue>{ version: 3 }
        : false;

  if (vueConfig) {
    if (typeof vueConfig.version === 'undefined') {
      vueConfig.version = 3;
    }
    if (typeof vueConfig.ts === 'undefined') {
      vueConfig.ts = Boolean(tsConfig);
    }
    if (typeof vueConfig.style === 'undefined') {
      vueConfig.style = styleConfig;
    }
  }

  const result = {
    ignores,
    jsConfig,
    tsConfig,
    styleConfig,
    jsxConfig,
    vueConfig,
    importsConfig,
    unicornConfig,
  } as const;

  return result;
}
