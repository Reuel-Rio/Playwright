import { test, expect, chromium } from '@playwright/test';
import { ECorePageObjectLogin, InvoiceDetails } from '../page-objects/ecorePageObjectLogin';


test.beforeEach(async ({ page }) => {
    page.goto('https://automation-sandbox-python-mpywqjbdza-uc.a.run.app/')
});

test.describe('Test with Playwright for E-Core', ()=>{
    test('TC001 Login(Positive)', async({page}) =>{
        const ecore = new ECorePageObjectLogin(page);
        await ecore.getNameUser.fill(ecore.DATA_USER[2]);
        await ecore.getPasswordUser.fill(ecore.DATA_PASSWORD[0]);
        await ecore.btnLogin.click();
        await expect(ecore.titleSucess).toBeVisible();
    });

    test('TC002 Login(Negative)', async({page}) =>{
        const ecore = new ECorePageObjectLogin(page);
        await ecore.getNameUser.fill(ecore.DATA_USER[0]);
        await ecore.getPasswordUser.fill(ecore.DATA_PASSWORD[0]);
        await ecore.btnLogin.click();
        await expect(ecore.msgWrongLogin).toBeVisible();

        await ecore.getNameUser.fill(ecore.DATA_USER[1]);
        await ecore.getPasswordUser.fill(ecore.DATA_PASSWORD[1]);
        await ecore.btnLogin.click();
        await expect(ecore.msgWrongLogin).toBeVisible();

        await ecore.getNameUser.fill(ecore.DATA_USER[2]);
        await ecore.getPasswordUser.fill(ecore.DATA_PASSWORD[2]);
        await ecore.btnLogin.click();
        await expect(ecore.msgWrongLogin).toBeVisible();

        await ecore.getNameUser.fill(ecore.DATA_USER[2]);
        await ecore.getPasswordUser.fill(ecore.DATA_PASSWORD[0]);
        await ecore.btnLogin.click();
        await expect(ecore.msgWrongLogin).toBeVisible();
    });

    test('TC003 Validade invoice details', async({page}) =>{
        const ecore = new ECorePageObjectLogin(page);
        const pageDetails = new InvoiceDetails(page);
        await ecore.getNameUser.fill(ecore.DATA_USER[2]);
        await ecore.getPasswordUser.fill(ecore.DATA_PASSWORD[0]);
        await ecore.btnLogin.click();
        await ecore.firstLink.click();

        // select other tab

        //Validate if visible elements
        await expect(pageDetails.nameHotel).toBeVisible();
        await expect(pageDetails.invoiceDate).toBeVisible();
        await expect(pageDetails.duoDate).toBeVisible();
        await expect(pageDetails.invoiceNumber).toBeVisible();
        await expect(pageDetails.bookingCode).toBeVisible();
        await expect(pageDetails.customerDetailLine1).toBeVisible();
        await expect(pageDetails.customerDetailLine2).toBeVisible();
        await expect(pageDetails.customerDetailLine3).toBeVisible();
        await expect(pageDetails.room).toBeVisible();
        await expect(pageDetails.checkIn).toBeVisible();
        await expect(pageDetails.checkOut).toBeVisible();
        await expect(pageDetails.totalStayCount).toBeVisible();
        await expect(pageDetails.totalStayAmount).toBeVisible();
        await expect(pageDetails.depositNow).toBeVisible();
        await expect(pageDetails.taxVat).toBeVisible();
        await expect(pageDetails.totalAmount).toBeVisible();

        //validade text elements
        await expect(pageDetails.nameHotel).toHaveText('Rendezvous Hotel');
        await expect(pageDetails.invoiceDate).toHaveText('14/01/2018');
        await expect(pageDetails.duoDate).toHaveText('15/01/2018');
        await expect(pageDetails.invoiceNumber).toHaveText('Invoice #110 details');
        await expect(pageDetails.bookingCode).toHaveText('0875');
        await expect(pageDetails.customerDetailLine1).toHaveText(pageDetails.CUSTOMER_DETAILS[0]);
        await expect(pageDetails.customerDetailLine2).toHaveText(pageDetails.CUSTOMER_DETAILS[1]);
        await expect(pageDetails.customerDetailLine3).toHaveText(pageDetails.CUSTOMER_DETAILS[2]);
        await expect(pageDetails.room).toHaveText('Superior Double');
        await expect(pageDetails.checkIn).toHaveText('14/01/2018');;
        await expect(pageDetails.checkOut).toHaveText('15/01/2018');
        await expect(pageDetails.totalStayCount).toHaveText('1');
        await expect(pageDetails.totalStayAmount).toHaveText('$150');
        await expect(pageDetails.depositNow).toHaveText('USD $20.90');
        await expect(pageDetails.taxVat).toHaveText('USD $19');
        await expect(pageDetails.totalAmount).toHaveText('USD $209');
     

    });
});