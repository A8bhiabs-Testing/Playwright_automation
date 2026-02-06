const {test, expect} = require('@playwright/test');

test('My first automation script', async ({page}) => {
    //1. Go to website
    await page.goto('https://www.google.com');
    
    //2.Expect the title to contain a specific word
    await expect(page).toHaveTitle(/Google/);
    
    //3. Take a screenshot so we have proof!
    await page.screenshot({path: 'google.png', fullPage: true});
});
