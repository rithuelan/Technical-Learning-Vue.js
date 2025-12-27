import { test, expect } from '@playwright/test'

test('homepage loads products', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByText('Products')).toBeVisible()
})
