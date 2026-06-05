import {test, expect} from '@playwright/test';
import {LoginFunctionalityPage} from '../pages/LoginFunctionalityPage';
import {BASE_URL, USERNAME, PASSWORD} from '../utils/envConfig';
import { RegisterFunctionalityPage } from '../pages/RegisterFunctionalityPage';


test('Login to tutorialsninja application with valid credentials', async ({ page }) => {
    const loginPage = new LoginFunctionalityPage(page);
    const registerPage = new RegisterFunctionalityPage(page)
    await page.goto(BASE_URL);
    await registerPage.myAccountDropMenu();
    await loginPage.loginlink();
    await loginPage.login(USERNAME, PASSWORD);
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/account");
});