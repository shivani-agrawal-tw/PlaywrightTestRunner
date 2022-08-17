import {expect, test} from "@playwright/test";

test("Tracing and Viewing",async ({browser}) => {

    const context = await browser.newContext();

    //Start Tracing
    await context.tracing.start({
        screenshots : true,
        snapshots: true
    })

    const page = await context.newPage();

    await page.goto("https://www.saucedemo.com/");
    expect(await page.title()).toBe("Swag Labs");
    await page.goto("https://www.saucedemo.com/");
    expect(await page.title()).toBe("Swag Labs");
    await page.fill("input[placeholder='Username']", "standard_user");
    await page.fill("input[placeholder='Password']", "secret_sauce");
    await page.click("//input[@class='submit-button btn_action']")
    expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");

    //Stop Tracing
    await context.tracing.stop({ path: 'trace.zip' })

})