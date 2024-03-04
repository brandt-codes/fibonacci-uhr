import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await page.evaluate(() => {
    window.localStorage.setItem('fib-hour', "0");
    window.localStorage.setItem('fib-minute', "0");
  })
});

test('has title', async ({ page }) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await expect(page).toHaveTitle(/FibonacciUhr/);
});

test('has headline', async ({ page }) => {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await expect(page.getByRole('heading', { name: 'Fibonacci Uhr' })).toBeVisible();
});

test('should persist value on page reload', async ({page})=> {
  await page.goto(process.env.E2EURL.toString() || ' http://localhost:4200/');
  await page.getByTestId('hour-select').selectOption('06');
  await page.getByTestId('minute-select').selectOption('05');
  await expect(page.getByTestId('display-time').getByText("06 : 05")).toBeVisible();
  await page.reload();
  await expect(page.getByTestId('display-time').getByText("06 : 05")).toBeVisible();
});
