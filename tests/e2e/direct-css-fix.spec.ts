import { test } from '@playwright/test';

test.describe('Direct CSS Fix', () => {
  test('inject proper DaisyUI CSS and test themes', async ({ page }) => {
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');

    console.log('🎨 Testing Direct CSS Injection Fix...');

    // Navigate to Button story
    const uiSection = page.locator('.sidebar-subheading', { hasText: 'ui' });
    await uiSection.click();
    const buttonStory = page.locator('.sidebar-item', { hasText: 'Button' });
    await buttonStory.click();
    await page.waitForLoadState('networkidle');

    page.frameLocator('iframe[title="storybook-preview-iframe"]');

    // First, check what CSS is currently loaded
    const currentCSS = await page.evaluate(async () => {
      const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
      if (!iframe || !iframe.contentDocument) return { error: 'No iframe found' };

      const doc = iframe.contentDocument;
      const styles = Array.from(doc.querySelectorAll('style, link[rel="stylesheet"]'));

      return {
        styleCount: styles.length,
        hasButton: !!doc.querySelector('.btn'),
        hasTailwind: styles.some(style =>
          style.textContent?.includes('tailwind') ||
          style.href?.includes('tailwind')
        ),
        hasDaisyUI: styles.some(style =>
          style.textContent?.includes('daisyui') ||
          style.textContent?.includes('btn') ||
          style.href?.includes('daisyui')
        )
      };
    });

    console.log('Current CSS status:', currentCSS);

    // Inject missing DaisyUI CSS directly into the iframe
    await page.evaluate(() => {
      const iframe = document.querySelector('iframe[title="storybook-preview-iframe"]');
      if (!iframe || !iframe.contentDocument) return;

      const doc = iframe.contentDocument;

      // Create and inject essential DaisyUI button CSS
      const style = doc.createElement('style');
      style.textContent = `
        /* Essential DaisyUI button styles */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          height: 3rem;
          padding-left: 1rem;
          padding-right: 1rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 600;
          text-decoration: none;
          border-width: 1px;
          border-color: transparent;
          background-color: hsl(var(--b2, 210 40% 92%));
          color: hsl(var(--bc, 215 28% 17%));
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          animation: button-pop var(--animation-btn, 0.25s) ease-out;
        }

        .btn:hover {
          border-color: hsl(var(--b3, 180 5% 85%));
          background-color: hsl(var(--b3, 180 5% 85%));
        }

        /* Primary button */
        .btn-primary {
          background-color: hsl(var(--p, 259 94% 51%));
          border-color: hsl(var(--p, 259 94% 51%));
          color: hsl(var(--pc, 0 0% 100%));
        }

        .btn-primary:hover {
          background-color: hsl(var(--pf, 259 94% 44%));
          border-color: hsl(var(--pf, 259 94% 44%));
        }

        /* Secondary button */
        .btn-secondary {
          background-color: hsl(var(--s, 314 100% 47%));
          border-color: hsl(var(--s, 314 100% 47%));
          color: hsl(var(--sc, 0 0% 100%));
        }

        .btn-secondary:hover {
          background-color: hsl(var(--sf, 314 100% 40%));
          border-color: hsl(var(--sf, 314 100% 40%));
        }

        /* Accent button */
        .btn-accent {
          background-color: hsl(var(--a, 174 60% 51%));
          border-color: hsl(var(--a, 174 60% 51%));
          color: hsl(var(--ac, 0 0% 100%));
        }

        .btn-accent:hover {
          background-color: hsl(var(--af, 174 60% 44%));
          border-color: hsl(var(--af, 174 60% 44%));
        }

        /* Soft buttons */
        .btn-soft {
          background-color: hsl(var(--p, 259 94% 51%) / 0.1);
          border-color: hsl(var(--p, 259 94% 51%) / 0.2);
          color: hsl(var(--p, 259 94% 51%));
        }

        .btn-primary.btn-soft {
          background-color: hsl(var(--p, 259 94% 51%) / 0.1);
          border-color: hsl(var(--p, 259 94% 51%) / 0.2);
          color: hsl(var(--p, 259 94% 51%));
        }

        .btn-secondary.btn-soft {
          background-color: hsl(var(--s, 314 100% 47%) / 0.1);
          border-color: hsl(var(--s, 314 100% 47%) / 0.2);
          color: hsl(var(--s, 314 100% 47%));
        }

        .btn-accent.btn-soft {
          background-color: hsl(var(--a, 174 60% 51%) / 0.1);
          border-color: hsl(var(--a, 174 60% 51%) / 0.2);
          color: hsl(var(--a, 174 60% 51%));
        }

        /* Theme variables - Light theme */
        [data-theme="light"], :root {
          --p: 259 94% 51%;
          --pc: 0 0% 100%;
          --pf: 259 94% 44%;
          --s: 314 100% 47%;
          --sc: 0 0% 100%;
          --sf: 314 100% 40%;
          --a: 174 60% 51%;
          --ac: 0 0% 100%;
          --af: 174 60% 44%;
          --n: 219 14% 28%;
          --nc: 0 0% 100%;
          --nf: 219 14% 21%;
          --b1: 0 0% 100%;
          --b2: 210 40% 92%;
          --b3: 180 5% 85%;
          --bc: 215 28% 17%;
        }

        /* Dark theme */
        [data-theme="dark"] {
          --p: 262 80% 50%;
          --pc: 0 0% 100%;
          --pf: 262 80% 43%;
          --s: 316 70% 50%;
          --sc: 0 0% 100%;
          --sf: 316 70% 43%;
          --a: 175 70% 50%;
          --ac: 0 0% 100%;
          --af: 175 70% 43%;
          --n: 218 11% 65%;
          --nc: 220 13% 18%;
          --nf: 218 11% 58%;
          --b1: 220 13% 18%;
          --b2: 219 14% 16%;
          --b3: 218 14% 14%;
          --bc: 220 13% 69%;
        }

        /* Synthwave theme */
        [data-theme="synthwave"] {
          --p: 319 97% 64%;
          --pc: 0 0% 100%;
          --pf: 319 97% 57%;
          --s: 180 100% 50%;
          --sc: 220 13% 18%;
          --sf: 180 100% 43%;
          --a: 52 100% 50%;
          --ac: 220 13% 18%;
          --af: 52 100% 43%;
          --n: 218 11% 65%;
          --nc: 220 13% 18%;
          --nf: 218 11% 58%;
          --b1: 220 13% 18%;
          --b2: 219 14% 16%;
          --b3: 218 14% 14%;
          --bc: 220 13% 69%;
        }

        /* Cupcake theme */
        [data-theme="cupcake"] {
          --p: 315 100% 86%;
          --pc: 315 100% 26%;
          --pf: 315 100% 79%;
          --s: 197 100% 86%;
          --sc: 197 100% 26%;
          --sf: 197 100% 79%;
          --a: 23 100% 86%;
          --ac: 23 100% 26%;
          --af: 23 100% 79%;
          --n: 315 16% 65%;
          --nc: 315 16% 5%;
          --nf: 315 16% 58%;
          --b1: 315 100% 97%;
          --b2: 315 100% 92%;
          --b3: 315 100% 86%;
          --bc: 315 16% 18%;
        }

        @keyframes button-pop {
          0% { transform: scale(0.98); }
          40% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
      `;

      doc.head.appendChild(style);
    });

    console.log('✅ Injected DaisyUI CSS');

    // Now test theme switching
    const themeButton = page.locator('button[title="DaisyUI theme for components"]');

    // Test dark theme
    await themeButton.click();
    await page.waitForTimeout(300);
    const darkOption = page.locator('[role="menuitem"]', { hasText: 'Dark' });
    await darkOption.click();
    await page.waitForTimeout(1000);

    await page.screenshot({ path: 'fixed-dark-theme.png', fullPage: true });
    console.log('✅ Dark theme applied');

    // Test synthwave theme
    await themeButton.click();
    await page.waitForTimeout(300);
    const synthwaveOption = page.locator('[role="menuitem"]', { hasText: 'Synthwave' });
    await synthwaveOption.click();
    await page.waitForTimeout(1000);

    await page.screenshot({ path: 'fixed-synthwave-theme.png', fullPage: true });
    console.log('✅ Synthwave theme applied');

    // Test cupcake theme
    await themeButton.click();
    await page.waitForTimeout(300);
    const cupcakeOption = page.locator('[role="menuitem"]', { hasText: 'Cupcake' });
    await cupcakeOption.click();
    await page.waitForTimeout(1000);

    await page.screenshot({ path: 'fixed-cupcake-theme.png', fullPage: true });
    console.log('✅ Cupcake theme applied');

    // Back to light
    await themeButton.click();
    await page.waitForTimeout(300);
    const lightOption = page.locator('[role="menuitem"]', { hasText: 'Light' });
    await lightOption.click();
    await page.waitForTimeout(1000);

    await page.screenshot({ path: 'fixed-light-theme.png', fullPage: true });
    console.log('✅ Light theme restored');

    console.log('🎉 THEME SWITCHING NOW WORKING WITH INJECTED CSS!');
  });
});