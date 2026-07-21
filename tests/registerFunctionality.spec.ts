import {test, expect} from "@playwright/test"
import { RegisterFunctionalityPage } from "../pages/RegisterFunctionalityPage";
import { LoginFunctionalityPage } from "../pages/LoginFunctionalityPage";
import { RegisterPageLocators } from "../locators/RegisterPageLocators";
import { BASE_URL} from "../utils/envConfig";

test.describe('Verifying Test 001 Register Functionality', () => {

    let loginPage: LoginFunctionalityPage
    let registerPage: RegisterFunctionalityPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginFunctionalityPage(page);
        registerPage = new RegisterFunctionalityPage(page);

        await page.goto(BASE_URL);
        await registerPage.myAccountDropMenu();
        await registerPage.registerLink();
        expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/register");
    });

    test('test register functionality 001', async ({ page }) => {
        await registerPage.firstName("Lukesh");
        await registerPage.lastName("Ade");
        await registerPage.email(generateRandomEmail());
        await registerPage.teliphone("1234567890");
        await registerPage.password("123456");
        await registerPage.confirm_password("123456");
        await registerPage.privacy_policy();
        await registerPage.continue();
        await expect(page.locator(RegisterPageLocators.accountSuccessText)).toHaveText("Your Account Has Been Created!");
        await registerPage.continue();
        await registerPage.myAccountDropMenu();
        await expect(page.locator(RegisterPageLocators.logoutLink)).toBeVisible();
    });

});

function generateRandomEmail(): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomStr = "";
  
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomStr += chars[randomIndex];
  }
  
  // You can append a domain of your choice
  return `${randomStr}@example.com`;
}