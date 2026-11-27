import{test, expect}from '@playwright/test'


test('TC-001 Verify Browser Launches', async ({page})=>{
  //logic

  //WebDriver x =new ChromeDriver()
  //x.get('https://'ggole.com')
  //driver.findElement(By.xpath(//tagName[@attribute ='value])).click()

  await page.goto('https://automationpracticehubapp.netlify.app/')

  await page.getByTestId('login-username').fill('Admin')

  await page.getByPlaceholder('Hello@123').fill('Hello@123')

  await page.locator("//button[@id = 'login-submit']").click()

  await page.getByPlaceholder('Enter your first name').fill('John')

  await page.getByTestId('last-name').fill('Test1234')

  await page.getByTestId('email').fill('john@test.com')

  await page.locator('#password').fill('Hello@000')

  await page.locator("//textarea[@name='feedback']").fill('I am good')

  await page.getByRole('button', {name: 'Submit'}).first().click()

  await expect(page.getByTestId('submit-success-message')).toBeVisible()

  //details saved successfully

  await expect(page.getByTestId('submit-success-message')).toHaveText('details saved successfully')

  await expect(page.getByTestId('submit-success-message')).toContainText('details saved ')

})

