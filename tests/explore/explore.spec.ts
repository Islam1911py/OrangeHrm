/**
 * DISCOVERY run (not a real test). Creates a FRESH ESS user (demo users disappear after a while), walks through every
 * My Info tab and writes what it sees to `explore-output/`: screenshots, report.md, JSON (fields, labels, required, disabled,
 * dropdown options, buttons, table columns, validation messages, toasts) and HTML of each page (real class names for locators).
 * Send the whole `explore-output` folder (zipped). Run:  npm run explore
 *
 * No username/password needed: it logs in as Admin (ADMIN_USERNAME/ADMIN_PASSWORD, default Admin/admin123), creates a
 * throw-away ESS user and explores as that user. Optional: set EXPLORE_USERNAME + EXPLORE_PASSWORD in .env to explore an existing
 * account instead (then NO data is ever created).
 *
 * With the throw-away user it also creates ONE emergency contact (to see the list row, the edit form and the delete dialog)
 * and deletes it again. Everything else is only opened and cancelled; "Save" on other forms is clicked only when the form is EMPTY
 * and has required fields (validation blocks it).
 */
import { test, Page, Locator } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { LoginPage } from '../../pages/LoginPage';
import { AddEmployeePage } from '../../pages/AddEmployeePage';
import { buildEssUser, buildFile, buildPersonName, faker, fileSizes, formatDate } from '../../test-data';

const OUT = 'explore-output';
const report: string[] = [];
const problems: string[] = [];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const md = (...lines: string[]) => { report.push(...(lines.length ? lines : [''])); };

async function settle(page: Page) {
  await page.waitForLoadState('networkidle').catch(() => undefined);
  await page.locator('.oxd-loading-spinner, .oxd-form-loader').first().waitFor({ state: 'hidden', timeout: 8000 }).catch(() => undefined);
}

/** Read every control on the page (runs inside the browser). */
async function readControls(page: Page) {
  return page.evaluate(() => {
    const group = (el: Element) => el.closest('.oxd-input-group');
    const labelOf = (el: Element) => group(el)?.querySelector('label')?.textContent?.trim() ?? '';
    const requiredOf = (el: Element) => {
      const label = group(el)?.querySelector('label');
      return !!label && getComputedStyle(label, '::after').content.includes('*');
    };
    const text = (els: Element[]) => els.map((e) => e.textContent?.trim() ?? '').filter(Boolean);
    return {
      url: location.href,
      headings: text([...document.querySelectorAll('h5, h6, .orangehrm-main-title, .oxd-text--h5, .oxd-text--h6')]),
      tabs: text([...document.querySelectorAll('.orangehrm-tabs-item')]),
      inputs: [...document.querySelectorAll('input, textarea')].map((el) => {
        const i = el as HTMLInputElement;
        return { label: labelOf(el), type: i.type, name: i.getAttribute('name'), placeholder: i.getAttribute('placeholder'),
          value: i.type === 'password' ? '' : i.value, disabled: i.disabled, required: requiredOf(el) };
      }),
      dropdowns: [...document.querySelectorAll('.oxd-select-text')].map((el) => ({
        label: labelOf(el), value: el.querySelector('.oxd-select-text-input')?.textContent?.trim() ?? '',
        disabled: el.classList.contains('oxd-select-text--disabled'), required: requiredOf(el) })),
      buttons: [...document.querySelectorAll('button')].map((b) => ({ text: b.textContent?.trim() ?? '', disabled: b.disabled })).filter((b) => b.text),
      tableColumns: text([...document.querySelectorAll('.oxd-table-header-cell')]),
      tableRows: document.querySelectorAll('.oxd-table-card').length,
      errors: text([...document.querySelectorAll('.oxd-input-field-error-message, .oxd-input-group__message')]),
      toasts: text([...document.querySelectorAll('.oxd-toast')]),
      dialogs: text([...document.querySelectorAll('.oxd-dialog-container-default')]),
      emptyMessage: document.body.innerText.includes('No Records Found'),
    };
  });
}

