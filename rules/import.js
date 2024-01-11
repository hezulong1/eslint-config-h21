/**
 * @version 2.29.1
 */
module.exports = {
  // Override
  'import/no-unresolved': 0,
  'import/named': 0,
  // Customize
  'import/consistent-type-specifier-style': 0, // use `@typescript-eslint/consistent-type-imports` instead
  'import/first': 2,
  'import/newline-after-import': [2, { count: 1, considerComments: true }],
  'import/no-mutable-exports': 0, // according to project
  'import/no-self-import': 2,
  'import/order': 0, // according to project
};
