const { test, expect } = require('@playwright/test')

test('TC01 static dropdown in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="fruits"]').selectOption('1')
    let successEle = await page.locator('[class="subtitle"]')
    await expect(successEle).toBeVisible()
    await expect(successEle).toHaveText('You have selected Mango')
})

test('TC02 static dropdown in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="superheros"]').selectOption('ta')
    let superherosEle = await page.locator('[class="subtitle"]').first()
    await expect(superherosEle).toBeVisible()
    await expect(superherosEle).toHaveText('You have selected The Avengers')
})

test('TC03 static dropdown in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="lang"]').selectOption('swift')
    let langEle = await page.locator('[class="subtitle"]').last()
    await expect(langEle).toBeVisible()
    await expect(langEle).toHaveText('You have selected Swift')
})

test('TC04 static dropdown in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="country"]').selectOption('India')
})

//with label parameter

test('TC05 static dropdown using label parameter in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="fruits"]').selectOption({ label: 'Apple' })
    let successEle = await page.locator('[class="subtitle"]')
    await expect(successEle).toBeVisible()
    await expect(successEle).toHaveText('You have selected Apple')
})

test('TC06 static dropdown using label parameter in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="superheros"]').selectOption({ label: 'Daredevil' })
    let superherosEle = await page.locator('[class="subtitle"]')
    await expect(superherosEle).toBeVisible()
    await expect(superherosEle).toHaveText('You have selected Daredevil')
})

test('TC07 static dropdown using label parameter in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="lang"]').selectOption({ label: 'JavaScript' })
    let langEle = await page.locator('[class="subtitle"]')
    await expect(langEle).toBeVisible()
    await expect(langEle).toHaveText('You have selected JavaScript')
})

test('TC08 static dropdown using label parameter in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="country"]').selectOption({ label: 'Colombia' })
})


