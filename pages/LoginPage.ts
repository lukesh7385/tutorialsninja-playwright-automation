import { LoginLocators } from "../locators/LoginLocators";
import { Page } from "playwright";

export class LoginPage
{
    constructor(private page: Page)
    {
    }

    async myaccounttab(){
        await this.page.click(LoginLocators.myAccountTAb);
    };

    async loginlink(){
        await this.page.click(LoginLocators.loginLink);
    };

    async login(username: string, password: string){
        await this.page.fill(LoginLocators.userNameInput, username);
        await this.page.fill(LoginLocators.passwordInput, password);
        await this.page.click(LoginLocators.loginButton);
    };
        
    
};