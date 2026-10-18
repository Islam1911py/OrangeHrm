# Project context for AI assistants (Claude Code, Cursor, Copilot, etc.)

> Read this file first. `AGENTS.md` is an identical copy for tools that look for that name. Keep both in sync.

## What this project is
Functional test automation with **Playwright + TypeScript** for the **My Info** module of
**OrangeHRM Open Source 5.9** as used by an **ESS user** (Employee Self Service = a normal employee, not an admin).

- **System under test (SUT)**: the public demo `https://opensource-demo.orangehrmlive.com` (login page shows "OrangeHRM OS 5.9").
  UI is the modern Vue/OXD interface (`/web/index.php/...`). Do NOT use selectors from OrangeHRM 3.x/4.x (`#personal_txtEmpFirstName` etc.).
- **Requirements**: there is NO official full requirements document for 5.9. The Starter Help Portal
  (https://starterhelp.orangehrm.com/hc/en-us/categories/360002926580-Employee-User-Guide) only covers Contact Details and Emergency Contacts for PIM.
  So requirements = **observed behaviour of the 5.9 app** (fields, required fields, validation, what an ESS user may not change),
  recorded section by section from screenshots/codegen sessions provided by the developer.
- `docs/legacy-3.3-ESS-User-Guide.pdf` is the OLD 3.3 guide. It is only a reference for the *kind* of rules to check; it is NOT authoritative for 5.9.
- **Test design**: `docs/test-cases.xlsx` (for humans: status tracking) and `docs/test-cases.csv` (plain-text copy for AI tools), 269 cases written from the 3.3 guide.
  Column **5.9 Check** says whether a case was confirmed on 5.9 (`Verified`), is still unconfirmed (`Needs check`) or does not exist on 5.9 (`N/A on 5.9`);
  column **Notes** holds hypotheses to verify (NOT facts). Only the SETUP cases are `Verified` so far.
  **Rule**: before automating a section, check the real behaviour on 5.9, fix the case (steps/expected) if it differs, set 5.9 Check = Verified, then write the test.
  After editing the xlsx run `python scripts/export_csv.py` to refresh the CSV.
- The developer is **learning Playwright**: write simple, readable code, short comments for non-obvious choices, avoid clever abstractions.

## Environment rules (public shared demo!)
- Users created on the demo **disappear after a while**. Therefore `tests/auth.setup.ts` creates a **brand-new ESS user at the start of every run**
  (as Admin: PIM > Add Employee > Create Login Details), logs in as that user and saves the session to `.auth/`. Never rely on an old account.
- The demo is shared and gets reset: do not change the Admin password, do not delete or edit other people's data, keep runs short and serial (`workers: 1`).
- A failure caused by a demo reset / slowness is not a product bug: re-run before reporting.
- The new ESS user starts with **no data** in any section, so tests that need data must create it themselves (and clean up if practical).
- Credentials only in `.env` (git-ignored): `BASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`. The ESS user's generated credentials are in `.auth/ess-user.json`.

## Scope
My Info sections: Personal Details, Photograph, Emergency Contacts, Dependents, Immigration, Job, Salary, Report-to,
Qualifications (Work Experience, Education, Skills, Languages, License, Attachments), Memberships, plus cross-browser checks (`GEN`).
Out of scope: Contact Details (not requested yet), Leave/Time/Performance/Directory/Dashboard, XSS/session timeout/accessibility/performance/localization.

## Test case sheet columns
`TC ID, Section, Test Title, Test Type, Test Approach, Priority, Preconditions, Test Data, Steps, Expected Result, 5.9 Check, Notes`
(the xlsx also has Automation (generated from the test code), Status and Actual Result). **Preconditions is empty unless a case needs more than the default:
the ESS user created by the setup step (no data) is logged in and the section is open.**
- **Test Type**: `Functional`, `UI`, `Integration`, `Security`, `Compatibility`. **Test Approach**: `Positive`, `Negative`, `Boundary`.
- **Priority**: `High` = smoke (tag `@smoke`), `Medium`, `Low`. IDs like `TC-3.1-04`; never renumber existing IDs.
- Phase 1 (first): Functional (+UI): main flows, validation, read-only permissions, High priority first.
  Phase 2: Integration (needs Admin), Security (API-level via `request`), Compatibility (`ALL_BROWSERS=1`).

## Project structure
```
playwright.config.ts      "setup" project (creates ESS user + login) -> "chromium" project reuses the saved session
tests/auth.setup.ts       creates the ESS user and saves .auth/ess-session.json + .auth/ess-user.json
tests/my-info/*.spec.ts   one spec per section (00-smoke.spec.ts exists; section specs are next)
tests/explore/            DISCOVERY run (npm run explore): creates a throw-away ESS user, walks all My Info tabs and writes explore-output/ (screenshots, fields, messages, HTML). Creates + deletes ONE emergency contact. Not a real test
tests/admin/*.spec.ts     SETUP cases that run as Admin (Add Employee validation); use `test.use({ storageState: { cookies: [], origins: [] } })`
pages/                    Page Objects: ALL locators live here, never in spec files
fixtures/index.ts         fixtures (essUser = credentials/empNumber of this run's ESS user)
support/                  constants + ESS user type and file IO (saved credentials)
test-data/                DYNAMIC test data: generators, factories, rules (see below). Specs never hard-code values
tests/unit/               fast checks of the generators (no browser/demo): npm run test:unit
scripts/coverage.mjs      automated vs. total cases
docs/                     test-cases.csv/.xlsx + legacy 3.3 guide
```

## Conventions
1. Test title starts with the test case ID: `test('TC-3.1-04 Edit and save Full Name', ...)`; `@smoke` tag on every High case.
2. Page Object Model; locators only in `pages/`. New section = new class (e.g. `PersonalDetailsPage`).
3. **Locators**: prefer `getByRole`/`getByLabel`/`getByText`. OrangeHRM 5 inputs often have no accessible name; use the
   `.oxd-input-group` + label text pattern (see `AddEmployeePage.username`). Avoid positional `nth()` unless proven. **Never invent selectors**:
   if a locator has not been confirmed with codegen/inspector, mark it `UNVERIFIED` in a comment and tell the developer to check it.
4. No `waitForTimeout`. Use web-first assertions (`expect(locator).toBeVisible()`).
5. Tests are independent; create own data, verify persistence by reloading, then assert stored values.
6. Expected results come from the verified 5.9 behaviour. Do not weaken assertions to make tests pass; report mismatches (`test.fixme()` + comment).
7. Relative URLs without leading slash: `page.goto('web/index.php/...')`.
8. Upload tests: generate files in code (`Buffer.alloc(1_048_576 + 1)`), don't commit big files.
9. Data-driven tests: array + `for` loop. Use a stable LABEL in the test title (e.g. `invalidDates` has `label` + `value()`), never the random value, so titles/IDs stay stable.
10. **Test data is dynamic and lives in `test-data/`** (never hard-code values in specs):
    - `rules.ts` = verified business limits (username min 5, password min 7, photo 1MB). Boundary values are CALCULATED from it (`tooShortUsername()` = min - 1 chars).
      Add a rule only after verifying it on 5.9; if a limit changes, change it there only.
    - `random.ts` = one seeded faker. `passwords.ts`, `users.ts` (`buildEssUser(overrides)`), `validation.ts` (`invalidDates`, `validIsoDate()`), `files.ts` (`buildFile(bytes, ext)`, `fileSizes`).
    - **Seed**: playwright.config.ts sets `SEED` once per run and prints it. Replay a failure with identical data: `SEED=<n> npm test`.
    - Values that must be unique on the shared demo (usernames) include a time part, so they stay unique even with the same SEED.
    - New generator = new function in `test-data/` + a check in `tests/unit/test-data.spec.ts`.
    - Fixed (non-random) values are fine only when the requirement itself is a specific value; put them in `test-data/` too.

## Lessons from real runs (keep these rules)
- `getByRole(..., { name })` matches a SUBSTRING: "Male" also matches "Female". Use `exact: true` (genderMale/genderFemale do).
- After a login, wait until the side panel is visible BEFORE navigating (`LoginPage.loginAndWait`), otherwise `page.goto` fails with `net::ERR_ABORTED`.
- A failing fixture fails every test that uses it, so one bad locator in a Page Object can show up as many failures. Read the FIRST error.
- Passed in a real run on the live demo: setup (fresh ESS user + login), TC-3.0-01 (10 tabs as links), TC-3.0-07 (side panel), TC-3.0-08 (URL pattern).
- After a run: `npm run results` lists passed/failed case IDs and which passed cases are still "Needs check" (set them to Verified in the xlsx, then `python scripts/export_csv.py`).

## Facts verified on 5.9 so far
- Login: `getByRole('textbox',{name:'Username'})`, `'Password'`, `getByRole('button',{name:'Login'})`; after login `getByRole('navigation',{name:'Sidepanel'})` is visible.
- Side panel links (role=link): Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Directory, Maintenance, Claim, Buzz (Admin view).
- PIM > Add Employee: First/Middle/Last Name textboxes; Employee Id auto-generated; "Create Login Details" switch (`.oxd-switch-input`, OFF by default);
  Username, Password, Confirm Password (`input[type="password"]` first/nth(1)); Status Enabled/Disabled radios; Save/Cancel. Empty Save shows "Required";
  mismatched passwords show "Passwords do not match". After Save the URL becomes `.../pim/viewPersonalDetails/empNumber/<n>`.
- Add Employee validation rules (confirmed by codegen assertions): Username shorter than 5 chars -> "Should be at least 5 ..."; Password shorter than 7 chars
  -> "Should have at least 7 ...". `generateEssUser()` respects both (username `ess_...`, password 13 chars). `getByRole('textbox').nth(5)` is the Username input on that page.
- **Add Attachment form (seen on 5.9 in a cropped screenshot, maybe the Admin view)**: `Select File*` (required) with a Browse button, hint "Accepts up to 1MB" (no file-type restriction shown), optional Comment textarea, **Cancel** and **Save** buttons (the button is Save, not Upload).
- Photo rule on Add Employee: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px" (same as 3.3).
- **ESS view (screenshots of user "Tia Mohamed")**: side panel = Leave, Time, My Info, Performance, Dashboard, Directory, Claim, Buzz (NO Admin, PIM, Recruitment, Maintenance).
  My Info tabs (10): Personal Details, Contact Details, Emergency Contacts, Dependents, Immigration, Job, Salary, Report-to, Qualifications, Memberships. Salary and Job tabs ARE visible to ESS.
  URL pattern: `web/index.php/pim/viewPersonalDetails/empNumber/<n>`, `.../pim/contactDetails/empNumber/<n>`.
- **Personal Details (ESS)**: editable = Employee Full Name (First/Middle/Last, `Employee Full Name*`), Other Id, License Expiry Date, Nationality, Marital Status, Gender (Male/Female, none selected for a new user).
  Greyed out (read-only) = Employee Id, Driver's License Number, Date of Birth. **No Edit button** (Save directly). Nick Name, Smoker, Military Service, SSN/SIN are NOT shown.
  Dropdowns are custom OXD controls ("-- Select --"). A "Custom Fields" section (Blood Type dropdown, Test_Field) has its own Save. These custom fields are set by Admin on the shared demo and CHANGE (DEPARTMENT was seen once, later gone): never hard-code a fixed list. Attachments panel: Add button + columns
  File Name, Description, Size, Type, Date Added, Added By, Actions. Two Save buttons on the page: first = personal, second = custom fields.
- **Date format is `yyyy-dd-mm` (day BEFORE month)**, shown as the placeholder of the date fields (`rules.dateFormat`). Never write ISO yyyy-mm-dd in tests or data; use `validDate()` / `invalidDates`.
- **Admin view vs ESS view (same URL)**: the Admin's Personal Details (header shows the admin's name, side panel HAS Admin and PIM, e.g. `.../pim/viewPersonalDetails/empNumber/267`)
  shows Employee Id, Driver's License Number and Date of Birth as editable WHITE inputs; the ESS user sees them GREYED. When reading a screenshot, check the header name and the side panel
  (ESS has no Admin/PIM) to know which view it is. Screenshots without header/side panel are NOT proof of the ESS view.
