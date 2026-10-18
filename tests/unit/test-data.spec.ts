/** Checks the generators themselves (no browser, no demo). Run: npm run test:unit */
import { test, expect } from '@playwright/test';
import {
  buildEssUser, buildStrongPassword, mismatchedPasswords, tooShortUsername, tooShortPassword,
  minLengthUsername, whitespaceOnly, buildPersonName, buildSpecialCharName, buildOtherId, buildCustomText, invalidDates, isValidDate, validDate, buildFile, fileSizes, faker, rules,
} from '../../test-data';

test.describe('test-data generators', () => {
  test('strong password meets the policy (x50)', () => {
    for (let i = 0; i < 50; i++) {
      const p = buildStrongPassword();
      expect(p.length).toBeGreaterThanOrEqual(rules.password.min);
      expect(p).toMatch(/[A-Z]/);
      expect(p).toMatch(/[a-z]/);
      expect(p).toMatch(/\d/);
      expect(p).toMatch(/[#@!$%]/);
    }
  });

  test('boundary values are calculated from rules.ts', () => {
    expect(tooShortUsername()).toHaveLength(rules.username.min - 1);
    expect(tooShortPassword()).toHaveLength(rules.password.min - 1);
    expect(minLengthUsername()).toHaveLength(rules.username.min);
  });

  test('mismatched passwords are really different', () => {
    for (let i = 0; i < 20; i++) {
      const { password, confirm } = mismatchedPasswords();
      expect(password).not.toBe(confirm);
    }
  });

  test('ESS users are unique, valid and accept overrides', () => {
    const a = buildEssUser();
    const b = buildEssUser();
    expect(a.username).not.toBe(b.username);
    expect(a.username.length).toBeGreaterThanOrEqual(rules.username.min);
    expect(a.firstName).toMatch(/^[A-Za-z]+$/);
    expect(buildEssUser({ firstName: 'Fixed' }).firstName).toBe('Fixed');
  });

  test('same seed gives the same data (replayable runs)', () => {
    faker.seed(42);
    const first = [buildStrongPassword(), tooShortUsername()];
    faker.seed(42);
    const second = [buildStrongPassword(), tooShortUsername()];
    expect(second).toEqual(first);
  });

  test('dates use the app format yyyy-dd-mm: invalid kinds are invalid, valid dates are valid', () => {
    expect(rules.dateFormat).toBe('yyyy-dd-mm');
    for (const kind of invalidDates) {
      for (let i = 0; i < 10; i++) expect(isValidDate(kind.value()), kind.label).toBe(false);
    }
    for (let i = 0; i < 20; i++) expect(isValidDate(validDate())).toBe(true);
    expect(isValidDate('2030-31-05')).toBe(true); // 31 May 2030 written day-first
    expect(isValidDate('2030-05-31')).toBe(false); // the same date in ISO order is NOT valid here
  });

  test('generated files have the requested size', () => {
    expect(buildFile(fileSizes.exactlyAtLimit()).buffer.length).toBe(rules.photo.maxBytes);
    expect(buildFile(fileSizes.justOverLimit()).buffer.length).toBe(rules.photo.maxBytes + 1);
    expect(buildFile(100, 'png').name).toMatch(/\.png$/);
  });

  test('personal data generators give valid shapes', () => {
    for (let i = 0; i < 20; i++) {
      const n = buildPersonName();
      expect(n.first).toMatch(/^[A-Z][a-z]+$/);
      expect(n.last).toMatch(/^[A-Z][a-z]+$/);
      expect(buildSpecialCharName()).toMatch(/^O'[A-Za-z]+-[A-Za-z]+$/);
      expect(buildOtherId()).toMatch(/^OTH-[A-Z0-9]{5}$/);
      expect(whitespaceOnly().trim()).toBe('');
      expect(buildCustomText().length).toBeGreaterThan(3);
    }
  });
});
