/**
 * Section 3.1 Personal Details (ESS view on OrangeHRM 5.9).
 * Source: docs/test-cases.csv. Titles start with the TC ID; @smoke = Priority High.
 * Test data is generated (test-data/). The `personalDetails` fixture opens the page and restores saved values afterwards.
 *
 * Not automated on purpose (N/A on 5.9, fields are not shown to the ESS user): TC-3.1-17, 18, 19, 24.
 * Not yet automated: 01, 08, 12, 25, 27 (need more verification or other tooling).
 */
import { test, expect } from '../../fixtures';
import {
  buildCustomText, buildOtherId, buildPersonName, buildSpecialCharName, invalidDates, rules, validDate, whitespaceOnly,
} from '../../test-data';

test.describe('3.1 Personal Details', () => {
  // ---------------------------------------------------------------- what is displayed (verified on 5.9)
  test('TC-3.1-02 All Personal Details fields and controls are displayed', async ({ personalDetails: pd }) => {
    for (const field of [pd.firstName, pd.middleName, pd.lastName, pd.employeeId, pd.otherId, pd.licenseNumber,
      pd.licenseExpiry, pd.dateOfBirth, pd.personalSave, pd.customFieldsSave]) {
      await expect(field).toBeVisible();
    }
    for (const label of ['Nationality', 'Marital Status', 'Gender']) await expect(pd.group(label)).toBeVisible();
    await expect(pd.group('Gender').getByText('Male', { exact: true })).toBeVisible();
    await expect(pd.group('Gender').getByText('Female', { exact: true })).toBeVisible();
    await expect(pd.attachmentsAdd).toBeVisible();
  });

  test('TC-3.1-03 Required fields are marked with an asterisk', async ({ personalDetails: pd }) => {
    await expect(pd.requiredNote).toBeVisible();
  });

  test('TC-3.1-28 No Edit button: the fields are editable directly', async ({ personalDetails: pd }) => {
    await expect(pd.editButton).toHaveCount(0);
    await expect(pd.firstName).toBeEditable();
    await expect(pd.personalSave).toBeVisible();
  });

  test('TC-3.1-29 Date fields show the format placeholder yyyy-dd-mm', async ({ personalDetails: pd }) => {
    await expect(pd.licenseExpiry).toHaveAttribute('placeholder', rules.dateFormat);
    await expect(pd.dateOfBirth).toHaveAttribute('placeholder', rules.dateFormat);
  });

  test('TC-3.1-30 Custom Fields section is displayed', async ({ personalDetails: pd }) => {
    await expect(pd.group('Blood Type')).toBeVisible();
    await expect(pd.customField('Test_Field')).toBeVisible();
    await expect(pd.customFieldsSave).toBeVisible();
  });

  test('TC-3.1-33 Attachments list shows its columns', async ({ personalDetails: pd, page }) => {
    for (const column of ['File Name', 'Description', 'Size', 'Type', 'Date Added', 'Added By', 'Actions']) {
      await expect(page.getByText(column, { exact: true }).first(), column).toBeVisible();
    }
    await expect(page.getByText('No Records Found').first()).toBeVisible();
  });

  // ---------------------------------------------------------------- read-only fields (greyed out for the ESS user)
  test('TC-3.1-21 Employee Id is read-only', { tag: '@smoke' }, async ({ personalDetails: pd }) => {
    await expect(pd.employeeId).toBeDisabled();
  });

  test("TC-3.1-22 Driver's License Number is read-only", { tag: '@smoke' }, async ({ personalDetails: pd }) => {
    await expect(pd.licenseNumber).toBeDisabled();
  });

  test('TC-3.1-23 Date of Birth is read-only', { tag: '@smoke' }, async ({ personalDetails: pd }) => {
    await expect(pd.dateOfBirth).toBeDisabled();
  });

  // ---------------------------------------------------------------- edit and save (Needs check until they pass)
  test('TC-3.1-04 Edit and save Full Name', { tag: '@smoke' }, async ({ personalDetails: pd }) => {
    const name = buildPersonName();
    await pd.firstName.fill(name.first);
    await pd.middleName.fill(name.middle);
    await pd.lastName.fill(name.last);
    await pd.save();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage(); // reload to prove it was really stored
    await expect(pd.firstName).toHaveValue(name.first);
    await expect(pd.middleName).toHaveValue(name.middle);
    await expect(pd.lastName).toHaveValue(name.last);
  });

  test('TC-3.1-05 Save with empty First Name', { tag: '@smoke' }, async ({ personalDetails: pd }) => {
    await pd.firstName.fill('');
    await pd.save();
    await expect(pd.requiredErrors.first()).toBeVisible();
    await expect(pd.successToast).toBeHidden();
  });

  test('TC-3.1-06 Save with empty Last Name', async ({ personalDetails: pd }) => {
    await pd.lastName.fill('');
    await pd.save();
    await expect(pd.requiredErrors.first()).toBeVisible();
    await expect(pd.successToast).toBeHidden();
  });

  test('TC-3.1-07 Whitespace-only First Name', async ({ personalDetails: pd }) => {
    await pd.firstName.fill(whitespaceOnly());
    await pd.save();
    await expect(pd.requiredErrors.first()).toBeVisible();
    await expect(pd.successToast).toBeHidden();
  });

  test('TC-3.1-09 Names with special characters', async ({ personalDetails: pd }) => {
    const last = buildSpecialCharName();
    await pd.lastName.fill(last);
    await pd.save();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage();
    await expect(pd.lastName).toHaveValue(last);
  });

  test('TC-3.1-10 Edit Other Id', async ({ personalDetails: pd }) => {
    const otherId = buildOtherId();
    await pd.otherId.fill(otherId);
    await pd.save();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage();
    await expect(pd.otherId).toHaveValue(otherId);
  });

  test('TC-3.1-11 Edit License Expiry Date by typing', async ({ personalDetails: pd }) => {
    const date = validDate(); // generated in the app format yyyy-dd-mm
    await pd.licenseExpiry.fill(date);
    await pd.save();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage();
    await expect(pd.licenseExpiry).toHaveValue(date);
  });

  // Data-driven: one test per KIND of invalid date; the label is stable, the value is generated each run.
  for (const bad of invalidDates) {
    test(`TC-3.1-13 Invalid License Expiry Date format (${bad.label})`, async ({ personalDetails: pd }) => {
      await pd.licenseExpiry.fill(bad.value());
      await pd.save();
      await expect(pd.dateFormatError).toBeVisible();
      await expect(pd.successToast).toBeHidden();
    });
  }

  test('TC-3.1-14 Change Gender', async ({ personalDetails: pd }) => {
    const before = (await pd.snapshot()).gender;
    const target = before === 'male' ? 'female' : 'male';
    await pd.chooseGender(target);
    await pd.save();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage();
    await expect(target === 'male' ? pd.genderMale : pd.genderFemale).toBeChecked();
  });

  test('TC-3.1-15 Change Nationality', async ({ personalDetails: pd }) => {
    const chosen = await pd.chooseAnyOther('Nationality');
    await pd.save();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage();
    expect(await pd.selectedText('Nationality')).toBe(chosen);
  });

  test('TC-3.1-16 Change Marital Status', async ({ personalDetails: pd }) => {
    const chosen = await pd.chooseAnyOther('Marital Status');
    await pd.save();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage();
    expect(await pd.selectedText('Marital Status')).toBe(chosen);
  });

  test('TC-3.1-20 Update several fields in one save', async ({ personalDetails: pd }) => {
    const otherId = buildOtherId();
    await pd.otherId.fill(otherId);
    const nationality = await pd.chooseAnyOther('Nationality');
    const marital = await pd.chooseAnyOther('Marital Status');
    await pd.chooseGender((await pd.snapshot()).gender === 'male' ? 'female' : 'male');
    const gender = (await pd.snapshot()).gender;
    await pd.save();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage();
    await expect(pd.otherId).toHaveValue(otherId);
    expect(await pd.selectedText('Nationality')).toBe(nationality);
    expect(await pd.selectedText('Marital Status')).toBe(marital);
    expect((await pd.snapshot()).gender).toBe(gender);
  });

  test('TC-3.1-26 Leave the page without saving', async ({ personalDetails: pd }) => {
    const original = await pd.otherId.inputValue();
    await pd.otherId.fill(buildOtherId());
    await pd.openContactDetails();
    await pd.openPage();
    await expect(pd.otherId).toHaveValue(original);
  });

  // ---------------------------------------------------------------- Custom Fields (configured by Admin on the shared demo and they CHANGE:
  // DEPARTMENT was seen once and later disappeared, so only Blood Type and Test_Field are used)
  test('TC-3.1-31 Save Custom Fields', async ({ personalDetails: pd }) => {
    const bloodType = await pd.chooseAnyOther('Blood Type');
    const testField = buildCustomText();
    await pd.customField('Test_Field').fill(testField);
    await pd.saveCustomFields();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage();
    expect(await pd.selectedText('Blood Type')).toBe(bloodType);
    await expect(pd.customField('Test_Field')).toHaveValue(testField);
  });

  test('TC-3.1-32 Custom Fields Save is independent of the Personal Details Save', async ({ personalDetails: pd }) => {
    const originalOtherId = await pd.otherId.inputValue();
    const testField = buildCustomText();
    await pd.otherId.fill(buildOtherId()); // not saved
    await pd.customField('Test_Field').fill(testField);
    await pd.saveCustomFields();
    await expect(pd.successToast).toBeVisible();

    await pd.openPage();
    await expect(pd.customField('Test_Field')).toHaveValue(testField);
    await expect(pd.otherId).toHaveValue(originalOtherId);
  });
});