/** Screenshot + controls + aria snapshot + HTML of the current page, appended to report.md. */
async function dump(page: Page, name: string, note = '') {
  for (const d of ['screens', 'json', 'html']) fs.mkdirSync(path.join(OUT, d), { recursive: true });
  await settle(page);
  const file = slug(name);
  await page.screenshot({ path: path.join(OUT, 'screens', `${file}.png`), fullPage: true });
  const data = await readControls(page);
  fs.writeFileSync(path.join(OUT, 'json', `${file}.json`), JSON.stringify(data, null, 2));
  await page.locator('body').ariaSnapshot().then((s) => fs.writeFileSync(path.join(OUT, 'json', `${file}.aria.yml`), s)).catch(() => undefined);
  const html = await page.evaluate(() => (document.querySelector('.oxd-dialog-container-default') ?? document.querySelector('.orangehrm-background-container') ?? document.body).outerHTML);
  fs.writeFileSync(path.join(OUT, 'html', `${file}.html`), html.slice(0, 300_000));

  md(`## ${name}`);
  if (note) md(note);
  md(`- URL: ${data.url}`, `- Screenshot: screens/${file}.png   HTML: html/${file}.html`);
  if (data.tabs.length) md(`- Tabs: ${data.tabs.join(' | ')}`);
  if (data.headings.length) md(`- Headings: ${data.headings.join(' | ')}`);
  if (data.inputs.length || data.dropdowns.length) {
    md('', '| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |', '|---|---|---|---|---|---|---|');
    for (const i of data.inputs.filter((x) => x.type !== 'hidden')) md(`| ${i.label} | ${i.type} | ${i.value} | ${i.disabled} | ${i.required} | ${i.name ?? ''} | ${i.placeholder ?? ''} |`);
    for (const d of data.dropdowns) md(`| ${d.label} | dropdown | ${d.value} | ${d.disabled} | ${d.required} | | |`);
  }
  if (data.buttons.length) md(`- Buttons: ${data.buttons.map((b) => b.text + (b.disabled ? ' (disabled)' : '')).join(' | ')}`);
  if (data.tableColumns.length) md(`- Table columns: ${data.tableColumns.join(' | ')}  (rows: ${data.tableRows}${data.emptyMessage ? ', "No Records Found"' : ''})`);
  if (data.errors.length) md(`- Validation messages: ${data.errors.join(' | ')}`);
  if (data.toasts.length) md(`- Toasts: ${data.toasts.join(' | ')}`);
  if (data.dialogs.length) md(`- Dialog text: ${data.dialogs.join(' | ')}`);
  md();
  return data;
}

/** Run a step; a failure is written to the report and the walk continues. */
async function step(name: string, fn: () => Promise<void>) {
  try {
    await fn();
    console.log(`ok   ${name}`);
  } catch (e) {
    const msg = (e as Error).message.split('\n')[0];
    problems.push(`${name}: ${msg}`);
    md(`## ${name}`, `- STEP FAILED: ${msg}`, '');
    console.log(`FAIL ${name}: ${msg}`);
  }
}

/** Open every dropdown of the page and list its options. */
async function dropdownOptions(page: Page, title: string) {
  const dropdowns = page.locator('.oxd-select-text');
  const count = await dropdowns.count();
  for (let i = 0; i < count; i++) {
    const dd = dropdowns.nth(i);
    const label = (await dd.locator('xpath=ancestor::*[contains(@class,"oxd-input-group")][1]//label').first().textContent().catch(() => '')) ?? `dropdown ${i}`;
    await dd.click();
    const options = (await page.getByRole('option').allInnerTexts().catch(() => [])).map((t) => t.trim());
    const found = options.length ? options : (await page.locator('.oxd-select-option').allInnerTexts()).map((t) => t.trim());
    md(`- ${title} > ${label.trim()} options: ${found.join(' | ')}`);
    await page.keyboard.press('Escape');
  }
}

test.use({ storageState: { cookies: [], origins: [] }, viewport: { width: 1440, height: 1000 } });
test.setTimeout(20 * 60_000);

