<h1 align="center">eslint-config-h21</h1>
<p align="center"><a href="README.md">English</a> | 中文</p>

![npm](https://img.shields.io/npm/v/eslint-config-h21?color=%23257855)

<br>

一份支持度还比较好的 Eslint 规则配置。

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

## 待优化

+ 等 Eslint 到版本 9，届时适配 eslint.config.js


<details><summary>低版本 Node<=14 检测 JS + Vue2</summary>

```sh
npm i eslint@6.8.0 babel-eslint@10.1.0 eslint-plugin-vue@6.2.2 @vividcat/eslint-config@2.1.2 -D
```

键入规则：

```js
module.exports = {
  root: true,
  globals: {
    __DEV__: 'readonly',
    process: 'readonly'
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
  extends: ['plugin:vue/recommended', '@vividcat'],
  plugins: [ 'vue' ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'no-unused-vars': ['error', {
      args: 'after-used',
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      caughtErrors: 'none',
      ignoreRestSiblings: true
    }],
    // 'no-restricted-imports': ['error', {
    //   paths: [
    //     { name: '', importNames: [''], message: '' }
    //   ]
    // }],
    "spaced-comment": ["error", "always", { "exceptions": ["-", "+"] }],
    // allow async-await
    'generator-star-spacing': 'off',
    'indent': ['error', 2, { // 强制使用一致的缩进
      'SwitchCase': 1,
      'VariableDeclarator': 'first'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Vue
    'vue/max-attributes-per-line': ['error', { // 强制每行的最大属性数
      'singleline': 8,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/name-property-casing': ['error', 'PascalCase'], // vue/component-definition-name-casing 对组件定义名称强制使用特定的大小
    'vue/require-default-prop': 'off', // 属性默认值必填
    'vue/html-self-closing': 'off', // 标签自关闭
    'vue/singleline-html-element-content-newline': 'off', // 单行元素换行
    'vue/html-closing-bracket-newline': 'off', // 标签末尾结束符位置
    'vue/attributes-order': 'off', // 关于标签属性的顺序
    'vue/component-tags-order': 'off',
    'vue/attribute-hyphenation': ['error', 'always', {
      // 对于 Mixin 属性不处理
      'ignore': ['$_']
    }]
  }
}
```
