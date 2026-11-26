import {test} from '@playwright/test';


test('Tc-01 Login to Account', async({page}) => {

await page.goto('https://automationpracticehubapp.netlify.app/');
await page.getByRole("textbox",{name : "username"}).fill("Admin");
await page.getByPlaceholder("Hello@123").fill("Hello@123");
await page.getByTestId("login-submit").press("Enter");
console.log("Login Successful");
console.log(await page.getByText("HomePage").innerText());

})


test.only("Tc-02 Fill And Submit the form", async({page}) =>{

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

