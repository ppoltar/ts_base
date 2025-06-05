import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './src/tests',
  timeout: 30_000,
  retries: isCI ? 2 : 0,     //Avoid unnecessary retries locally
  reporter: [
    ['list'],                     // console output
    ['html', { open: 'always' }], // generates html report, open automatically
  ],
  use: {
    headless: isCI ? true : false,
    screenshot: isCI ? 'only-on-failure' : 'on',
    video:  isCI ? 'retain-on-failure' : 'on',
    testIdAttribute: 'data-test',
    trace: isCI ? 'retain-on-failure' : 'on',
  },

});
