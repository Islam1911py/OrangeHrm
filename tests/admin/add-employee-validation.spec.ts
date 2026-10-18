/**
 * SETUP section: Add Employee validation (framework precondition, not an ESS feature).
 * These tests run as ADMIN, so they must not use the ESS user's saved session.
 * Messages were confirmed with codegen assertions on the 5.9 demo. Nothing is saved to the demo.
 * Test data is generated (test-data/); lengths are calculated from test-data/rules.ts.
 */
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AddEmployeePage } from '../../pages/AddEmployeePage';
import { buildStrongPassword, mismatchedPasswords, tooShortPassword, tooShortUsername } from '../../test-data';

test.use({ storageState: { cookies: [], origins: [] } }); // start logged out

test.describe('SETUP Add Employee validation (Admin)', () => {
  let add: AddEmployeePage;

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.loginAndWait(process.env.ADMIN_USERNAME ?? 'Admin', process.env.ADMIN_PASSWORD ?? 'admin123');

    add = new AddEmployeePage(page);
    await add.goto();
    await add.createLoginSwitch.click(); // switch is OFF by default
  });

  test('TC-SETUP-01 Save an empty Add Employee form with login details', { tag: '@smoke' }, async ({ page }) => {
    await add.saveButton.click();

    // First Name, Last Name, Username, Password => at least 4 "Required" messages
    await expect.poll(() => add.requiredErrors.count()).toBeGreaterThanOrEqual(4);
    await expect(page).toHaveURL(/pim\/addEmployee/); // not saved
  });

  test('TC-SETUP-02 Username shorter than 5 characters', async () => {
    await add.username.fill(tooShortUsername()); // generated, exactly (min - 1) characters
    await expect(add.usernameTooShortError).toBeVisible();
  });

  test('TC-SETUP-03 Password shorter than 7 characters', async () => {
    await add.password.fill(tooShortPassword());
    await expect(add.passwordTooShortError).toBeVisible();
  });

  test('TC-SETUP-04 Password and Confirm Password do not match', async () => {
    const { password, confirm } = mismatchedPasswords();
    await add.password.fill(password);
    await add.confirmPassword.fill(confirm);
    await expect(add.passwordMismatchError).toBeVisible();
  });

  // A password that meets the policy must NOT show the "too short" message.
  test('TC-SETUP-06 A password that meets the policy shows no length error', async () => {
    await add.password.fill(buildStrongPassword());
    await expect(add.passwordTooShortError).toBeHidden();
  });
});
