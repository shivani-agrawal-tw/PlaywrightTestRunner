import {expect, test} from "@playwright/test";

test("Launch and verify title",async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    expect(await page.title()).toBe("Swag Labs");
    
})

test("Login and verify url",async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    expect(await page.title()).toBe("Swag Labs");
    await page.fill("input[placeholder='Username']", "standard_user");
    await page.fill("input[placeholder='Password']", "secret_sauce");
    await page.click("//input[@class='submit-button btn_action']")
    expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");

})