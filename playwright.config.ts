  import { defineConfig } from '@playwright/test';

  const isCI = !!process.env.CI || !!process.env.DOCKER;

  export default defineConfig({
    testDir: './src/tests',
    timeout: 30_000,
    retries: isCI ? 2 : 0,    //Avoid unnecessary retries locally
    workers: 1,
    reporter: isCI
    ? [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]] // In CI: generate report but don't open it
    : [['list'], ['html']], // Locally

    use: {
      headless: isCI ? true : false,
      screenshot: 'on',
      video:  isCI ? 'retain-on-failure' : 'on',
      testIdAttribute: 'data-test',
      trace: 'on',
    },

  });
