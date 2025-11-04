Visual regression tests (Playwright)

Overview
- This project includes a Playwright visual test that opens `Index.html`, starts the quiz flow, and captures a screenshot of the main quiz area.

Quick start
1. Install dependencies locally:

```bash
npm install
npx playwright install
```

2. Generate baseline screenshots (first run or when intentionally updating images):

```bash
npm run test:visual:update
```

3. Run visual tests (compare to committed baselines):

```bash
npm run test:visual
```

Notes
- The test uses Python's built-in HTTP server to serve the repository at http://localhost:8000. Ensure `python3` is available in PATH.
- The first run will create screenshot baselines in `tests/.` — commit those files to enable CI comparisons.
- Playwright will download browser binaries during `npx playwright install` (this can be large).
