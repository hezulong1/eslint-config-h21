export interface DefaultConfig {
  /**
   * @default 2. Set to `'tab'` to use tabs for indentation.
   */
  indent: number | 'tab';
  /**
   * @default true. Set to `false` to disable semicolons at the end of statements.
   */
  semi: boolean;
}

/**
 * Default configuration values. These can be overridden by calling `setDefaults()`.
 */
export const defaults: DefaultConfig = {
  indent: 2,
  semi: true,
};

export type SetDefaultConfigOptions = Partial<DefaultConfig>;

export function setDefaults(options: SetDefaultConfigOptions = {}): void {
  for (const [key, value] of Object.entries(options)) {
    if (value != null) {
      (defaults as any)[key] = value;
    }
  }
}
