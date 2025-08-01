import { test, expect } from '@playwright/test'

test.describe('On/Off switch', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders switch in OFF state by default', async ({ page }) => {
    const label = page.getByTestId('switch-label')

    await expect(label).toHaveText('OFF')
  })

  test('toggles switch ON when clicked', async ({ page }) => {
    await page.addStyleTag({
      content: '* { transition: none !important; animation: none !important; }',
    })
    const toggle = page.getByRole('button', { name: 'ON/OFF Switch' })
    const label = page.getByTestId('switch-label')

    await expect(toggle).toBeEnabled()
    await expect(toggle).toBeVisible()
    await toggle.scrollIntoViewIfNeeded()

    await toggle.click()
    await expect(label).toHaveText('ON')
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
