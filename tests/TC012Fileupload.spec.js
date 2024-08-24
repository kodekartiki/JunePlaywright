const { test, expect } = require('@playwright/test')

//single fileUpload

test('TC01 verify the fileupload in playwright', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/fileupload/Kartiki Kode - ST- Internship.pdf')

    page.on('dialog', async alert => {
        await expect(alert.message()).toContain('Your file has now been uploaded!')
        console.log(alert.type())
        await expect(alert.type()).toContain('alert')
        await alert.accept()
        // await page.waitForTimeout(4000)
    })
    await page.locator('[type="submit"]').click()
    await expect(page.url())
        .toContain('https://www.webdriveruniversity.com/File-Upload/index.html?filename=Kartiki+Kode+-+ST-+Internship.pdf')
})

test('Verify multiple file uplode in playwright', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    let file1 = 'tests/fileupload/Kartiki Kode - ST - Training.pdf'
    let file2 = 'tests/fileupload/Kartiki Kode - ST- Internship.pdf'
    await page.locator('#filesToUpload').setInputFiles([file1, file2])
    let filecount = await page.locator('#fileList>li').count()
    expect(filecount).toBe(2)
    expect(await page.locator('#fileList>li').first()).toHaveText('Kartiki Kode - ST - Training.pdf')
    expect(await page.locator('#fileList>li').last()).toHaveText('Kartiki Kode - ST- Internship.pdf')
    console.log(filecount)
    await page.waitForTimeout(3000)
})

