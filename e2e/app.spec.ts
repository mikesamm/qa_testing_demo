import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  // go to this page
  await page.goto('http://localhost:3000/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Nuxt/)
})

test('get started link', async ({ page }) => {
  // got to this page
  await page.goto('http://localhost:3000/')

  // listen for the page event for a new page to be recognized
  const pagePromise = page.context().waitForEvent('page')
  // Click the get started link.
  await page.getByRole('link', { name: 'Documentation' }).click()
  const newPage = await pagePromise

  // Expects page to have a heading with the name of Installation.
  await expect(
    newPage.getByRole('heading', { name: 'Introduction' })
  ).toBeVisible()
})
