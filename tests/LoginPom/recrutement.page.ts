import { Page } from "@playwright/test";
export class recrutement {

    readonly page: Page;
    constructor(p: Page) {
        this.page = p;
    }
    //la premiere phase: declarer les locator 
    elements = {
        addrecrutement: () => this.page.getByRole("button", { name: "Add" }),
    }
    //declarrer les methodes 
    async clickersurAddRecrutement() {
        await this.elements.addrecrutement().click()
    }
}
















