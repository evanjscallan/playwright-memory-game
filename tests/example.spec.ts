import { test } from '@playwright/test';
import { MainPage } from './MainPage'



test('Play da game', async ({ page }) => {
  test.slow()
  const mainPage = new MainPage(page)
  await mainPage.navToPage()
  await mainPage.cardSelector()
  
})
