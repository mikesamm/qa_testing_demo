import { test, expect } from '@playwright/test'

test.describe('Circuit Breaker Switches', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard')

    const breaker15AButton = page.getByRole('button', { name: '15A' })
    const breaker20AButton = page.getByRole('button', { name: '20A' })

    // start both breakers as active
    if (
      !(await breaker15AButton.evaluate((el) =>
        el.classList.contains('active')
      ))
    ) {
      await breaker15AButton.click()
    }
    if (
      !(await breaker20AButton.evaluate((el) =>
        el.classList.contains('active')
      ))
    ) {
      await breaker20AButton.click()
    }
  })

  test('should trip 15A breaker', async ({ page }) => {
    const breaker15AButton = page.getByRole('button', { name: '15A' })

    await breaker15AButton.click()
    await expect(breaker15AButton).not.toHaveClass(/active/)
  })

  test('should trip 20A breaker', async ({ page }) => {
    const breaker20AButton = page.getByRole('button', { name: '20A' })

    await breaker20AButton.click()
    await expect(breaker20AButton).not.toHaveClass(/active/)
  })

  test('should reset 15A breaker', async ({ page }) => {
    // should start as active
    const breaker15AButton = page.getByRole('button', { name: '15A' })

    await breaker15AButton.click()
    await expect(breaker15AButton).toHaveClass(/active/)
  })

  test('should reset 20A breaker', async ({ page }) => {
    // should start as active
    const breaker20AButton = page.getByRole('button', { name: '20A' })

    await breaker20AButton.click()
    await expect(breaker20AButton).toHaveClass(/active/)
  })

  test('should not reset 15A breaker', async ({ page }) => {
    // breaker indicator should not reset, warning should appear
  })

  test('should not reset 20A breaker', async ({ page }) => {
    // breaker indicator should not reset, warning should appear
  })
})
