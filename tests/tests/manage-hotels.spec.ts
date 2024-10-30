import { test, expect } from "@playwright/test";
import path from "path";

const UI_URL = "http://localhost:5173/add-hotel";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);
  await page.getByRole("link", { name: "Sign in" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  await page.locator("[name=email]").fill("aaaaaaaa@gmail.com");
  await page.locator("[name=password]").fill("aaaaaaaa");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Homepage")).toBeVisible();
});

test("allow user to create a hotel", async ({ page }) => {
  await page.goto(UI_URL);
  await expect(page.getByRole("heading", { name: "Add Hotel" })).toBeVisible();
  await page.locator("[name=name]").fill("Test Hotel");
  await page.locator("[name=city]").fill("Algiers");
  await page.locator("[name=country]").fill("Algeria");
  await page.locator("[name=description]").fill("Description");

  await page.locator("[name=pricePerNight]").fill("100");
  await page.selectOption('select[name="starRating"]', "3");

  await page.getByText("Cabin").click();
  await page.getByLabel("Free wifi").check();
  await page.getByLabel("Prayer Room").check();

  await page.locator('[name="adultCount"]').fill("2");
  await page.locator('[name="childCount"]').fill("1");

  await page.setInputFiles('[name="imageFiles"]', [
    path.join(__dirname, "files", "1.png"),
    path.join(__dirname, "files", "2.png"),
  ]);
  await page.getByRole("button", { name: "Save" }).click();

  //just because of internet speed

  setTimeout(() => {
    expect(page.getByText("Hotel saved successfully")).toBeVisible();
  }, 1500);
});
