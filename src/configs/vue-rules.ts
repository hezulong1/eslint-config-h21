import type { Rules, CodeStyle } from '../types';
import type { OptionsVue } from '../options';
import { defaults } from '../defaults';
import jsRules from './javascript-rules';

type GenFn = (version: 2 | 3, style?: boolean | CodeStyle, ts?: boolean) => Rules;

const essential: GenFn = (version) => {
  let rules: Rules = {
    // 'vue/multi-word-component-names': 0,
    'vue/no-arrow-functions-in-watch': 2, // [jsx]
    'vue/no-async-in-computed-properties': 2, // [jsx]
    'vue/no-child-content': 2, // [override]
    'vue/no-computed-properties-in-data': 2, // [jsx]
    // vue/no-custom-modifiers-on-v-model [vue2]
    // vue/no-deprecated-data-object-declaration [vue3] [jsx]
    // vue/no-deprecated-delete-set [vue3]
    // vue/no-deprecated-destroyed-lifecycle [vue3] [jsx]
    // vue/no-deprecated-dollar-listeners-api [vue3]
    // vue/no-deprecated-dollar-scopedslots-api'[vue3]
    // vue/no-deprecated-events-api [vue3] [jsx]
    // vue/no-deprecated-filter [vue3]
    // vue/no-deprecated-functional-template [vue3]
    // vue/no-deprecated-html-element-is [vue3]
    // vue/no-deprecated-inline-template [vue3]
    // vue/no-deprecated-model-definition [vue3] [jsx]
    // vue/no-deprecated-props-default-this [vue3] [jsx]
    // vue/no-deprecated-router-link-tag-prop [vue3] [override]
    // vue/no-deprecated-scope-attribute [vue3]
    // vue/no-deprecated-slot-attribute [vue3]
    // vue/no-deprecated-slot-scope-attribute [vue3]
    // vue/no-deprecated-v-bind-sync [vue3]
    // vue/no-deprecated-v-is [vue3]
    // vue/no-deprecated-v-on-native-modifier [vue3]
    // vue/no-deprecated-v-on-number-modifiers [vue3]
    // vue/no-deprecated-vue-config-keycodes [vue3]
    'vue/no-dupe-keys': 2, // [jsx]
    'vue/no-dupe-v-else-if': 2,
    'vue/no-duplicate-attributes': [2, { allowCoexistClass: true, allowCoexistStyle: true }],
    'vue/no-export-in-script-setup': 2,
    // vue/no-expose-after-await [vue3] [jsx]
    // vue/no-lifecycle-after-await [vue3] [jsx]
    // vue/no-multiple-template-root [vue2]
    'vue/no-mutating-props': [2, { shallowOnly: true }], // [jsx]
    'vue/no-parsing-error': 2,
    'vue/no-ref-as-operand': 2, // [jsx]
    'vue/no-reserved-component-names': [2, { disallowVueBuiltInComponents: true, disallowVue3BuiltInComponents: true }], // [jsx] [override]
    'vue/no-reserved-keys': 2, // [jsx] [override]
    'vue/no-reserved-props': [2, { vueVersion: version }], // [jsx]
    'vue/no-shared-component-data': 2, // [jsx]
    'vue/no-side-effects-in-computed-properties': 2, // [jsx]
    'vue/no-template-key': 2,
    'vue/no-textarea-mustache': 2,
    'vue/no-unused-components': 2,
    'vue/no-unused-vars': [2, { ignorePattern: '^_' }],
    'vue/no-use-computed-property-like-method': 2, // [jsx]
    'vue/no-use-v-if-with-v-for': 2,
    'vue/no-useless-template-attributes': 2,
    // vue/no-v-for-template-key-on-child [vue3]
    // vue/no-v-for-template-key [vue2]
    // vue/no-v-model-argument [vue2]
    'vue/no-v-text-v-html-on-component': 2,
    // vue/no-watch-after-await [vue3] [jsx]
    // vue/prefer-import-from-vue [vue3] [jsx]
    'vue/require-component-is': 2,
    'vue/require-prop-type-constructor': 2, // [jsx]
    'vue/require-render-return': 2, // [jsx]
    // vue/require-slots-as-functions [vue3] [jsx]
    // vue/require-toggle-inside-transition [vue3]
    'vue/require-v-for-key': 2,
    'vue/require-valid-default-prop': 2, // [jsx]
    'vue/return-in-computed-property': 2, // [jsx]
    'vue/return-in-emits-validator': 2, // [jsx]
    'vue/use-v-on-exact': 2,
    'vue/valid-attribute-name': 2,
    'vue/valid-define-emits': 2,
    // vue/valid-define-options [vue3]
    'vue/valid-define-props': 2,
    // vue/valid-model-definition [vue2]
    'vue/valid-next-tick': 2, // [jsx]
    'vue/valid-template-root': 2,
    // vue/valid-v-bind-sync [vue2]
    'vue/valid-v-bind': 2,
    'vue/valid-v-cloak': 2,
    'vue/valid-v-else-if': 2,
    'vue/valid-v-else': 2,
    'vue/valid-v-for': 2,
    'vue/valid-v-html': 2,
    'vue/valid-v-if': 2,
    // vue/valid-v-is [vue3]
    // vue/valid-v-memo [vue3]
    'vue/valid-v-model': 2,
    'vue/valid-v-on': 2,
    'vue/valid-v-once': 2,
    'vue/valid-v-pre': 2,
    'vue/valid-v-show': 2,
    'vue/valid-v-slot': 2,
    'vue/valid-v-text': 2,
  };

  if (version === 3) {
    rules = {
      ...rules,
      'vue/no-deprecated-data-object-declaration': 2,
      'vue/no-deprecated-delete-set': 2,
      'vue/no-deprecated-destroyed-lifecycle': 2,
      'vue/no-deprecated-dollar-listeners-api': 2,
      'vue/no-deprecated-dollar-scopedslots-api': 2,
      'vue/no-deprecated-events-api': 2,
      'vue/no-deprecated-filter': 2,
      'vue/no-deprecated-functional-template': 2,
      'vue/no-deprecated-html-element-is': 2,
      'vue/no-deprecated-inline-template': 2,
      'vue/no-deprecated-model-definition': 2,
      'vue/no-deprecated-props-default-this': 2,
      'vue/no-deprecated-router-link-tag-prop': 2,
      'vue/no-deprecated-scope-attribute': 2,
      'vue/no-deprecated-slot-attribute': 2,
      'vue/no-deprecated-slot-scope-attribute': 2,
      'vue/no-deprecated-v-bind-sync': 2,
      'vue/no-deprecated-v-is': 2,
      'vue/no-deprecated-v-on-native-modifier': 2,
      'vue/no-deprecated-v-on-number-modifiers': 2,
      'vue/no-deprecated-vue-config-keycodes': 2,
      'vue/no-expose-after-await': 2,
      'vue/no-lifecycle-after-await': 2,
      'vue/no-v-for-template-key-on-child': 2,
      'vue/no-watch-after-await': 2,
      'vue/prefer-import-from-vue': 2,
      'vue/require-slots-as-functions': 2,
      'vue/require-toggle-inside-transition': 2,
      'vue/valid-define-options': 2,
      'vue/valid-v-is': 2,
      'vue/valid-v-memo': 2,
    };
  } else {
    rules = {
      ...rules,
      'vue/no-custom-modifiers-on-v-model': 2,
      'vue/no-multiple-template-root': 2,
      'vue/no-v-for-template-key': 2, // [deprecated]
      'vue/no-v-model-argument': 2, // [deprecated]
      'vue/valid-model-definition': 2, // [deprecated]
      'vue/valid-v-bind-sync': 2, // [deprecated]
    };
  }

  return rules;
};

