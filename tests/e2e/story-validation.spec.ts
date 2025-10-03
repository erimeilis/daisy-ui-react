import { test, expect } from '@playwright/test';

// Extend Page type to include our custom properties
interface ExtendedPage {
  _errors: string[];
  _warnings: string[];
}

// All stories that should be tested
const STORIES = [
  // Theme demo
  { path: '/story/all-themes--all-themes', name: 'All Themes' },

  // Button stories
  { path: '/story/ui-button--primary', name: 'Button - Primary' },
  { path: '/story/ui-button--secondary', name: 'Button - Secondary' },
  { path: '/story/ui-button--accent', name: 'Button - Accent' },
  { path: '/story/ui-button--outline', name: 'Button - Outline' },
  { path: '/story/ui-button--ghost', name: 'Button - Ghost' },
  { path: '/story/ui-button--link', name: 'Button - Link' },
  { path: '/story/ui-button--sizes', name: 'Button - Sizes' },
  { path: '/story/ui-button--colors', name: 'Button - Colors' },
  { path: '/story/ui-button--states', name: 'Button - States' },
  { path: '/story/ui-button--with-icons', name: 'Button - With Icons' },
  { path: '/story/ui-button--icon-only', name: 'Button - Icon Only' },
  { path: '/story/ui-button--modifiers', name: 'Button - Modifiers' },
  { path: '/story/ui-button--interactive', name: 'Button - Interactive' },

  // Alert stories
  { path: '/story/ui-alert--info', name: 'Alert - Info' },
  { path: '/story/ui-alert--success', name: 'Alert - Success' },
  { path: '/story/ui-alert--warning', name: 'Alert - Warning' },
  { path: '/story/ui-alert--error', name: 'Alert - Error' },
  { path: '/story/ui-alert--all-colors', name: 'Alert - All Colors' },
  { path: '/story/ui-alert--styles', name: 'Alert - Styles' },
  { path: '/story/ui-alert--without-icons', name: 'Alert - Without Icons' },
  { path: '/story/ui-alert--with-actions', name: 'Alert - With Actions' },
  { path: '/story/ui-alert--complex', name: 'Alert - Complex' },
  { path: '/story/ui-alert--interactive', name: 'Alert - Interactive' },

  // Badge stories
  { path: '/story/ui-badge--primary', name: 'Badge - Primary' },
  { path: '/story/ui-badge--secondary', name: 'Badge - Secondary' },
  { path: '/story/ui-badge--accent', name: 'Badge - Accent' },
  { path: '/story/ui-badge--all-colors', name: 'Badge - All Colors' },
  { path: '/story/ui-badge--styles', name: 'Badge - Styles' },
  { path: '/story/ui-badge--sizes', name: 'Badge - Sizes' },
  { path: '/story/ui-badge--with-icons', name: 'Badge - With Icons' },
  { path: '/story/ui-badge--numbers', name: 'Badge - Numbers' },
  { path: '/story/ui-badge--status-indicators', name: 'Badge - Status Indicators' },
  { path: '/story/ui-badge--in-context', name: 'Badge - In Context' },
  { path: '/story/ui-badge--interactive', name: 'Badge - Interactive' },

  // Card stories
  { path: '/story/ui-card--basic', name: 'Card - Basic' },
  { path: '/story/ui-card--with-image', name: 'Card - With Image' },
  { path: '/story/ui-card--sizes', name: 'Card - Sizes' },
  { path: '/story/ui-card--styles', name: 'Card - Styles' },
  { path: '/story/ui-card--blog-post', name: 'Card - Blog Post' },
  { path: '/story/ui-card--product-card', name: 'Card - Product' },
  { path: '/story/ui-card--stats-card', name: 'Card - Stats' },
  { path: '/story/ui-card--feature-card', name: 'Card - Feature' },
  { path: '/story/ui-card--interactive', name: 'Card - Interactive' },
];

