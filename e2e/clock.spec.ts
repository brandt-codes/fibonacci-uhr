import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto(' http://localhost:4200/');
  await page.evaluate(() => {
    window.localStorage.setItem('fib-hour', "0");
    window.localStorage.setItem('fib-minute', "0");
  })
});

test('should set color for 1 hour', async ({page})=> {
  await page.goto(' http://localhost:4200/');
  await page.getByTestId('hour-select').selectOption('01');
  const fib11 = page.locator('[data-testid="fib-1-1"]');
  const fib11Child = fib11.locator('div:first-child');
  await expect(fib11Child).toHaveCSS("background-color", "rgb(255, 0, 0)");
});

test('should set color for 2 hour', async ({page})=> {
  await page.goto(' http://localhost:4200/');
  await page.getByTestId('hour-select').selectOption('02');
  const fib2 = page.locator('[data-testid="fib-2"]');
  const fib2Child = fib2.locator('div:first-child');
  await expect(fib2Child).toHaveCSS("background-color", "rgb(255, 0, 0)");
});

test('should set color for 3 hour', async ({page})=> {
  await page.goto(' http://localhost:4200/');
  await page.getByTestId('hour-select').selectOption('03');
  const fib3 = page.locator('[data-testid="fib-3"]');
  const fib3Child = fib3.locator('div:first-child');
  await expect(fib3Child).toHaveCSS("background-color", "rgb(255, 0, 0)");
});

test('should set color for 6 hour and 5 minutes (combine for first field)', async ({page})=> {
  await page.goto(' http://localhost:4200/');
  await page.getByTestId('hour-select').selectOption('06');
  await page.getByTestId('minute-select').selectOption('05');
  const fib5 = page.locator('[data-testid="fib-5"]');
  const fib5Child = fib5.locator('div:first-child');
  await expect(fib5Child).toHaveCSS("background-color", "rgb(255, 0, 0)");
  const fib11 = page.locator('[data-testid="fib-1-1"]');
  const fib11Child = fib11.locator('div:first-child');
  await expect(fib11Child).toHaveCSS("background-color", "rgb(0, 255, 0)");
});

test('should set 10 hour and 20 minutes on fibonacci clock', async ({page}) => {
  await page.goto(' http://localhost:4200/');
  await page.getByTestId('hour-select').selectOption('10');
  await page.getByTestId('minute-select').selectOption('20');
  const fib11 = page.locator('[data-testid="fib-1-1"]');
  const fib11Child = fib11.locator('div:first-child');
  await expect(fib11Child).toHaveCSS("background-color", "rgb(0, 0, 255)");

  const fib12 = page.locator('[data-testid="fib-1-2"]');
  const fib12Child = fib12.locator('div:first-child');
  await expect(fib12Child).toHaveCSS("background-color", "rgb(255, 255, 255)");

  const fib2 = page.locator('[data-testid="fib-2"]');
  const fib2Child = fib2.locator('div:first-child');
  await expect(fib2Child).toHaveCSS("background-color", "rgb(255, 0, 0)");

  const fib3 = page.locator('[data-testid="fib-3"]');
  const fib3Child = fib3.locator('div:first-child');
  await expect(fib3Child).toHaveCSS("background-color", "rgb(0, 255, 0)");

  const fib5 = page.locator('[data-testid="fib-5"]');
  const fib5Child = fib5.locator('div:first-child');
  await expect(fib5Child).toHaveCSS("background-color", "rgb(255, 0, 0)");
});
