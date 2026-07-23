import { test, expect } from '@playwright/test';
import { LoginFunctionalityPage } from '../pages/LoginFunctionalityPage';
import { BASE_URL, USERNAME, PASSWORD } from '../utils/envConfig';
import { RegisterFunctionalityPage } from '../pages/RegisterFunctionalityPage';
import * as XLSX from "xlsx";
import { LoginPageLocators } from '../locators/LoginPageLocators';


test('Login to tutorialsninja application with valid credentials', async ({ page }) => {
    const loginPage = new LoginFunctionalityPage(page);
    const registerPage = new RegisterFunctionalityPage(page)
    await page.goto(BASE_URL);
    await registerPage.myAccountDropMenu();
    await loginPage.loginlink();
    await loginPage.login(USERNAME, PASSWORD);
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/account");
});

test.describe('Login data driven test', async () => {
    const excelPath = "testdata\\LoginData.xlsx";
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const workSheet = workbook.Sheets[sheetName];

    const loginData: any = XLSX.utils.sheet_to_json(workSheet);
    console.log(loginData);

    for (const { username, password, expected } of loginData) {
        test(`Login test for email: ${username} and password: ${password}`, async ({ page }) => {
            const loginPage = new LoginFunctionalityPage(page);
            const registerPage = new RegisterFunctionalityPage(page);

            await page.goto(BASE_URL);
            await registerPage.myAccountDropMenu();
            await loginPage.loginlink();
            await loginPage.login(username, String(password));

            if (expected.toLowerCase() === "pass") {
                // ✅ Assert account page only for success
                await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/account", { timeout: 5000 });

                await registerPage.myAccountDropMenu();
                const logoutLink = page.locator('#top-links a[href*="logout"]'); // unique locator
                await expect(logoutLink).toBeVisible({ timeout: 5000 });
            } else {
                // ✅ Assert login page only for failure
                const errorMessage = page.locator('.alert.alert-danger.alert-dismissible');
                await expect(errorMessage).toBeVisible({ timeout: 5000 });
                await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
            }
        });
    }

});
