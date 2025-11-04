// Playwright config for visual regression testing of the static Index.html
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 30_000,
  expect: {
    // allow small pixel diffs
    toHaveScreenshot: { maxDiffPixelRatio: 0.001 }
  },
  use: {
    headless: true,
    viewport: { width: 1024, height: 768 }
  },
  webServer: {
    // Serve the repository root on port 8000 using Python's tiny HTTP server.
    command: 'python3 -m http.server 8000',
    port: 8000,
    reuseExistingServer: true,
  }
});
