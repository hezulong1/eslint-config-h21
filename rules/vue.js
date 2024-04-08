const config = require('../config');

/**
 * @see https://eslint.vuejs.org/rules/#base-rules-enabling-correct-eslint-parsing
 */
const base = {
  'vue/comment-directive': 2,
  'vue/jsx-uses-vars': 2,
};

/**
 * @see https://eslint.vuejs.org/rules/#uncategorized
 */
const uncategorized = (version, useTs) => {
  const isVue3 = version === 3;
  return {
    'vue/block-lang': 0,
    'vue/block-order': [2, { order: isVue3 ? ['script:not([setup])', 'script[setup]', 'template', 'style:not([scoped])', 'style[scoped]'] : [['script', 'template'], 'style'] }], // diff-with-2
    'vue/block-tag-newline': 0,
    'vue/component-api-style': 0,
    'vue/component-name-in-template-casing': [2, 'PascalCase'], // REDEFINE
    'vue/component-options-name-casing': [2, 'PascalCase'],
    'vue/custom-event-name-casing': [2, isVue3 ? 'camelCase' : 'kebab-case'], // diff-with-2
    'vue/define-macros-order': [2, { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] }],
    'vue/define-props-declaration': 0, // TS
    'vue/enforce-style-attribute': 0,
    'vue/html-button-has-type': [2, { button: true, submit: true, reset: true }],
    'vue/html-comment-content-newline': 0,
    'vue/html-comment-content-spacing': [2, 'always'],
    'vue/html-comment-indent': [2, config.indent],
    'vue/match-component-file-name': 0,
    'vue/match-component-import-name': 0,
    'vue/max-lines-per-block': 0,
    'vue/new-line-between-multi-line-property': 0, // jsx
    'vue/next-tick-style': 0,
    'vue/no-bare-strings-in-template': 0,
    'vue/no-boolean-default': 0,
    'vue/no-deprecated-model-definition': isVue3 ? 2 : 0, // diff-with-2 jsx
    'vue/no-duplicate-attr-inheritance': 0,
    'vue/no-empty-component-block': 0,
    'vue/no-multiple-objects-in-class': 0,
    'vue/no-potential-component-option-typo': 0,
    'vue/no-ref-object-reactivity-loss': 0,
    'vue/no-required-prop-with-default': useTs ? 1 : 0, // TS
    'vue/no-restricted-block': 0, // REDEFINE
    'vue/no-restricted-call-after-await': 0, // REDEFINE
    'vue/no-restricted-class': 0, // REDEFINE
    'vue/no-restricted-component-names': 0, // REDEFINE
    'vue/no-restricted-component-options': 0, // REDEFINE
    'vue/no-restricted-custom-event': 0, // REDEFINE
    'vue/no-restricted-html-elements': 0, // REDEFINE
    'vue/no-restricted-props': 0, // REDEFINE
    'vue/no-restricted-static-attribute': 0, // REDEFINE
    'vue/no-restricted-v-bind': 0, // REDEFINE
    'vue/no-restricted-v-on': 0, // REDEFINE
    'vue/no-root-v-if': 0,
    'vue/no-setup-props-reactivity-loss': 0, // jsx
    'vue/no-static-inline-styles': 0,
    'vue/no-template-target-blank': 0,
    'vue/no-this-in-before-route-enter': 1, // jsx
    'vue/no-undef-components': 0, // REDEFINE
    'vue/no-undef-properties': 0, // REDEFINE
    'vue/no-unsupported-features': 0,
    'vue/no-unused-emit-declarations': 0,
    'vue/no-unused-properties': 0,
    'vue/no-unused-refs': 2,
    'vue/no-use-v-else-with-v-for': 2,
    'vue/no-useless-mustaches': [2, { ignoreIncludesComment: true, ignoreStringEscape: true }],
    'vue/no-useless-v-bind': [2, { ignoreIncludesComment: true, ignoreStringEscape: true }],
    'vue/no-v-text': 0,
    'vue/padding-line-between-blocks': [2, 'always'],
    'vue/padding-line-between-tags': 0,
    'vue/padding-lines-in-component-definition': 0,
    'vue/prefer-define-options': 0,
    'vue/prefer-prop-type-boolean-first': 0,
    'vue/prefer-separate-static-class': 0,
    'vue/prefer-true-attribute-shorthand': 2,
    'vue/require-direct-export': 0,
    'vue/require-emit-validator': 0,
    'vue/require-explicit-slots': 0,
    'vue/require-expose': 0,
    'vue/require-macro-variable-name': 1,
    'vue/require-name-property': 0,
    'vue/require-prop-comment': 0,
    'vue/require-typed-object-prop': useTs ? 1 : 0, // TS
    'vue/require-typed-ref': 0, // TS
    'vue/script-indent': 0,
    'vue/sort-keys': 0,
    'vue/static-class-names-order': 0,
    'vue/v-for-delimiter-style': 0,
    'vue/v-if-else-key': 0,
    'vue/v-on-handler-style': 0,
    'vue/valid-define-options': 0, // REDEFINE
  };
};

