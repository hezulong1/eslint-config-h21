<h1 align="center">eslint-config-h21</h1>
<p align="center">English | <a href="README.zh-CN.md">中文</a></p>

![npm](https://img.shields.io/npm/v/eslint-config-h21/legacy?color=%23257855)

<br>

An ESLint rule configuration with relatively good support.

## Features

* Use semicolons (`;`)
* Use single quotes (`'`)
* 2-space indentation

* Supports JS, TS, Vue2, Vue3
* Uses plugin [Import](https://github.com/import-js/eslint-plugin-import) to check `import/export` syntax
* Uses plugin [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) to beautify code
* Uses plugin [Eslint Stylistic](https://eslint.style/) to format code

## Quick start

```sh
npm i eslint eslint-config-h21 -D
```

Create a config file in your project, recommended `.eslintrc.cjs` (does not support `eslint.config.js`), then enter:

```js
module.exports = {
  extends: 'h21', // default uses TS + Vue3 rules
};
```

## Presets

* `h21/ts`: default rules, using TS + Vue3 rules
* `h21/ts-vue2`: using TS + Vue2 rules
* `h21/es`: using JS + Vue3 rules
* `h21/es-vue2`: using JS + Vue2 rules

## Node<=14

```sh
npm i eslint@6.8.0 babel-eslint@10.1.0 eslint-plugin-vue@6.2.2 -D
```

Enter rules:

```js
module.exports = {
  root: true,
  globals: {
    __DEV__: 'readonly'
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: '2022',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    }
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  plugins: ['vue'],
  rules: {
    // configuration taken from ./rules folder
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
```