const strongly_recommended: GenFn = (version, style) => {
  const indent = typeof style === 'object' && typeof style.indent !== 'undefined' ? style.indent : defaults.indent;

  let rules: Rules = {
    'vue/attribute-hyphenation': [2, 'always'],
    'vue/component-definition-name-casing': [2, 'PascalCase'], // [prev:vue/name-property-casing] [jsx]
    // vue/first-attribute-linebreak [style]
    // vue/html-closing-bracket-newline [style]
    // vue/html-closing-bracket-spacing [style]
    'vue/html-end-tags': 1,
    // vue/html-indent [style]
    // vue/html-quotes [style]
    // vue/html-self-closing [style]
    // vue/max-attributes-per-line [style]
    // vue/multiline-html-element-content-newline [style]
    // vue/mustache-interpolation-spacing [style]
    // vue/no-multi-spaces [style]
    // vue/no-spaces-around-equal-signs-in-attribute [style]
    'vue/no-template-shadow': 2,
    // 'vue/one-component-per-file': 0,
    'vue/prop-name-casing': 2, // [jsx]
    // 'vue/require-default-prop': 0, // [jsx]
    // vue/require-explicit-emits [vue3]
    'vue/require-prop-types': 1, // [jsx]
    // vue/singleline-html-element-content-newline [style]
    'vue/v-bind-style': 1,
    // vue/v-on-event-hyphenation [vue3]
    'vue/v-on-style': 1,
    'vue/v-slot-style': 1,
  };

  if (version === 3) {
    rules = {
      ...rules,
      'vue/require-explicit-emits': 1,
      'vue/v-on-event-hyphenation': [1, 'always', { autofix: true }],
    };
  }

  if (style) {
    rules = {
      ...rules,
      'vue/first-attribute-linebreak': 1,
      'vue/html-closing-bracket-newline': 1,
      'vue/html-closing-bracket-spacing': 1,
      'vue/html-indent': [2, indent],
      'vue/html-quotes': [2, 'double', { avoidEscape: false }],
      'vue/html-self-closing': 1,
      'vue/max-attributes-per-line': [2, { singleline: 6, multiline: 1 }],
      'vue/multiline-html-element-content-newline': 2,
      'vue/mustache-interpolation-spacing': 2,
      'vue/no-multi-spaces': 2,
      'vue/no-spaces-around-equal-signs-in-attribute': 2,
      // 'vue/singleline-html-element-content-newline': 0,
    };
  }

  return rules;
};

