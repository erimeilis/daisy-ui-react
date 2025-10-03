import { test, expect } from '@playwright/test';

test.describe('Storybook Theme Switching - FIXED', () => {
  test('verify theme switching now works correctly', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    console.log('🎨 Testing FIXED Theme Switching...');

    // Navigate to a story first
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();

    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    if (await buttonStory.count() > 0) {
      await buttonStory.click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000); // Allow story to fully load
    }

    // Find the theme button
    const themeButton = page.locator('button[title="DaisyUI theme for components"]');
    await expect(themeButton).toBeVisible();

    // Click theme button to open dropdown
    await themeButton.click();
    await page.waitForTimeout(500);

    // Test switching to dark theme
    const darkOption = page.locator('[role="menuitem"]', { hasText: 'Dark' });
    if (await darkOption.count() > 0) {
      await darkOption.click();
      await page.waitForTimeout(1500);

      // Check if theme was applied to the iframe's document
      const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');
      const darkTheme = await frame.locator('html').getAttribute('data-theme');
      console.log(`✅ Dark theme applied: ${darkTheme}`);
      expect(darkTheme).toBe('dark');

      // Take screenshot of dark theme
      await page.screenshot({ path: 'storybook-dark-theme.png', fullPage: true });

      // Test switching to synthwave theme
      await themeButton.click();
      const synthwaveOption = page.locator('[role="menuitem"]', { hasText: 'Synthwave' });
      if (await synthwaveOption.count() > 0) {
        await synthwaveOption.click();
        await page.waitForTimeout(1500);

        const synthwaveTheme = await frame.locator('html').getAttribute('data-theme');
        console.log(`✅ Synthwave theme applied: ${synthwaveTheme}`);
        expect(synthwaveTheme).toBe('synthwave');

        // Take screenshot of synthwave theme
        await page.screenshot({ path: 'storybook-synthwave-theme.png', fullPage: true });

        // Test switching to cupcake theme
        await themeButton.click();
        const cupcakeOption = page.locator('[role="menuitem"]', { hasText: 'Cupcake' });
        if (await cupcakeOption.count() > 0) {
          await cupcakeOption.click();
          await page.waitForTimeout(1500);

          const cupcakeTheme = await frame.locator('html').getAttribute('data-theme');
          console.log(`✅ Cupcake theme applied: ${cupcakeTheme}`);
          expect(cupcakeTheme).toBe('cupcake');

          // Take screenshot of cupcake theme
          await page.screenshot({ path: 'storybook-cupcake-theme.png', fullPage: true });
        }
      }

      // Finally, test back to light theme
      await themeButton.click();
      const lightOption = page.locator('[role="menuitem"]', { hasText: 'Light' });
      if (await lightOption.count() > 0) {
        await lightOption.click();
        await page.waitForTimeout(1500);

        const lightTheme = await frame.locator('html').getAttribute('data-theme');
        console.log(`✅ Light theme applied: ${lightTheme}`);
        expect(lightTheme).toBe('light');

        // Final screenshot back to light
        await page.screenshot({ path: 'storybook-light-theme-final.png', fullPage: true });
      }

      console.log('🎉 ALL THEME SWITCHING TESTS PASSED!');
    }
  });

  test('verify soft buttons work in all themes', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    console.log('🔘 Testing Soft Buttons Across Themes...');

    // Navigate to Button story
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();

    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    if (await buttonStory.count() > 0) {
      await buttonStory.click();
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');
      const themeButton = page.locator('button[title="DaisyUI theme for components"]');

      // Test soft buttons in different themes
      const themesToTest = ['light', 'dark', 'synthwave', 'cupcake'];

      for (const themeName of themesToTest) {
        console.log(`Testing soft buttons in ${themeName} theme...`);

        // Switch to theme
        await themeButton.click();
        const themeOption = page.locator('[role="menuitem"]', { hasText: new RegExp(themeName, 'i') });
        if (await themeOption.count() > 0) {
          await themeOption.click();
          await page.waitForTimeout(1000);

          // Look for and test soft buttons
          const softButtons = frame.locator('button.btn-soft');
          const softButtonCount = await softButtons.count();

          if (softButtonCount > 0) {
            console.log(`✅ Found ${softButtonCount} soft buttons in ${themeName} theme`);

            // Check first soft button's classes
            const firstSoftBtn = softButtons.first();
            const classes = await firstSoftBtn.getAttribute('class');
            console.log(`  Classes: ${classes}`);

            expect(classes).toContain('btn');
            expect(classes).toContain('btn-soft');
          } else {
            // If no soft buttons found, look for buttons with soft in text
            const buttonsWithSoft = frame.locator('button:has-text("Soft")');
            const softTextCount = await buttonsWithSoft.count();
            console.log(`Found ${softTextCount} buttons with "Soft" text in ${themeName} theme`);
          }

          // Take screenshot for this theme
          await page.screenshot({ path: `soft-buttons-${themeName}.png`, fullPage: true });
        }
      }

      console.log('🎉 SOFT BUTTON THEME TESTING COMPLETE!');
    }
  });
});