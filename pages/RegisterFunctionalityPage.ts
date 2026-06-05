import { RegisterPageLocators } from "../locators/RegisterPageLocators";
import { Page } from "playwright";


export class RegisterFunctionalityPage {
    constructor(private page: Page) {
    }

    async myAccountDropMenu() {
        await this.page.click(RegisterPageLocators.myAccountDropMenu);
    };
};