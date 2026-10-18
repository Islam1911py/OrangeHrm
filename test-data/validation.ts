import { faker, randomText } from './random';
import { rules } from './rules';

/** Value 1 below the minimum length (a real boundary: min - 1). */
export const tooShortUsername = () => randomText(rules.username.min - 1);
export const tooShortPassword = () => randomText(rules.password.min - 1);
/** Value exactly at the minimum length (should be accepted). */
export const minLengthUsername = () => randomText(rules.username.min);

const pad = (n: number) => String(n).padStart(2, '0');

/** Date text in the app's format yyyy-dd-mm (rules.dateFormat): the DAY comes before the month. */
export const formatDate = (year: number, month: number, day: number) => `${year}-${pad(day)}-${pad(month)}`;

/** A real date in the app's format (day <= 28 so it is valid in every month). */
export const validDate = () => {
  const d = faker.date.future({ years: 5 });
  return formatDate(d.getFullYear(), d.getMonth() + 1, Math.min(d.getDate(), 28));
};

/** True when the text is a real calendar date written as yyyy-dd-mm. */
export function isValidDate(text: string): boolean {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text);
  if (!m) return false;
  const [year, day, month] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

const year = () => faker.number.int({ min: 2026, max: 2035 });
const day = () => faker.number.int({ min: 1, max: 28 });
const month = () => faker.number.int({ min: 1, max: 12 });

/**
 * Kinds of INVALID dates for the yyyy-dd-mm format. The label is stable (use it in test titles),
 * the value is generated each run:
 *   for (const bad of invalidDates) test(`... (${bad.label})`, async () => { fill(bad.value()) ... })
 */
export const invalidDates: { label: string; value: () => string }[] = [
  { label: 'dd/mm/yyyy with slashes', value: () => `${pad(day())}/${pad(month())}/${year()}` },
  // A user who types ISO yyyy-mm-dd: the day (13-28) lands in the month position => invalid
  { label: 'yyyy-mm-dd order with day > 12', value: () => `${year()}-${pad(month())}-${pad(faker.number.int({ min: 13, max: 28 }))}` },
  { label: 'month 13', value: () => `${year()}-${pad(day())}-13` },
  { label: 'day 32', value: () => `${year()}-32-${pad(month())}` },
  { label: '30 February', value: () => `${year()}-30-02` },
  { label: 'letters', value: () => faker.string.alpha({ length: 8, casing: 'lower' }) },
];

/** Spaces only (1-5 of them): "looks filled" but is empty. */
export const whitespaceOnly = () => ' '.repeat(faker.number.int({ min: 1, max: 5 }));
