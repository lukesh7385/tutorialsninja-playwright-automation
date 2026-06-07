import { RegisterPageLocators } from "../locators/RegisterPageLocators";
import { Page } from "playwright";


export class RegisterFunctionalityPage {
    constructor(private page: Page) {
    };

    async myAccountDropMenu() {
        await this.page.click(RegisterPageLocators.myAccountDropMenu);
    };

    async registerLink(){
        await this.page.click(RegisterPageLocators.RegisterLink);
    };

    async firstName(firstname: string){
        await this.page.fill(RegisterPageLocators.firstNameInput, firstname);
    };

    async lastName(lastName: string){
        await this.page.fill(RegisterPageLocators.lastNameInput, lastName);
    };

    async email(email: string){
        await this.page.fill(RegisterPageLocators.emailInput, email);
    };

    async teliphone(phoneNumber: string){
        await this.page.fill(RegisterPageLocators.telephoneInput, phoneNumber);
    };

    async password(password: string){
        await this.page.fill(RegisterPageLocators.passwordInput, password);
    };

    async confirm_password(confirm_pass: string){
        await this.page.fill(RegisterPageLocators.confirmPasswordInput, confirm_pass);
    }

    async subscribe_yes_radio(){
        await this.page.click(RegisterPageLocators.subscribeYesRadioButton);
    };

    async privacy_policy(){
        await this.page.click(RegisterPageLocators.privacyPolicyCheckBox);
    };

    async continue(){
        await this.page.click(RegisterPageLocators.continueButton);
    };

};