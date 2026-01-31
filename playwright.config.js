const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './',
  testMatch: '**/*.spec.js',

  timeout: 10 * 60 * 1000,
  expect: { timeout: 15000 },

  fullyParallel: false,
  workers: 1,
  retries: 0,

  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/test-results.json' }],
    ['list']
  ],

  use: {
    baseURL: 'https://www.swifttranslator.com/',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    navigationTimeout: 60000,
    actionTimeout: 30000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],

  outputDir: 'test-results/artifacts',
});
