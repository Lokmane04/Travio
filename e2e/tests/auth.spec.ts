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
  await expect(page.getByRole("link", { name: "My bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});
test("allow user to register", async ({ page }) => {
  const testMail: string = `lokmane2${
    Math.floor(Math.random() * 90000) + 10000
  }@gmail.com`;
  await page.goto(UI_URL);
  await page.getByRole("link", { name: "Sign in" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  await page.getByRole("link", { name: "Create an account here" }).click();
  await expect(
    page.getByRole("heading", { name: "Create an Account" })
  ).toBeVisible();
  await page.locator("[name=firstName]").fill("lokmane");
  await page.locator("[name=lastName]").fill("baslimane");
  await page.locator("[name=email]").fill(testMail);
  await page.locator("[name=password]").fill("aaaaaaaa");
  await page.locator("[name=confirmPassword]").fill("aaaaaaaa");
  await page.getByRole("button", { name: "Create Account" }).click();
  await expect(page.getByText("Homepage")).toBeVisible();
  await expect(page.getByRole("link", { name: "My bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});