/**
 * @see https://eslint.vuejs.org/rules/#deprecated
 */
const deprecated = {
  'vue/component-tags-order': 0, // replaced by vue/block-order
  'vue/no-invalid-model-keys': 0, // replaced by vue/valid-model-definition
  'vue/no-ref-object-destructure': 0, // replaced by vue/no-ref-object-reactivity-loss
  'vue/no-setup-props-destructure': 0, // replaced by vue/no-setup-props-reactivity-loss
  'vue/script-setup-uses-vars': 0,
  'vue/v-on-function-call': 0, // replaced by vue/v-on-handler-style
};

/**
 * @see https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention
 */
const global_essential = {
  'vue/multi-word-component-names': 0,
  'vue/no-arrow-functions-in-watch': 2, // jsx
  'vue/no-async-in-computed-properties': 2, // jsx
  'vue/no-child-content': 2, // REDEFINE
  'vue/no-computed-properties-in-data': 2, // jsx
  // 'vue/no-custom-modifiers-on-v-model': 2, // 2
  // 'vue/no-deprecated-data-object-declaration': 2, // 3 jsx
  // 'vue/no-deprecated-destroyed-lifecycle': 2, // 3 jsx
  // 'vue/no-deprecated-dollar-listeners-api': 2, // 3
  // 'vue/no-deprecated-dollar-scopedslots-api': 2, // 3
  // 'vue/no-deprecated-events-api': 2, // 3 jsx
  // 'vue/no-deprecated-filter': 2, // 3
  // 'vue/no-deprecated-functional-template': 2, // 3
  // 'vue/no-deprecated-html-element-is': 2, // 3
  // 'vue/no-deprecated-inline-template': 2, // 3
  // 'vue/no-deprecated-props-default-this': 2, // 3 jsx
  // 'vue/no-deprecated-router-link-tag-prop': 2, // 3 REDEFINE
  // 'vue/no-deprecated-scope-attribute': 2, // 3
  // 'vue/no-deprecated-slot-attribute': 2, // 3
  // 'vue/no-deprecated-slot-scope-attribute': 2, // 3
  // 'vue/no-deprecated-v-bind-sync': 2, // 3
  // 'vue/no-deprecated-v-is': 2, // 3
  // 'vue/no-deprecated-v-on-native-modifier': 2, // 3
  // 'vue/no-deprecated-v-on-number-modifiers': 2, // 3
  // 'vue/no-deprecated-vue-config-keycodes': 2, // 3
  'vue/no-dupe-keys': 2, // jsx
  'vue/no-dupe-v-else-if': 2,
  'vue/no-duplicate-attributes': [2, { allowCoexistClass: true, allowCoexistStyle: true }],
  'vue/no-export-in-script-setup': 2,
  // 'vue/no-expose-after-await': 2, // 3 jsx
  // 'vue/no-lifecycle-after-await': 2, // 3 jsx
  // 'vue/no-multiple-template-root': 2, // 2
  'vue/no-mutating-props': [2, { shallowOnly: true }], // jsx
  'vue/no-parsing-error': 2,
  'vue/no-ref-as-operand': 2, // jsx
  'vue/no-reserved-component-names': [2, { disallowVueBuiltInComponents: true, disallowVue3BuiltInComponents: true }], // REDEFINE jsx
  'vue/no-reserved-keys': 2, // jsx REDEFINE
  'vue/no-reserved-props': [2, { vueVersion: 3 }], // jsx diff-with-2
  'vue/no-shared-component-data': 2, // jsx
  'vue/no-side-effects-in-computed-properties': 2, // jsx
  'vue/no-template-key': 2,
  'vue/no-textarea-mustache': 2,
  'vue/no-unused-components': 2,
  'vue/no-unused-vars': [2, { ignorePattern: '^_' }],
  'vue/no-use-computed-property-like-method': 2, // jsx
  'vue/no-use-v-if-with-v-for': 2,
  'vue/no-useless-template-attributes': 2,
  // 'vue/no-v-for-template-key-on-child': 2, // 3
  // 'vue/no-v-for-template-key': 2, // 2
  // 'vue/no-v-model-argument': 2, // 2
  'vue/no-v-text-v-html-on-component': 2,
  // 'vue/no-watch-after-await': 2, // 3 // jsx
  // 'vue/prefer-import-from-vue': 2, // 3 // jsx
  'vue/require-component-is': 2,
  'vue/require-prop-type-constructor': 2, // jsx
  'vue/require-render-return': 2, // jsx
  // 'vue/require-slots-as-functions': 2, // 3 // jsx
  // 'vue/require-toggle-inside-transition': 2, // 3
  'vue/require-v-for-key': 2,
  'vue/require-valid-default-prop': 2, // jsx
  'vue/return-in-computed-property': 2, // jsx
  'vue/return-in-emits-validator': 2, // jsx
  'vue/use-v-on-exact': 2,
  'vue/valid-attribute-name': 2,
  'vue/valid-define-emits': 2,
  'vue/valid-define-props': 2,
  // 'vue/valid-model-definition': 2, // 2
  'vue/valid-next-tick': 2, // jsx
  'vue/valid-template-root': 2,
  // 'vue/valid-v-bind-sync': 2, // 2
  'vue/valid-v-bind': 2,
  'vue/valid-v-cloak': 2,
  'vue/valid-v-else-if': 2,
  'vue/valid-v-else': 2,
  'vue/valid-v-for': 2,
  'vue/valid-v-html': 2,
  'vue/valid-v-if': 2,
  // 'vue/valid-v-is': 2, // 3
  // 'vue/valid-v-memo': 2, // 3
  'vue/valid-v-model': 2,
  'vue/valid-v-on': 2,
  'vue/valid-v-once': 2,
  'vue/valid-v-pre': 2,
  'vue/valid-v-show': 2,
  'vue/valid-v-slot': 2,
  'vue/valid-v-text': 2,
};

