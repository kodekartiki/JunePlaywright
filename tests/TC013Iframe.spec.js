const { test, expect } = require('@playwright/test')

test('TC01 Handling Iframe by using .framelocator in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/frame')

    let frame = await page.frameLocator('[id="firstFr"]')
    await frame.locator('[placeholder="Enter name"]').fill('Kartiki')
    expect(frame.locator('[placeholder="Enter name"]')).toBeVisible()
    await page.waitForTimeout(3000)
})

test('TC02 Handling Iframe by using .frame method', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    let frame1 = await page.frame('firstFr')
    await frame1.locator('[name="fname"]').fill('Kartiki')
    await frame1.locator('[name="lname"]').fill('Kode')
    await expect(frame1.locator('[name="fname"]')).toBeVisible()
    await expect(frame1.locator('[name="lname"]')).toBeVisible()
    await expect(frame1.locator('[class="title has-text-info"]'))
        .toHaveText('You have entered Kartiki Kode')
    await page.waitForTimeout(3000)
})

test.only('TC03 handling Iframe by using url to .frame', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    let frame2 = await page.frame({ url: 'https://letcode.in/frameUI' })
    await frame2.locator('[name="fname"]').fill('Kartiki')
    await frame2.locator('[name="lname"]').fill('Kode')
    await expect(frame2.locator('[name="fname"]')).toBeVisible()
    await expect(frame2.locator('[name="lname"]')).toBeVisible()
    await expect(frame2.locator('[class="title has-text-info"]'))
        .toHaveText('You have entered Kartiki Kode')
    await page.waitForTimeout(3000)

})



