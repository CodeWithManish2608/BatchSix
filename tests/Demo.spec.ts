import {test,expect} from '@playwright/test';


test('Tc-01 Login to Account', async({page}) => {

await page.goto('https://automationpracticehubapp.netlify.app/');
await page.getByRole("textbox",{name : "username"}).fill("Admin");
await page.getByPlaceholder("Hello@123").fill("Hello@123");
await page.getByTestId("login-submit").press("Enter");
console.log("Login Successful");
console.log(await page.getByText("HomePage").innerText());

})


test("Tc-02 Fill And Submit the form", async({page}) =>{

await page.goto('https://automationpracticehubapp.netlify.app/');
await page.getByRole("textbox",{name : "username"}).fill("Admin");
await page.getByPlaceholder("Hello@123").fill("Hello@123");
await page.getByTestId("login-submit").press("Enter");
console.log("Login Successful");
console.log("you are on : " +await page.getByText("HomePage").innerText());
await page.locator("//input[@id='first-name']").fill("Ankush");
await page.locator("#last-name").fill("Nikhare");
await page.getByPlaceholder("Enter your email").fill("ankush.nikhareofc@gmail.com");
await page.locator("#password").fill("Hello@123");
await page.getByTestId("feedback").fill("Let's learn playwright");
await page.getByText("Submit" , {exact:true}).first().click();
console.log("Form Submitted Successfully");
})


test.only('Tc-03 Assertion on Buttons on Home Page', async({page}) => {

await page.goto('https://automationpracticehubapp.netlify.app/');

await page.getByRole("textbox",{name : "username"}).fill("Admin");

await page.getByPlaceholder("Hello@123").fill("Hello@123");

await page.getByTestId("login-submit").press("Enter");

await expect(page.getByLabel("Submit", {exact : true})).toContainText("Submit");
await expect(page.locator("//button[@name='submit-btn']")).toHaveCount(2);
console.log("Assertion on " + await page.getByLabel("Submit", {exact : true}).innerText() +" Button Passed");

await expect(page.getByRole("button", {name : 'Save'})).toBeEnabled();
await expect(page.getByRole("button", {name : 'Save'})).toHaveAttribute('name', 'save-btn');
await expect(page.getByRole("button", {name : 'Save'})).toHaveAttribute('data-testid', 'save-btn');
console.log("Assertion on " + await page.getByLabel("Save", {exact : true}).innerText() + " Button Passed");

await expect(page.getByTestId("reset-btn")).toBeVisible();
await expect(page.getByTestId("reset-btn")).toHaveAttribute('name', 'reset-btn');
await expect(page.getByTestId("reset-btn")).toHaveRole('button');
await expect(page.getByTestId("reset-btn")).not.toBeDisabled();
console.log("Assertion on " + await page.getByTestId("reset-btn").innerText() + " Button Passed");

await expect(page.getByText('Disabled Button')).toBeDisabled();
await expect(page.getByText('Disabled Button')).not.toBeEnabled();
console.log("Assertion on " + await page.getByText("Disabled Button").innerText() + " Button Passed");
})



