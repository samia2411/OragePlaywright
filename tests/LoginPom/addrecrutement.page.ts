import { Page } from "@playwright/test";
export class addrecrutement {

    readonly page: Page;
    constructor(p: Page) {
        this.page = p;
    }
    //la premiere phase: declarer les locator 
    elements = {
        firstname: () => this.page.getByRole("textbox", { name: "First Name" }),
        lastname: () => this.page.getByRole("textbox", { name: "Last Name" }),
        emailEmploye: () => this.page.getByRole("textbox", { name: "Type here" }),
        save: () => this.page.getByRole("button", { name: "Save" }),
        msgSuccess: () => this.page.getByText("Successfully Saved"),

    }
    //declarrer les methodes 
    async saisirFirstname(u: string) {
        await this.elements.firstname().fill(u)
    }
    async saisirLastName(p: string) {
        await this.elements.lastname().fill(p)
    }
    async saisirEmail(e: string) {
        await this.elements.emailEmploye().nth(0).fill(e)
    }
    async clicksave() {
        await this.elements.save().click()
    }
    async msgSuccessVisible() {
        return this.elements.msgSuccess()
    }
}
















