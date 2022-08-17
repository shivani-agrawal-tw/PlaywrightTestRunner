import {expect, test} from "@playwright/test";

test("Visual Comparison",async ({page}) => {

    await page.goto("https://www.saucedemo.com/");
    expect(await page.title()).toBe("Swag Labs");
    expect(await page.screenshot({ fullPage : false })).toMatchSnapshot('screenshot.png')

})