const recommended: GenFn = (version, style, ts) => {
  let rules: Rules = {
    'vue/attributes-order': 1,
    'vue/block-order': [
      2,
      {
        order: version === 3
          ? ['script:not([setup])', 'script[setup]', 'template', 'style:not([scoped])', 'style[scoped]']
          : [['script', 'template'], 'style'],
      },
    ], // [prev:vue/component-tags-order]
    'vue/no-lone-template': 2, // [override]
    'vue/no-multiple-slot-args': 1, // [jsx]
    'vue/no-required-prop-with-default': ts ? 1 : 0,
    // 'vue/no-v-html': 0,
    'vue/order-in-components': 1, // [jsx]
    'vue/this-in-template': [2, 'never'],
  };

  return rules;
};

const uncategorized: GenFn = (version, style, ts) => {
  let rules: Rules = {
    // 'vue/block-lang': 0,
    // 'vue/block-tag-newline': 0, // [style]
    // 'vue/component-api-style': 0,
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/component-options-name-casing': [2, 'PascalCase'],
    'vue/custom-event-name-casing': [2, version === 3 ? 'camelCase' : 'kebab-case'],
    // 'vue/define-emits-declaration': 0,
    // 'vue/define-macros-order': 0, // [style]
    // 'vue/define-props-declaration': 0, // [TS]
    'vue/define-props-destructuring': 2,
    // 'vue/enforce-style-attribute': 0,
    'vue/html-button-has-type': [2, { button: true, submit: true, reset: true }],
    // 'vue/html-comment-content-newline': 0, // [style]
    // 'vue/html-comment-content-spacing': ??, // [style]
    // 'vue/html-comment-indent': 0, // [style]
    // 'vue/match-component-file-name': 0,
    // 'vue/match-component-import-name': 0,
    // 'vue/max-lines-per-block': 0,
    // 'vue/max-props': 0,
    // 'vue/max-template-depth': 0,
    // 'vue/new-line-between-multi-line-property': 0, // [style] [jsx]
    // 'vue/next-tick-style': 0,
    // 'vue/no-bare-strings-in-template': 0,
    // 'vue/no-boolean-default': 0,
    // 'vue/no-duplicate-attr-inheritance': 0,
    'vue/no-duplicate-class-names': 2,
    // 'vue/no-empty-component-block': 0,
    'vue/no-import-compiler-macros': 2,
    // 'vue/no-literals-in-template': 0,
    // 'vue/no-multiple-objects-in-class': 0,
    // 'vue/no-negated-v-if-condition': 0,
    // 'vue/no-potential-component-option-typo': 0,
    // 'vue/no-ref-object-reactivity-loss': 0,
    // 'vue/no-restricted-block': ??,
    // 'vue/no-restricted-call-after-await': ??,
    // 'vue/no-restricted-class': ??,
    // 'vue/no-restricted-component-names': ??,
    // 'vue/no-restricted-component-options': ??,
    // 'vue/no-restricted-custom-event': ??,
    // 'vue/no-restricted-html-elements': ??,
    // 'vue/no-restricted-props': ??,
    // 'vue/no-restricted-static-attribute': ??,
    // 'vue/no-restricted-v-bind': ??,
    // 'vue/no-restricted-v-on': ??,
    // 'vue/no-root-v-if': 0, //
    // 'vue/no-setup-props-reactivity-loss': 0, // [jsx]
    // 'vue/no-static-inline-styles': 0,
    // 'vue/no-template-target-blank': 0,
    'vue/no-this-in-before-route-enter': 1, // [jsx]
    // 'vue/no-undef-components': ??,
    // 'vue/no-undef-directives': ??,
    // 'vue/no-undef-properties': ??,
    // 'vue/no-unsupported-features': 0,
    // 'vue/no-unused-emit-declarations': 0,
    // 'vue/no-unused-properties': 0,
    // 'vue/no-unused-refs': 0,
    'vue/no-use-v-else-with-v-for': 2,
    'vue/no-useless-mustaches': [2, { ignoreIncludesComment: true, ignoreStringEscape: true }],
    'vue/no-useless-v-bind': [2, { ignoreIncludesComment: true, ignoreStringEscape: true }],
    // 'vue/no-v-text': 0,
    // 'vue/padding-line-between-blocks': ??, // [style]
    // 'vue/padding-line-between-tags': 0, // [style]
    // 'vue/padding-lines-in-component-definition': 0, // [style]
    // 'vue/prefer-define-options': 0,
    // 'vue/prefer-prop-type-boolean-first': 0,
    // 'vue/prefer-separate-static-class': 0,
    // 'vue/prefer-single-event-payload': 0,
    'vue/prefer-true-attribute-shorthand': 2,
    // 'vue/prefer-use-template-ref': 0,
    // 'vue/prefer-v-model': 0,
    // 'vue/require-default-export': 0,
    // 'vue/require-direct-export': 0,
    // 'vue/require-emit-validator': 0,
    // 'vue/require-explicit-slots': 0,
    // 'vue/require-expose': 0,
    'vue/require-macro-variable-name': 1,
    // 'vue/require-name-property': 0,
    // 'vue/require-prop-comment': 0,
    'vue/require-typed-object-prop': ts ? 1 : 0, // [TS]
    // 'vue/require-typed-ref': 0, // [TS]
    // 'vue/restricted-component-names': 0,
    // 'vue/script-indent': 0, // [style]
    // 'vue/slot-name-casing': 0,
    // 'vue/sort-keys': 0,
    // 'vue/static-class-names-order': 0,
    // 'vue/v-for-delimiter-style': 0, // [style]
    // 'vue/v-if-else-key': 0,
    // 'vue/v-on-handler-style': 0,
  };

  if (style) {
    rules = {
      ...rules,
      // 'vue/block-tag-newline': 0,
      // 'vue/define-macros-order': 0,
      // 'vue/html-comment-content-newline': 0,
      'vue/html-comment-content-spacing': [2, 'always'],
      // 'vue/html-comment-indent': 0,
      // 'vue/new-line-between-multi-line-property': 0,
      'vue/padding-line-between-blocks': [2, 'always'],
      // 'vue/padding-line-between-tags': 0,
      // 'vue/padding-lines-in-component-definition': 0,
      // 'vue/script-indent': 0,
      // 'vue/v-for-delimiter-style': 0,
    };
  }

  return rules;
};

