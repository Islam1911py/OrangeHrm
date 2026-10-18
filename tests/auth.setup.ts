import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { MyInfoPage } from '../pages/MyInfoPage';
import { AUTH_FILE } from '../support/constants';
import { saveEssUser } from '../support/essUser';
import { buildEssUser } from '../test-data';

/**
 * Runs once before the real tests.
 * The public demo deletes users after a while, so we do NOT reuse an old account:
 *   1) log in as Admin  2) create a brand-new ESS user  3) clear the session, log in as that user
 *   4) save the session (cookies) so every test starts already logged in as the ESS user.
 */
setup('TC-SETUP-05 create a fresh ESS user and log in as that user', async ({ page }) => {
  const adminUser = process.env.ADMIN_USERNAME ?? 'Admin';
  const adminPass = process.env.ADMIN_PASSWORD ?? 'admin123';
  const login = new LoginPage(page);

  // 1) Admin
  await login.goto();
  await login.login(adminUser, adminPass);
  await expect(page.getByRole('navigation', { name: 'Sidepanel' })).toBeVisible();

  // 2) Create the ESS user (Create Login Details ON, status Enabled)
  const ess = buildEssUser();
  const addEmployee = new AddEmployeePage(page);
  await addEmployee.goto();
  ess.empNumber = await addEmployee.createWithLogin(ess);
  saveEssUser(ess);

  // 3) "Log out" by dropping the session cookies, then log in as the ESS user
  await page.context().clearCookies();
  await login.goto();
  await login.login(ess.username, ess.password);

  // ESS user sees "My Info" in the side panel
  await expect(new MyInfoPage(page).myInfoLink).toBeVisible();

  // 4) Save the session for the other tests
  await page.context().storageState({ path: AUTH_FILE });
});
