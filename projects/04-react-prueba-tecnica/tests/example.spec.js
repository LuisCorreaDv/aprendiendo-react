// @ts-check
import { test, expect } from '@playwright/test';

//Se puede configurar con variables de entorno
const LOCAL_HOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_URL = 'https://cataas.com'

//Los test funcionan con promesas
test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy();
});