import { test, expect } from '@playwright/test';

const THEMES = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween',
  'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy',
  'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn',
  'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
  'dim', 'nord', 'sunset', 'caramellatte', 'abyss', 'silk'
];

test.describe('DaisyUI Theme Showcase', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the theme showcase story in Storybook
    await page.goto('http://localhost:6006/?path=/story/examples-theme-showcase--all-themes');
    await page.waitForLoadState('networkidle');
  });

  test('should display theme showcase with all components', async ({ page }) => {
    // Check if the main title is visible
    await expect(page.locator('h1:has-text("DaisyUI Theme Showcase")')).toBeVisible();

    // Check if theme switcher is present
    await expect(page.locator('select.select-bordered')).toBeVisible();

    // Check if color palette is displayed
    await expect(page.locator('text=Color Palette')).toBeVisible();

    // Check if buttons section exists
    await expect(page.locator('text=Buttons')).toBeVisible();

    // Check if form elements are present
    await expect(page.locator('text=Form Elements')).toBeVisible();
  });

  test('should switch themes using the dropdown', async ({ page }) => {
    const themeSelect = page.locator('select.select-bordered');

    // Test switching to a few different themes
    const testThemes = ['dark', 'cupcake', 'synthwave', 'dracula', 'forest'];

    for (const theme of testThemes) {
      await themeSelect.selectOption(theme);

      // Wait for theme to apply
      await page.waitForTimeout(500);

      // Check if the data-theme attribute is set on the html element
      const htmlElement = page.locator('html');
      await expect(htmlElement).toHaveAttribute('data-theme', theme);

      // Take a screenshot for visual verification
      await page.screenshot({
        path: `test-results/theme-${theme}.png`,
        fullPage: true
      });

      console.log(`✅ Theme "${theme}" applied successfully`);
    }
  });

  test('should switch themes using Storybook toolbar', async ({ page }) => {
    // Click on the theme toolbar button
    const themeButton = page.locator('[title="Theme"]');
    await themeButton.click();

    // Test a few themes from the toolbar
    const toolbarThemes = ['cyberpunk', 'valentine', 'business', 'luxury'];

    for (const theme of toolbarThemes) {
      // Click on the theme option
      await page.locator(`[role="menuitem"]:has-text("${theme}")`).click();

      // Wait for theme to apply
      await page.waitForTimeout(500);

      // Verify theme is applied
      const htmlElement = page.locator('html');
      await expect(htmlElement).toHaveAttribute('data-theme', theme);

      console.log(`✅ Toolbar theme "${theme}" applied successfully`);

      // Reopen the theme menu for next iteration
      if (toolbarThemes.indexOf(theme) < toolbarThemes.length - 1) {
        await themeButton.click();
      }
    }
  });

  test('should display all theme badges', async ({ page }) => {
    // Scroll to the theme list section
    await page.locator('text=All Available Themes').scrollIntoViewIfNeeded();

    // Check that all 35 themes are listed
    for (const theme of THEMES) {
      await expect(page.locator(`text="${theme}"`).first()).toBeVisible();
    }

    console.log(`✅ All ${THEMES.length} themes are displayed in the list`);
  });

  test('should maintain theme consistency across components', async ({ page }) => {
    const themeSelect = page.locator('select.select-bordered');

    // Test with a distinctive theme
    await themeSelect.selectOption('synthwave');
    await page.waitForTimeout(500);

    // Check that various components are visible and themed
    await expect(page.locator('.btn-primary')).toBeVisible();
    await expect(page.locator('.card')).toBeVisible();
    await expect(page.locator('.alert')).toBeVisible();
    await expect(page.locator('.badge')).toBeVisible();
    await expect(page.locator('.input')).toBeVisible();

    // Take a comprehensive screenshot
    await page.screenshot({
      path: 'test-results/synthwave-full-showcase.png',
      fullPage: true
    });

    console.log('✅ All components are properly themed and visible');
  });

  test('should demonstrate rapid theme switching', async ({ page }) => {
    const themeSelect = page.locator('select.select-bordered');

    // Rapidly switch through multiple themes to test performance
    const rapidThemes = ['light', 'dark', 'cupcake', 'cyberpunk', 'forest', 'luxury', 'dracula'];

    console.log('🚀 Starting rapid theme switching demonstration...');

    for (let i = 0; i < rapidThemes.length; i++) {
      const theme = rapidThemes[i];
      await themeSelect.selectOption(theme);
      await page.waitForTimeout(200); // Short wait to see the transition

      // Verify theme applied
      const htmlElement = page.locator('html');
      await expect(htmlElement).toHaveAttribute('data-theme', theme);

      console.log(`⚡ Rapid switch ${i + 1}/${rapidThemes.length}: ${theme}`);
    }

    // Take final screenshot
    await page.screenshot({
      path: 'test-results/final-theme-state.png',
      fullPage: true
    });

    console.log('✅ Rapid theme switching completed successfully!');
  });
});