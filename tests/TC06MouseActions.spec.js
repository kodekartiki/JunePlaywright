const { test, expect } = require('@playwright/test')

//dblclick
test('Verify dblclick in playwright', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#doubleClickBtn').dblclick()
    await expect(page.locator('#doubleClickMessage')).toBeVisible()
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')
})

//rightclick
test('Verify rightclick in playwright', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({ button: 'right' })
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')
})

//mouseHover
test('verify the mousehover in playwright', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html')
    await page.getByText('Hover Over Me Third!').hover()
    //  await page.waitForTimeout(3000)
    await expect(page.locator('[style="float:right;"]>div>a').first()).toBeVisible()
    await expect(page.locator('[style="float:right;"]>div>a').last()).toBeVisible()
    await page.locator('[style="float:right;"]>div>a').nth(1).click()
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
})
