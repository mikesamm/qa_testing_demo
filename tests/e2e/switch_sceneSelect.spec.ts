import { test, expect } from '@playwright/test'

test.describe('Scene Selection Switch', () => {
  test.beforeAll(async ({ page }) => {
    await page.goto('/dashboard')
  })

  test('should activate scene 1', async ({ page }) => {
    const scene1 = page.getByRole('button', { name: 'Scene 1' })
    await scene1.click()
    expect(scene1).toHaveClass(/active/)
  })

  test('should activate scene 2', async ({ page }) => {
    // when scene 2 is clicked, it should be activated and scene 1 deactivated
    const scene1 = page.getByRole('button', { name: 'Scene 1' })
    const scene2 = page.getByRole('button', { name: 'Scene 2' })

    await scene2.click()
    expect(scene2).toHaveClass(/active/)
    expect(scene1).not.toHaveClass(/active/)
  })

  test('should activate scene 3', async ({ page }) => {
    // when scene 3 is clicked, it should be activated and scene 2 deactivated
    const scene2 = page.getByRole('button', { name: 'Scene 2' })
    const scene3 = page.getByRole('button', { name: 'Scene 3' })

    await scene3.click()
    expect(scene3).toHaveClass(/active/)
    expect(scene2).not.toHaveClass(/active/)
  })

  test('should deactivate all scenes', async ({ page }) => {
    // by clicking the latest acivated scene, all scenes should be deactivated
    const scene3 = page.getByRole('button', { name: 'Scene 3' })
    const scene2 = page.getByRole('button', { name: 'Scene 2' })
    const scene1 = page.getByRole('button', { name: 'Scene 1' })

    await scene3.click()
    expect(scene3).not.toHaveClass(/active/)
    expect(scene2).not.toHaveClass(/active/)
    expect(scene1).not.toHaveClass(/active/)
  })
})
