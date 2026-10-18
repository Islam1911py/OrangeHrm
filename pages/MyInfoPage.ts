import { Page, Locator } from '@playwright/test';

/** The ten My Info tabs an ESS user sees on 5.9 (verified from an ESS screenshot). */
export type MyInfoSection =
  | 'Personal Details' | 'Contact Details' | 'Emergency Contacts' | 'Dependents' | 'Immigration'
  | 'Job' | 'Salary' | 'Report-to' | 'Qualifications' | 'Memberships';

/** Side panel + My Info navigation for OrangeHRM 5.x. */
export class MyInfoPage {
  /** Left menu. The accessible name "Sidepanel" is proven by codegen. */
  readonly sidePanel: Locator;
  readonly myInfoLink: Locator;

  constructor(protected readonly page: Page) {
    this.sidePanel = page.getByRole('navigation', { name: 'Sidepanel' });
    this.myInfoLink = this.sidePanel.getByRole('link', { name: 'My Info', exact: true });
  }

  async open() {
    await this.page.goto('web/index.php/dashboard/index');
    await this.myInfoLink.click();
  }

  /** Tab link in the My Info left menu (names verified from ESS screenshots; the link role is UNVERIFIED). */
  tab(name: MyInfoSection): Locator {
    return this.page.getByRole('tablist').getByRole('link', { name, exact: true });
  }

  async openSection(name: MyInfoSection) {
    await this.tab(name).click();
  }
}
