import { test } from '@playwright/test';

test.describe('Button Component Debug', () => {
  test('verify Button component is rendering with proper classes', async ({ page }) => {
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

    // Check what's in the iframe
    const iframeInfo = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
      if (!iframe?.contentDocument) return { error: 'No iframe found' };

      const body = iframe.contentDocument.body;
      return {
        bodyHTML: body.innerHTML,
        allButtons: Array.from(iframe.contentDocument.querySelectorAll('button')).map(btn => ({
          tagName: btn.tagName,
          className: btn.className,
          innerHTML: btn.innerHTML,
          textContent: btn.textContent
        })),
        bodyClasses: body.className,
        htmlClasses: iframe.contentDocument.documentElement.className
      };
    });

    console.log('🔍 Iframe Debug Info:');
    console.log('Body HTML:', iframeInfo.bodyHTML?.substring(0, 500) + '...');
    console.log('All Buttons:', iframeInfo.allButtons);
    console.log('Body Classes:', iframeInfo.bodyClasses);
    console.log('HTML Classes:', iframeInfo.htmlClasses);

    // Now navigate to Primary story specifically
    await page.click('[data-item-id="ui-button--primary"]');
    await page.waitForTimeout(500);

    const primaryInfo = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
      if (!iframe?.contentDocument) return { error: 'No iframe found' };

      const buttons = Array.from(iframe.contentDocument.querySelectorAll('button'));
      return {
        buttonCount: buttons.length,
        buttons: buttons.map(btn => ({
          className: btn.className,
          innerHTML: btn.innerHTML,
          textContent: btn.textContent,
          outerHTML: btn.outerHTML
        }))
      };
    });

    console.log('🎯 Primary Story Debug:');
    console.log('Button Count:', primaryInfo.buttonCount);
    console.log('Buttons:', primaryInfo.buttons);
  });
});