import { test } from '@playwright/test';

test.describe('TailwindCSS v4 Debug', () => {
  test('check if anything loads in Storybook', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Take a screenshot to see what's visible
    await page.screenshot({ path: 'debug-storybook-v4.png', fullPage: true });

    // Check if any content loaded
    const bodyContent = await page.evaluate(() => document.body.innerHTML);
    console.log('Body content length:', bodyContent.length);

    // Check for any buttons on the page
    const allButtons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('button')).map(btn => ({
        text: btn.textContent,
        classes: btn.className,
        visible: btn.offsetWidth > 0 && btn.offsetHeight > 0
      }));
    });
    console.log('All buttons found:', allButtons);

    // Check iframe specifically
    const iframeContent = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
      if (!iframe?.contentDocument) return { error: 'No iframe found' };

      return {
        iframeBody: iframe.contentDocument.body.innerHTML.substring(0, 1000),
        hasButtons: iframe.contentDocument.querySelectorAll('button').length,
        hasStorybooks: iframe.contentDocument.querySelectorAll('[data-testid]').length
      };
    });
    console.log('Iframe content:', iframeContent);

    // Navigate to Button story manually
    try {
      await page.click('[data-item-id="ui-button"]');
      await page.waitForTimeout(1000);
      console.log('✅ Successfully clicked UI Button');
    } catch (e) {
      console.log('❌ Could not find UI Button:', e);
    }
  });
});