import { Page, Locator, expect } from '@playwright/test';
import { MyInfoPage } from './MyInfoPage';

/** Values we can read back and restore (text fields + dropdown texts + gender). */
export interface PersonalDetailsData {
  firstName: string;
  middleName: string;
  lastName: string;
  otherId: string;
  licenseExpiry: string;
  nationality: string; // selected text, '-- Select --' when empty
  maritalStatus: string;
  gender: 'male' | 'female' | 'none';
}

/**
 * My Info > Personal Details on OrangeHRM 5.9 (ESS view).
 *
 * VERIFIED from ESS screenshots: the labels and layout (fields, "-- Select --" dropdowns, no Edit button,
 * two Save buttons: Personal Details + Custom Fields, Attachments list) and the page URL pattern
 * `pim/viewPersonalDetails/empNumber/<n>`.
 * UNVERIFIED (no DOM seen yet): the CSS classes below (.oxd-*), the option role, the toast text.
 * If a test fails on a locator, fix it HERE only (use `npm run codegen`).
 */
export class PersonalDetailsPage extends MyInfoPage {
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly employeeId: Locator;
  readonly otherId: Locator;
  readonly licenseNumber: Locator;
  readonly licenseExpiry: Locator;
  readonly dateOfBirth: Locator;
  readonly genderMale: Locator;
  readonly genderFemale: Locator;
  readonly personalSave: Locator;
  readonly customFieldsSave: Locator;
  readonly requiredNote: Locator;
  readonly requiredErrors: Locator;
  readonly successToast: Locator;
  readonly attachmentsAdd: Locator;
  readonly editButton: Locator;
  readonly dateFormatError: Locator;

  constructor(page: Page, private readonly empNumber: string) {
    super(page);
    // Names: same component as Add Employee (accessible names proven there).
    this.firstName = page.getByRole('textbox', { name: 'First Name' });
    this.middleName = page.getByRole('textbox', { name: 'Middle Name' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name' });
    // Other inputs have no accessible name: find the input inside the group with that label text.
    this.employeeId = this.group('Employee Id').locator('input');
    this.otherId = this.group('Other Id').locator('input');
    this.licenseNumber = this.group("Driver's License Number").locator('input');
    this.licenseExpiry = this.group('License Expiry Date').locator('input');
    this.dateOfBirth = this.group('Date of Birth').locator('input');
    this.genderMale = page.getByRole('radio', { name: 'Male', exact: true }); // exact: "Male" is inside "Female"
    this.genderFemale = page.getByRole('radio', { name: 'Female', exact: true });
    // The page has two Save buttons: the first saves Personal Details, the second saves Custom Fields.
    this.personalSave = page.getByRole('button', { name: 'Save' }).first();
    this.customFieldsSave = page.getByRole('button', { name: 'Save' }).nth(1);
    this.requiredNote = page.getByText('* Required').first();
    this.requiredErrors = page.getByText('Required', { exact: true });
    this.successToast = page.getByText(/Successfully (Updated|Saved)/);
    this.attachmentsAdd = page.getByRole('button', { name: 'Add' });
    this.editButton = page.getByRole('button', { name: 'Edit' });
    this.dateFormatError = page.getByText(/Should be a valid date/i); // message text UNVERIFIED
  }

  /** The label + control block for a label text (OrangeHRM 5 pattern). */
  group(label: string): Locator {
    return this.page.locator('.oxd-input-group').filter({ has: this.page.getByText(label, { exact: true }) });
  }

  /** Open the page directly with the ESS user's empNumber (no clicking through menus). */
  async openPage() {
    await this.page.goto(`web/index.php/pim/viewPersonalDetails/empNumber/${this.empNumber}`);
    await expect(this.firstName).not.toHaveValue(''); // wait until the data has loaded (first name is required)
  }

  /** Input of a Custom Fields text field (DEPARTMENT, Test_Field). */
  customField(label: string): Locator {
    return this.group(label).locator('input');
  }

  /** Leave Personal Details through another tab (URL pattern verified on the Admin view). */
  async openContactDetails() {
    await this.page.goto(`web/index.php/pim/contactDetails/empNumber/${this.empNumber}`);
  }

  async save() {
    await this.personalSave.click();
  }

  async saveCustomFields() {
    await this.customFieldsSave.click();
  }

  /** Text currently shown in a dropdown ('-- Select --' when empty). */
  async selectedText(label: string): Promise<string> {
    return (await this.group(label).locator('.oxd-select-text-input').innerText()).trim();
  }

  /** Pick an option in an OrangeHRM dropdown (custom control, not a <select>). */
  async choose(label: string, option: string) {
    await this.group(label).locator('.oxd-select-text').click();
    await this.page.getByRole('option', { name: option, exact: true }).click();
  }

  /** Open a dropdown and pick the first option that differs from the current one (no option names assumed). Returns its text. */
  async chooseAnyOther(label: string): Promise<string> {
    const current = await this.selectedText(label);
    await this.group(label).locator('.oxd-select-text').click();
    const options = (await this.page.getByRole('option').allInnerTexts()).map((t) => t.trim());
    const choice = options.find((t) => t !== current && t !== '-- Select --');
    if (!choice) throw new Error(`No other option available in "${label}"`);
    await this.page.getByRole('option', { name: choice, exact: true }).click();
    return choice;
  }

  /** Radios are styled; force the click on the hidden input. */
  async chooseGender(gender: 'male' | 'female') {
      const radio = this.group('Gender').getByRole('radio', { name: gender === 'male' ? 'Male' : 'Female', exact: true });
      await radio.waitFor({ state: 'attached', timeout: 10000 });
      await radio.check({ force: true });
    }

  async snapshot(): Promise<PersonalDetailsData> {
    return {
      firstName: await this.firstName.inputValue(),
      middleName: await this.middleName.inputValue(),
      lastName: await this.lastName.inputValue(),
      otherId: await this.otherId.inputValue(),
      licenseExpiry: await this.licenseExpiry.inputValue(),
      nationality: await this.selectedText('Nationality'),
      maritalStatus: await this.selectedText('Marital Status'),
      gender: (await this.genderMale.isChecked()) ? 'male' : (await this.genderFemale.isChecked()) ? 'female' : 'none',
    };
  }

  /** Put the saved values back (used by the fixture after a test). A gender radio cannot be un-selected, so 'none' is skipped. */
  async restore(data: PersonalDetailsData) {
    await this.firstName.fill(data.firstName);
    await this.middleName.fill(data.middleName);
    await this.lastName.fill(data.lastName);
    await this.otherId.fill(data.otherId);
    await this.licenseExpiry.fill(data.licenseExpiry);
    await this.choose('Nationality', data.nationality);
    await this.choose('Marital Status', data.maritalStatus);
    if (data.gender !== 'none') await this.chooseGender(data.gender);
    await this.save();
    await expect(this.successToast).toBeVisible();
  }
}
