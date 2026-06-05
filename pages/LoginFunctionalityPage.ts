import { LoginPageLocators } from "../locators/LoginPageLocators";
import { RegisterPageLocators } from "../locators/RegisterPageLocators";
import { Page } from "playwright";

export class LoginFunctionalityPage {
    constructor(private page: Page) {
    }

    async loginlink() {
        await this.page.click(LoginPageLocators.loginLink);
    };

    async login(username: string, password: string) {
        await this.page.fill(LoginPageLocators.userNameInput, username);
        await this.page.fill(LoginPageLocators.passwordInput, password);
        await this.page.click(LoginPageLocators.loginButton);
    };


};