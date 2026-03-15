**Assertions Used**
-Playwright’s built-in assertions were used to verify expected results# ecommerce-automation
-await expect(page.locator('.shopping_cart_badge')).toBeVisible();

**Framework Used**
-Playwright with JavaScript.

**Why This Framework**
-Playwright supports multiple browsers
-Has built-in assertions and auto-waiting
-Is fast, and integrates easily with CI/CD pipelines.

**Gherkin / Cucumber**
-This project does not use Gherkin or Cucumber. Tests are written using the Playwright test runner.

**Handling Popup Messages**
-await page.locator('button:has-text("Accept")').click();

**CI/CD Integration**
-CI/CD can be used to automatically run automation tests whenever code changes are pushed to the repository. In this project, GitHub Actions can be used to trigger Playwright tests whenever new code is committed.
