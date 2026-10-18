# OrangeHRM 5.9 ESS - My Info - Playwright tests

Functional test automation (Playwright + TypeScript) for the **My Info** module as an ESS user on the
public OrangeHRM OS 5.9 demo. AI assistants: read `CLAUDE.md` first.

## Setup
```bash
npm install
npx playwright install chromium
cp .env.example .env      # defaults already point at the public demo + Admin/admin123
```

## How a run works
`tests/auth.setup.ts` logs in as Admin, **creates a brand-new ESS user** (demo users disappear after a while),
logs in as that user and saves the session. All other tests then start already logged in as that ESS user.

## First run (in this order)
1. `npm run test:ui` -> run only `create a fresh ESS user and log in as that user`. It must pass.
   If the Username field on Add Employee is not found, use the fallback noted in `pages/AddEmployeePage.ts`.
2. Run the smoke tests: `npm run test:smoke`.
3. Find locators for new pages with `npm run codegen` (log in as the ESS user in the recorded browser) and put them in `pages/` only.

## Notes
- Shared public demo: keep runs short and serial; don't touch other people's data; don't change the Admin password.
- `docs/test-cases.xlsx` / `.csv` were written from the old 3.3 guide. The **5.9 Check** column shows what is confirmed on 5.9; verify each section before automating it (see CLAUDE.md).
- After editing the xlsx: `python scripts/export_csv.py` refreshes the CSV. `npm run coverage` shows automated vs. total cases.

## Test data (dynamic)
Values are generated at run time by `test-data/` (names, passwords, invalid dates, files...). The seed is printed at the start of every run;
replay with the same values using `SEED=<number> npm test`. Limits (username min 5, password min 7, 1MB photo) live in `test-data/rules.ts`.
Check the generators without the demo: `npm run test:unit`.

## Discovery run
`npm run explore` needs **no credentials**: it logs in as Admin, creates a throw-away ESS user (demo users disappear after a while), walks every My Info tab and writes `explore-output/` (screenshots, `report.md`, JSON, HTML of each page).
It also creates and deletes ONE emergency contact on that throw-away user to record the list row, edit form and delete dialog. Zip `explore-output` and send it to whoever writes the Page Objects.
Optional: `EXPLORE_USERNAME` / `EXPLORE_PASSWORD` in `.env` explore an existing account instead (then nothing is created).

## Which test cases are still missing?
`npm run coverage` prints the summary and the list of cases not automated yet (N/A on 5.9 cases are excluded).
`npm run coverage:next` = Functional + Priority High (automate these first). `npm run coverage:high` = all High (includes Security/Integration/Compatibility, which are Phase 2). `npm run coverage:summary` = table only.
Other filters: `node scripts/coverage.mjs --section=3.4 --type=Functional --check=Verified --na --md` (`--md` writes `docs/missing-cases.md`).

## After a test run
`npm run results` reads `test-results/results.json` and lists passed/failed test case IDs, and the cases that passed but are still `Needs check` in the sheet (mark them Verified, then `python scripts/export_csv.py`).
