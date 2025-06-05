import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 30000,
  retries: 2,
  reporter: [
    ['list'],                     // console output
    ['html', { open: 'always' }], // generates html report, open automatically
  ],
  use: {
    headless: false,
    screenshot: 'on',
    video: 'on',
    testIdAttribute: 'data-test',
    trace: 'on',
  },

});
