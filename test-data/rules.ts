/**
 * Business rules that tests need to build boundary values.
 * Keep ONLY rules that were verified on the 5.9 demo, and change them here in one place.
 * (Every boundary value in test-data/ is calculated from these numbers.)
 */
export const rules = {
  // Verified by codegen assertions on PIM > Add Employee:
  username: { min: 5 }, // "Should be at least 5 ..."
  password: { min: 7 }, // "Should have at least 7 ..."
  // Verified from the placeholder of the date fields (License Expiry Date, Date of Birth): day comes BEFORE month.
  // The format is an Admin > Localization setting, so it could differ on another instance.
  dateFormat: 'yyyy-dd-mm',
  // Verified on the Add Employee hint (same text as the 3.3 guide):
  photo: { maxBytes: 1_048_576, types: ['jpg', 'png', 'gif'] as const },
};
