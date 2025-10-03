import { test } from '@playwright/test';

test.describe('Button Classes Debug', () => {
  test('debug button classes generation', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Navigate to Button story
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();
    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    await buttonStory.click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Get button props and classes for default button
    const defaultButtonInfo = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
      if (!iframe?.contentDocument) return null;

      const button = iframe.contentDocument.querySelector('button');
      if (!button) return null;

      return {
        className: button.className,
        outerHTML: button.outerHTML,
        textContent: button.textContent,
        hasBaseBtn: button.classList.contains('btn'),
        allClasses: Array.from(button.classList)
      };
    });

    console.log('🔍 Default Button Analysis:');
    console.log('className:', defaultButtonInfo?.className);
    console.log('hasBaseBtn:', defaultButtonInfo?.hasBaseBtn);
    console.log('allClasses:', defaultButtonInfo?.allClasses);
    console.log('outerHTML:', defaultButtonInfo?.outerHTML);

    // Navigate to Primary button story
    const primaryStory = page.locator('[data-testid="primary"]').or(page.locator('text=Primary'));
    await primaryStory.click();
    await page.waitForTimeout(500);

    // Get button props and classes for primary button
    const primaryButtonInfo = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
      if (!iframe?.contentDocument) return null;

      const button = iframe.contentDocument.querySelector('button');
      if (!button) return null;

      return {
        className: button.className,
        outerHTML: button.outerHTML,
        textContent: button.textContent,
        hasBaseBtn: button.classList.contains('btn'),
        hasPrimary: button.classList.contains('btn-primary'),
        allClasses: Array.from(button.classList)
      };
    });

    console.log('🔍 Primary Button Analysis:');
    console.log('className:', primaryButtonInfo?.className);
    console.log('hasBaseBtn:', primaryButtonInfo?.hasBaseBtn);
    console.log('hasPrimary:', primaryButtonInfo?.hasPrimary);
    console.log('allClasses:', primaryButtonInfo?.allClasses);
    console.log('outerHTML:', primaryButtonInfo?.outerHTML);

    // Check if CVA is working
    const cvaWorking = primaryButtonInfo?.hasBaseBtn && primaryButtonInfo?.hasPrimary;
    console.log('🎯 CVA Working:', cvaWorking ? '✅ YES' : '❌ NO');

    return {
      defaultButton: defaultButtonInfo,
      primaryButton: primaryButtonInfo,
      cvaWorking
    };
  });
});