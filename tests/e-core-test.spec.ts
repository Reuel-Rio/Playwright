import { test, expect } from '@playwright/test';
import { ECorePageObjectLogin } from '../page-objects/ecorePageObjectLogin';


test.beforeEach(async ({ page }) => {
    page.goto('https://automation-sandbox-python-mpywqjbdza-uc.a.run.app/')
});

test.describe('Test with Playwright for E-Core', ()=>{
    test('TC001 Login(Positive)', async({page}) =>{
        const ecore = new ECorePageObjectLogin(page);
        await ecore.getNameUser.fill(ecore.dataUser[2]);
        await ecore.getPasswordUser.fill(ecore.dataPassword[0]);
        await ecore.btnLogin.click();
        await expect(ecore.titleSucess).toBeVisible();
    });

    test('TC001 Login(Negative)', async({page}) =>{
        const ecore = new ECorePageObjectLogin(page);
        await ecore.getNameUser.fill(ecore.dataUser[0]);
        await ecore.getPasswordUser.fill(ecore.dataPassword[0]);
        await ecore.btnLogin.click();
        await expect(ecore.msgWrongLogin).toBeVisible();

        await ecore.getNameUser.fill(ecore.dataUser[1]);
        await ecore.getPasswordUser.fill(ecore.dataPassword[1]);
        await ecore.btnLogin.click();
        await expect(ecore.msgWrongLogin).toBeVisible();

        await ecore.getNameUser.fill(ecore.dataUser[2]);
        await ecore.getPasswordUser.fill(ecore.dataPassword[2]);
        await ecore.btnLogin.click();
        await expect(ecore.msgWrongLogin).toBeVisible();

        await ecore.getNameUser.fill(ecore.dataUser[2]);
        await ecore.getPasswordUser.fill(ecore.dataPassword[0]);
        await ecore.btnLogin.click();
        await expect(ecore.msgWrongLogin).toBeVisible();
    });
})