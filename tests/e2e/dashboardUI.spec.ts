import { test, expect } from '@playwright/test'

test.describe('Dashboard UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard')
  })

  test('basic switch renders', async ({ page }) => {
    const basicSwitch = page.getByRole('button', { name: 'basic-switch' })

    await expect(basicSwitch).toBeVisible()
    await expect(basicSwitch).toBeEnabled()
  })

  test('dimmer switch renders', async ({ page }) => {
    const dimmerSwitch = page.getByRole('slider', { name: 'dimmer-switch' })

    await expect(dimmerSwitch).toBeVisible()
    await expect(dimmerSwitch).toBeEnabled()
  })

  test('scene selection switch renders', async ({ page }) => {
    const sceneSwitch = page.getByRole('button', { name: 'scene-switch' })

    await expect(sceneSwitch).toBeVisible()
    await expect(sceneSwitch).toBeEnabled()
  })

  test('circuit breaker switch render', async ({ page }) => {
    const circuitBreakerSwitch = page.getByRole('button', {
      name: 'circuit-breaker-switch',
    })

    await expect(circuitBreakerSwitch).toBeVisible()
    await expect(circuitBreakerSwitch).toBeEnabled()
  })

  test('outlet connected to basic switch renders', async ({ page }) => {
    const outletIndicator = page.getByRole('img', { name: 'outlet-indicator' })

    await expect(outletIndicator).toBeVisible()
    await expect(outletIndicator).toBeEnabled()
  })

  test('single light connected to dimmer switch renders', async ({ page }) => {
    const singleLightIndicator = page.getByRole('img', {
      name: 'single-light-indicator',
    })

    await expect(singleLightIndicator).toBeVisible()
    await expect(singleLightIndicator).toBeEnabled()
  })

  test('grouped lights connected to scene switch render', async ({ page }) => {
    const groupedLightsIndicator = page.getByRole('img', {
      name: 'grouped-lights-indicator',
    })

    await expect(groupedLightsIndicator).toBeVisible()
    await expect(groupedLightsIndicator).toBeEnabled()
  })

  test('circuit breaker indicators render', async ({ page }) => {
    const circuitBreakerIndicators = page.getByRole('img', {
      name: 'circuit-breaker-indicator',
    })

    await expect(circuitBreakerIndicators).toHaveCount(3)
    for (let i = 0; i < (await circuitBreakerIndicators.count()); i++) {
      await expect(circuitBreakerIndicators.nth(i)).toBeVisible()
      await expect(circuitBreakerIndicators.nth(i)).toBeEnabled()
    }
  })
})
