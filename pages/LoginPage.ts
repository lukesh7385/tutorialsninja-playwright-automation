import {LoginPageLocators } from "../locators/LoginPageLocators";
import { Page } from "playwright";

export class LoginPage
{
    constructor(private page: Page)
    {
    }

    async myAccountDropMenu(){
        await this.page.click(LoginPageLocators.myAccountDropMenu);
    };

    async loginlink(){
        await this.page.click(LoginPageLocators.loginLink);
    };

    async login(username: string, password: string){
        await this.page.fill(LoginPageLocators.userNameInput, username);
        await this.page.fill(LoginPageLocators.passwordInput, password);
        await this.page.click(LoginPageLocators.loginButton);
    };
        
    
};