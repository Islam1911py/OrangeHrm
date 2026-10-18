import { faker } from './random';
import { rules } from './rules';

const SYMBOLS = ['#', '@', '!', '$', '%'];

/** Strong password: at least one upper, lower, digit and symbol, shuffled. Default 12 chars. */
export function buildStrongPassword(length = 12): string {
  const len = Math.max(length, rules.password.min, 4);
  const required = [
    faker.string.alpha({ length: 1, casing: 'upper' }),
    faker.string.alpha({ length: 1, casing: 'lower' }),
    faker.string.numeric(1),
    faker.helpers.arrayElement(SYMBOLS),
  ];
  const rest = faker.string.alphanumeric(len - required.length).split('');
  return faker.helpers.shuffle([...required, ...rest]).join('');
}

/** Two DIFFERENT valid passwords: for "Passwords do not match". */
export function mismatchedPasswords(): { password: string; confirm: string } {
  const password = buildStrongPassword();
  let confirm = buildStrongPassword();
  while (confirm === password) confirm = buildStrongPassword();
  return { password, confirm };
}
