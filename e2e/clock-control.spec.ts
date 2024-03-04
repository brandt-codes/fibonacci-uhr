import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await page.evaluate(() => {
    window.localStorage.setItem('fib-hour', "0");
    window.localStorage.setItem('fib-minute', "0");
  })
});

test('has buttons', async ({ page }) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await expect(page.getByRole('button', { name: '-5 Minuten' })).toBeVisible();
  await expect(page.getByRole('button', { name: '+5 Minuten' })).toBeVisible();
});

test('has initial time', async ({ page }) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await expect(page.getByTestId('display-time').getByText("00 : 00")).toBeVisible();
});

test('has dropdowns', async ({ page }) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await expect(page.getByTestId('hour-select')).toBeVisible();
  await expect(page.getByTestId('minute-select')).toBeVisible();
});

test('should add 15 minutes on 3 times click "+5" Button', async ({ page }) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await page.getByTestId('plus-button').click();
  await page.getByTestId('plus-button').click();
  await page.getByTestId('plus-button').click();
  await expect(page.getByTestId('display-time').getByText("00 : 15")).toBeVisible();
});

test('should subtract 15 minutes on 3 times click "-5" Button (with overflow to 12:45)', async ({ page }) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await page.getByTestId('minus-button').click();
  await page.getByTestId('minus-button').click();
  await page.getByTestId('minus-button').click();
  await expect(page.getByTestId('display-time').getByText("12 : 45")).toBeVisible();
});

test('should change dropdown on button click (-Button)', async ({ page }) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await page.getByTestId('minus-button').click();
  await expect(page.getByTestId('hour-select')).toHaveValue("12");
  await expect(page.getByTestId('minute-select')).toHaveValue("55");
});

test('should change time via dropdown', async ({page}) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await page.getByTestId('hour-select').selectOption('03');
  await page.getByTestId('minute-select').selectOption('45');
  await expect(page.getByTestId('display-time').getByText("03 : 45")).toBeVisible();
});
