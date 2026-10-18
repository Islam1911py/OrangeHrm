import { test, expect } from '../../fixtures';
import { MyInfoPage, MyInfoSection } from '../../pages/MyInfoPage';

/** ESS side panel and My Info entry (verified from ESS screenshots on 5.9). */
test.describe('ESS smoke', () => {
  test('TC-3.0-07 ESS user sees My Info but not Admin or PIM', { tag: '@smoke' }, async ({ page }) => {
    const myInfo = new MyInfoPage(page);
    await page.goto('web/index.php/dashboard/index');

    for (const name of ['Leave', 'Time', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Claim', 'Buzz']) {
      await expect(myInfo.sidePanel.getByRole('link', { name, exact: true }), name).toBeVisible();
    }
    for (const name of ['Admin', 'PIM', 'Recruitment', 'Maintenance']) {
      await expect(myInfo.sidePanel.getByRole('link', { name, exact: true }), name).toHaveCount(0);
    }
  });

  test('TC-3.0-08 My Info opens the user\'s own Personal Details record', { tag: '@smoke' }, async ({ page, essUser }) => {
    const myInfo = new MyInfoPage(page);
    await myInfo.open();

    await expect(page).toHaveURL(new RegExp(`viewPersonalDetails/empNumber/${essUser.empNumber}`));
  });

  test('TC-3.0-01 My Info menu and all section tabs are displayed', { tag: '@smoke' }, async ({ page }) => {
    const myInfo = new MyInfoPage(page);
    await myInfo.open();

    const tabs: MyInfoSection[] = [
      'Personal Details', 'Contact Details', 'Emergency Contacts', 'Dependents', 'Immigration',
      'Job', 'Salary', 'Report-to', 'Qualifications', 'Memberships',
    ];
    for (const name of tabs) await expect(myInfo.tab(name), name).toBeVisible();
  });
});