exports.vue3_jsx = `
// base
vue/comment-directive
vue/jsx-uses-vars
// uncategorized
vue/new-line-between-multi-line-property
vue/no-deprecated-model-definition
vue/no-setup-props-reactivity-loss
vue/no-this-in-before-route-enter
// essential
vue/multi-word-component-names
vue/no-arrow-functions-in-watch
vue/no-async-in-computed-properties
vue/no-computed-properties-in-data
vue/no-deprecated-data-object-declaration
vue/no-deprecated-destroyed-lifecycle
vue/no-deprecated-events-api
vue/no-deprecated-props-default-this
vue/no-dupe-keys
vue/no-expose-after-await
vue/no-lifecycle-after-await
vue/no-mutating-props
vue/no-ref-as-operand
vue/no-reserved-component-names
vue/no-reserved-keys
vue/no-reserved-props
vue/no-shared-component-data
vue/no-side-effects-in-computed-properties
vue/no-use-computed-property-like-method
vue/no-watch-after-await
vue/prefer-import-from-vue
vue/require-prop-type-constructor
vue/require-render-return
vue/require-slots-as-functions
vue/require-valid-default-prop
vue/return-in-computed-property
vue/return-in-emits-validator
vue/valid-next-tick
`;

const vue3_essential = {
  ...global_essential,
  'vue/no-deprecated-data-object-declaration': 2, // 3
  'vue/no-deprecated-destroyed-lifecycle': 2, // 3
  'vue/no-deprecated-dollar-listeners-api': 2, // 3
  'vue/no-deprecated-dollar-scopedslots-api': 2, // 3
  'vue/no-deprecated-events-api': 2, // 3
  'vue/no-deprecated-filter': 2, // 3
  'vue/no-deprecated-functional-template': 2, // 3
  'vue/no-deprecated-html-element-is': 2, // 3
  'vue/no-deprecated-inline-template': 2, // 3
  'vue/no-deprecated-props-default-this': 2, // 3
  'vue/no-deprecated-router-link-tag-prop': 2, // 3 REDEFINE
  'vue/no-deprecated-scope-attribute': 2, // 3
  'vue/no-deprecated-slot-attribute': 2, // 3
  'vue/no-deprecated-slot-scope-attribute': 2, // 3
  'vue/no-deprecated-v-bind-sync': 2, // 3
  'vue/no-deprecated-v-is': 2, // 3
  'vue/no-deprecated-v-on-native-modifier': 2, // 3
  'vue/no-deprecated-v-on-number-modifiers': 2, // 3
  'vue/no-deprecated-vue-config-keycodes': 2, // 3
  'vue/no-expose-after-await': 2, // 3
  'vue/no-lifecycle-after-await': 2, // 3
  'vue/no-v-for-template-key-on-child': 2, // 3 // diff-with-2
  'vue/no-watch-after-await': 2, // 3
  'vue/prefer-import-from-vue': 2, // 3
  'vue/require-slots-as-functions': 2, // 3
  'vue/require-toggle-inside-transition': 2, // 3
  'vue/valid-v-is': 2, // 3
  'vue/valid-v-memo': 2, // 3
};

