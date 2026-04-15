import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  dts: true,
  minify: true,
  format: ['esm'],
  exports: true,
  deps: {
    skipNodeModulesBundle: true,
  },
});
