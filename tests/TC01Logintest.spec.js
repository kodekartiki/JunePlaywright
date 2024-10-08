const { test, expect } = require('@playwright/test')

test('Verify login functionality with valid credentails', async ({ page }) => {

    let dashboardEle = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name ="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    await expect(dashboardEle).toBeVisible()
    await expect(dashboardEle).toHaveText('Dashboard')
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

test('Verify login functionality with invalid credentails', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('admin')
    await page.locator('input[placeholder="Password"]').fill('Pass123')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('div[role="alert"]')).toBeVisible()
    await expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')

})


// https://testpages.herokuapp.com/styled/alerts/alert-test.html