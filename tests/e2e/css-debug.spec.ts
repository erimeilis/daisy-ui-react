import { test } from '@playwright/test';

test.describe('CSS Loading Debug', () => {
  test('check if DaisyUI CSS is properly loaded', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    console.log('🎨 Debugging CSS Loading...');

    // Navigate to Button story
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();
    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    await buttonStory.click();
    await page.waitForLoadState('networkidle');

    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');

    // Check all CSS files loaded
    const cssFiles = await frame.evaluate(() => {
      const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      const styles = Array.from(document.querySelectorAll('style'));
      return {
        links: links.map(link => ({
          href: link.href,
          loaded: link.sheet !== null,
          rules: link.sheet ? link.sheet.cssRules.length : 0
        })),
        inlineStyles: styles.length,
        hasBaseStyles: !!document.querySelector('style[data-vite-dev-id]'),
        hasTailwind: !!Array.from(document.styleSheets).find(sheet => {
          try {
            return Array.from(sheet.cssRules).some(rule =>
              rule.cssText && rule.cssText.includes('tailwind') ||
              rule.cssText.includes('daisyui') ||
              rule.cssText.includes('--tw-')
            );
          } catch {
            return false;
          }
        })
      };
    });
    console.log('CSS loading status:', cssFiles);

    // Check if btn class exists
    const btnClassExists = await frame.evaluate(() => {
      const testDiv = document.createElement('div');
      testDiv.className = 'btn';
      document.body.appendChild(testDiv);
      const styles = window.getComputedStyle(testDiv);

      const result = {
        display: styles.display,
        padding: styles.padding,
        background: styles.background,
        border: styles.border,
        borderRadius: styles.borderRadius,
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        lineHeight: styles.lineHeight,
        textAlign: styles.textAlign,
        cursor: styles.cursor,
        hasButtonStyles: styles.display !== 'inline' || styles.padding !== '0px'
      };

      document.body.removeChild(testDiv);
      return result;
    });
    console.log('btn class styles:', btnClassExists);

    // Check DaisyUI themes CSS variables
    const themeVariables = await frame.evaluate(() => {
      const html = document.documentElement;
      const computedStyle = window.getComputedStyle(html);

      // Check for DaisyUI CSS variables
      const variables = {};
      const testVars = ['--p', '--pc', '--s', '--sc', '--a', '--ac', '--b1', '--b2', '--b3', '--bc'];

      testVars.forEach(varName => {
        const value = computedStyle.getPropertyValue(varName);
        variables[varName] = value.trim();
      });

      return {
        variables,
        hasAnyDaisyUIVars: Object.values(variables).some(v => v !== ''),
        dataTheme: html.getAttribute('data-theme')
      };
    });
    console.log('DaisyUI theme variables:', themeVariables);

    // Create a btn-primary button and check its styles
    const buttonTest = await frame.evaluate(() => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-primary';
      btn.textContent = 'Test Button';
      document.body.appendChild(btn);

      const styles = window.getComputedStyle(btn);
      const result = {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        borderColor: styles.borderColor,
        padding: styles.padding,
        borderRadius: styles.borderRadius,
        display: styles.display,
        hasVisibleStyles: styles.backgroundColor !== 'rgba(0, 0, 0, 0)' && styles.backgroundColor !== 'transparent'
      };

      document.body.removeChild(btn);
      return result;
    });
    console.log('btn-primary styles:', buttonTest);

    // Take screenshot for visual inspection
    await page.screenshot({ path: 'css-debug-storybook.png', fullPage: true });

    // Final assessment
    if (!btnClassExists.hasButtonStyles) {
      console.log('❌ DaisyUI CSS not loaded - buttons have no styling');
      console.log('💡 Possible fixes:');
      console.log('   1. Ensure TailwindCSS is processing DaisyUI in Storybook');
      console.log('   2. Check if postcss.config.js includes DaisyUI');
      console.log('   3. Verify DaisyUI plugin is in tailwind.config.js');
      console.log('   4. Check if CSS import is correct in preview.tsx');
    } else if (!themeVariables.hasAnyDaisyUIVars) {
      console.log('❌ Button styles exist but DaisyUI theme variables missing');
      console.log('💡 Theme variables not loaded properly');
    } else {
      console.log('✅ DaisyUI CSS appears to be loaded correctly');
      console.log('❓ Theme switching issue might be elsewhere');
    }
  });
});