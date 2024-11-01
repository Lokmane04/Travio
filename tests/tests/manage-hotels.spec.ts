import { test, expect } from "@playwright/test";
import path from "path";

const UI_URL = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);
  await page.getByRole("link", { name: "Sign in" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  await page.locator("[name=email]").fill("baslilokma04@gmail.com");
  await page.locator("[name=password]").fill("aaaaaaaa");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Homepage")).toBeVisible();
});

test("allow user to create a hotel", async ({ page }) => {
  await page.goto(`${UI_URL}add-hotel`);
  await expect(page.getByRole("heading", { name: "Add Hotel" })).toBeVisible();
  await page.locator("[name=name]").fill("Test Hotel");
  await page.locator("[name=city]").fill("Algiers");
  await page.locator("[name=country]").fill("Algeria");
  await page.locator("[name=description]").fill("Description");

  await page.locator("[name=pricePerNight]").fill("16");
  await page.selectOption('select[name="starRating"]', "5");

  await page.getByText("Cabin").click();
  await page.getByLabel("Free wifi").check();
  await page.getByLabel("Prayer Room").check();

  await page.locator('[name="adultCount"]').fill("1");
  await page.locator('[name="childCount"]').fill("2");

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

test("display hotels", async ({ page }) => {
  await page.goto(`${UI_URL}my-hotels`);

  await expect(page.getByText("Test Hotel")).toBeVisible();

  await expect(page.getByText("Algiers")).toBeVisible();
  await expect(page.getByText("Algeria")).toBeVisible();
  await expect(page.getByText("£16 per night")).toBeVisible();
  await expect(page.getByText("1 adults, 2 children")).toBeVisible();
  await expect(page.getByText("5 Star Rating")).toBeVisible();

  await expect(page.getByRole("link", { name: "Add Hotel" })).toBeVisible();
});

test("edit hotels", async ({ page }) => {
  await page.goto(`${UI_URL}my-hotels`);

  await page.getByRole("link", { name: "View Details" }).first().click();
  await page.waitForSelector('[name="name"]', { state: "attached" });

  await expect(page.locator('[name="name"]')).toHaveValue("Test Hotel");
  await page.locator('[name="name"]').fill("Test hotel updated");
  await page.getByRole("button", { name: "Save" }).click();

  await expect(page.getByText("Hotel Saved!")).toBeVisible();
});
