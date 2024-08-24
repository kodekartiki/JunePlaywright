const { test, expect } = require('@playwright/test')
//const exp = require('constants')
//ROME --ITALY
test('TC01 drag and drop using using inbuild commnd', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    let rome = await page.locator('[id="box6"]')
    let italy = await page.locator('[id="box106"]')
    await rome.dragTo(italy)
    expect(rome).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)
})

test('TC02 drag drop using mouse action', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('[id="box6"]').hover()
    await page.mouse.down()
    await page.locator('[id="box106"]').hover()
    await page.mouse.up()
    await page.waitForTimeout(5000)
    await expect(await page.locator('[id="box6"]')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')

})

//Washington--united states
test('TC03 drag and drop using using inbuild commnd', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    let Washington = await page.locator('[id="box3"]')
    let unitedstates = await page.locator('[id="box103"]')
    await Washington.dragTo(unitedstates)
    expect(Washington).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)
})

test.only('TC04 drag drop using mouse action', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('[id="box3"]').hover()
    await page.mouse.down()
    await page.locator('[id="box103"]').hover()
    await page.mouse.up()
    await page.waitForTimeout(5000)
    await expect(await page.locator('[id="box3"]')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')

})