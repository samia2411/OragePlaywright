import { test, expect } from "@playwright/test";
import { loginpom } from "./LoginPom/loginpom.page";
import { dashboard } from "./LoginPom/dahboard.page";
import { recrutement } from "./LoginPom/recrutement.page";
import { addrecrutement } from "./LoginPom/addrecrutement.page";
import { recaprecrutement } from "./LoginPom/recapRecrutement.page";

let lp: loginpom;
let dash: dashboard;
let recrut: recrutement;
let addrec: addrecrutement;
let recap: recaprecrutement;
test('description: test E2E de tp', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    lp = new loginpom(page);
    addrec = new addrecrutement(page)
    dash = new dashboard(page);
    recrut = new recrutement(page);
    //saisir user name
    await lp.saisirUsername("Admin");
    //saisir mot de passe
    await lp.saisirPassword("admin123");
    //clicker sur le button login
    await lp.clicklogin();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await dash.clickersurRecrutement()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates");
    await recrut.clickersurAddRecrutement();
    //verfier si je suis dans  la page ajout 
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
    //saisir first name of  employée
    await addrec.saisirFirstname("samia");
    //saisir last name of  employée
    await addrec.saisirLastName("samia")
    //saisir email of  employée
    await addrec.saisirEmail("samia@gmail.com");
    //cloicker sur button  Save 
    await addrec.clicksave();
    //verifier si le message est visible
    expect(await addrec.msgSuccessVisible()).toBeVisible();
    recap = new recaprecrutement(page);
    //je suis rediriger vers la page recap 
    await expect(await recap.recapTitleMsg()).toBeVisible();
    //je verifier champs par champs  dans  la page  

});



