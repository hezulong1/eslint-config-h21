const config = require('../config');

const base = {
  'vue/comment-directive': 2,
  'vue/jsx-uses-vars': 2,
};

const uncategorized = {
  'vue/block-lang': 0,
  'vue/block-order': [2, { order: ['script:not([setup])', 'script[setup]', 'template', 'style:not([scoped])', 'style[scoped]'] }], // diff-with-2
  'vue/block-tag-newline': 0,
  'vue/component-api-style': 0,
  'vue/component-name-in-template-casing': [2, 'PascalCase'], // REDEFINE
  'vue/component-options-name-casing': [2, 'PascalCase'],
  'vue/custom-event-name-casing': [2, 'camelCase'], // diff-with-2
  'vue/define-macros-order': [2, { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] }], // TS
  'vue/define-props-declaration': 0, // TS
  'vue/enforce-style-attribute': 0,
  'vue/html-button-has-type': [2, { button: true, submit: true, reset: true }],
  'vue/html-comment-content-newline': 0,
  'vue/html-comment-content-spacing': [2, 'always'],
  'vue/html-comment-indent': [2, config.indent],
  'vue/match-component-file-name': 0,
  'vue/match-component-import-name': 0,
  'vue/max-lines-per-block': 0,
  'vue/new-line-between-multi-line-property': 0,
  'vue/next-tick-style': 0,
  'vue/no-bare-strings-in-template': 0,
  'vue/no-boolean-default': 0,
  'vue/no-deprecated-model-definition': 2, // diff-with-2
  'vue/no-duplicate-attr-inheritance': 0,
  'vue/no-empty-component-block': 0,
  'vue/no-multiple-objects-in-class': 0,
  'vue/no-potential-component-option-typo': 0,
  'vue/no-ref-object-reactivity-loss': 0,
  'vue/no-required-prop-with-default': 1,
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
  'vue/no-setup-props-reactivity-loss': 2,
  'vue/no-static-inline-styles': 0,
  'vue/no-template-target-blank': 0,
  'vue/no-this-in-before-route-enter': 1,
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
  'vue/require-typed-object-prop': 1, // TS
  'vue/require-typed-ref': 0,
  'vue/script-indent': 0,
  'vue/sort-keys': 0,
  'vue/static-class-names-order': 0,
  'vue/v-for-delimiter-style': 0,
  'vue/v-if-else-key': 0,
  'vue/v-on-handler-style': 0,
  'vue/valid-define-options': 0, // REDEFINE
};

const vue3_essential = {
  'vue/multi-word-component-names': 0,
  'vue/no-arrow-functions-in-watch': 2,
  'vue/no-async-in-computed-properties': 2,
  'vue/no-child-content': 2, // REDEFINE
  'vue/no-computed-properties-in-data': 2,
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
  'vue/no-dupe-keys': 2,
  'vue/no-dupe-v-else-if': 2,
  'vue/no-duplicate-attributes': [2, { allowCoexistClass: true, allowCoexistStyle: true }],
  'vue/no-export-in-script-setup': 2,
  'vue/no-expose-after-await': 2, // 3
  'vue/no-lifecycle-after-await': 2, // 3
  'vue/no-mutating-props': [2, { shallowOnly: true }],
  'vue/no-parsing-error': 2,
  'vue/no-ref-as-operand': 2,
  'vue/no-reserved-component-names': [2, { disallowVueBuiltInComponents: true, disallowVue3BuiltInComponents: true }], // REDEFINE
  'vue/no-reserved-keys': 2, // REDEFINE
  'vue/no-reserved-props': [2, { vueVersion: 3 }], // diff-with-2
  'vue/no-shared-component-data': 2,
  'vue/no-side-effects-in-computed-properties': 2,
  'vue/no-template-key': 2,
  'vue/no-textarea-mustache': 2,
  'vue/no-unused-components': 2,
  'vue/no-unused-vars': [2, { ignorePattern: '^_' }],
  'vue/no-use-computed-property-like-method': 2,
  'vue/no-use-v-if-with-v-for': 2,
  'vue/no-useless-template-attributes': 2,
  'vue/no-v-for-template-key-on-child': 2, // 3 // diff-with-2
  'vue/no-v-text-v-html-on-component': 2,
  'vue/no-watch-after-await': 2, // 3
  'vue/prefer-import-from-vue': 2, // 3
  'vue/require-component-is': 2,
  'vue/require-prop-type-constructor': 2,
  'vue/require-render-return': 2,
  'vue/require-slots-as-functions': 2, // 3
  'vue/require-toggle-inside-transition': 2, // 3
  'vue/require-v-for-key': 2,
  'vue/require-valid-default-prop': 2,
  'vue/return-in-computed-property': 2,
  'vue/return-in-emits-validator': 2,
  'vue/use-v-on-exact': 2,
  'vue/valid-attribute-name': 2,
  'vue/valid-define-emits': 2,
  'vue/valid-define-props': 2,
  'vue/valid-next-tick': 2,
  'vue/valid-template-root': 2,
  'vue/valid-v-bind': 2,
  'vue/valid-v-cloak': 2,
  'vue/valid-v-else-if': 2,
  'vue/valid-v-else': 2,
  'vue/valid-v-for': 2,
  'vue/valid-v-html': 2,
  'vue/valid-v-if': 2,
  'vue/valid-v-is': 2, // 3
  'vue/valid-v-memo': 2, // 3
  'vue/valid-v-model': 2,
  'vue/valid-v-on': 2,
  'vue/valid-v-once': 2,
  'vue/valid-v-pre': 2,
  'vue/valid-v-show': 2,
  'vue/valid-v-slot': 2,
  'vue/valid-v-text': 2,
};