test('EXPLORE My Info as an ESS user', async ({ page }) => {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  md('# My Info exploration report', `Run: ${new Date().toISOString()}`, '');

  try {
    const given = !!(process.env.EXPLORE_USERNAME && process.env.EXPLORE_PASSWORD);
    const fresh = !given; // fresh = we created a throw-away ESS user, so creating/deleting a test record is fine
    let username = process.env.EXPLORE_USERNAME ?? '';
    let password = process.env.EXPLORE_PASSWORD ?? '';
    const login = new LoginPage(page);
    const side = page.getByRole('navigation', { name: 'Sidepanel' });
    const tabNames = ['Personal Details', 'Contact Details', 'Emergency Contacts', 'Dependents', 'Immigration', 'Job', 'Salary', 'Report-to', 'Qualifications', 'Memberships'];
    const tab = (name: string) => page.getByRole('link', { name, exact: true }).or(page.locator('.orangehrm-tabs-item', { hasText: name })).first();
    const field = (label: string) => page.locator('.oxd-input-group').filter({ has: page.getByText(label, { exact: true }) }).locator('input');

    await step('Login page', async () => {
      await login.goto();
      await dump(page, 'Login page');
    });

    if (fresh) {
      await step('Create a fresh ESS user as Admin', async () => {
        await login.login(process.env.ADMIN_USERNAME ?? 'Admin', process.env.ADMIN_PASSWORD ?? 'admin123');
        await side.waitFor();
        const ess = buildEssUser();
        const add = new AddEmployeePage(page);
        await add.goto();
        await dump(page, 'Admin - Add Employee form');
        ess.empNumber = await add.createWithLogin(ess);
        username = ess.username;
        password = ess.password;
        md('## Throw-away ESS user', `- username: ${ess.username}  (empNumber ${ess.empNumber}); disposable, no data`, '');
        await page.context().clearCookies();
        await login.goto();
      });
      if (!username) throw new Error('Could not create the ESS user. See report.md');
    }

    await step('Login as the ESS user and landing page', async () => {
      await login.login(username, password);
      await side.waitFor();
      await dump(page, 'Landing page after login');
      const links = await side.getByRole('link').allInnerTexts();
      md(`- Side panel links: ${links.map((l) => l.trim()).join(' | ')}`, '');
    });

    await step('Open My Info', async () => {
      await side.getByRole('link', { name: 'My Info', exact: true }).click();
      await settle(page);
      md(`- After clicking My Info the URL is: ${page.url()}`, '');
    });

    // ---------------- every tab, view only
    for (const name of tabNames) {
      await step(`Tab: ${name}`, async () => {
        await tab(name).click();
        await dump(page, `Tab - ${name}`);
      });
    }

    // ---------------- Personal Details: dropdown options, validation texts, success toast
    await step('Personal Details: dropdown options', async () => {
      await tab('Personal Details').click();
      await settle(page);
      await dropdownOptions(page, 'Personal Details');
      md();
    });

    await step('Personal Details: invalid date message', async () => {
      await field('License Expiry Date').fill('abc');
      await page.getByRole('heading').first().click().catch(() => undefined); // blur
      await dump(page, 'Personal Details - invalid date typed', 'Typed "abc" in License Expiry Date (not saved).');
      await page.reload();
      await settle(page);
    });

    await step('Personal Details: empty first name + Save', async () => {
      await page.getByRole('textbox', { name: 'First Name' }).fill('');
      await page.getByRole('button', { name: 'Save' }).first().click();
      await dump(page, 'Personal Details - empty first name', 'First Name cleared and Save clicked (blocked by validation, nothing saved).');
      await page.reload();
      await settle(page);
    });

    await step('Personal Details: Save without changes (toast text)', async () => {
      await page.getByRole('button', { name: 'Save' }).first().click();
      await page.locator('.oxd-toast').first().waitFor({ timeout: 8000 }).catch(() => undefined);
      await dump(page, 'Personal Details - saved unchanged', 'Saved with unchanged values to read the success toast.');
    });

    // ---------------- Add forms (opened, inspected, cancelled)
    async function exploreAddForm(label: string, tabName: string, addIndex = 0, dateProbe?: [string, string]) {
      await step(`Add form: ${label}`, async () => {
        await tab(tabName).click();
        await settle(page);
        await page.getByRole('button', { name: 'Add' }).nth(addIndex).click();
        await settle(page);
        const data = await dump(page, `Add form - ${label}`);
        await dropdownOptions(page, label);
        if (dateProbe) {
          // "to" earlier than "from", both valid dates in the app format yyyy-dd-mm
          await field(dateProbe[0]).fill(formatDate(2030, 10, 10));
          await field(dateProbe[1]).fill(formatDate(2020, 10, 10));
          await page.getByRole('heading').first().click().catch(() => undefined);
          await dump(page, `Add form - ${label} - ${dateProbe[1]} before ${dateProbe[0]}`, 'Date order probe (nothing saved).');
          await field(dateProbe[0]).fill('');
          await field(dateProbe[1]).fill('');
        }
        const hasRequired = data.inputs.some((i) => i.required) || data.dropdowns.some((d) => d.required);
        if (hasRequired) {
          await page.getByRole('button', { name: 'Save' }).last().click(); // empty form: blocked by "Required"
          await dump(page, `Add form - ${label} - empty Save`, 'Empty form saved: expecting "Required" messages only.');
        } else {
          md(`- ${label}: no required field detected, empty Save NOT tried (it could create a record).`, '');
        }
        await page.getByRole('button', { name: 'Cancel' }).last().click().catch(() => undefined);
        await settle(page);
      });
    }
    await exploreAddForm('Emergency Contacts', 'Emergency Contacts');
    await exploreAddForm('Dependents', 'Dependents');
    await exploreAddForm('Immigration', 'Immigration', 0, ['Issued Date', 'Expiry Date']);
    await exploreAddForm('Memberships', 'Memberships', 0, ['Subscription Commence Date', 'Subscription Renewal Date']);
    const qualificationSections: [string, [string, string]?][] = [
      ['Work Experience', ['From', 'To']], ['Education', ['Start Date', 'End Date']], ['Skills'], ['Languages'], ['License', ['Issued Date', 'Expiry Date']], ['Attachments'],
    ];
    for (let i = 0; i < qualificationSections.length; i++) {
      await exploreAddForm(`Qualifications - ${qualificationSections[i][0]}`, 'Qualifications', i, qualificationSections[i][1]);
    }

    await step('Dependents: relationship "Other" shows Please Specify', async () => {
      await tab('Dependents').click();
      await settle(page);
      await page.getByRole('button', { name: 'Add' }).first().click();
      await page.locator('.oxd-select-text').first().click();
      await page.getByRole('option', { name: 'Other', exact: true }).click();
      await dump(page, 'Dependents - relationship Other selected');
      await page.getByRole('button', { name: 'Cancel' }).last().click().catch(() => undefined);
    });

    // ---------------- Attachment size / type messages (nothing is saved)
    await step('Attachment: size and type messages', async () => {
      await tab('Personal Details').click();
      await settle(page);
      await page.getByRole('button', { name: 'Add' }).last().click();
      const input = page.locator('input[type="file"]');
      for (const [label, file] of [
        ['exactly 1MB', buildFile(fileSizes.exactlyAtLimit(), 'txt')],
        ['1 byte over 1MB', buildFile(fileSizes.justOverLimit(), 'txt')],
        ['small pdf', buildFile(fileSizes.small(), 'pdf')],
      ] as const) {
        await input.setInputFiles(file);
        await settle(page);
        await dump(page, `Attachment - ${label}`, `File ${file.name} selected, NOT saved.`);
      }
      await page.getByRole('button', { name: 'Cancel' }).last().click().catch(() => undefined);
    });

    // ---------------- ONE full CRUD cycle (only with the throw-away user): create, list row, edit form, delete dialog
    if (fresh) {
      await step('Emergency Contacts: create, edit form, delete dialog', async () => {
        const name = buildPersonName();
        await tab('Emergency Contacts').click();
        await settle(page);
        await page.getByRole('button', { name: 'Add' }).first().click();
        await settle(page);
        await field('Name').fill(`${name.first} ${name.last}`);
        await field('Relationship').fill('Sibling');
        await field('Home Telephone').fill(faker.string.numeric(10));
        await page.getByRole('button', { name: 'Save' }).last().click();
        await page.locator('.oxd-toast').first().waitFor({ timeout: 10_000 }).catch(() => undefined);
        await dump(page, 'Emergency Contacts - after Save (toast and list row)');

        const row = page.locator('.oxd-table-card').first();
        md(`- First list row HTML: html/emergency-contacts-list-row.html`, '');
        fs.writeFileSync(path.join(OUT, 'html', 'emergency-contacts-list-row.html'), (await row.evaluate((el) => el.outerHTML)).slice(0, 50_000));

        await row.locator('button:has(.bi-pencil-fill)').first().click();
        await settle(page);
        await dump(page, 'Emergency Contacts - edit form');
        await page.getByRole('button', { name: 'Cancel' }).last().click().catch(() => undefined);
        await settle(page);

        await page.locator('.oxd-table-card .oxd-checkbox-wrapper').first().click();
        await dump(page, 'Emergency Contacts - row selected (Delete Selected button)');
        await page.getByRole('button', { name: /Delete Selected/ }).click();
        await page.locator('.oxd-dialog-container-default').waitFor({ timeout: 8000 });
        await dump(page, 'Emergency Contacts - delete confirmation dialog');
        await page.getByRole('button', { name: /Yes, Delete/ }).click();
        await page.locator('.oxd-toast').first().waitFor({ timeout: 10_000 }).catch(() => undefined);
        await dump(page, 'Emergency Contacts - after Delete');
      });
    } else {
      md('## Emergency Contacts CRUD cycle', '- skipped: exploring an existing account, no data is created.', '');
    }
  } finally {
    md('# Problems during the walk', problems.length ? problems.map((p) => `- ${p}`).join('\n') : '- none');
    fs.writeFileSync(path.join(OUT, 'report.md'), report.join('\n'));
    console.log(`\nDone. Send the folder "${OUT}" (zipped). Problems: ${problems.length}`);
  }
});
