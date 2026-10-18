import { faker, lettersOnly, uid } from './random';

const capital = (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

/** Random person name (letters only). */
export const buildPersonName = () => ({
  first: capital(lettersOnly(faker.person.firstName(), 'Alex')),
  middle: capital(lettersOnly(faker.person.middleName(), 'Sam')),
  last: capital(lettersOnly(faker.person.lastName(), 'Smith')),
});

/** Name with an apostrophe and a hyphen, like O'Connor-Smith. */
export const buildSpecialCharName = () =>
  `O'${capital(lettersOnly(faker.person.lastName(), 'Connor'))}-${capital(lettersOnly(faker.person.lastName(), 'Smith'))}`;

export const buildOtherId = () => `OTH-${uid(5).toUpperCase()}`;

/** Text for a free-text custom field. */
export const buildCustomText = () => `${faker.commerce.department()} ${uid(3)}`;
