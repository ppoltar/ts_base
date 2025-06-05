  import { defineConfig } from '@playwright/test';

  const isCI = !!process.env.CI || !!process.env.DOCKER;

  export default defineConfig({
    testDir: './src/tests',
    timeout: 30_000,
    retries: isCI ? 2 : 0,    //Avoid unnecessary retries locally
    workers: 1,
    reporter: [
      ['list'],                     // console output
      ['html', { open: 'always' }], // generates html report, open automatically
    ],
    use: {
      headless: isCI ? true : false,
      screenshot: isCI ? 'on' : 'on',
      video:  isCI ? 'retain-on-failure' : 'on',
      testIdAttribute: 'data-test',
      trace: isCI ? 'retain-on-failure' : 'on',
    },

  });
