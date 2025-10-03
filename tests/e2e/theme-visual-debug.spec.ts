import { test } from '@playwright/test';

test.describe('Theme Visual Change Debug', () => {
  test('debug why themes dont visually change', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    console.log('🎨 Debugging Theme Visual Changes...');

    // Navigate to Button story
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();
    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    await buttonStory.click();
    await page.waitForLoadState('networkidle');

    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');
    const themeButton = page.locator('button[title="DaisyUI theme for components"]');

    // Check initial state
    console.log('=== INITIAL STATE ===');
    const initialTheme = await frame.locator('html').getAttribute('data-theme');
    const initialBodyClass = await frame.locator('body').getAttribute('class');
    const initialHtmlClass = await frame.locator('html').getAttribute('class');
    console.log(`Initial theme: ${initialTheme}`);
    console.log(`Initial body class: ${initialBodyClass}`);
    console.log(`Initial html class: ${initialHtmlClass}`);

    // Check button styles before theme change
    const button = frame.locator('button').first();
    const initialButtonStyles = await button.evaluate(el => {
      const computed = window.getComputedStyle(el);
      return {
        backgroundColor: computed.backgroundColor,
        color: computed.color,
        borderColor: computed.borderColor,
        classes: el.className
      };
    });
    console.log('Initial button styles:', initialButtonStyles);

    // Take initial screenshot
    await page.screenshot({ path: 'debug-before-theme-change.png', fullPage: true });

    // Try changing to dark theme
    console.log('=== CHANGING TO DARK THEME ===');
    await themeButton.click();
    await page.waitForTimeout(500);

    const darkOption = page.locator('[role="menuitem"]', { hasText: 'Dark' });
    await darkOption.click();
    await page.waitForTimeout(2000); // Give more time for theme to apply

    // Check if theme attribute changed
    const darkTheme = await frame.locator('html').getAttribute('data-theme');
    console.log(`Dark theme applied: ${darkTheme}`);

    // Check if styles actually changed
    const darkButtonStyles = await button.evaluate(el => {
      const computed = window.getComputedStyle(el);
      return {
        backgroundColor: computed.backgroundColor,
        color: computed.color,
        borderColor: computed.borderColor,
        classes: el.className
      };
    });
    console.log('Dark theme button styles:', darkButtonStyles);

    // Compare styles
    const stylesChanged = initialButtonStyles.backgroundColor !== darkButtonStyles.backgroundColor ||
                          initialButtonStyles.color !== darkButtonStyles.color;
    console.log(`Styles actually changed: ${stylesChanged}`);

    // Take dark theme screenshot
    await page.screenshot({ path: 'debug-after-dark-theme.png', fullPage: true });

    // Check CSS loading
    console.log('=== CSS DEBUG ===');
    const cssLinks = await frame.evaluate(() => {
      const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      return links.map(link => ({
        href: link.href,
        loaded: link.sheet !== null
      }));
    });
    console.log('CSS files loaded:', cssLinks);

    // Check if DaisyUI CSS is actually loaded
    const daisyUILoaded = await frame.evaluate(() => {
      const testDiv = document.createElement('div');
      testDiv.className = 'btn btn-primary';
      document.body.appendChild(testDiv);
      const computed = window.getComputedStyle(testDiv);
      const hasButtonStyles = computed.display !== 'inline' || computed.padding !== '0px';
      document.body.removeChild(testDiv);
      return hasButtonStyles;
    });
    console.log(`DaisyUI CSS actually loaded: ${daisyUILoaded}`);

    // Try synthwave theme for more dramatic change
    console.log('=== CHANGING TO SYNTHWAVE THEME ===');
    await themeButton.click();
    const synthwaveOption = page.locator('[role="menuitem"]', { hasText: 'Synthwave' });
    await synthwaveOption.click();
    await page.waitForTimeout(2000);

    const synthwaveTheme = await frame.locator('html').getAttribute('data-theme');
    console.log(`Synthwave theme applied: ${synthwaveTheme}`);

    const synthwaveButtonStyles = await button.evaluate(el => {
      const computed = window.getComputedStyle(el);
      return {
        backgroundColor: computed.backgroundColor,
        color: computed.color,
        borderColor: computed.borderColor
      };
    });
    console.log('Synthwave button styles:', synthwaveButtonStyles);

    await page.screenshot({ path: 'debug-after-synthwave-theme.png', fullPage: true });

    // Check CSS variables
    const cssVariables = await frame.evaluate(() => {
      const root = document.documentElement;
      const computed = window.getComputedStyle(root);
      return {
        primary: computed.getPropertyValue('--p'),
        primaryContent: computed.getPropertyValue('--pc'),
        base100: computed.getPropertyValue('--b1'),
        base200: computed.getPropertyValue('--b2'),
        base300: computed.getPropertyValue('--b3')
      };
    });
    console.log('DaisyUI CSS variables:', cssVariables);

    // Final diagnosis
    if (darkTheme === 'dark' && synthwaveTheme === 'synthwave') {
      if (stylesChanged) {
        console.log('✅ THEMES ARE WORKING - styles are changing');
      } else {
        console.log('❌ THEME ATTRIBUTES CHANGE BUT STYLES DO NOT');
        console.log('💡 Possible issues:');
        console.log('   - CSS not properly loaded');
        console.log('   - CSS specificity issues');
        console.log('   - Theme CSS variables not defined');
        console.log('   - Button component overriding theme styles');
      }
    } else {
      console.log('❌ THEME ATTRIBUTES NOT CHANGING PROPERLY');
    }
  });
});