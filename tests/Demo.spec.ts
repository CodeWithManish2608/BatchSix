import{test}from '@playwright/test'


test('TC-001 Verify Browser Launches', async ({page})=>{
  //logic

  //WebDriver x =new ChromeDriver()
  //x.get('https://'ggole.com')
  //driver.findElement(By.xpath(//tagName[@attribute ='value])).click()

  await page.goto('https://automationpracticehubapp.netlify.app/')

  await page.getByTestId('login-username').fill('Admin')

  await page.getByPlaceholder('Hello@123').fill('Hello@123')

  await page.locator('#login-submit').click()
  

})

