const { test, expect } = require('@playwright/test')

test('TC01 verify the dynamic dropdown in playwright', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('[id="src"]').fill('Pune')
    await page.waitForSelector('[class="placeHolderMainText"]')
    let optioncount = await page.locator('[class="placeHolderMainText"]').count()
    console.log(optioncount)
    let text = await page.locator('[class="placeHolderMainText"]').nth(2).textContent()
    console.log(text)
    let text1 = await page.locator('[class="placeHolderMainText"]').last().textContent()
    console.log(text1)

    for (let i = 0; i < optioncount; i++) {
        let text2 = await page.locator('[class="placeHolderMainText"]').nth(i).textContent()
        console.log(text2)
        if (text2 === 'Hinje Wadi') {
            await page.locator('[class="placeHolderMainText"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(3000)

})


test('TC02 verify the dynamic dropdown in playwright', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('[id="dest"]').fill('Mumbai')
    await page.waitForSelector('[class="placeHolderMainText"]')
    let OpCount = await page.locator('[class="placeHolderMainText"]').count()
    console.log(OpCount)
    let text3 = await page.locator('[class="placeHolderMainText"]').nth(3).textContent()
    console.log(text3)
    let text4 = await page.locator('[class="placeHolderMainText"]').last().textContent()
    console.log(text4)

    for (let i = 0; i < OpCount; i++) {
        let text5 = await page.locator('[class="placeHolderMainText"]').nth(i).textContent()
        console.log(text5)
        if (text5 === 'Borivali East') {
            await page.locator('[class="placeHolderMainText"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(3000)

})
















































