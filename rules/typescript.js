const possibleProblems = require('./_possibleProblems');
const suggestions = require('./_suggestions');

/**
 * @version 6.21.0
 * @see https://typescript-eslint.io/rules/?=recommended
 */
module.exports = {
  '@typescript-eslint/ban-ts-comment': 0,
  '@typescript-eslint/ban-types': 2,
  '@typescript-eslint/class-literal-property-style': 0, // REDEFINE
  '@typescript-eslint/consistent-indexed-object-style': 0, // REDEFINE
  '@typescript-eslint/consistent-type-assertions': 0, // REDEFINE
  '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
  '@typescript-eslint/consistent-type-imports': [2, { prefer: 'type-imports', disallowTypeAnnotations: false }],
  '@typescript-eslint/default-param-last': 0, // REDEFINE
  '@typescript-eslint/explicit-function-return-type': 0, // REDEFINE
  '@typescript-eslint/explicit-member-accessibility': 0, // REDEFINE
  '@typescript-eslint/explicit-module-boundary-types': 0, // REDEFINE
  'no-array-constructor': 0,
  '@typescript-eslint/no-array-constructor': suggestions['no-array-constructor'],
  '@typescript-eslint/no-duplicate-enum-values': 2,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-extra-non-null-assertion': 2,
  'no-loss-of-precision': 0,
  '@typescript-eslint/no-loss-of-precision': possibleProblems['no-loss-of-precision'],
  '@typescript-eslint/no-misused-new': 2,
  '@typescript-eslint/no-namespace': 0,
  '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
  '@typescript-eslint/no-require-imports': 2,
  'no-shadow': 0,
  '@typescript-eslint/no-shadow': suggestions['no-shadow'],
  '@typescript-eslint/no-this-alias': 0,
  '@typescript-eslint/no-unnecessary-type-constraint': 2,
  '@typescript-eslint/no-unsafe-declaration-merging': 2,
  'no-unused-vars': 0,
  '@typescript-eslint/no-unused-vars': possibleProblems['no-unused-vars'],
  'no-use-before-define': 0,
  '@typescript-eslint/no-use-before-define': [2, { ...possibleProblems['no-use-before-define'][1], enums: true, typedefs: false, ignoreTypeReferences: false }],
  '@typescript-eslint/no-var-requires': 2,
  '@typescript-eslint/prefer-as-const': 2,
};
