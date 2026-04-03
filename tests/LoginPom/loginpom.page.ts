import { Page } from "@playwright/test";
export class loginpom {

    readonly page: Page;
    constructor(p: Page) {
        this.page = p;
    }
    //la premiere phase: declarer les locator 
    elements = {
        username: () => this.page.getByPlaceholder("Username"),
        password: () => this.page.getByPlaceholder("Password"),
        login: () => this.page.getByRole("button", { name: "Login" }),
    }
    //declarrer les methodes 
    async saisirUsername(u: string) {
        await this.elements.username().fill(u)
    }
    async saisirPassword(p: string) {
        await this.elements.password().fill(p)
    }
    async clicklogin() {
        await this.elements.login().click()
    }
}
















