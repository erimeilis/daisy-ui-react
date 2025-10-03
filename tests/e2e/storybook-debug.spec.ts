import { test } from '@playwright/test';

test.describe('Storybook Deep Debug', () => {
  test('inspect Storybook DOM structure and stories loading', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    // Take a screenshot to see what we're dealing with
    await page.screenshot({ path: 'debug-storybook-initial.png', fullPage: true });

    // Check if stories are actually loaded in memory
    const storiesData = await page.evaluate(() => {
      // @ts-expect-error: Accessing Storybook's global objects for debugging purposes
      return window.__STORYBOOK_STORIES__ || window.__STORYBOOK_CLIENT_API__ || 'No stories data found';
    });
    console.log('Stories data:', storiesData);

    // Check for any JavaScript errors
    const errors = await page.evaluate(() => {
      const errors = [];
      // @ts-expect-error: Accessing potential custom error tracking object
      if (window.storybookErrors) errors.push(...window.storybookErrors);
      return errors;
    });
    console.log('JS errors:', errors);

    // Look for any elements that might contain stories
    const allElements = await page.$$eval('*[data-testid], *[class*="story"], *[class*="sidebar"]', elements =>
      elements.map(el => ({ tagName: el.tagName, id: el.id, className: el.className, testId: el.getAttribute('data-testid') }))
    );
    console.log('Relevant elements found:', allElements);

    // Check what's actually in the sidebar area
    const sidebarContent = await page.evaluate(() => {
      const sidebar = document.querySelector('[data-testid="storybook-sidebar"]') ||
                     document.querySelector('.sidebar') ||
                     document.querySelector('#storybook-explorer-tree') ||
                     document.querySelector('[class*="sidebar"]');
      return sidebar ? {
        innerHTML: sidebar.innerHTML.substring(0, 500),
        children: Array.from(sidebar.children).map(child => child.tagName + '.' + child.className)
      } : 'No sidebar found';
    });
    console.log('Sidebar content:', sidebarContent);

    // Check network requests for stories
    await page.route('**/*', route => {
      console.log('Request:', route.request().url());
      route.continue();
    });

    // Try to find theme controls
    const themeElements = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button, select, [role="button"]'));
      return buttons
        .filter(el => el.textContent?.toLowerCase().includes('theme') ||
                     el.getAttribute('title')?.toLowerCase().includes('theme') ||
                     el.className.toLowerCase().includes('theme'))
        .map(el => ({
          tagName: el.tagName,
          textContent: el.textContent,
          title: el.getAttribute('title'),
          className: el.className
        }));
    });
    console.log('Theme elements found:', themeElements);

    // Check for DaisyUI theme switching
    const currentTheme = await page.evaluate(() => {
      return document.documentElement.getAttribute('data-theme') ||
             document.documentElement.className ||
             'No theme attribute found';
    });
    console.log('Current theme:', currentTheme);
  });

  test('attempt to manually trigger story loading', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    // Try to manually trigger story loading
    const manualStoryLoad = await page.evaluate(async () => {
      try {
        // @ts-expect-error: Accessing Storybook's internal API for debugging
        if (window.__STORYBOOK_CLIENT_API__) {
          // @ts-expect-error: Accessing Storybook's internal client API object
          const api = window.__STORYBOOK_CLIENT_API__;
          return {
            hasApi: true,
            stories: api._stories ? Object.keys(api._stories) : 'No stories in API'
          };
        }
        return { hasApi: false };
      } catch (error) {
        return { error: error.message };
      }
    });
    console.log('Manual story load attempt:', manualStoryLoad);

    // Check if we can force refresh stories
    await page.keyboard.press('F5');
    await page.waitForLoadState('networkidle');

    await page.screenshot({ path: 'debug-storybook-after-refresh.png', fullPage: true });
  });

  test('test theme switching manually', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    // Try to manually set theme via JavaScript
    const themeTest = await page.evaluate(() => {
      // Test DaisyUI theme switching
      const original = document.documentElement.getAttribute('data-theme');

      // Try setting different themes
      const themes = ['light', 'dark', 'cupcake', 'synthwave'];
      const results = [];

      themes.forEach(theme => {
        document.documentElement.setAttribute('data-theme', theme);
        const applied = document.documentElement.getAttribute('data-theme');
        results.push({ theme, applied, success: applied === theme });
      });

      return { original, results };
    });
    console.log('Theme switching test:', themeTest);

    // Look for Storybook's theme toolbar
    const toolbarButtons = await page.$$eval('button, [role="button"]', buttons =>
      buttons.map(btn => ({
        text: btn.textContent?.trim(),
        title: btn.getAttribute('title'),
        ariaLabel: btn.getAttribute('aria-label'),
        className: btn.className
      })).filter(btn =>
        btn.text?.toLowerCase().includes('theme') ||
        btn.title?.toLowerCase().includes('theme') ||
        btn.ariaLabel?.toLowerCase().includes('theme') ||
        btn.className.toLowerCase().includes('theme')
      )
    );
    console.log('Toolbar theme buttons:', toolbarButtons);
  });
});