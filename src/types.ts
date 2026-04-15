import type { Config as Config$ } from '@eslint/config-helpers';
import type { Linter } from 'eslint';
import type { DefaultConfig } from './defaults';

export type Rules = Record<string, Linter.RuleEntry<any> | undefined> & {};

export type Config = Omit<Config$, 'rules'> & {
  rules?: Rules;
};

export type CodeStyle = Partial<Pick<DefaultConfig, 'indent' | 'semi'>>;
