# OrangeHRM 5.9 ESS - My Info Playwright Test Automation

[![Allure Report](https://img.shields.io/badge/Allure_Report-Live-brightgreen)](https://Islam1911py.github.io/OrangeHrm/)
[![CI/CD Pipeline](https://github.com/Islam1911py/OrangeHrm/actions/workflows/allure.yml/badge.svg)](https://github.com/Islam1911py/OrangeHrm/actions/workflows/allure.yml)

Functional test automation suite (Playwright + TypeScript) for the **My Info** module as an ESS user on the public OrangeHRM OS 5.9 demo. 

---

> ⚠️ **Experimental & Demo Status Notice:**
> * **Target System (SUT):** The core test framework is designed to run against **OrangeHRM OS 5.9**.
> * **User Guide Reference:** The test suite structure and logic were initially derived from the older **User Guide Version 3.3**.
> * **Test Failures Disclaimer:** Due to structural UI differences and locator discrepancies between v3.3 and v5.9, some test failures are currently expected and treated as experimental.
> * **Next Steps:** Locators and Page Object Models (POM) are actively being refactored and updated to achieve 100% compatibility with version 5.9.

---

## 📊 Live Allure Report & CI/CD
- **Interactive Report:** View the live test execution results and historical trends via [Live Allure Report](https://Islam1911py.github.io/OrangeHrm/)[cite: 8].
- **CI/CD Pipeline:** Fully automated execution on every push using GitHub Actions (`.github/workflows/allure.yml`).

---

## 🛠️ Setup & Execution

### Installation
```bash
npm install
npx playwright install chromium
cp .env.example .env
Run Tests Locally
Bash
# Run unit tests
npm run test:unit

# Run full test suite with Playwright
npx playwright test

# Generate and view Allure report locally
npm run allure:generate
npm run allure:open
📂 Project Structure
tests/: End-to-end and unit test specifications.

pages/: Page Object Models (POM) for OrangeHRM modules.

fixtures/: Test data setups and user sessions.

.github/workflows/: CI/CD automation and Allure report deployment.
