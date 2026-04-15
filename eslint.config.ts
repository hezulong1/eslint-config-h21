import setup from './src';
import globals from 'globals';

const config = setup({
  ignores: [
    'fixtures/**',
  ],
  globals: {
    ...globals.browser,
    ...globals.es2021,
  },
  style: true,
  ts: true,
});

export default config;
