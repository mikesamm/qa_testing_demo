import { test, expect } from '@playwright/test'

test.describe('On/Off switch', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders switch in OFF state by default', async ({ page }) => {
    const label = page.getByTestId('switch-toggle')

    await expect(label).toHaveText('Turn ON')
  })

  test('toggles switch ON when clicked', async ({ page }) => {
    const toggle = page.getByTestId('switch-toggle')

    await expect(toggle).toBeEnabled()
    await expect(toggle).toBeVisible()
    await toggle.scrollIntoViewIfNeeded()

    await toggle.click()
    await expect(toggle).toHaveText('Turn OFF')
  })

  test('toggles switch OFF again when clicked twice', async ({ page }) => {
    const toggle = page.getByTestId('switch-toggle')

    await toggle.waitFor({ state: 'visible' })
    await toggle.click()
    await expect(toggle).toHaveText('ON')
    await toggle.click()
    await expect(toggle).toHaveText('OFF')
  })
})
