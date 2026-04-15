<h1 align="center">eslint-config-h21</h1>
<p align="center">English | <a href="README.zh-CN.md">中文</a></p>

![npm](https://img.shields.io/npm/v/eslint-config-h21?color=%23257855)

<br>

An ESLint rule configuration with relatively good support.

## Features

* Semicolons by default (`;`)
* Single quotes by default (`'`)
* 2-space indentation by default

* Supports JS, TS, Vue2, Vue3
* Uses plugin [Import Lite](https://github.com/9romise/eslint-plugin-import-lite) to check `import/export` syntax
* Uses plugin [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) to beautify code
* Uses plugin [Eslint Stylistic](https://eslint.style/) to format code

## Quick Start

```sh
npm i eslint eslint-config-h21 globals -D
```

Create a [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files), such as `eslint.config.js`, and enter:

```js
import h21 from 'eslint-config-h21';
import globals from 'globals';

// By default, only JS linting is included. TS and Vue support need to be enabled manually.

export default h21({
  globals: {
    ...globals.browser,
    ...globals.es2021,
  },
  style: true,
  ts: true,
  vue: 3,
});
```

## Versioning

| Eslint |  H21  |
|:------:|:-----:|
| > 9    | 1.x.0 |
| = 9    |       |
| < 9    | 0.x.0 |
