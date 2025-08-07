import { test, expect } from '@playwright/test'

test.describe('Dimmer Switch', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard')
  })

  test('should slide to 100% brightness', async ({ page }) => {
    const handle = page.getByRole('slider', { name: 'Dimmer Switch' })
    const light = page.getByRole('img', { name: 'Single Light Indicator' })
    const handleBox = await handle.boundingBox()

    if (handleBox) {
      // set steps and seconds
      const steps = 20
      const stepDelay = 5000 / steps // 5 seconds total
      // start y in middle fo the box
      const startY = handleBox.y + handleBox.height / 2
      // x set to middle of the box
      const x = handleBox.x + handleBox.width / 2
      // set end Y to top of the slider
      const endY = startY - 192
      // move mouse to start position
      await page.mouse.move(startY, x)
      // click down on the mouse
      await page.mouse.down()
      // iterate to simulate sliding motion
      for (let i = 1; i <= steps; i++) {
        const y = startY - (startY - endY) / steps
        await page.mouse.move(x, y)
        await page.waitForTimeout(stepDelay)
      }
      // release mouse
      await page.mouse.up()
    }

    const lightColor = await light.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    )
    expect(lightColor).toBe('rgb(255, 255, 255)')
  })

  test('should slide to 0% brightness', async ({ page }) => {
    const handle = page.getByRole('slider', { name: 'Dimmer Switch' })
    const light = page.getByRole('img', { name: 'Single Light Indicator' })
    const handleBox = await handle.boundingBox()

    if (handleBox) {
      const steps = 20
      const stepDelay = 5000 / steps // 5 seconds total

      const startY = handleBox.y + handleBox.height / 2
      const x = handleBox.x + handleBox.width / 2
      const endY = startY + 192

      await page.mouse.move(startY, x)
      await page.mouse.down()

      for (let i = 1; i <= steps; i++) {
        const y = startY + (startY - endY) / steps
        await page.mouse.move(x, y)
        await page.waitForTimeout(stepDelay)
      }

      await page.mouse.up()
    }

    // compute color of the light indicator
    const lightColor = await light.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    )
    expect(lightColor).toBe('rgb(15, 23, 43)')
  })
})
