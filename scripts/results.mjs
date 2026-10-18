// Usage: npm run results   (after any test run)
// Reads test-results/results.json and tells you, per test case ID, what passed/failed, and which cases that PASSED are still
// "Needs check" in docs/test-cases.csv: those can be set to Verified in the xlsx (then: python scripts/export_csv.py).
import fs from 'node:fs';

const file = 'test-results/results.json';
if (!fs.existsSync(file)) { console.log('No test-results/results.json yet. Run some tests first.'); process.exit(0); }
const res = JSON.parse(fs.readFileSync(file, 'utf8'));
const byId = {};
(function walk(suite) {
  for (const sp of suite.specs ?? []) { const m = /^(TC-[\w.]+-\d+)/.exec(sp.title); if (m) (byId[m[1]] ??= []).push(sp.ok); }
  for (const s of suite.suites ?? []) walk(s);
})({ suites: res.suites });

function parseCsv(text) {
  const rows = []; let row = []; let f = ''; let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"' && text[i + 1] === '"') { f += '"'; i++; } else if (c === '"') q = false; else f += c; }
    else if (c === '"') q = true; else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; } else if (c !== '\r') f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  return rows;
}
const [h, ...rows] = parseCsv(fs.readFileSync('docs/test-cases.csv', 'utf8')).filter((r) => r.length > 1);
const sheet = Object.fromEntries(rows.map((r) => [r[h.indexOf('TC ID')], { check: r[h.indexOf('5.9 Check')], title: r[h.indexOf('Test Title')] }]));

const passed = Object.keys(byId).filter((id) => byId[id].every(Boolean));
const failed = Object.keys(byId).filter((id) => !byId[id].every(Boolean));
console.log(`Passed: ${passed.length}   Failed: ${failed.length}   (cases in this run: ${Object.keys(byId).length})`);
if (failed.length) { console.log('\nFAILED (do not mark Verified):'); for (const id of failed) console.log(`  ${id}  ${sheet[id]?.title ?? ''}`); }
const promote = passed.filter((id) => sheet[id]?.check === 'Needs check');
console.log(`\nPassed and still "Needs check" in the sheet -> set 5.9 Check = Verified (${promote.length}):`);
for (const id of promote) console.log(`  ${id}  ${sheet[id].title}`);
const unknown = Object.keys(byId).filter((id) => !sheet[id]);
if (unknown.length) console.log(`\nIDs not in the sheet: ${unknown.join(', ')}`);
