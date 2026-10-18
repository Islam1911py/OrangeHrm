import { faker } from '@faker-js/faker';

/**
 * One configured faker for the whole project.
 * The seed comes from playwright.config.ts (env SEED), so setup and tests share the same sequence.
 * To replay a failed run with the SAME generated values:  SEED=123456 npm test
 */
faker.seed(Number(process.env.SEED ?? Date.now() % 1_000_000_000));

export { faker };

/** Random lowercase letters+digits of an exact length (length 0 -> ''). */
export const randomText = (length: number) =>
  length > 0 ? faker.string.alphanumeric({ length, casing: 'lower' }) : '';

/** Short unique-ish id, handy for names. */
export const uid = (length = 4) => randomText(length);

/** Keep only letters (faker names can contain apostrophes/accents). */
export const lettersOnly = (text: string, fallback: string) => text.replace(/[^A-Za-z]/g, '') || fallback;