const vue2_essential = {
  ...global_essential,
  'vue/no-custom-modifiers-on-v-model': 2, // 2
  'vue/no-multiple-template-root': 2, // 2
  'vue/no-reserved-props': [2, { vueVersion: 2 }], // diff-with-2
  'vue/no-v-for-template-key': 2, // 2
  'vue/no-v-model-argument': 2, // 2
  'vue/valid-model-definition': 2, // 2
  'vue/valid-v-bind-sync': 2, // 2
};

/**
 * @see https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability
 */
const vue2_strongly_recommended = {
  'vue/attribute-hyphenation': [2, 'always'],
  'vue/component-definition-name-casing': [2, 'PascalCase'], // replaced by vue/name-property-casing jsx
  'vue/first-attribute-linebreak': 1,
  'vue/html-closing-bracket-newline': 1,
  'vue/html-closing-bracket-spacing': 1,
  'vue/html-end-tags': 1,
  'vue/html-indent': [2, config.indent],
  'vue/html-quotes': [2, 'double', { avoidEscape: false }],
  'vue/html-self-closing': 1,
  'vue/max-attributes-per-line': [2, { singleline: 6, multiline: 1 }],
  'vue/multiline-html-element-content-newline': 2,
  'vue/mustache-interpolation-spacing': 2,
  'vue/no-multi-spaces': 2,
  'vue/no-spaces-around-equal-signs-in-attribute': 2,
  'vue/no-template-shadow': 2,
  'vue/one-component-per-file': 0,
  'vue/prop-name-casing': 2, // jsx
  'vue/require-default-prop': 0, // jsx
  // 'vue/require-explicit-emits': 1, // 3
  'vue/require-prop-types': 1, // jsx
  'vue/singleline-html-element-content-newline': 0,
  'vue/v-bind-style': 1,
  // 'vue/v-on-event-hyphenation': [1, 'always', { autofix: true }], // 3
  'vue/v-on-style': 1,
  'vue/v-slot-style': 1,
};

const vue3_strongly_recommended = {
  ...vue2_strongly_recommended,
  'vue/require-explicit-emits': 1, // 3
  'vue/v-on-event-hyphenation': [1, 'always', { autofix: true }], // 3
};

/**
 * @see https://eslint.vuejs.org/rules/#priority-c-recommended-potentially-dangerous-patterns
 */
const recommended = {
  'vue/attributes-order': 1,
  'vue/component-tags-order': 0, // replaced by vue/block-order
  'vue/no-lone-template': 2, // REDEFINE
  'vue/no-multiple-slot-args': 1, // jsx
  'vue/no-v-html': 0,
  'vue/order-in-components': 1, // jsx
  'vue/this-in-template': [2, 'never'],
};

/**
 * @version 9.24.0
 * @see https://eslint.vuejs.org/rules/
 */
exports.vue2 = useTs => ({
  ...base,
  ...vue2_essential,
  ...vue2_strongly_recommended,
  ...recommended,
  ...uncategorized(2, useTs),
  ...deprecated,
});

/**
 * @version 9.24.0
 * @see https://eslint.vuejs.org/rules/
 */
exports.vue3 = useTs => ({
  ...base,
  ...vue3_essential,
  ...vue3_strongly_recommended,
  ...recommended,
  ...uncategorized(3, useTs),
  ...deprecated,
});
