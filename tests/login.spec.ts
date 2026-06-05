import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {BASE_URL, USERNAME, PASSWORD} from '../utils/envConfig';


test('Login to tutorialsninja application with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto(BASE_URL);
    await loginPage.myAccountDropMenu();
    await loginPage.loginlink();
    await loginPage.login(USERNAME, PASSWORD);
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/account");
});