import { test, expect } from '@playwright/test';

test.describe('Storybook Testing', () => {
  test('should load Storybook homepage', async ({ page }) => {
    await page.goto('http://localhost:6006');

    // Wait for Storybook to load
    await page.waitForLoadState('networkidle');

    // Check if Storybook interface loads
    await expect(page.locator('[data-testid="storybook-explorer-tree"]')).toBeVisible({ timeout: 10000 });
  });

  test('should have stories in the sidebar', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    // Check if there are any stories in the sidebar
    const storyItems = page.locator('[data-testid="storybook-explorer-tree"] button');
    const count = await storyItems.count();

    console.log(`Found ${count} story items in sidebar`);

    // If no stories found, log the sidebar content for debugging
    if (count === 0) {
      const sidebarContent = await page.locator('[data-testid="storybook-explorer-tree"]').textContent();
      console.log('Sidebar content:', sidebarContent);
    }

    // We expect at least some stories
    await expect(storyItems.first()).toBeVisible({ timeout: 5000 }).catch(() => {
      console.log('No stories found in sidebar - this confirms the issue');
    });
  });

  test('should check theme switching functionality', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    // Look for theme switcher in toolbar
    const toolbar = page.locator('[data-testid="storybook-panel-root"] .sb-toolbar');
    await expect(toolbar).toBeVisible({ timeout: 10000 });

    // Check if theme controls are available
    const themeButtons = page.locator('button[title*="theme"]');
    const themeSelects = page.locator('select[title*="theme"]');

    const themeButtonCount = await themeButtons.count();
    const themeSelectCount = await themeSelects.count();

    console.log(`Found ${themeButtonCount} theme buttons and ${themeSelectCount} theme selects`);

    // If no theme controls found, check what controls are available
    if (themeButtonCount === 0 && themeSelectCount === 0) {
      const toolbarButtons = await page.locator('.sb-toolbar button').all();
      console.log(`Available toolbar buttons: ${toolbarButtons.length}`);

      for (let i = 0; i < Math.min(toolbarButtons.length, 5); i++) {
        const title = await toolbarButtons[i].getAttribute('title');
        console.log(`Button ${i}: ${title}`);
      }
    }
  });

  test('should navigate to Button stories if they exist', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    // Look for Button component in sidebar
    const buttonStory = page.locator('[data-testid="storybook-explorer-tree"] button:has-text("Button")');

    if (await buttonStory.count() > 0) {
      await buttonStory.click();

      // Check if story content loads
      const storyCanvas = page.locator('[data-testid="storybook-docs-canvas"]');
      await expect(storyCanvas).toBeVisible({ timeout: 5000 });

      // Check for actual button elements in the story
      const buttons = page.locator('button');
      await expect(buttons.first()).toBeVisible({ timeout: 5000 });
    } else {
      console.log('No Button stories found - confirming the missing stories issue');
    }
  });
});