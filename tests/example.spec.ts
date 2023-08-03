import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Play the game', async ({ page }) => {
  test.slow()
  const mainPage = new MainPage(page)
  await mainPage.navToPage()
  await mainPage.cardSelector()
})