const vue3_strongly_recommended = {
  'vue/attribute-hyphenation': [2, 'always'],
  'vue/component-definition-name-casing': [2, 'PascalCase'], // replace vue/name-property-casing
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
  'vue/prop-name-casing': 2,
  'vue/require-default-prop': 0,
  'vue/require-explicit-emits': 1, // 3
  'vue/require-prop-types': 1,
  'vue/singleline-html-element-content-newline': 0,
  'vue/v-bind-style': 1,
  'vue/v-on-event-hyphenation': [1, 'always', { autofix: true }], // 3
  'vue/v-on-style': 1,
  'vue/v-slot-style': 1,
};

const vue3_recommended = {
  'vue/attributes-order': 1,
  'vue/component-tags-order': 0, // replaced by vue/block-order
  'vue/no-lone-template': 2, // REDEFINE
  'vue/no-multiple-slot-args': 1,
  'vue/no-v-html': 0,
  'vue/order-in-components': 1,
  'vue/this-in-template': [2, 'never'],
};

/**
 * @version 9.19.2
 * @see https://eslint.vuejs.org/rules/
 */
module.exports = {
  // Base
  'vue/comment-directive': 'error',
  'vue/jsx-uses-vars': 'error',
  // Essential
  'vue/multi-word-component-names': 'error',
  'vue/no-arrow-functions-in-watch': 'error',
  'vue/no-async-in-computed-properties': 'error',
  'vue/no-child-content': 'error',
  'vue/no-computed-properties-in-data': 'error',
  'vue/no-deprecated-data-object-declaration': 'error',
  'vue/no-deprecated-destroyed-lifecycle': 'error',
  'vue/no-deprecated-dollar-listeners-api': 'error',
  'vue/no-deprecated-dollar-scopedslots-api': 'error',
  'vue/no-deprecated-events-api': 'error',
  'vue/no-deprecated-filter': 'error',
  'vue/no-deprecated-functional-template': 'error',
  'vue/no-deprecated-html-element-is': 'error',
  'vue/no-deprecated-inline-template': 'error',
  'vue/no-deprecated-props-default-this': 'error',
  'vue/no-deprecated-router-link-tag-prop': 'error',
  'vue/no-deprecated-scope-attribute': 'error',
  'vue/no-deprecated-slot-attribute': 'error',
  'vue/no-deprecated-slot-scope-attribute': 'error',
  'vue/no-deprecated-v-bind-sync': 'error',
  'vue/no-deprecated-v-is': 'error',
  'vue/no-deprecated-v-on-native-modifier': 'error',
  'vue/no-deprecated-v-on-number-modifiers': 'error',
  'vue/no-deprecated-vue-config-keycodes': 'error',
  'vue/no-dupe-keys': 'error',
  'vue/no-dupe-v-else-if': 'error',
  'vue/no-duplicate-attributes': 'error',
  'vue/no-export-in-script-setup': 'error',
  'vue/no-expose-after-await': 'error',
  'vue/no-lifecycle-after-await': 'error',
  'vue/no-mutating-props': 'error',
  'vue/no-parsing-error': 'error',
  'vue/no-ref-as-operand': 'error',
  'vue/no-reserved-component-names': 'error',
  'vue/no-reserved-keys': 'error',
  'vue/no-reserved-props': 'error',
  'vue/no-shared-component-data': 'error',
  'vue/no-side-effects-in-computed-properties': 'error',
  'vue/no-template-key': 'error',
  'vue/no-textarea-mustache': 'error',
  'vue/no-unused-components': 'error',
  'vue/no-unused-vars': 'error',
  'vue/no-use-computed-property-like-method': 'error',
  'vue/no-use-v-if-with-v-for': 'error',
  'vue/no-useless-template-attributes': 'error',
  'vue/no-v-for-template-key-on-child': 'error',
  'vue/no-v-text-v-html-on-component': 'error',
  'vue/no-watch-after-await': 'error',
  'vue/prefer-import-from-vue': 'error',
  'vue/require-component-is': 'error',
  'vue/require-prop-type-constructor': 'error',
  'vue/require-render-return': 'error',
  'vue/require-slots-as-functions': 'error',
  'vue/require-toggle-inside-transition': 'error',
  'vue/require-v-for-key': 'error',
  'vue/require-valid-default-prop': 'error',
  'vue/return-in-computed-property': 'error',
  'vue/return-in-emits-validator': 'error',
  'vue/use-v-on-exact': 'error',
  'vue/valid-attribute-name': 'error',
  'vue/valid-define-emits': 'error',
  'vue/valid-define-props': 'error',
  'vue/valid-next-tick': 'error',
  'vue/valid-template-root': 'error',
  'vue/valid-v-bind': 'error',
  'vue/valid-v-cloak': 'error',
  'vue/valid-v-else-if': 'error',
  'vue/valid-v-else': 'error',
  'vue/valid-v-for': 'error',
  'vue/valid-v-html': 'error',
  'vue/valid-v-if': 'error',
  'vue/valid-v-is': 'error',
  'vue/valid-v-memo': 'error',
  'vue/valid-v-model': 'error',
  'vue/valid-v-on': 'error',
  'vue/valid-v-once': 'error',
  'vue/valid-v-pre': 'error',
  'vue/valid-v-show': 'error',
  'vue/valid-v-slot': 'error',
  'vue/valid-v-text': 'error',
  // StronglyRecommended
  'vue/attribute-hyphenation': 'warn',
  'vue/component-definition-name-casing': 'warn',
  'vue/first-attribute-linebreak': 'warn',
  'vue/html-closing-bracket-newline': 'warn',
  'vue/html-closing-bracket-spacing': 'warn',
  'vue/html-end-tags': 'warn',
  'vue/html-indent': 'warn',
  'vue/html-quotes': 'warn',
  'vue/html-self-closing': 'warn',
  'vue/max-attributes-per-line': 'warn',
  'vue/multiline-html-element-content-newline': 'warn',
  'vue/mustache-interpolation-spacing': 'warn',
  'vue/no-multi-spaces': 'warn',
  'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
  'vue/no-template-shadow': 'warn',
  'vue/one-component-per-file': 'warn',
  'vue/prop-name-casing': 'warn',
  'vue/require-default-prop': 'warn',
  'vue/require-explicit-emits': 'warn',
  'vue/require-prop-types': 'warn',
  'vue/singleline-html-element-content-newline': 'warn',
  'vue/v-bind-style': 'warn',
  'vue/v-on-event-hyphenation': [
    'warn',
    'always',
    {
      autofix: true,
    },
  ],
  'vue/v-on-style': 'warn',
  'vue/v-slot-style': 'warn',
  // Recommended
  'vue/attributes-order': 'warn',
  'vue/component-tags-order': 'warn',
  'vue/no-lone-template': 'warn',
  'vue/no-multiple-slot-args': 'warn',
  'vue/no-v-html': 'warn',
  'vue/order-in-components': 'warn',
  'vue/this-in-template': 'warn',
  // Layout
  'vue/array-bracket-newline': 'off',
  'vue/array-bracket-spacing': 'off',
  'vue/array-element-newline': 'off',
  'vue/arrow-spacing': 'off',
  'vue/block-spacing': 'off',
  'vue/block-tag-newline': 'off',
  'vue/brace-style': 'off',
  'vue/camelcase': 'off', // +
  'vue/comma-dangle': 'off',
  'vue/comma-spacing': 'off',
  'vue/comma-style': 'off',
  'vue/define-macros-order': 'off', // -
  'vue/dot-location': 'off',
  'vue/first-attribute-linebreak': 'off',
  'vue/func-call-spacing': 'off',
  'vue/html-closing-bracket-newline': 'off',
  'vue/html-closing-bracket-spacing': 'off',
  'vue/html-comment-content-newline': 'off',
  'vue/html-comment-content-spacing': 'off',
  'vue/html-comment-indent': 'off',
  'vue/html-indent': 'off',
  'vue/html-quotes': 'off',
  'vue/html-self-closing': 'off',
  'vue/key-spacing': 'off',
  'vue/keyword-spacing': 'off',
  'vue/max-attributes-per-line': 'off',
  'vue/max-len': 'off',
  'vue/multiline-html-element-content-newline': 'off',
  'vue/multiline-ternary': 'off',
  'vue/mustache-interpolation-spacing': 'off',
  'vue/new-line-between-multi-line-property': 'off',
  'vue/no-extra-parens': 'off',
  'vue/no-multi-spaces': 'off',
  'vue/no-spaces-around-equal-signs-in-attribute': 'off',
  'vue/object-curly-newline': 'off',
  'vue/object-curly-spacing': 'off',
  'vue/object-property-newline': 'off',
  'vue/operator-linebreak': 'off',
  'vue/padding-line-between-blocks': 'off',
  'vue/padding-line-between-tags': 'off',
  'vue/padding-lines-in-component-definition': 'off',
  'vue/quote-props': 'off',
  'vue/script-indent': 'off',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/space-in-parens': 'off',
  'vue/space-infix-ops': 'off',
  'vue/space-unary-ops': 'off',
  'vue/template-curly-spacing': 'off',
  'vue/v-for-delimiter-style': 'off',
};
