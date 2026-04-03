import { Page } from "@playwright/test";
export class recaprecrutement {

    readonly page: Page;
    constructor(p: Page) {
        this.page = p;
    }
    //la premiere phase: declarer les locator 
    elements = {
        recapTitle: () => this.page.getByRole("heading", { name: "Recruitment" }),
    }
    //declarrer les methodes 
    async recapTitleMsg() {
        return this.elements.recapTitle()
    }
}
















