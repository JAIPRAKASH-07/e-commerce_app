import { test, expect } from '@playwright/test';

test('homepage has title ShopHub and shows products link', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/ShopHub/);
  await expect(page.locator('text=Products')).toBeVisible();
});
