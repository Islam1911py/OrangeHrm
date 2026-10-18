import { test as base } from '@playwright/test';
import { EssUser, readEssUser } from '../support/essUser';
import { PersonalDetailsPage } from '../pages/PersonalDetailsPage';

type Fixtures = {
  /** Credentials/name/empNumber of the ESS user created for this run by tests/auth.setup.ts. */
  essUser: EssUser;
  /** Personal Details page, already open. Saved values are restored after the test. */
  personalDetails: PersonalDetailsPage;
};

export const test = base.extend<Fixtures>({
  // eslint-disable-next-line no-empty-pattern
  essUser: async ({}, use) => {
    await use(readEssUser());
  },

  personalDetails: async ({ page, essUser }, use) => {
    if (!essUser.empNumber) throw new Error('empNumber missing in .auth/ess-user.json (run the setup project)');
    const pd = new PersonalDetailsPage(page, essUser.empNumber);
    await pd.openPage();
    const original = await pd.snapshot();

    await use(pd);

    // Teardown: reload (drops unsaved changes) and undo anything the test saved, so tests stay independent.
    await pd.openPage();
    if (JSON.stringify(await pd.snapshot()) !== JSON.stringify(original)) {
      await pd.restore(original);
    }
  },
});

export { expect } from '@playwright/test';
