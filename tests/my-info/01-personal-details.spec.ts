import { test, expect } from '../../fixtures';
import { allure } from 'allure-playwright';

test.describe('3.1 Personal Details Tests (ESS User)', () => {

  test('TC-3.1-04 Edit and save Full Name', async ({ personalDetails }) => {
    await personalDetails.firstName.fill('James');
    await personalDetails.middleName.fill('Robert');
    await personalDetails.lastName.fill('Olsen');
    await personalDetails.save();

    // Verify values remain populated after save
    await expect(personalDetails.firstName).toHaveValue('James');
    await expect(personalDetails.middleName).toHaveValue('Robert');
    await expect(personalDetails.lastName).toHaveValue('Olsen');
  });

  test('TC-3.1-05 Save with empty First Name triggers validation error', async ({ personalDetails }) => {
    await personalDetails.firstName.clear();
    await personalDetails.save();

    await expect(personalDetails.requiredErrors.first()).toBeVisible();
  });

  test('TC-3.1-06 Save with empty Last Name triggers validation error', async ({ personalDetails }) => {
    await personalDetails.lastName.clear();
    await personalDetails.save();

    await expect(personalDetails.requiredErrors.first()).toBeVisible();
  });

  test('TC-3.1-14 Change Gender option', async ({ personalDetails }) => {
    await personalDetails.chooseGender('female');
    await personalDetails.save();

    await expect(personalDetails.genderFemale).toBeChecked();
  });

  test('TC-3.1-15 Change Nationality selection', async ({ personalDetails }) => {
    await personalDetails.choose('Nationality', 'Egyptian');
    await personalDetails.save();

    const nationalityText = await personalDetails.selectedText('Nationality');
    expect(nationalityText).toBe('Egyptian');
  });

});