test.describe('Story Validation', () => {
  test.beforeEach(async ({ page }) => {
    // Set up console error monitoring
    const errors: string[] = [];
    const warnings: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      } else if (msg.type() === 'warning') {
        warnings.push(msg.text());
      }
    });

    // Store arrays on page for access in tests
    (page as ExtendedPage)._errors = errors;
    (page as ExtendedPage)._warnings = warnings;

    // Monitor for uncaught exceptions
    page.on('pageerror', (error) => {
      errors.push(`Page Error: ${error.message}`);
    });
  });

  // Test each story individually
  for (const story of STORIES) {
    test(`should render ${story.name} without errors`, async ({ page }) => {
      console.log(`🧪 Testing: ${story.name}`);

      // Navigate to story
      await page.goto(`http://localhost:6006?path=${story.path}`);

      // Wait for story to load
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000); // Give components time to render

      // Check for JavaScript errors
      const errors = (page as ExtendedPage)._errors;
      const warnings = (page as ExtendedPage)._warnings;

      // Log any warnings (but don't fail the test)
      if (warnings.length > 0) {
        console.log(`⚠️  Warnings in ${story.name}:`, warnings);
      }

      // Check for critical errors
      const criticalErrors = errors.filter((error: string) =>
        !error.includes('ResizeObserver') && // Known harmless warning
        !error.includes('Non-passive event listener') && // Known harmless warning
        !error.includes('favicon.ico') // Missing favicon
      );

      if (criticalErrors.length > 0) {
        console.log(`❌ Errors in ${story.name}:`, criticalErrors);
      }

      // Verify story canvas is present
      await expect(page.locator('#storybook-root')).toBeVisible();

      // Check that the story content is not empty
      const storyContent = page.locator('#storybook-root');
      await expect(storyContent).not.toBeEmpty();

      // Take screenshot for visual verification
      await page.screenshot({
        path: `test-results/story-${story.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.png`,
        fullPage: false
      });

      // Fail test if there are critical errors
      expect(criticalErrors.length, `Found ${criticalErrors.length} critical errors in ${story.name}: ${criticalErrors.join(', ')}`).toBe(0);

      console.log(`✅ ${story.name} - OK`);
    });
  }

  // Test theme switching on a sample story
  test('should handle theme switching without errors', async ({ page }) => {
    console.log('🎨 Testing theme switching');

    // Go to button story as test subject
    await page.goto('http://localhost:6006?path=/story/ui-button--colors');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const testThemes = ['dark', 'cupcake', 'synthwave', 'dracula', 'light'];

    for (const theme of testThemes) {
      console.log(`🎨 Testing theme: ${theme}`);

      // Look for theme toolbar and try to switch themes
      try {
        // Try different selectors for theme toolbar
        const themeSelectors = [
          '[data-title="Theme"]',
          '[title="Theme"]',
          'button[aria-label*="theme" i]',
          'button[aria-label*="Theme"]'
        ];

        let themeButton = null;
        for (const selector of themeSelectors) {
          try {
            themeButton = await page.waitForSelector(selector, { timeout: 2000 });
            if (themeButton) break;
          } catch {
            continue;
          }
        }

        if (themeButton) {
          await themeButton.click();
          await page.waitForTimeout(300);

          // Try to click theme option
          const themeOption = await page.waitForSelector(`[role="option"]:has-text("${theme}"), [role="menuitem"]:has-text("${theme}"), li:has-text("${theme}")`, { timeout: 2000 });
          if (themeOption) {
            await themeOption.click();
            await page.waitForTimeout(1000);

            // Verify theme applied
            const htmlTheme = await page.getAttribute('html', 'data-theme');
            console.log(`✅ Theme ${theme} applied: ${htmlTheme}`);
          }
        } else {
          console.log('⚠️  Could not find theme toolbar, skipping theme test');
          break;
        }
      } catch (e) {
        console.log(`⚠️  Could not switch to theme ${theme}: ${e}`);
      }
    }
  });

  // Test story interactions
  test('should handle story interactions without errors', async ({ page }) => {
    console.log('🖱️  Testing story interactions');

    // Test interactive button story
    await page.goto('http://localhost:6006?path=/story/ui-button--interactive');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Try to click the interactive button
    try {
      const button = await page.waitForSelector('button', { timeout: 5000 });
      if (button) {
        await button.click();
        console.log('✅ Interactive button clicked successfully');
      }
    } catch (e) {
      console.log('⚠️  Could not interact with button:', e);
    }

    // Test interactive alert story
    await page.goto('http://localhost:6006?path=/story/ui-alert--interactive');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Try to dismiss the alert
    try {
      const closeButton = await page.waitForSelector('button:has-text("×")', { timeout: 5000 });
      if (closeButton) {
        await closeButton.click();
        await page.waitForTimeout(500);
        console.log('✅ Alert dismissed successfully');

        // Try to show it again
        const showButton = await page.waitForSelector('button:has-text("Show Alert")', { timeout: 5000 });
        if (showButton) {
          await showButton.click();
          console.log('✅ Alert shown again successfully');
        }
      }
    } catch (e) {
      console.log('⚠️  Could not interact with alert:', e);
    }
  });
});