import { test, expect } from "@playwright/test";

test("when opening an unknown url, shows the 404 page", async ({ page }) => {
  await page.goto("/unknown-page");

  const message = await page
    .locator("text=This page could not be found.")
    .innerText();

  expect(message).toBeDefined();
});
