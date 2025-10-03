import { test, expect } from '@playwright/test';

test.describe('Dev Server Testing', () => {
  test('should load dev server and display components', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Check if page loads
    await expect(page).toHaveTitle('daisy-ui-react');

    // Check if Button Test component is rendered
    await expect(page.locator('h1')).toContainText('Button Test');

    // Check if buttons are rendered (use exact text match)
    await expect(page.getByRole('button', { name: 'Primary', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Secondary', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Accent', exact: true })).toBeVisible();
  });

  test('should display soft buttons correctly', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Check soft buttons section
    await expect(page.locator('h2:has-text("Soft Buttons")')).toBeVisible();

    // Check if soft buttons exist (expecting 6: 3 from component + 3 from raw HTML)
    const softButtons = page.locator('button:has-text("Soft")');
    await expect(softButtons).toHaveCount(6);

    // Check if buttons have correct classes (use exact text match)
    const primarySoftButton = page.getByRole('button', { name: 'Primary Soft', exact: true });
    await expect(primarySoftButton).toHaveClass(/btn/);
    await expect(primarySoftButton).toHaveClass(/btn-primary/);
    await expect(primarySoftButton).toHaveClass(/btn-soft/);
  });

  test('should display raw HTML buttons for comparison', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Check raw HTML buttons section
    await expect(page.locator('h2:has-text("Raw HTML for Comparison")')).toBeVisible();

    // Check if raw buttons exist and have correct classes
    const rawSoftButton = page.locator('button:has-text("Raw Primary Soft")');
    await expect(rawSoftButton).toBeVisible();
    await expect(rawSoftButton).toHaveClass(/btn btn-primary btn-soft/);
  });
});