// Usage:
//   npm run coverage            summary by section + the list of cases NOT automated yet
//   npm run coverage:high       same, only Priority = High (what to automate first)
//   npm run coverage:summary    only the summary table
// Extra options (use with: node scripts/coverage.mjs --section=3.4 --priority=High --type=Functional --check=Verified --na --md --summary)
//   --section=3.4      one section (3.10 = all Qualifications)      --priority=High|Medium|Low
//   --type=Functional  Functional|UI|Integration|Security|Compatibility   --check=Verified|"Needs check"
//   --na               also list the cases that are N/A on 5.9 (skipped on purpose)
//   --md               also write the missing list to docs/missing-cases.md
//   --summary          do not print the missing list
// A case counts as automated when its ID (TC-3.1-04) starts a test title in tests/**/*.spec.ts or *.setup.ts (comments do not count).
import fs from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).filter((a) => a.startsWith('--')).map((a) => { const [k, ...v] = a.slice(2).split('='); return [k, v.length ? v.join('=') : true]; }));

function parseCsv(text) {
  const rows = []; let row = []; let field = ''; let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : (e.name.endsWith('.spec.ts') || e.name.endsWith('.setup.ts')) ? [path.join(dir, e.name)] : []);
}

const [header, ...rows] = parseCsv(fs.readFileSync('docs/test-cases.csv', 'utf8')).filter((r) => r.length > 1);
const cases = rows.map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])));
// Only IDs at the start of a test title count: test('TC-3.1-04 ...'), setup(`TC-SETUP-05 ...`). IDs in comments are ignored.
const titleId = /\b(?:test|setup)\(\s*[`'"](TC-[\w.]+-\d+)/g;
const automated = new Set(walk('tests').flatMap((f) => [...fs.readFileSync(f, 'utf8').matchAll(titleId)].map((m) => m[1])));

const isNA = (c) => c['5.9 Check'] === 'N/A on 5.9';
const isDone = (c) => automated.has(c['TC ID']);

// ---------------------------------------------------------------- summary (N/A cases are not counted as missing)
const bySection = {};
for (const c of cases) {
  const s = (bySection[c.Section] ??= { applicable: 0, done: 0, na: 0 });
  if (isNA(c)) s.na++;
  else { s.applicable++; if (isDone(c)) s.done++; }
}
console.log('Automated test cases by section  (done / applicable, N/A on 5.9 are left out)');
for (const [sec, v] of Object.entries(bySection)) {
  const pct = v.applicable ? Math.round((100 * v.done) / v.applicable) : 100;
  console.log(`  ${sec.padEnd(52)} ${String(v.done).padStart(3)} / ${String(v.applicable).padEnd(3)} ${String(pct).padStart(3)}%${v.na ? `   (${v.na} N/A)` : ''}`);
}
const applicable = cases.filter((c) => !isNA(c));
const done = applicable.filter(isDone).length;
const functional = applicable.filter((c) => c['Test Type'] === 'Functional');
const doneFunctional = functional.filter(isDone).length;
const pct = (a, b) => (b ? Math.round((100 * a) / b) : 100);
console.log(`\nTotal      : ${done} / ${applicable.length} (${pct(done, applicable.length)}%)   N/A on 5.9: ${cases.length - applicable.length}   Missing: ${applicable.length - done}`);
console.log(`Functional : ${doneFunctional} / ${functional.length} (${pct(doneFunctional, functional.length)}%)`);

const known = new Set(cases.map((c) => c['TC ID']));
const unknown = [...automated].filter((id) => !known.has(id));
if (unknown.length) console.log(`\nWARNING - IDs in tests but not in the sheet (typo?): ${unknown.join(', ')}`);

// ---------------------------------------------------------------- missing list
if (!args.summary) {
  const sectionOk = (sec) => !args.section || (sec.startsWith(args.section) && /^[ .]?/.test(sec.slice(String(args.section).length)) && [' ', '.'].includes(sec.charAt(String(args.section).length)));
  const filtered = cases.filter((c) =>
    (args.na ? isNA(c) : !isNA(c) && !isDone(c)) &&
    sectionOk(c.Section) &&
    (!args.priority || c.Priority.toLowerCase() === String(args.priority).toLowerCase()) &&
    (!args.type || c['Test Type'].toLowerCase() === String(args.type).toLowerCase()) &&
    (!args.check || c['5.9 Check'].toLowerCase() === String(args.check).toLowerCase()));

  const filters = ['section', 'priority', 'type', 'check'].filter((k) => args[k]).map((k) => `${k}=${args[k]}`).join(', ');
  console.log(`\n${args.na ? 'N/A on 5.9 (skipped on purpose)' : 'NOT automated yet'}: ${filtered.length} case(s)${filters ? `  [filter: ${filters}]` : ''}`);
  const order = { High: 0, Medium: 1, Low: 2 };
  const grouped = {};
  for (const c of filtered) (grouped[c.Section] ??= []).push(c);
  const md = ['# Test cases not automated yet', '', `Generated by scripts/coverage.mjs${filters ? ` (filter: ${filters})` : ''}`, ''];
  for (const [sec, list] of Object.entries(grouped)) {
    list.sort((a, b) => order[a.Priority] - order[b.Priority]);
    console.log(`\n${sec} (${list.length})`);
    md.push(`## ${sec} (${list.length})`, '', '| TC ID | Priority | Type / Approach | 5.9 Check | Title |', '|---|---|---|---|---|');
    for (const c of list) {
      console.log(`  ${c['TC ID'].padEnd(11)} ${c.Priority.padEnd(6)} ${(c['Test Type'] + '/' + c['Test Approach']).padEnd(24)} [${c['5.9 Check']}]  ${c['Test Title']}`);
      md.push(`| ${c['TC ID']} | ${c.Priority} | ${c['Test Type']} / ${c['Test Approach']} | ${c['5.9 Check']} | ${c['Test Title']} |`);
    }
    md.push('');
  }
  if (args.md) { fs.writeFileSync('docs/missing-cases.md', md.join('\n')); console.log('\nWrote docs/missing-cases.md'); }
  console.log('\nFilters: --section=3.4  --priority=High  --type=Functional  --check=Verified  --na  --md  --summary');
}
