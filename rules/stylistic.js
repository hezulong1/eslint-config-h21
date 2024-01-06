const config = require('../config');

/**
 * @version 1.5.3
 * @see https://eslint.style/packages/default#rules
 */
module.exports = {
  '@stylistic/array-bracket-newline': 0, // DIFF
  '@stylistic/array-bracket-spacing': [2, 'never'],
  '@stylistic/array-element-newline': 0, // DIFF
  '@stylistic/arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
  '@stylistic/arrow-spacing': [2, { after: true, before: true }],
  '@stylistic/block-spacing': [2, 'always'],
  '@stylistic/brace-style': [2, '1tbs', { allowSingleLine: true }], // DIFF
  '@stylistic/comma-dangle': [2, 'always-multiline'],
  '@stylistic/comma-spacing': [2, { after: true, before: false }],
  '@stylistic/comma-style': [2, 'last'],
  '@stylistic/computed-property-spacing': [2, 'never', { enforceForClassMembers: true }],
  '@stylistic/dot-location': [2, 'property'],
  '@stylistic/eol-last': 2,
  '@stylistic/func-call-spacing': [2, 'never'], // DIFF
  '@stylistic/function-call-argument-newline': 0, // DIFF
  '@stylistic/function-call-spacing': [2, 'never'], // DIFF
  '@stylistic/function-paren-newline': 0, // DIFF
  '@stylistic/generator-star-spacing': [2, { before: false, after: true, method: { before: true, after: false } }], // DIFF
  '@stylistic/implicit-arrow-linebreak': 0, // DIFF
  '@stylistic/indent': [2, config.indent, {
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
  }],
  '@stylistic/indent-binary-ops': [2, config.indent],
  '@stylistic/key-spacing': [2, { afterColon: true, beforeColon: false }],
  '@stylistic/keyword-spacing': [2, { after: true, before: true }],
  '@stylistic/linebreak-style': 0, // DIFF
  '@stylistic/lines-around-comment': 0, // DIFF
  '@stylistic/lines-between-class-members': 0, // DIFF
  '@stylistic/max-len': 0, // DIFF
  '@stylistic/max-statements-per-line': [2, { max: 1 }],
  '@stylistic/member-delimiter-style': [2, { // DIFF
    multiline: {
      delimiter: config.semi === true ? 'semi' : 'none',
      requireLast: config.semi === true,
    },
    singleline: {
      delimiter: config.semi === true ? 'semi' : 'none',
      requireLast: false,
    },
    multilineDetection: 'brackets',
  }],
  '@stylistic/multiline-ternary': [2, 'always-multiline'],
  '@stylistic/new-parens': 2,
  '@stylistic/newline-per-chained-call': 0, // DIFF
  '@stylistic/no-confusing-arrow': 0,
  '@stylistic/no-extra-parens': [2, 'functions'],
  '@stylistic/no-extra-semi': 2,
  '@stylistic/no-floating-decimal': 0, // DIFF
  '@stylistic/no-mixed-operators': [2, {
    allowSamePrecedence: true,
    groups: [
      ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
      ['&&', '||'],
      ['in', 'instanceof'],
    ],
  }],
  '@stylistic/no-mixed-spaces-and-tabs': 2,
  '@stylistic/no-multi-spaces': 2,
  '@stylistic/no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
  '@stylistic/no-tabs': config.indent === 'tab' ? 0 : 2,
  '@stylistic/no-trailing-spaces': 2,
  '@stylistic/no-whitespace-before-property': 2,
  '@stylistic/nonblock-statement-body-position': 2, // DIFF
  '@stylistic/object-curly-newline': 0, // DIFF // [2, { multiline: true, consistent: true }]
  '@stylistic/object-curly-spacing': [2, 'always'],
  '@stylistic/object-property-newline': [2, { allowMultiplePropertiesPerLine: true }], // DIFF
  '@stylistic/one-var-declaration-per-line': 0,
  '@stylistic/operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }], // DIFF
  '@stylistic/padded-blocks': [2, { blocks: 'never', classes: 'never', switches: 'never' }],
  '@stylistic/padding-line-between-statements': 0, // DIFF
  '@stylistic/quote-props': 0, // DIFF
  '@stylistic/quotes': [2, 'single', { allowTemplateLiterals: true, avoidEscape: false }],
  '@stylistic/rest-spread-spacing': [2, 'never'],
  '@stylistic/semi': [2, config.semi ? 'always' : 'never'],
  '@stylistic/semi-spacing': [2, { after: true, before: false }],
  '@stylistic/semi-style': config.semi ? [2, 'last'] : 0, // DIFF
  '@stylistic/space-before-blocks': [2, 'always'],
  '@stylistic/space-before-function-paren': [2, { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
  '@stylistic/space-in-parens': [2, 'never'],
  '@stylistic/space-infix-ops': 2,
  '@stylistic/space-unary-ops': [2, { nonwords: false, words: true }],
  '@stylistic/spaced-comment': [2, 'always', { // DIFF
    block: {
      balanced: true,
      exceptions: ['*'],
      markers: ['!', ',', ':', '::'],
    },
    line: {
      exceptions: ['/', '#'],
      markers: ['/', '+', '=', '-'],
    },
  }],
  '@stylistic/switch-colon-spacing': [2, { 'after': true, 'before': false }], // DIFF
  '@stylistic/template-curly-spacing': 2,
  '@stylistic/template-tag-spacing': [2, 'never'],
  '@stylistic/type-annotation-spacing': [2, {}],
  '@stylistic/type-generic-spacing': 2,
  '@stylistic/type-named-tuple-spacing': 2,
  '@stylistic/wrap-iife': [2, 'any', { functionPrototypeMethods: true }],
  '@stylistic/yield-star-spacing': [2, 'after'], // DIFF

  '@stylistic/jsx-closing-bracket-location': 2,
  '@stylistic/jsx-closing-tag-location': 2,
  '@stylistic/jsx-curly-brace-presence': [2, { propElementValues: 'always' }],
  '@stylistic/jsx-curly-newline': 2,
  '@stylistic/jsx-curly-spacing': [2, 'never'],
  '@stylistic/jsx-equals-spacing': 2,
  '@stylistic/jsx-first-prop-new-line': 2,
  '@stylistic/jsx-indent': [2, config.indent, { checkAttributes: true, indentLogicalExpressions: true }],
  '@stylistic/jsx-indent-props': [2, config.indent],
  '@stylistic/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
  '@stylistic/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
  '@stylistic/jsx-quotes': 2,
  '@stylistic/jsx-tag-spacing': [
    2,
    {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    },
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
};
