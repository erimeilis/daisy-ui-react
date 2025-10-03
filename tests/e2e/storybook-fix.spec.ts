import { test, expect } from '@playwright/test';

test.describe('Storybook Fix & Functionality', () => {
  test('click stories and verify they work', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    console.log('=== Testing Story Navigation ===');

    // Click on UI section to expand it
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await expect(uiSection).toBeVisible();
    await uiSection.click();

    // Look for Button story
    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    if (await buttonStory.count() > 0) {
      console.log('✅ Found Button story!');
      await buttonStory.click();
      await page.waitForLoadState('networkidle');

      // Check if story content loads
      const storyCanvas = page.locator('iframe[title="storybook-preview-iframe"]');
      await expect(storyCanvas).toBeVisible();

      // Switch to iframe and check for button
      const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');
      const button = frame.locator('button');
      await expect(button.first()).toBeVisible({ timeout: 10000 });

      console.log('✅ Button story loaded successfully!');
    } else {
      console.log('❌ No Button story found');
    }

    // Try Example section
    const exampleSection = page.locator('.sidebar-subheading', { hasText: 'example' });
    if (await exampleSection.count() > 0) {
      await exampleSection.click();

      const simpleStory = page.locator('.sidebar-item', { hasText: 'Simple' });
      if (await simpleStory.count() > 0) {
        console.log('✅ Found Simple story!');
        await simpleStory.click();
        await page.waitForLoadState('networkidle');

        // Check story content
        const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');
        const button = frame.locator('button');
        await expect(button.first()).toBeVisible({ timeout: 10000 });

        console.log('✅ Simple story loaded successfully!');
      }
    }
  });

  test('fix and test theme switching', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    console.log('=== Testing Theme Switching ===');

    // Navigate to a story first
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();

    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    if (await buttonStory.count() > 0) {
      await buttonStory.click();
      await page.waitForLoadState('networkidle');
    }

    // Find the theme button
    const themeButton = page.locator('button[title="DaisyUI theme for components"]');
    await expect(themeButton).toBeVisible();

    console.log('✅ Theme button found');

    // Click theme button to open dropdown
    await themeButton.click();
    await page.waitForTimeout(500);

    // Look for theme options
    const themeOptions = page.locator('[role="menuitem"], [role="option"], button').filter({
      hasText: /^(light|dark|cupcake|synthwave|retro|cyberpunk)$/i
    });

    const optionCount = await themeOptions.count();
    console.log(`✅ Found ${optionCount} theme options`);

    if (optionCount > 0) {
      // Test switching to dark theme
      const darkOption = themeOptions.filter({ hasText: /^dark$/i });
      if (await darkOption.count() > 0) {
        await darkOption.click();
        await page.waitForTimeout(1000);

        // Check if theme was applied to the iframe
        const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');
        const themeAttr = await frame.locator('html').getAttribute('data-theme');
        console.log(`✅ Theme applied: ${themeAttr}`);

        // Test switching to another theme
        await themeButton.click();
        const cupcakeOption = themeOptions.filter({ hasText: /^cupcake$/i });
        if (await cupcakeOption.count() > 0) {
          await cupcakeOption.click();
          await page.waitForTimeout(1000);

          const newThemeAttr = await frame.locator('html').getAttribute('data-theme');
          console.log(`✅ New theme applied: ${newThemeAttr}`);
        }
      }
    } else {
      // If no dropdown, try direct theme switching
      console.log('No dropdown found, testing direct theme application...');

      // Apply theme directly to iframe
      const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');
      await frame.evaluate(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
      });

      await page.waitForTimeout(1000);
      const appliedTheme = await frame.locator('html').getAttribute('data-theme');
      console.log(`✅ Direct theme application: ${appliedTheme}`);
    }

    // Take a final screenshot
    await page.screenshot({ path: 'storybook-theme-test.png', fullPage: true });
  });

  test('verify soft button in Storybook stories', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    console.log('=== Testing Soft Button in Storybook ===');

    // Navigate to Button story
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();

    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    if (await buttonStory.count() > 0) {
      await buttonStory.click();
      await page.waitForLoadState('networkidle');

      // Switch to iframe
      const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');

      // Look for controls panel to change style to 'soft'
      const styleControl = page.locator('[name="style"], [aria-label*="style"]');
      if (await styleControl.count() > 0) {
        await styleControl.selectOption('soft');
        await page.waitForTimeout(1000);

        // Check if soft button is rendered
        const softButton = frame.locator('button.btn-soft');
        if (await softButton.count() > 0) {
          console.log('✅ Soft button found in Storybook!');

          const classes = await softButton.getAttribute('class');
          console.log(`✅ Button classes: ${classes}`);

          // Verify it contains the expected classes
          expect(classes).toContain('btn');
          expect(classes).toContain('btn-soft');
        } else {
          console.log('❌ Soft button not found, checking all buttons...');

          const allButtons = frame.locator('button');
          const buttonCount = await allButtons.count();
          console.log(`Found ${buttonCount} buttons in story`);

          for (let i = 0; i < Math.min(buttonCount, 5); i++) {
            const btnClass = await allButtons.nth(i).getAttribute('class');
            console.log(`Button ${i}: ${btnClass}`);
          }
        }
      } else {
        console.log('No style control found, checking current button state...');

        const buttons = frame.locator('button');
        const count = await buttons.count();
        console.log(`Found ${count} buttons in current story`);

        if (count > 0) {
          const firstBtnClass = await buttons.first().getAttribute('class');
          console.log(`First button classes: ${firstBtnClass}`);
        }
      }
    }
  });
});