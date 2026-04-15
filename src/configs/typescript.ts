import type { Config } from '../types';
import type { OptionsTs } from '../options';
import { plugin as pluginTs, parser as parserTs } from 'typescript-eslint';
import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX, GLOB_D_TS } from '../globs';
import jsRules from './javascript-rules';

export async function typescript(opts: OptionsTs = {}): Promise<Config[]> {
  const {
    overrides,
    jsx = false,
  } = opts;

  return [
    {
      name: 'h21/ts/rules',
      plugins: {
        '@typescript-eslint': pluginTs,
      },
      languageOptions: {
        parser: parserTs,
      },
      files: jsx ? [GLOB_TS, GLOB_TSX] : [GLOB_TS],
      rules: {
        //#region Overrides
        'constructor-super': 0, // ts(2335) & ts(2377)
        'getter-return': 0, // ts(2378)
        'no-const-assign': 0, // ts(2588)
        'no-dupe-args': 0, // ts(2300)
        'no-dupe-class-members': 0, // ts(2393) & ts(2300)
        'no-dupe-keys': 0, // ts(1117)
        'no-func-assign': 0, // ts(2630)
        'no-import-assign': 0, // ts(2632) & ts(2540)
        'no-new-native-nonconstructor': 0, // ts(7009)
        'no-new-symbol': 0, // ts(7009)
        'no-obj-calls': 0, // ts(2349)
        'no-redeclare': 0, // ts(2451)
        'no-setter-return': 0, // ts(2408)
        'no-this-before-super': 0, // ts(2376) & ts(17009)
        'no-undef': 0, // ts(2304) & ts(2552)
        'no-unreachable': 0, // ts(7027)
        'no-unsafe-negation': 0, // ts(2365) & ts(2322) & ts(2358)
        'no-var': jsRules['no-var'], // ts transpiles let/const to var, so no need for vars any more
        'prefer-const': jsRules['prefer-const'], // ts provides better types with const
        'prefer-rest-params': jsRules['prefer-rest-params'], // ts provides better types with rest args over arguments
        'prefer-spread': jsRules['prefer-spread'], // ts transpiles spread to apply, so no need for manual apply
        //#endregion

        //#endregion recommended https://typescript-eslint.io/rules/?=recommended
        '@typescript-eslint/adjacent-overload-signatures': 2,
        '@typescript-eslint/array-type': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/ban-tslint-comment': 2,
        // '@typescript-eslint/ban-types': 2,
        '@typescript-eslint/class-literal-property-style': 0, // REDEFINE
        // 'class-methods-use-this': 0,
        // '@typescript-eslint/class-methods-use-this': suggestions['class-methods-use-this'],
        '@typescript-eslint/consistent-generic-constructors': 2,
        '@typescript-eslint/consistent-indexed-object-style': 0, // REDEFINE
        '@typescript-eslint/consistent-type-assertions': 0, // REDEFINE
        '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
        // '@typescript-eslint/consistent-type-imports': [2, { prefer: 'type-imports', disallowTypeAnnotations: false }],
        '@typescript-eslint/default-param-last': 0, // REDEFINE
        '@typescript-eslint/explicit-function-return-type': 0, // REDEFINE
        '@typescript-eslint/explicit-member-accessibility': 0, // REDEFINE
        '@typescript-eslint/explicit-module-boundary-types': 0, // REDEFINE
        // 'init-declarations': 0,
        // '@typescript-eslint/init-declarations': suggestions['init-declarations'],
        // 'max-params': 0,
        // '@typescript-eslint/max-params': suggestions['max-params'],
        '@typescript-eslint/member-ordering': 0,
        '@typescript-eslint/method-signature-style': 0,
        'no-array-constructor': 0,
        '@typescript-eslint/no-array-constructor': jsRules['no-array-constructor'],
        '@typescript-eslint/no-confusing-non-null-assertion': 2,
        '@typescript-eslint/no-duplicate-enum-values': 2,
        // '@typescript-eslint/no-dynamic-delete': 0,
        // 'no-empty-function': 0,
        // '@typescript-eslint/no-empty-function': suggestions['no-empty-function'],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-extra-non-null-assertion': 2,
        '@typescript-eslint/no-extraneous-class': 0,
        '@typescript-eslint/no-import-type-side-effects': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-invalid-void-type': 0,
        'no-loop-func': 0,
        '@typescript-eslint/no-loop-func': jsRules['no-loop-func'],
        // 'no-loss-of-precision': 0,
        // '@typescript-eslint/no-loss-of-precision': possibleProblems['no-loss-of-precision'],
        '@typescript-eslint/no-misused-new': 2,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 0,
        '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-require-imports': 2,
        '@typescript-eslint/no-restricted-types': 0, // REDEFINE
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': jsRules['no-shadow'],
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/no-unnecessary-parameter-property-assignment': 2,
        '@typescript-eslint/no-unnecessary-type-constraint': 2,
        '@typescript-eslint/no-unsafe-declaration-merging': 2,
        '@typescript-eslint/no-unsafe-function-type': 0,
        'no-unused-expressions': 0,
        '@typescript-eslint/no-unused-expressions': jsRules['no-unused-expressions'],
        'no-unused-private-class-members': 0,
        '@typescript-eslint/no-unused-private-class-members': jsRules['no-unused-private-class-members'],
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': jsRules['no-unused-vars'],
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': [2, { ...jsRules['no-use-before-define'][1], enums: true, typedefs: false, ignoreTypeReferences: false }],
        // '@typescript-eslint/no-var-requires': 2,
        '@typescript-eslint/no-wrapper-object-types': 2,
        '@typescript-eslint/parameter-properties': 0,
        '@typescript-eslint/prefer-as-const': 2,
        //#endregion

        ...overrides,
      },
    },
    {
      name: 'h21/ts/rules-4declaration',
      files: [GLOB_D_TS],
      rules: {
        'import/newline-after-import': 0,
        'no-var': 0,
      },
    },
    {
      name: 'h21/ts/rules-4js',
      files: [GLOB_JS, GLOB_JSX],
      rules: {
        '@typescript-eslint/no-require-imports': 0,
      },
    },
  ];
}
