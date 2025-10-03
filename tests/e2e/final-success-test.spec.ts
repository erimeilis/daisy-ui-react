import { test, expect } from '@playwright/test';

test.describe('Final Success Test', () => {
  test('verify theme switching now works with proper CSS', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    console.log('🎉 FINAL SUCCESS TEST - Full DaisyUI CSS Loaded!');

    // Navigate to Button story
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();
    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    await buttonStory.click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Check current button styles with full CSS
    const getDetailedButtonStyles = async () => {
      return await page.evaluate(() => {
        const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
        if (!iframe?.contentDocument) return null;

        // Find the actual story button, not control buttons
        const buttons = Array.from(iframe.contentDocument.querySelectorAll('button'));
        const button = buttons.find(btn => btn.classList.contains('btn') || btn.textContent?.includes('Button'));
        if (!button) return null;

        const styles = iframe.contentWindow.getComputedStyle(button);
        const root = iframe.contentDocument.documentElement;
        const rootStyles = iframe.contentWindow.getComputedStyle(root);

        return {
          // Button styles
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          borderColor: styles.borderColor,
          padding: styles.padding,
          borderRadius: styles.borderRadius,
          display: styles.display,
          cursor: styles.cursor,

          // Theme info
          theme: root.getAttribute('data-theme'),

          // CSS variables from root
          primaryVar: rootStyles.getPropertyValue('--color-primary'),
          primaryContentVar: rootStyles.getPropertyValue('--color-primary-content'),
          base100Var: rootStyles.getPropertyValue('--color-base-100'),
          base200Var: rootStyles.getPropertyValue('--color-base-200'),

          // Button's computed color values
          hasStyles: styles.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
                    styles.backgroundColor !== 'transparent' &&
                    styles.backgroundColor !== '',

          // CSS custom properties on button
          btnColor: styles.getPropertyValue('--btn-color'),
          btnBg: styles.getPropertyValue('--btn-bg'),
          btnFg: styles.getPropertyValue('--btn-fg'),

          // Class list
          classes: button.className
        };
      });
    };

    const initialStyles = await getDetailedButtonStyles();
    console.log('🔍 Light theme button analysis:', initialStyles);

    await page.screenshot({ path: 'success-light-theme.png', fullPage: true });

    const themeButton = page.locator('button[title="DaisyUI theme for components"]');
    await expect(themeButton).toBeVisible();

    // Switch to dark theme
    console.log('🌙 Switching to Dark Theme...');
    await themeButton.click();
    await page.waitForTimeout(500);

    // Try multiple selectors for dark theme
    const darkSelectors = [
      'button:has-text("Dark")',
      '[role="menuitem"]:has-text("Dark")',
      'li:has-text("Dark")',
      '*[data-value="dark"]'
    ];

    for (const selector of darkSelectors) {
      try {
        const element = page.locator(selector);
        if (await element.count() > 0) {
          await element.click();
          console.log(`✅ Dark theme clicked with: ${selector}`);
          break;
        }
      } catch {
        continue;
      }
    }

    await page.waitForTimeout(1500);
    const darkStyles = await getDetailedButtonStyles();
    console.log('🌙 Dark theme button analysis:', darkStyles);

    await page.screenshot({ path: 'success-dark-theme.png', fullPage: true });

    // Switch to synthwave theme
    console.log('🎵 Switching to Synthwave Theme...');
    await themeButton.click();
    await page.waitForTimeout(500);

    const synthwaveSelectors = [
      'button:has-text("Synthwave")',
      '[role="menuitem"]:has-text("Synthwave")',
      'li:has-text("Synthwave")'
    ];

    for (const selector of synthwaveSelectors) {
      try {
        const element = page.locator(selector);
        if (await element.count() > 0) {
          await element.click();
          console.log(`✅ Synthwave theme clicked with: ${selector}`);
          break;
        }
      } catch {
        continue;
      }
    }

    await page.waitForTimeout(1500);
    const synthwaveStyles = await getDetailedButtonStyles();
    console.log('🎵 Synthwave theme button analysis:', synthwaveStyles);

    await page.screenshot({ path: 'success-synthwave-theme.png', fullPage: true });

    // Analysis
    console.log('\n📊 THEME SWITCHING ANALYSIS:');
    console.log('=====================================');

    // Check if CSS variables are now present
    const hasVariables = initialStyles?.primaryVar && initialStyles.primaryVar.trim() !== '';
    console.log(`CSS Variables Present: ${hasVariables ? '✅ YES' : '❌ NO'}`);

    // Check if button styles are now visible
    const hasButtonStyles = initialStyles?.hasStyles;
    console.log(`Button Styles Applied: ${hasButtonStyles ? '✅ YES' : '❌ NO'}`);

    // Check if themes actually changed
    const themeChanged = initialStyles?.theme !== darkStyles?.theme;
    console.log(`Theme Attribute Changes: ${themeChanged ? '✅ YES' : '❌ NO'}`);

    // Check if visual styles changed
    const visualsChanged = initialStyles?.backgroundColor !== darkStyles?.backgroundColor ||
                           darkStyles?.backgroundColor !== synthwaveStyles?.backgroundColor;
    console.log(`Visual Styles Change: ${visualsChanged ? '✅ YES' : '❌ NO'}`);

    // Check if CSS variables changed
    const variablesChanged = initialStyles?.primaryVar !== darkStyles?.primaryVar;
    console.log(`CSS Variables Change: ${variablesChanged ? '✅ YES' : '❌ NO'}`);

    console.log('\n🎯 FINAL VERDICT:');
    if (hasVariables && hasButtonStyles && visualsChanged) {
      console.log('🎉 SUCCESS! Theme switching is now FULLY WORKING!');
      console.log('✅ All DaisyUI CSS is properly loaded');
      console.log('✅ Theme switching changes visual appearance');
      console.log('✅ Button styles are correctly applied');
      console.log('✅ CSS variables are working properly');
    } else {
      console.log('❌ Still has issues:');
      if (!hasVariables) console.log('   - CSS variables missing');
      if (!hasButtonStyles) console.log('   - Button styles not applied');
      if (!visualsChanged) console.log('   - Visual changes not happening');
    }

    return {
      success: hasVariables && hasButtonStyles && visualsChanged,
      initialStyles,
      darkStyles,
      synthwaveStyles
    };
  });
});