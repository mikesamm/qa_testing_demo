import { test, expect } from '@playwright/test'

test.describe('On/Off switch', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Nuxt/)
  })

  test('renders switch in OFF state by default', async ({ page }) => {
    const switchLabel = await page.getByTestId('switch-label')
    await expect(switchLabel).toHaveText('OFF')
  })

  test('toggles switch ON when clicked', async ({ page }) => {
    const toggle = await page.getByTestId('switch-toggle')
    const label = await page.getByTestId('switch-label')

    await toggle.click()
    await expect(label).toHaveText('ON')
  })

  test('toggles switch OFF again when clicked twice', async ({ page }) => {
    const toggle = await page.getByTestId('switch-toggle')
    const label = await page.getByTestId('switch-label')

    await toggle.click() // ON
    await toggle.click() // OFF
    await expect(label).toHaveText('OFF')
  })

  test('reflects external state update from backend', async ({ page }) => {
    const label = await page.getByTestId('switch-label')

    // Simulate external change — depends on your implementation
    await page.evaluate(() => {
      window.dispatchEvent(
        new CustomEvent('simulate-switch-update', {
          detail: { state: 'on' },
        })
      )
    })

    await expect(label).toHaveText('ON')
  })

  test('disabled switch cannot be toggled', async ({ page }) => {
    const toggle = await page.getByTestId('switch-toggle')
    await page.evaluate(() => {
      window.dispatchEvent(new CustomEvent('simulate-disable-switch'))
    })

    await toggle.click()
    const label = await page.getByTestId('switch-label')
    await expect(label).not.toHaveText('ON') // should remain OFF
  })
})
