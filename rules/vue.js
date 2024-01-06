const config = require('../config');

/**
 * @version 9.19.2
 * @see https://eslint.vuejs.org/rules/
 */
module.exports = {
  'no-undef': 0,

  'vue/multi-word-component-names': 0,

  // Suggestions
  'vue/attribute-hyphenation': [2, 'always'],
  'vue/component-definition-name-casing': [2, 'PascalCase'], // replace vue/name-property-casing
  'vue/max-attributes-per-line': [2, { singleline: 6, multiline: 1 }],
  'vue/no-template-shadow': 2,
  'vue/require-default-prop': 0,
  'vue/singleline-html-element-content-newline': 0,
  'vue/no-v-html': 0,
  'vue/this-in-template': [2, 'never'],

  // Uncategorized
  'vue/block-order': [2, { order: ['script:not([setup])', 'script[setup]', 'template', 'style:not([scoped])', 'style[scoped]'] }], // replace vue/component-tags-order Vue2
  'vue/component-name-in-template-casing': [2, 'PascalCase'],
  'vue/component-options-name-casing': [2, 'PascalCase'],
  'vue/custom-event-name-casing': [2, 'camelCase'],
  'vue/define-macros-order': [2, { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] }], // TS
  'vue/html-button-has-type': [2, { button: true, submit: true, reset: true }],
  'vue/html-comment-content-newline': [2, { singleline: 'never', multiline: 'always' }],
  'vue/html-comment-content-spacing': [2, 'always'],
  'vue/html-comment-indent': [2, config.indent],
  'vue/no-deprecated-model-definition': 2, // Vue2
  'vue/no-unused-refs': 2,
  'vue/no-use-v-else-with-v-for': 2,
  'vue/no-useless-mustaches': [2, { ignoreIncludesComment: true, ignoreStringEscape: true }],
  'vue/no-useless-v-bind': [2, { ignoreIncludesComment: true, ignoreStringEscape: true }],
  'vue/padding-line-between-blocks': [2, 'always'],
  'vue/require-typed-object-prop': 1, // TS
};
