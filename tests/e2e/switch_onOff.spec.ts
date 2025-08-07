import { test, expect } from '@playwright/test'

test.describe('On/Off switch', () => {
  test.beforeAll(async ({ page }) => {
    await page.goto('/')
  })

  test('toggles switch ON when clicked', async ({ page }) => {
    const toggle = page.getByRole('button', { name: 'basic-switch' })

    await expect(toggle).toBeEnabled()
    await expect(toggle).toBeVisible()

    await toggle.click()
    await expect(toggle).toHaveText('Turn OFF')
  })

  test('toggles switch OFF when clicked', async ({ page }) => {
    // starts in ON state from previous test
    const toggle = page.getByRole('button', { name: 'basic-switch' })

    await toggle.click()
    await expect(toggle).toHaveText('Turn ON')
  })

  test('toggles switch multiple times', async ({ page }) => {
    // starts in OFF state from previous test
    const toggle = page.getByRole('button', { name: 'basic-switch' })

    for (let i = 0; i < 5; i++) {
      await toggle.click()
      const expectedText = i % 2 === 0 ? 'Turn OFF' : 'Turn ON'
      await expect(toggle).toHaveText(expectedText)
    }
  })
})
