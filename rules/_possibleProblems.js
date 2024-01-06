/**
 * @type { import('eslint-define-config').Rules }
 */
module.exports = {
  'array-callback-return': [2, { allowImplicit: false, checkForEach: false }],
  'constructor-super': 2, // ts(2335) & ts(2377)
  'for-direction': 2,
  'getter-return': 2, // ts(2378)
  'no-async-promise-executor': 2,
  'no-await-in-loop': 2,
  'no-class-assign': 2,
  'no-compare-neg-zero': 2,
  'no-cond-assign': 2,
  'no-const-assign': 2, // ts(2588)
  'no-constant-binary-expression': 0,
  'no-constant-condition': [2, { checkLoops: false }],
  'no-constructor-return': 2,
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-dupe-args': 2, // ts(2300)
  'no-dupe-class-members': 2, // ts(2393) & ts(2300)
  'no-dupe-else-if': 2,
  'no-dupe-keys': 2, // ts(1117)
  'no-duplicate-case': 2,
  'no-duplicate-imports': 1,
  'no-empty-character-class': 2,
  'no-ex-assign': 2,
  'no-fallthrough': 2,
  'no-func-assign': 2, // ts(2630)
  'no-import-assign': 2, // ts(2632) & ts(2540)
  'no-inner-declarations': 1,
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-loss-of-precision': 2,
  'no-misleading-character-class': 2,
  'no-new-native-nonconstructor': 2,
  'no-new-symbol': 0, // no-new-wrappers ts(7009)
  'no-obj-calls': 2, // ts(2349)
  'no-promise-executor-return': 1,
  'no-prototype-builtins': 2,
  'no-self-assign': [2, { props: true }],
  'no-self-compare': 2,
  'no-setter-return': 2, // ts(2408)
  'no-sparse-arrays': 2,
  'no-template-curly-in-string': 2,
  'no-this-before-super': 2, // ts(2376) & ts(17009)
  'no-undef': 2, // ts(2304) & ts(2552)
  'no-unexpected-multiline': 2,
  'no-unmodified-loop-condition': 2,
  'no-unreachable': 2, // ts(7027)
  'no-unreachable-loop': 2,
  'no-unsafe-finally': 2,
  'no-unsafe-negation': 2, // ts(2365) & ts(2322) & ts(2358)
  'no-unsafe-optional-chaining': 2,
  'no-unused-private-class-members': 0,
  'no-unused-vars': [2, { vars: 'all', args: 'none', caughtErrors: 'none', ignoreRestSiblings: true }],
  'no-use-before-define': [2, { functions: false, classes: true, variables: true, allowNamedExports: false }],
  'no-useless-backreference': 2,
  'require-atomic-updates': [1, { allowProperties: true }],
  'use-isnan': 2,
  'valid-typeof': [2, { requireStringLiterals: true }],
};
