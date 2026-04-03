import { Page } from "@playwright/test";
export class dashboard {

    readonly page: Page;
    constructor(p: Page) {
        this.page = p;
    }
    //la premiere phase: declarer les locator 
    elements = {
        recrutement: () => this.page.getByRole("link", { name: "Recruitment" }),
    }
    //declarrer les methodes 

    async clickersurRecrutement() {
        await this.elements.recrutement().click()
    }
}
















