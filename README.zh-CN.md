<h1 align="center">eslint-config-h21</h1>
<p align="center"><a href="README.md">English</a> | 中文</p>

![npm](https://img.shields.io/npm/v/eslint-config-h21?color=%23257855)

<br>

一份支持度还比较好的 Eslint 规则配置

## 特性

* 使用分号(`;`)
* 使用单引号(`'`)
* 缩进 2 空格

* 支持 JS、TS、Vue2、Vue3
* 使用插件 [Import](https://github.com/import-js/eslint-plugin-import) 检测 import/export 语法
* 使用插件 [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) 美化代码
* 使用插件 [Eslint Stylistic](https://eslint.style/) 格式化代码

## 快速开始

```sh
npm i eslint eslint-config-h21 -D
```

项目内创建一个配置文件，推荐 `.eslintrc.cjs`（不支持 `eslint.config.js`），键入：

```js
module.exports = {
  extends: 'h21', // 默认采用 TS + Vue3 规则
};
```

## 预设

* `h21/ts`：默认规则，采用 TS + Vue3 规则
* `h21/ts-vue2`：采用 TS + Vue2 规则
* `h21/es`：采用 JS + Vue3 规则
* `h21/es-vue2`：采用 JS + Vue2 规则

## Node<=14

```sh
npm i eslint@6.8.0 babel-eslint@10.1.0 eslint-plugin-vue@6.2.2 -D
```

键入规则：

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
    // 由 ./rules 文件夹获取配置
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
```
