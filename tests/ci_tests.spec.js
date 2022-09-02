const { test, expect } = require('@playwright/test');


test('Test_1', async ({ page, baseURL }) => {

    await page.goto(`${baseURL}`);

    await page.locator('//html/body/div[1]/div/div[2]/div/p/a[4]').click();

    await page.locator('//*[@id="scrollingNav"]/ul/li[9]/a').click();

    await page.locator('//*[@id="api-Booking-DeleteBooking-1.0.0"]/ul[1]/li[2]/a').click();

    await expect(page.locator('//*[@id="examples-Booking-DeleteBooking-1_0_0-1"]/pre/code')).toBeVisible();

    await page.locator('//*[@id="examples-Booking-DeleteBooking-1_0_0-1"]/pre/code').screenshot({ path: 'img/Authorisation.jpg', fullPage: true });

});


test('Test_2', async ({ page, baseURL }) => {

    await page.goto(`${baseURL}`);

    await page.locator('//html/body/div[2]/div[3]/div[3]/a/img').click();

    // await expect(page.locator("text=The page you’re looking for doesn’t exist.")).toBeVisible();

    await expect(page.locator("text=404.")).toBeVisible();

    // await page.screenshot({ path: 'img/error-message.jpg', fullPage: true });

});

test('Test_3', async ({ page, baseURL }) => {

    await page.goto(`${baseURL}`);

    await page.locator('//html/body/div[1]/div/div[2]/div/p/a[2]').click();

    await page.locator('//html/body/div[2]/div[2]/div/div[3]/p/a').click();

    const a = await page.locator('//*[@id="page-main-content-row"]/div[1]/div/div/div/div/div[2]/h1').innerText();

    console.log(a);

    await expect(page.locator('//*[@id="page-main-content-row"]/div[1]/div/div/div/div/div[2]/h1')).toContainText(a);

    await page.locator('//*[@id="page-main-content-row"]/div[1]/div/div/div/div/div[2]/h1').screenshot({ path: 'img/Book_name.jpg', fullPage: true });

});

test('Test_4', async ({ page, baseURL }) => {

    await page.goto(`${baseURL}`);

    await page.locator('//html/body/div[1]/div/div[2]/div/p/a[3]').click();

    await page.locator('//*[@id="repo-content-pjax-container"]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/span/a').click();

    await expect(page).not.toHaveURL('https://www.mwtestconsultancy.co.uk/training/apitesting/');

});