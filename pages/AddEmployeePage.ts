import { Page, Locator } from '@playwright/test';
import { EssUser } from '../support/essUser';

/** PIM > Add Employee (Admin only). Used by the setup step to create the ESS user for the run. */
export class AddEmployeePage {
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly createLoginSwitch: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly saveButton: Locator;
  // Validation messages (text proven by codegen assertions on the 5.9 demo; getByText matches a substring)
  readonly requiredErrors: Locator;
  readonly usernameTooShortError: Locator;
  readonly passwordTooShortError: Locator;
  readonly passwordMismatchError: Locator;

  constructor(private readonly page: Page) {
    // First/Middle/Last name: proven by codegen (accessible names = placeholders).
    this.firstName = page.getByRole('textbox', { name: 'First Name' });
    this.middleName = page.getByRole('textbox', { name: 'Middle Name' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name' });
    // "Create Login Details" switch: proven by codegen.
    this.createLoginSwitch = page.locator('.oxd-switch-input');
    // Username has no accessible name, so find the input inside the group labelled "Username".
    // (Fallback if this ever fails: page.getByRole('textbox').nth(5); codegen confirmed it is the Username field.)
    this.username = page
      .locator('.oxd-input-group')
      .filter({ has: page.getByText('Username', { exact: true }) })
      .locator('input');
    // Passwords: proven by codegen (first = Password, second = Confirm Password).
    this.password = page.locator('input[type="password"]').first();
    this.confirmPassword = page.locator('input[type="password"]').nth(1);
    this.saveButton = page.getByRole('button', { name: 'Save' });

    this.requiredErrors = page.getByText('Required', { exact: true });
    this.usernameTooShortError = page.getByText('Should be at least 5');
    this.passwordTooShortError = page.getByText('Should have at least 7');
    this.passwordMismatchError = page.getByText('Passwords do not match');
  }

  async goto() {
    await this.page.goto('web/index.php/pim/addEmployee');
  }

  /** Create an employee WITH login details (Status stays "Enabled", the default). Returns the empNumber. */
  async createWithLogin(user: EssUser): Promise<string> {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.createLoginSwitch.click(); // switch is OFF by default
    await this.username.fill(user.username);
    await this.password.fill(user.password);
    await this.confirmPassword.fill(user.password);
    await this.saveButton.click();

    // After saving, OrangeHRM redirects to the new employee's Personal Details page.
    await this.page.waitForURL(/viewPersonalDetails\/empNumber\/\d+/);
    return /empNumber\/(\d+)/.exec(this.page.url())![1];
  }
}