const extension: GenFn = (vueVersion, style) => {
  let rules: Rules = {
    'vue/camelcase': jsRules['camelcase'],
    'vue/dot-notation': jsRules['dot-notation'],
    'vue/eqeqeq': jsRules['eqeqeq'],
    'vue/no-console': 2,
    'vue/no-constant-condition': jsRules['no-constant-condition'],
    'vue/no-empty-pattern': jsRules['no-empty-pattern'],
    // 'vue/no-implicit-coercion': jsRules['no-implicit-coercion'],
    'vue/no-irregular-whitespace': jsRules['no-irregular-whitespace'],
    'vue/no-loss-of-precision': jsRules['no-loss-of-precision'],
    'vue/no-negated-condition': jsRules['no-negated-condition'],
    'vue/no-restricted-syntax': jsRules['no-restricted-syntax'],
    'vue/no-sparse-arrays': jsRules['no-sparse-arrays'],
    'vue/no-useless-concat': jsRules['no-useless-concat'],
    'vue/object-shorthand': jsRules['object-shorthand'],
    'vue/prefer-template': jsRules['prefer-template'],
  };

  if (style) {
    rules = {
      ...rules,
      'vue/array-bracket-newline': 0,
      'vue/array-bracket-spacing': [2, 'never'],
      'vue/array-element-newline': 0,
      'vue/arrow-spacing': [2, { after: true, before: true }],
      'vue/block-spacing': [2, 'always'],
      'vue/brace-style': [2, '1tbs', { allowSingleLine: true }],
      // vue/camelcase
      'vue/comma-dangle': [2, 'always-multiline'],
      'vue/comma-spacing': [2, { after: true, before: false }],
      'vue/comma-style': [2, 'last'],
      'vue/dot-location': [2, 'property'],
      // vue/dot-notation
      // vue/eqeqeq
      'vue/func-call-spacing': [2, 'never'],
      'vue/key-spacing': [2, { afterColon: true, beforeColon: false }],
      'vue/keyword-spacing': [2, { after: true, before: true }],
      'vue/max-len': 0,
      'vue/multiline-ternary': [2, 'always-multiline'],
      // vue/no-console
      // vue/no-constant-condition
      // vue/no-empty-pattern
      'vue/no-extra-parens': [2, 'functions'],
      // vue/no-implicit-coercion
      // vue/no-irregular-whitespace
      // vue/no-loss-of-precision
      // vue/no-negated-condition
      // vue/no-restricted-syntax
      // vue/no-sparse-arrays
      // vue/no-useless-concat
      'vue/object-curly-newline': 0,
      'vue/object-curly-spacing': [2, 'always'],
      'vue/object-property-newline': 0,
      // vue/object-shorthand
      'vue/operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before', '&&': 'ignore', '||': 'ignore' } }],
      // vue/prefer-template
      'vue/quote-props': 0,
      'vue/space-in-parens': [2, 'never'],
      'vue/space-infix-ops': 2,
      'vue/space-unary-ops': [2, { nonwords: false, words: true }],
      'vue/template-curly-spacing': 2,
    };
  }

  return rules;
};

