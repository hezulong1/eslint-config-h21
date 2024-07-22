/**
 * @version 3.0.1
 */
module.export = {
  // 'import/no-unresolved': 2,
  // 'import/named': 2,
  'import/namespace': 2,
  'import/default': 2,
  'import/export': 2,
  'import/no-named-as-default': 1,
  'import/no-named-as-default-member': 1,
  'import/no-duplicates': 1,
  // Override
  'import/no-unresolved': 0,
  'import/named': 0,
  // Customize
  'import/consistent-type-specifier-style': 0, // use `@typescript-eslint/consistent-type-imports` instead
  'import/first': 2,
  'import/newline-after-import': [2, { count: 1, considerComments: false }],
  'import/no-mutable-exports': 0, // according to project
  'import/no-self-import': 2,
  'import/order': 0, // according to project
};
