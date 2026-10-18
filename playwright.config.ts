import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { AUTH_FILE } from './support/constants';

dotenv.config();

// One seed per run, shared by the main process and all workers, so generated test data is reproducible:
//   SEED=123456 npm test   -> replays the same generated values
process.env.SEED ??= String(Date.now() % 1_000_000_000);
if (!process.env.TEST_WORKER_INDEX) console.log(`Test data seed: ${process.env.SEED}  (replay with SEED=${process.env.SEED})`);

// baseURL must end with "/" and tests use relative paths WITHOUT a leading "/"
// (e.g. page.goto('web/index.php/auth/login')).
const baseURL = (process.env.BASE_URL ?? 'https://opensource-demo.orangehrmlive.com/').replace(/\/?$/, '/');

export default defineConfig({
  testDir: './tests',
  // Public shared demo + one ESS user per run => run serially and gently.
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  timeout: 90_000, // the public demo can be slow
  expect: { timeout: 10_000 },
  reporter: [
    ['list'], 
    ['html', { open: 'never' }], 
    ['json', { outputFile: 'test-results/results.json' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    baseURL,
    actionTimeout: 15_000,
    navigationTimeout: 45_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    // 0) Fast checks of the test-data generators. No browser, no demo needed:  npm run test:unit
    { name: 'unit', testMatch: /unit\/.*\.spec\.ts/ },

    // Discovery: logs in with EXPLORE_USERNAME/EXPLORE_PASSWORD and records what My Info looks like.  npm run explore
    { name: 'explore', testMatch: /explore\/.*\.spec\.ts/, use: { ...devices['Desktop Chrome'] } },

    // 1) Creates a fresh ESS user (as Admin), logs in as that user and saves the session.
    { name: 'setup', testMatch: /auth\.setup\.ts/ },

    // 2) Main project (Phase 1): starts already logged in as the ESS user.
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: AUTH_FILE },
      testIgnore: /(unit|explore)\//,
      dependencies: ['setup'],
    },

    // 3) Phase 2 - Compatibility. Enable with ALL_BROWSERS=1.
    ...(process.env.ALL_BROWSERS
      ? [
          { name: 'firefox', use: { ...devices['Desktop Firefox'], storageState: AUTH_FILE }, testIgnore: /(unit|explore)\//, dependencies: ['setup'] },
          { name: 'edge', use: { ...devices['Desktop Edge'], channel: 'msedge', storageState: AUTH_FILE }, testIgnore: /(unit|explore)\//, dependencies: ['setup'] },
        ]
      : []),
  ],
});
