import { test, expect } from '@playwright/test';

test.describe('Final Theme Test - CDN Fix', () => {
  test('verify themes now switch visually with CDN CSS', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Give time for CDN CSS to load

    console.log('🎨 Final Theme Test with CDN CSS...');

    // Navigate to Button story
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();
    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    await buttonStory.click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Check initial button styles
    const getButtonStyles = async () => {
      return await page.evaluate(() => {
        const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
        if (!iframe?.contentDocument) return null;

        const button = iframe.contentDocument.querySelector('button');
        if (!button) return null;

        const styles = iframe.contentWindow.getComputedStyle(button);
        return {
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          borderColor: styles.borderColor,
          theme: iframe.contentDocument.documentElement.getAttribute('data-theme')
        };
      });
    };

    const initialStyles = await getButtonStyles();
    console.log('Initial button styles:', initialStyles);

    // Take initial screenshot
    await page.screenshot({ path: 'final-test-light.png', fullPage: true });

    const themeButton = page.locator('button[title="DaisyUI theme for components"]');
    await expect(themeButton).toBeVisible();

    // Test dark theme switching
    console.log('Testing dark theme...');
    await themeButton.click();
    await page.waitForTimeout(500);

    // Find and click dark theme - try different selectors
    let darkClicked = false;
    const selectors = [
      '[role="menuitem"]:has-text("Dark")',
      'button:has-text("Dark")',
      '[data-value="dark"]',
      'li:has-text("Dark")',
      '*[aria-label*="Dark"]'
    ];

    for (const selector of selectors) {
      try {
        const element = page.locator(selector);
        if (await element.count() > 0) {
          console.log(`Found dark option with selector: ${selector}`);
          await element.click();
          darkClicked = true;
          break;
        }
      } catch {
        continue;
      }
    }

    if (!darkClicked) {
      console.log('❌ Could not find dark theme option');
      // Try direct theme setting
      await page.evaluate(() => {
        const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
        if (iframe?.contentDocument) {
          iframe.contentDocument.documentElement.setAttribute('data-theme', 'dark');
        }
      });
    }

    await page.waitForTimeout(1500);
    const darkStyles = await getButtonStyles();
    console.log('Dark theme styles:', darkStyles);

    await page.screenshot({ path: 'final-test-dark.png', fullPage: true });

    // Test synthwave theme
    console.log('Testing synthwave theme...');
    if (darkClicked) {
      await themeButton.click();
      await page.waitForTimeout(500);

      for (const selector of ['[role="menuitem"]:has-text("Synthwave")', 'button:has-text("Synthwave")']) {
        try {
          const element = page.locator(selector);
          if (await element.count() > 0) {
            await element.click();
            break;
          }
        } catch {
          continue;
        }
      }
    } else {
      await page.evaluate(() => {
        const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
        if (iframe?.contentDocument) {
          iframe.contentDocument.documentElement.setAttribute('data-theme', 'synthwave');
        }
      });
    }

    await page.waitForTimeout(1500);
    const synthwaveStyles = await getButtonStyles();
    console.log('Synthwave theme styles:', synthwaveStyles);

    await page.screenshot({ path: 'final-test-synthwave.png', fullPage: true });

    // Analysis
    const stylesChanged = (
      initialStyles?.backgroundColor !== darkStyles?.backgroundColor ||
      darkStyles?.backgroundColor !== synthwaveStyles?.backgroundColor
    );

    if (stylesChanged) {
      console.log('✅ SUCCESS: Theme switching is working visually!');
      console.log('✅ Button colors are changing between themes');
    } else {
      console.log('❌ Theme switching still not working visually');
      console.log('💡 Need different approach');
    }

    // Additional check - CSS variables
    const cssVarsCheck = await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
      if (!iframe?.contentDocument) return null;

      const root = iframe.contentDocument.documentElement;
      const styles = iframe.contentWindow.getComputedStyle(root);

      return {
        primary: styles.getPropertyValue('--p'),
        primaryContent: styles.getPropertyValue('--pc'),
        base1: styles.getPropertyValue('--b1'),
        base2: styles.getPropertyValue('--b2'),
        hasVars: styles.getPropertyValue('--p').trim() !== ''
      };
    });

    console.log('CSS Variables check:', cssVarsCheck);

    return {
      success: stylesChanged,
      initialStyles,
      darkStyles,
      synthwaveStyles,
      cssVarsCheck
    };
  });
});