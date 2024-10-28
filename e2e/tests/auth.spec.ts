import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173";

test("allow user to sign in", async ({ page }) => {
  await page.goto(UI_URL);
  await page.getByRole("link", { name: "Sign in" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  await page.locator("[name=email]").fill("aaaaaaaa@gmail.com");
  await page.locator("[name=password]").fill("aaaaaaaa");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Homepage")).toBeVisible();
});
