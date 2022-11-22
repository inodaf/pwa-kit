import { test, expect } from "@playwright/test";

test("shows 404 page when clicking link", async ({ page }) => {
  await page.goto("/");

  await page.click('[data-testid="link-trigger"]');
  const message = await page
    .locator("text=This page could not be found.")
    .innerText();

  expect(message).toBeDefined();
});
