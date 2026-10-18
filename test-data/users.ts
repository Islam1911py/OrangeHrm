import type { EssUser } from '../support/essUser';
import { faker, lettersOnly, uid } from './random';
import { buildStrongPassword } from './passwords';

/**
 * A brand-new ESS user. Everything is generated, pass `overrides` to fix a value:
 *   buildEssUser({ firstName: 'Fixed' })
 * The time part of the username keeps it unique on the shared demo even when the same SEED is reused.
 */
export function buildEssUser(overrides: Partial<EssUser> = {}): EssUser {
  const unique = `${Date.now().toString(36)}${uid(2)}`;
  return {
    username: `ess_${unique}`,
    password: buildStrongPassword(),
    firstName: lettersOnly(faker.person.firstName(), 'Auto'),
    lastName: `${lettersOnly(faker.person.lastName(), 'User')}${uid(3)}`,
    ...overrides,
  };
}