/**
 * @see https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/
 */
const vueA11y = () => {
  let rules: Rules = {
    'vue-a11y/alt-text': 2,
    'vue-a11y/anchor-has-content': 2,
    'vue-a11y/aria-props': 2,
    'vue-a11y/aria-role': 2,
    'vue-a11y/aria-unsupported-elements': 2,
    // 'vue-a11y/click-events-have-key-events': 0,
    'vue-a11y/form-control-has-label': 2,
    'vue-a11y/heading-has-content': 2,
    // 'vue-a11y/iframe-has-title': 0,
    'vue-a11y/interactive-supports-focus': 2,
    'vue-a11y/label-has-for': 2,
    'vue-a11y/media-has-caption': 1,
    // 'vue-a11y/mouse-events-have-key-events': 0,
    'vue-a11y/no-access-key': 2,
    'vue-a11y/no-aria-hidden-on-focusable': 2,
    'vue-a11y/no-autofocus': [2, { ignoreNonDOM: true }],
    'vue-a11y/no-distracting-elements': 2,
    'vue-a11y/no-redundant-roles': 2,
    'vue-a11y/no-role-presentation-on-focusable': 2,
    'vue-a11y/no-static-element-interactions': 2,
    'vue-a11y/role-has-required-aria-props': 2,
    'vue-a11y/tabindex-no-positive': 1,
  };
  return rules;
};

/**
 * @see https://eslint.vuejs.org/rules/
 */
export default function genRules(opts: OptionsVue) {
  const {
    version = 3,
    a11y = true,
    style,
    ts,
  } = opts;

  let rules: Rules = {
    'vue/comment-directive': 2,
    'vue/jsx-uses-vars': 2,
    ...essential(version, style, ts),
    ...recommended(version, style, ts),
    ...strongly_recommended(version, style, ts),
    ...uncategorized(version, style, ts),
    ...extension(version, style, ts),
  };

  if (a11y) {
    rules = {
      ...rules,
      ...vueA11y(),
    };
  }

  return rules;
}
