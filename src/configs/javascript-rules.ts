import type { Rules } from '../types';

/**
 * JavaScript's Rules (Basic)
 *
 * {@link https://eslint.org/docs/latest/rules}
 */
export default {
  //#region Possible Problems
  'array-callback-return': [2, { allowImplicit: false, checkForEach: false }],
  'constructor-super': 2, // ts(2335) & ts(2377)
  'for-direction': 2,
  'getter-return': 2, // ts(2378)
  'no-async-promise-executor': 2,
  'no-await-in-loop': 0,
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
  'no-duplicate-imports': 0, // use `import/no-duplicates` instead
  'no-empty-character-class': 2,
  'no-empty-pattern': 2,
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
  // 'no-new-symbol': 0, // ts(7009) use `no-new-wrappers` instead
  'no-obj-calls': 2, // ts(2349)
  'no-promise-executor-return': 1,
  'no-prototype-builtins': 2,
  'no-self-assign': [2, { props: true }],
  'no-self-compare': 2,
  'no-setter-return': 2, // ts(2408)
  'no-sparse-arrays': 2,
  'no-template-curly-in-string': 2,
  'no-this-before-super': 2, // ts(2376) & ts(17009)
  'no-unassigned-vars': 1,
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
  'no-useless-assignment': 2,
  'no-useless-backreference': 2,
  'require-atomic-updates': [1, { allowProperties: true }],
  'use-isnan': 2,
  'valid-typeof': [2, { requireStringLiterals: true }],
  //#endregion

  //#region Suggestions
  'accessor-pairs': 0, // [2, { setWithoutGet: true, enforceForClassMembers: true }],
  'arrow-body-style': [2, 'as-needed'],
  'block-scoped-var': 2,
  'camelcase': 0,
  'capitalized-comments': 0,
  'class-methods-use-this': 0,
  'complexity': 0,
  'consistent-return': 0,
  'consistent-this': 0,
  'curly': 0,
  'default-case': 0,
  'default-case-last': 2,
  'default-param-last': 0,
  'dot-notation': 0, // [2, { allowKeywords: false }],
  'eqeqeq': [2, 'always', { null: 'ignore' }],
  'func-name-matching': 0,
  'func-names': 0,
  'func-style': 0,
  'grouped-accessor-pairs': 1, // [1, 'setBeforeGet'],
  'guard-for-in': 2,
  'id-denylist': 0,
  'id-length': 0,
  'id-match': 0,
  'init-declarations': 0,
  'logical-assignment-operators': 0,
  'max-classes-per-file': 0,
  'max-depth': 0,
  'max-lines': 0,
  'max-lines-per-function': 0,
  'max-nested-callbacks': 0,
  'max-params': 0,
  'max-statements': 0,
  // 'multiline-comment-style': 0,
  'new-cap': [2, { newIsCap: true, capIsNew: false, properties: true }],
  'no-alert': 2,
  'no-array-constructor': 2,
  'no-bitwise': 0,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-console': [2, { allow: ['error', 'warn'] }],
  'no-continue': 0,
  'no-delete-var': 2,
  'no-div-regex': 0,
  'no-else-return': 0,
  'no-empty': [2, { allowEmptyCatch: true }],
  'no-empty-function': 0, // [2, { allow: ['constructors', 'methods', 'asyncMethods', 'setters'] }],
  'no-empty-static-block': 0,
  'no-eq-null': 0,
  'no-eval': 2,
  'no-extend-native': 0,
  'no-extra-bind': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-label': 1,
  'no-global-assign': 2,
  'no-implicit-coercion': [1, { boolean: false }],
  'no-implicit-globals': 2,
  'no-implied-eval': 2,
  'no-inline-comments': 0,
  'no-invalid-this': 0,
  'no-iterator': 2,
  'no-label-var': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-lonely-if': 0,
  'no-loop-func': 2,
  'no-magic-numbers': 0,
  'no-multi-assign': 0,
  'no-multi-str': 2,
  'no-negated-condition': 0,
  'no-nested-ternary': 0,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-nonoctal-decimal-escape': 0,
  'no-object-constructor': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 0,
  'no-plusplus': 0,
  'no-proto': 2,
  'no-redeclare': [2, { builtinGlobals: false }], // ts(2451)
  'no-regex-spaces': 2,
  'no-restricted-exports': 0, // Override
  'no-restricted-globals': 0, // Override
  'no-restricted-imports': 0, // Override
  'no-restricted-properties': 0, // Override
  'no-restricted-syntax': [2, 'WithStatement', 'LabeledStatement', 'DebuggerStatement'], // Override
  'no-return-assign': [2, 'except-parens'],
  'no-script-url': 1,
  'no-sequences': 2,
  'no-shadow': 0,
  'no-shadow-restricted-names': 2,
  'no-ternary': 0,
  'no-throw-literal': 2,
  'no-undef-init': 2,
  'no-undefined': 0,
  'no-underscore-dangle': 0,
  'no-unneeded-ternary': [2, { defaultAssignment: true }],
  'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
  'no-unused-labels': 2,
  'no-useless-call': 2,
  'no-useless-catch': 2,
  'no-useless-computed-key': 0,
  'no-useless-concat': 0,
  'no-useless-constructor': 0,
  'no-useless-escape': 2,
  'no-useless-rename': 2,
  'no-useless-return': 2,
  'no-var': 2, // ts transpiles let/const to var, so no need for vars any more
  'no-void': 0,
  'no-warning-comments': 0,
  'no-with': 2,
  'object-shorthand': [1, 'properties'],
  'one-var': 0, // [2, { const: 'never', initialized: 'consecutive', uninitialized: 'consecutive' }],
  'operator-assignment': 0,
  'prefer-arrow-callback': 0,
  'prefer-const': 0, // ts provides better types with const
  'prefer-destructuring': 0,
  'prefer-exponentiation-operator': 0,
  'prefer-named-capture-group': 0,
  'prefer-numeric-literals': 0,
  'prefer-object-has-own': 0,
  'prefer-object-spread': 0,
  'prefer-promise-reject-errors': 0, // [2, { allowEmptyReject: true }],
  'prefer-regex-literals': [2, { disallowRedundantWrapping: true }],
  'prefer-rest-params': 2, // ts provides better types with rest args over arguments
  'prefer-spread': 0, // ts transpiles spread to apply, so no need for manual apply
  'prefer-template': 0,
  'preserve-caught-error': 0,
  'radix': 0, // [2, 'as-needed'],
  'require-await': 0,
  'require-unicode-regexp': 0,
  'require-yield': 0,
  'sort-imports': 0,
  'sort-keys': 0,
  'sort-vars': 0,
  'strict': [2, 'global'],
  'symbol-description': 0,
  'vars-on-top': 0,
  'yoda': 0,
  //#endregion

  //#region Layout & Formatting
  // 'line-comment-position': 0,
  'unicode-bom': [2, 'never'],
  //#endregion
} as const satisfies Rules;
