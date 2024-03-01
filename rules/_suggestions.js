/**
 * @type { import('eslint-define-config').Rules }
 */
module.exports = {
  'accessor-pairs': [2, { setWithoutGet: true, enforceForClassMembers: true }],
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
  'dot-notation': [2, { allowKeywords: false }],
  'eqeqeq': [2, 'always', { null: 'ignore' }],
  'func-name-matching': 0,
  'func-names': 0,
  'func-style': 0,
  'grouped-accessor-pairs': [1, 'setBeforeGet'],
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
  'multiline-comment-style': 0,
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
  // 'no-empty-function': [2, { allow: ['constructors', 'methods', 'asyncMethods', 'setters'] }],
  'no-empty-static-block': 0,
  'no-eq-null': 0,
  'no-eval': 2,
  'no-extend-native': 0,
  'no-extra-bind': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-label': 1,
  'no-global-assign': 2,
  'no-implicit-coercion': 1,
  'no-implicit-globals': 2,
  'no-implied-eval': 2,
  'no-inline-comments': 0,
  'no-invalid-this': 2,
  'no-iterator': 2,
  'no-label-var': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-lonely-if': 1,
  'no-loop-func': 2,
  'no-magic-numbers': 0,
  'no-multi-assign': 2,
  'no-multi-str': 2,
  'no-negated-condition': 0,
  'no-nested-ternary': 0,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  // 'no-nonoctal-decimal-escape': 2,
  'no-object-constructor': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 0,
  'no-plusplus': 0,
  'no-proto': 2,
  'no-redeclare': [2, { builtinGlobals: false }], // ts(2451)
  'no-regex-spaces': 2,
  'no-restricted-exports': 0, // REDEFINE
  'no-restricted-globals': 0, // REDEFINE
  'no-restricted-imports': 0, // REDEFINE
  'no-restricted-properties': 0, // REDEFINE
  'no-restricted-syntax': [2, 'WithStatement', 'LabeledStatement', 'DebuggerStatement'], // REDEFINE
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
  // 'one-var': [2, { const: 'never', initialized: 'consecutive', uninitialized: 'consecutive' }],
  'operator-assignment': 0,
  'prefer-arrow-callback': 0,
  'prefer-const': 0, // ts provides better types with const
  'prefer-destructuring': 0,
  'prefer-exponentiation-operator': 0,
  'prefer-named-capture-group': 0,
  'prefer-numeric-literals': 0,
  'prefer-object-has-own': 0,
  'prefer-object-spread': 0,
  'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
  'prefer-regex-literals': [2, { disallowRedundantWrapping: true }],
  'prefer-rest-params': 2, // ts provides better types with rest args over arguments
  'prefer-spread': 0, // ts transpiles spread to apply, so no need for manual apply
  'prefer-template': 0,
  'radix': [2, 'as-needed'],
  'require-await': 0,
  'require-unicode-regexp': 0,
  'require-yield': 0,
  'sort-imports': 0,
  'sort-keys': 0,
  'sort-vars': 0,
  'strict': [2, 'global'],
  'symbol-description': 2,
  'vars-on-top': 2,
  'yoda': 0,
};
