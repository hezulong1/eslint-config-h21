const possibleProblems = require('./_possibleProblems');
const suggestions = require('./_suggestions');

/**
 * @version 9.24.0
 * @see https://eslint.vuejs.org/rules/#extension-rules
 */
module.exports = {
  'vue/array-bracket-newline': 0,
  'vue/array-bracket-spacing': [2, 'never'],
  'vue/array-element-newline': 0,
  'vue/arrow-spacing': [2, { after: true, before: true }],
  'vue/block-spacing': [2, 'always'],
  'vue/brace-style': [2, '1tbs', { allowSingleLine: true }],
  'vue/camelcase': suggestions.camelcase,
  'vue/comma-dangle': [2, 'always-multiline'],
  'vue/comma-spacing': [2, { after: true, before: false }],
  'vue/comma-style': [2, 'last'],
  'vue/dot-location': [2, 'property'],
  'vue/dot-notation': suggestions['dot-notation'],
  'vue/eqeqeq': suggestions.eqeqeq,
  'vue/func-call-spacing': [2, 'never'],
  'vue/key-spacing': [2, { afterColon: true, beforeColon: false }],
  'vue/keyword-spacing': [2, { after: true, before: true }],
  'vue/max-len': 0,
  'vue/multiline-ternary': [2, 'always-multiline'],
  'vue/no-console': 2, // DIFF suggestions
  'vue/no-constant-condition': possibleProblems['no-constant-condition'],
  'vue/no-empty-pattern': possibleProblems['no-empty-pattern'],
  'vue/no-extra-parens': [2, 'functions'],
  'vue/no-irregular-whitespace': possibleProblems['no-irregular-whitespace'],
  'vue/no-loss-of-precision': possibleProblems['no-loss-of-precision'],
  'vue/no-restricted-syntax': suggestions['no-restricted-syntax'],
  'vue/no-sparse-arrays': possibleProblems['no-sparse-arrays'],
  'vue/no-useless-concat': suggestions['no-useless-concat'],
  'vue/object-curly-newline': 0,
  'vue/object-curly-spacing': [2, 'always'],
  'vue/object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
  'vue/object-shorthand': suggestions['object-shorthand'],
  'vue/operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before', '&&': 'ignore', '||': 'ignore' } }],
  'vue/prefer-template': suggestions['prefer-template'],
  'vue/quote-props': 0,
  'vue/space-in-parens': [2, 'never'],
  'vue/space-infix-ops': 2,
  'vue/space-unary-ops': [2, { nonwords: false, words: true }],
  'vue/template-curly-spacing': 2,
};
