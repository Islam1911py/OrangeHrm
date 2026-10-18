import { Page, Locator } from '@playwright/test';

/** Login screen of OrangeHRM 5.x. Locators come from a real codegen session on the 5.9 demo. */
export class LoginPage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('web/index.php/auth/login');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

  /** Log in AND wait until the app is open (side panel visible). Use this before navigating anywhere else:
   *  going to another URL while the login redirect is still running aborts the navigation (net::ERR_ABORTED). */
  async loginAndWait(user: string, pass: string) {
    await this.login(user, pass);
    await this.page.getByRole('navigation', { name: 'Sidepanel' }).waitFor();
  }
}
