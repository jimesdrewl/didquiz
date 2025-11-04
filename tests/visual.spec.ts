const { test, expect } = require('@playwright/test');

test.describe('Index.html visual regression', () => {
  test('quiz page full page snapshot', async ({ page }) => {
    // Navigate to the static page served at /Index.html
    await page.goto('http://localhost:8000/Index.html');

    // Wait for the React app to mount
    await page.waitForSelector('#root');

    // Click 'Start quiz' flow to get into the questions view if needed
    // Fill a temporary name and consent to reveal the quiz
    const nameInput = await page.locator('input[placeholder="e.g., Abby"]');
    if (await nameInput.count()) {
      await nameInput.fill('visual-test');
    }
    const consentBox = await page.locator('input[type=checkbox]');
    if (await consentBox.count()) {
      await consentBox.check();
    }
    const startBtn = page.locator('button', { hasText: 'Start quiz' });
    if (await startBtn.count()) {
      await startBtn.click();
    }

    // Wait for first question to render
    await page.waitForSelector('fieldset');

    // Ensure any animations settle
    await page.waitForTimeout(250);

    // Take a screenshot of the main quiz container
    const container = await page.locator('div.max-w-xl');
    await expect(container).toHaveScreenshot('index-quiz.png');
  });
});
