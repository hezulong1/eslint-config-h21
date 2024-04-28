// AUTO GENERATED, DON'T EDIT!!!
// 2024-04-28 09:26:03

module.exports = {
  env: { browser: true, es2021: true, node: true },
  parserOptions: { sourceType: 'module', ecmaVersion: 2022, ecmaFeatures: { jsx: true } },
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    '*.min.*',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    'dist',
    'lib',
    'output',
    'out',
    'coverage',
    'temp',
    'public',
    '__snapshots__',
    'CHANGELOG.md',
    'LICENSE*',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    '!.vscode',
  ],
  plugins: ['@stylistic', 'unicorn', 'vue'],
  extends: ['plugin:import/recommended'],
  settings: { 'import/resolver': { node: { extensions: ['.js', '.cjs', '.mjs', '.jsx'] } } },
  rules: {
    'array-callback-return': [2, { allowImplicit: false, checkForEach: false }],
    'constructor-super': 2,
    'for-direction': 2,
    'getter-return': 2,
    'no-async-promise-executor': 2,
    'no-class-assign': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-constant-condition': [2, { checkLoops: false }],
    'no-constructor-return': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-else-if': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-ex-assign': 2,
    'no-fallthrough': 2,
    'no-func-assign': 2,
    'no-import-assign': 2,
    'no-inner-declarations': 1,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-loss-of-precision': 2,
    'no-misleading-character-class': 2,
    'no-new-native-nonconstructor': 2,
    'no-obj-calls': 2,
    'no-promise-executor-return': 1,
    'no-prototype-builtins': 2,
    'no-self-assign': [2, { props: true }],
    'no-self-compare': 2,
    'no-setter-return': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-this-before-super': 2,
    'no-undef': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unreachable': 2,
    'no-unreachable-loop': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unsafe-optional-chaining': 2,
    'no-unused-vars': [2, { vars: 'all', args: 'none', caughtErrors: 'none', ignoreRestSiblings: true }],
    'no-use-before-define': [2, { functions: false, classes: true, variables: true, allowNamedExports: false }],
    'no-useless-backreference': 2,
    'require-atomic-updates': [1, { allowProperties: true }],
    'use-isnan': 2,
    'valid-typeof': [2, { requireStringLiterals: true }],
    'arrow-body-style': [2, 'as-needed'],
    'block-scoped-var': 2,
    'default-case-last': 2,
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'grouped-accessor-pairs': 1,
    'guard-for-in': 2,
    'new-cap': [2, { newIsCap: true, capIsNew: false, properties: true }],
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-console': [2, { allow: ['error', 'warn'] }],
    'no-delete-var': 2,
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-eval': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-label': 1,
    'no-global-assign': 2,
    'no-implicit-coercion': 1,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-object-constructor': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-redeclare': [2, { builtinGlobals: false }],
    'no-regex-spaces': 2,
    'no-restricted-syntax': [2, 'WithStatement', 'LabeledStatement', 'DebuggerStatement'],
    'no-return-assign': [2, 'except-parens'],
    'no-script-url': 1,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-throw-literal': 2,
    'no-undef-init': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: true }],
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-catch': 2,
    'no-useless-escape': 2,
    'no-useless-rename': 2,
    'no-useless-return': 2,
    'no-var': 2,
    'no-with': 2,
    'object-shorthand': [1, 'properties'],
    'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
    'prefer-regex-literals': [2, { disallowRedundantWrapping: true }],
    'prefer-rest-params': 2,
    radix: [2, 'as-needed'],
    strict: [2, 'global'],
    'symbol-description': 2,
    'unicode-bom': [2, 'never'],
    'array-bracket-newline': 0,
    'array-bracket-spacing': 0,
    'array-element-newline': 0,
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'block-spacing': 0,
    'brace-style': 0,
    'comma-dangle': 0,
    'comma-spacing': 0,
    'comma-style': 0,
    'computed-property-spacing': 0,
    'dot-location': 0,
    'eol-last': 0,
    'func-call-spacing': 0,
    'function-call-argument-newline': 0,
    'function-paren-newline': 0,
    'generator-star-spacing': 0,
    'implicit-arrow-linebreak': 0,
    indent: 0,
    'jsx-quotes': 0,
    'key-spacing': 0,
    'keyword-spacing': 0,
    'linebreak-style': 0,
    'lines-around-comment': 0,
    'lines-between-class-members': 0,
    'max-len': 0,
    'max-statements-per-line': 0,
    'multiline-ternary': 0,
    'new-parens': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-extra-parens': 0,
    'no-extra-semi': 0,
    'no-floating-decimal': 0,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-multi-spaces': 0,
    'no-multiple-empty-lines': 0,
    'no-tabs': 0,
    'no-trailing-spaces': 0,
    'no-whitespace-before-property': 0,
    'nonblock-statement-body-position': 0,
    'object-curly-newline': 0,
    'object-curly-spacing': 0,
    'object-property-newline': 0,
    'one-var-declaration-per-line': 0,
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'padding-line-between-statements': 0,
    'quote-props': 0,
    quotes: 0,
    'rest-spread-spacing': 0,
    semi: 0,
    'semi-spacing': 0,
    'semi-style': 0,
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    'space-in-parens': 0,
    'space-infix-ops': 0,
    'space-unary-ops': 0,
    'spaced-comment': 0,
    'switch-colon-spacing': 0,
    'template-curly-spacing': 0,
    'template-tag-spacing': 0,
    'wrap-iife': 0,
    'wrap-regex': 0,
    'yield-star-spacing': 0,
    '@typescript-eslint/block-spacing': 0,
    '@typescript-eslint/brace-style': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/comma-spacing': 0,
    '@typescript-eslint/func-call-spacing': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/key-spacing': 0,
    '@typescript-eslint/keyword-spacing': 0,
    '@typescript-eslint/lines-around-comment': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-extra-parens': 0,
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/object-curly-spacing': 0,
    '@typescript-eslint/padding-line-between-statements': 0,
    '@typescript-eslint/quotes': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/space-before-blocks': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/space-infix-ops': 0,
    '@typescript-eslint/type-annotation-spacing': 0,
    'react/jsx-child-element-spacing': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-curly-spacing': 0,
    'react/jsx-equals-spacing': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-multi-spaces': 0,
    'react/jsx-self-closing-comp': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-wrap-multilines': 0,
    'id-blacklist': 0,
    'lines-around-directive': 0,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'no-catch-shadow': 0,
    'no-native-reassign': 0,
    'no-negated-in-lhs': 0,
    'no-new-object': 0,
    'no-spaced-func': 0,
    '@stylistic/array-bracket-spacing': [2, 'never'],
    '@stylistic/arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    '@stylistic/arrow-spacing': [2, { after: true, before: true }],
    '@stylistic/block-spacing': [2, 'always'],
    '@stylistic/brace-style': [2, '1tbs', { allowSingleLine: true }],
    '@stylistic/comma-dangle': [2, 'always-multiline'],
    '@stylistic/comma-spacing': [2, { after: true, before: false }],
    '@stylistic/comma-style': [2, 'last'],
    '@stylistic/computed-property-spacing': [2, 'never', { enforceForClassMembers: true }],
    '@stylistic/dot-location': [2, 'property'],
    '@stylistic/eol-last': 2,
    '@stylistic/func-call-spacing': [2, 'never'],
    '@stylistic/function-call-spacing': [2, 'never'],
    '@stylistic/generator-star-spacing': [2, { before: false, after: true, method: { before: true, after: false } }],
    '@stylistic/indent': [
      2,
      2,
      {
        ArrayExpression: 1,
        CallExpression: { arguments: 1 },
        flatTernaryExpressions: false,
        FunctionDeclaration: { body: 1, parameters: 1 },
        FunctionExpression: { body: 1, parameters: 1 },
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
          'TSUnionType',
          'TSIntersectionType',
          'TSTypeParameterInstantiation',
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        offsetTernaryExpressions: true,
        outerIIFEBody: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
      },
    ],
    '@stylistic/key-spacing': [2, { afterColon: true, beforeColon: false }],
    '@stylistic/keyword-spacing': [2, { after: true, before: true }],
    '@stylistic/max-statements-per-line': [2, { max: 1 }],
    '@stylistic/member-delimiter-style': [
      2,
      {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
        multilineDetection: 'brackets',
      },
    ],
    '@stylistic/multiline-ternary': [2, 'always-multiline'],
    '@stylistic/new-parens': 2,
    '@stylistic/no-extra-parens': [2, 'functions'],
    '@stylistic/no-extra-semi': 2,
    '@stylistic/no-mixed-operators': [
      2,
      {
        allowSamePrecedence: true,
        groups: [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
      },
    ],
    '@stylistic/no-mixed-spaces-and-tabs': 2,
    '@stylistic/no-multi-spaces': 2,
    '@stylistic/no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
    '@stylistic/no-tabs': 2,
    '@stylistic/no-trailing-spaces': 2,
    '@stylistic/no-whitespace-before-property': 2,
    '@stylistic/nonblock-statement-body-position': 2,
    '@stylistic/object-curly-spacing': [2, 'always'],
    '@stylistic/object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
    '@stylistic/operator-linebreak': [
      2,
      'after',
      { overrides: { '?': 'before', ':': 'before', '&&': 'ignore', '||': 'ignore' } },
    ],
    '@stylistic/padded-blocks': [2, { blocks: 'never', classes: 'never', switches: 'never' }],
    '@stylistic/quotes': [2, 'single', { allowTemplateLiterals: true, avoidEscape: false }],
    '@stylistic/rest-spread-spacing': [2, 'never'],
    '@stylistic/semi': [2, 'always'],
    '@stylistic/semi-spacing': [2, { after: true, before: false }],
    '@stylistic/semi-style': [2, 'last'],
    '@stylistic/space-before-blocks': [2, 'always'],
    '@stylistic/space-before-function-paren': [2, { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
    '@stylistic/space-in-parens': [2, 'never'],
    '@stylistic/space-infix-ops': 2,
    '@stylistic/space-unary-ops': [2, { nonwords: false, words: true }],
    '@stylistic/spaced-comment': [
      2,
      'always',
      {
        block: { balanced: true, exceptions: ['#__PURE__', '@__PURE__'], markers: ['!'] },
        line: { exceptions: ['/', '-'], markers: ['/', '#region', '#endregion'] },
      },
    ],
    '@stylistic/switch-colon-spacing': [2, { after: true, before: false }],
    '@stylistic/template-curly-spacing': 2,
    '@stylistic/template-tag-spacing': [2, 'never'],
    '@stylistic/type-annotation-spacing': [2, {}],
    '@stylistic/type-generic-spacing': 2,
    '@stylistic/type-named-tuple-spacing': 2,
    '@stylistic/wrap-iife': [2, 'any', { functionPrototypeMethods: true }],
    '@stylistic/yield-star-spacing': [2, 'after'],
    '@stylistic/jsx-closing-bracket-location': 2,
    '@stylistic/jsx-closing-tag-location': 2,
    '@stylistic/jsx-curly-brace-presence': [2, { propElementValues: 'always' }],
    '@stylistic/jsx-curly-newline': 2,
    '@stylistic/jsx-curly-spacing': [2, 'never'],
    '@stylistic/jsx-equals-spacing': 2,
    '@stylistic/jsx-first-prop-new-line': 2,
    '@stylistic/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    '@stylistic/jsx-indent-props': [2, 2],
    '@stylistic/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    '@stylistic/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
    '@stylistic/jsx-pascal-case': 2,
    '@stylistic/jsx-props-no-multi-spaces': 2,
    '@stylistic/jsx-quotes': 2,
    '@stylistic/jsx-self-closing-comp': [2, { component: true, html: true }],
    '@stylistic/jsx-tag-spacing': [
      2,
      { afterOpening: 'never', beforeClosing: 'never', beforeSelfClosing: 'always', closingSlash: 'never' },
    ],
    '@stylistic/jsx-wrap-multilines': [
      2,
      {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        return: 'parens-new-line',
      },
    ],
    'unicorn/better-regex': 2,
    'unicorn/escape-case': 2,
    'unicorn/no-array-method-this-argument': 2,
    'unicorn/no-array-push-push': 2,
    'unicorn/no-await-expression-member': 2,
    'unicorn/no-console-spaces': 2,
    'unicorn/no-for-loop': 2,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-instanceof-array': 2,
    'unicorn/no-invalid-remove-event-listener': 2,
    'unicorn/no-lonely-if': 2,
    'unicorn/no-new-array': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-static-only-class': 2,
    'unicorn/no-thenable': 2,
    'unicorn/no-unnecessary-await': 2,
    'unicorn/no-useless-spread': 2,
    'unicorn/number-literal-case': 2,
    'unicorn/prefer-array-find': 2,
    'unicorn/prefer-array-flat-map': 2,
    'unicorn/prefer-array-index-of': 2,
    'unicorn/prefer-array-some': 2,
    'unicorn/prefer-default-parameters': 2,
    'unicorn/prefer-dom-node-dataset': 2,
    'unicorn/prefer-dom-node-text-content': 2,
    'unicorn/prefer-negative-index': 2,
    'unicorn/prefer-number-properties': 2,
    'unicorn/prefer-prototype-methods': 2,
    'unicorn/prefer-query-selector': 2,
    'unicorn/prefer-set-has': 2,
    'unicorn/prefer-set-size': 2,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-string-starts-ends-with': 2,
    'unicorn/prefer-string-trim-start-end': 2,
    'unicorn/require-array-join-separator': 2,
    'unicorn/require-number-to-fixed-digits-argument': 2,
    'unicorn/text-encoding-identifier-case': 2,
    'unicorn/throw-new-error': 2,
    'import/no-unresolved': 0,
    'import/named': 0,
    'import/consistent-type-specifier-style': 0,
    'import/first': 2,
    'import/newline-after-import': [2, { count: 1, considerComments: false }],
    'import/no-mutable-exports': 0,
    'import/no-self-import': 2,
    'import/order': 0,
    'vue/comment-directive': 2,
    'vue/jsx-uses-vars': 2,
    'vue/no-arrow-functions-in-watch': 2,
    'vue/no-async-in-computed-properties': 2,
    'vue/no-child-content': 2,
    'vue/no-computed-properties-in-data': 2,
    'vue/no-dupe-keys': 2,
    'vue/no-dupe-v-else-if': 2,
    'vue/no-duplicate-attributes': [2, { allowCoexistClass: true, allowCoexistStyle: true }],
    'vue/no-export-in-script-setup': 2,
    'vue/no-mutating-props': [2, { shallowOnly: true }],
    'vue/no-parsing-error': 2,
    'vue/no-ref-as-operand': 2,
    'vue/no-reserved-component-names': [2, { disallowVueBuiltInComponents: true, disallowVue3BuiltInComponents: true }],
    'vue/no-reserved-keys': 2,
    'vue/no-reserved-props': [2, { vueVersion: 2 }],
    'vue/no-shared-component-data': 2,
    'vue/no-side-effects-in-computed-properties': 2,
    'vue/no-template-key': 2,
    'vue/no-textarea-mustache': 2,
    'vue/no-unused-components': 2,
    'vue/no-unused-vars': [2, { ignorePattern: '^_' }],
    'vue/no-use-computed-property-like-method': 2,
    'vue/no-use-v-if-with-v-for': 2,
    'vue/no-useless-template-attributes': 2,
    'vue/no-v-text-v-html-on-component': 2,
    'vue/require-component-is': 2,
    'vue/require-prop-type-constructor': 2,
    'vue/require-render-return': 2,
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
    'vue/valid-v-model': 2,
    'vue/valid-v-on': 2,
    'vue/valid-v-once': 2,
    'vue/valid-v-pre': 2,
    'vue/valid-v-show': 2,
    'vue/valid-v-slot': 2,
    'vue/valid-v-text': 2,
    'vue/no-custom-modifiers-on-v-model': 2,
    'vue/no-multiple-template-root': 2,
    'vue/no-v-for-template-key': 2,
    'vue/no-v-model-argument': 2,
    'vue/valid-model-definition': 2,
    'vue/valid-v-bind-sync': 2,
    'vue/attribute-hyphenation': [2, 'always'],
    'vue/component-definition-name-casing': [2, 'PascalCase'],
    'vue/first-attribute-linebreak': 1,
    'vue/html-closing-bracket-newline': 1,
    'vue/html-closing-bracket-spacing': 1,
    'vue/html-end-tags': 1,
    'vue/html-indent': [2, 2],
    'vue/html-quotes': [2, 'double', { avoidEscape: false }],
    'vue/html-self-closing': 1,
    'vue/max-attributes-per-line': [2, { singleline: 6, multiline: 1 }],
    'vue/multiline-html-element-content-newline': 2,
    'vue/mustache-interpolation-spacing': 2,
    'vue/no-multi-spaces': 2,
    'vue/no-spaces-around-equal-signs-in-attribute': 2,
    'vue/no-template-shadow': 2,
    'vue/prop-name-casing': 2,
    'vue/require-prop-types': 1,
    'vue/v-bind-style': 1,
    'vue/v-on-style': 1,
    'vue/v-slot-style': 1,
    'vue/attributes-order': 1,
    'vue/no-lone-template': 2,
    'vue/no-multiple-slot-args': 1,
    'vue/order-in-components': 1,
    'vue/this-in-template': [2, 'never'],
    'vue/block-order': [2, { order: [['script', 'template'], 'style'] }],
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/component-options-name-casing': [2, 'PascalCase'],
    'vue/custom-event-name-casing': [2, 'kebab-case'],
    'vue/html-button-has-type': [2, { button: true, submit: true, reset: true }],
    'vue/html-comment-content-spacing': [2, 'always'],
    'vue/no-this-in-before-route-enter': 1,
    'vue/no-use-v-else-with-v-for': 2,
    'vue/no-useless-mustaches': [2, { ignoreIncludesComment: true, ignoreStringEscape: true }],
    'vue/no-useless-v-bind': [2, { ignoreIncludesComment: true, ignoreStringEscape: true }],
    'vue/padding-line-between-blocks': [2, 'always'],
    'vue/prefer-true-attribute-shorthand': 2,
    'vue/require-macro-variable-name': 1,
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: { extraFileExtensions: ['.vue'], ecmaVersion: 2022 },
      rules: {
        'vue/array-bracket-newline': 0,
        'vue/array-bracket-spacing': [2, 'never'],
        'vue/array-element-newline': 0,
        'vue/arrow-spacing': [2, { after: true, before: true }],
        'vue/block-spacing': [2, 'always'],
        'vue/brace-style': [2, '1tbs', { allowSingleLine: true }],
        'vue/camelcase': 0,
        'vue/comma-dangle': [2, 'always-multiline'],
        'vue/comma-spacing': [2, { after: true, before: false }],
        'vue/comma-style': [2, 'last'],
        'vue/dot-location': [2, 'property'],
        'vue/dot-notation': 0,
        'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
        'vue/func-call-spacing': [2, 'never'],
        'vue/key-spacing': [2, { afterColon: true, beforeColon: false }],
        'vue/keyword-spacing': [2, { after: true, before: true }],
        'vue/max-len': 0,
        'vue/multiline-ternary': [2, 'always-multiline'],
        'vue/no-console': 2,
        'vue/no-constant-condition': [2, { checkLoops: false }],
        'vue/no-empty-pattern': 2,
        'vue/no-extra-parens': [2, 'functions'],
        'vue/no-irregular-whitespace': 2,
        'vue/no-loss-of-precision': 2,
        'vue/no-restricted-syntax': [2, 'WithStatement', 'LabeledStatement', 'DebuggerStatement'],
        'vue/no-sparse-arrays': 2,
        'vue/no-useless-concat': 0,
        'vue/object-curly-newline': 0,
        'vue/object-curly-spacing': [2, 'always'],
        'vue/object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
        'vue/object-shorthand': [1, 'properties'],
        'vue/operator-linebreak': [
          2,
          'after',
          { overrides: { '?': 'before', ':': 'before', '&&': 'ignore', '||': 'ignore' } },
        ],
        'vue/prefer-template': 0,
        'vue/quote-props': 0,
        'vue/space-in-parens': [2, 'never'],
        'vue/space-infix-ops': 2,
        'vue/space-unary-ops': [2, { nonwords: false, words: true }],
        'vue/template-curly-spacing': 2,
      },
    },
    { files: ['scripts/**/*'], rules: { 'no-console': 0 } },
  ],
};
