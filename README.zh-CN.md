<h1 align="center">eslint-config-h21</h1>
<p align="center"><a href="README.md">English</a> | 中文</p>

![npm](https://img.shields.io/npm/v/eslint-config-h21?color=%23257855)

<br>

一份支持度还比较好的 Eslint 规则配置

## 特性

* 默认使用分号(`;`)
* 默认使用单引号(`'`)
* 默认缩进 2 空格

* 支持 JS、TS、Vue2、Vue3
* 使用插件 [Import Lite](https://github.com/9romise/eslint-plugin-import-lite) 检测 `import/export` 语法
* 使用插件 [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) 美化代码
* 使用插件 [Eslint Stylistic](https://eslint.style/) 格式化代码

## 快速开始

```sh
npm i eslint eslint-config-h21 globals -D
```

如果需要支持 Vue，还需要额外执行命令。

```sh
npm i eslint-plugin-vue vue-eslint-parser -D
```

创建一个[配置文件](https://eslint.org/docs/latest/use/configure/configuration-files)，如 `eslint.config.js`，键入：

```js [eslint.config.js]
import h21 from 'eslint-config-h21';
import globals from 'globals';

// 默认只包含 Js 的检测，需要手动开启 Ts，Vue 的支持

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

## 版本规范

| Eslint |  H21  |
|:------:|:-----:|
| > 9    | 1.x.0 |
| = 9    |       |
| < 9    | 0.x.0 |