- Custom Fields: the heading is seen in an ESS screenshot; the field names (Blood Type, Test_Field; DEPARTMENT only once) and the Add Attachment form come from cropped screenshots (could be the Admin view) => `Needs check`.
- **Not verified yet**: what Save/validation actually does inside My Info (toast text, error texts, dropdown option roles, CSS classes `.oxd-*`), and the other tabs. Locators marked UNVERIFIED in `pages/`.

## Commands
```
npm install && npx playwright install chromium    # first time
cp .env.example .env
npm run test:ui          # interactive mode (best for learning/debugging)
npm test                 # all    |   npm run test:smoke   # only @smoke
npm run codegen          # record actions / discover locators   |  npm run report  # last HTML report
npm run explore           # discovery: creates its own throw-away ESS user (no credentials needed), writes explore-output/
npm run test:unit         # check the test-data generators (no demo needed)
npm run results          # after a run: passed/failed IDs + which cases can be marked Verified
npm run typecheck        # TypeScript check                      |  npm run coverage # automated vs. missing cases (coverage:next = Functional + High = what to automate next; coverage:high = High only) + list of cases NOT automated yet (coverage:high = only High, coverage:summary = table only)
```

## Workflow for adding a test
1. Open the section on the 5.9 app as the ESS user; record fields/validation/permissions (screenshots or codegen). Update the sheet rows if needed.
2. Create/extend the Page Object (confirmed locators only). 3. Write the test (ID first in title, `@smoke` if High).
4. `npm run typecheck`, run it, `npm run coverage`. 5. If the app contradicts the sheet, fix the sheet or `fixme` the test and report; never silently weaken it.

## Status
- Done: dynamic test-data layer (seeded, 8 unit checks passing offline); 5.9 setup (TC-SETUP-05) + 5 Admin validation tests; ESS smoke (TC-3.0-01, 07, 08);
  Personal Details spec `tests/my-info/3.1-personal-details.spec.ts` (23 tests: display, read-only, edit/save, validation, custom fields). Typechecks; **the setup and the 3 smoke tests (TC-3.0-01/07/08) have passed on the live demo; the Personal Details tests had not executed yet (a locator bug in the fixture, now fixed)**.
- Not automated on purpose: TC-3.1-17/18/19/24 (N/A on 5.9). Not yet: TC-3.1-01, 08, 12, 25, 27.
- Next: run the suite headed; fix UNVERIFIED locators in `pages/PersonalDetailsPage.ts`; set 5.9 Check = Verified for cases whose tests pass (update the xlsx, then `python scripts/export_csv.py`).
  Then screenshots of the next tab (Emergency Contacts) to build the CRUD pattern (list + Add form + delete) and reuse it for Dependents, Immigration, Qualifications, Memberships.
