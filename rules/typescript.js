const possibleProblems = require('./_possibleProblems');
const suggestions = require('./_suggestions');

/**
 * @version 6.17.0
 * @see https://typescript-eslint.io/rules/?=recommended
 */
module.exports = {
  '@typescript-eslint/ban-ts-comment': 2,
  '@typescript-eslint/ban-types': 2,
  'no-array-constructor': 0,
  '@typescript-eslint/no-array-constructor': suggestions['no-array-constructor'],
  '@typescript-eslint/no-duplicate-enum-values': 2,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-extra-non-null-assertion': 2,
  'no-loss-of-precision': 0,
  '@typescript-eslint/no-loss-of-precision': possibleProblems['no-loss-of-precision'],
  '@typescript-eslint/no-misused-new': 2,
  '@typescript-eslint/no-namespace': 0,
  '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
  '@typescript-eslint/no-require-imports': 2,
  '@typescript-eslint/no-this-alias': 0,
  '@typescript-eslint/no-unnecessary-type-constraint': 2,
  '@typescript-eslint/no-unsafe-declaration-merging': 2,
  'no-unused-vars': 0,
  '@typescript-eslint/no-unused-vars': possibleProblems['no-unused-vars'],
  '@typescript-eslint/no-var-requires': 2,
  '@typescript-eslint/prefer-as-const': 2,
};
