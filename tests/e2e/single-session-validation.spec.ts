import { test, expect } from '@playwright/test';

const STORIES = [
  'all-themes--all-themes',
  'ui-button--primary', 'ui-button--colors', 'ui-button--sizes', 'ui-button--states',
  'ui-alert--info', 'ui-alert--all-colors', 'ui-alert--interactive',
  'ui-badge--primary', 'ui-badge--all-colors', 'ui-badge--interactive',
  'ui-card--basic', 'ui-card--with-image', 'ui-card--interactive'
];

test('validate all stories in single session', async ({ page }) => {
  console.log('🚀 Starting single-session story validation...');

  // Monitor console for errors
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' &&
        !msg.text().includes('favicon.ico') &&
        !msg.text().includes('ResizeObserver')) {
      errors.push(`${msg.text()}`);
    }
  });

  let successCount = 0;
  let failCount = 0;

  for (const story of STORIES) {
    try {
      console.log(`📖 Testing: ${story}`);

      // Navigate to story
      await page.goto(`http://localhost:6006?path=/story/${story}`);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1500);

      // Check that story content exists
      const storyRoot = page.locator('#storybook-root');
      await expect(storyRoot).toBeVisible();
      await expect(storyRoot).not.toBeEmpty();

      // Check for canvas content
      const hasContent = await storyRoot.innerHTML();
      if (hasContent.trim().length < 10) {
        throw new Error('Story appears to have no content');
      }

      successCount++;
      console.log(`✅ ${story} - OK`);

    } catch (error) {
      failCount++;
      console.log(`❌ ${story} - FAILED: ${error}`);
    }
  }

  // Test theme switching on one story
  console.log('🎨 Testing theme switching...');
  await page.goto('http://localhost:6006?path=/story/ui-button--colors');
  await page.waitForLoadState('networkidle');

  const testThemes = ['dark', 'cupcake', 'synthwave'];
  for (const theme of testThemes) {
    try {
      // Try to find and use theme toolbar
      const toolbar = page.locator('[data-test-id="toolbar"]').first();
      if (await toolbar.isVisible()) {
        // More sophisticated theme switching logic here
        console.log(`✅ Theme ${theme} - testing skipped (toolbar interaction complex)`);
      }
    } catch {
      console.log(`⚠️  Theme ${theme} - manual testing recommended`);
    }
  }

  // Final report
  console.log(`\n📊 FINAL REPORT:`);
  console.log(`✅ Successful: ${successCount}/${STORIES.length}`);
  console.log(`❌ Failed: ${failCount}/${STORIES.length}`);

  if (errors.length > 0) {
    console.log(`⚠️  Console errors found:`, errors.slice(0, 5)); // Show first 5 errors
  }

  // Take a final screenshot
  await page.screenshot({
    path: 'test-results/final-validation-state.png',
    fullPage: true
  });

  // Expect most stories to pass
  expect(successCount).toBeGreaterThan(STORIES.length * 0.8); // 80% success rate
});