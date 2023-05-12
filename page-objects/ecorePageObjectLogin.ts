import { Locator, Page } from '@playwright/test';

export class ECorePageObjectLogin {
    readonly page: Page;
    readonly getNameUser: Locator;
    readonly getPasswordUser: Locator;
    readonly btnLogin: Locator;
    readonly titleSucess: Locator;
    readonly msgWrongLogin: Locator;
    readonly DATA_USER: [string, string, string];
    readonly DATA_PASSWORD: [string, string, string];
    readonly firstLink: Locator;

    constructor(page: Page) {
        this.btnLogin = page.getByRole('button', { name: 'Login' })
        this.getNameUser = page.getByTestId('username')
        this.getPasswordUser = page.getByTestId('password')
        this.titleSucess = page.getByText('Invoice List')
        this.msgWrongLogin = page.getByText('Wrong username or password.')
        this.DATA_USER = ['Demouser', 'demouser_', 'demouser'];
        this.DATA_PASSWORD = ['abc123', 'xyz', 'nananana']
        this.firstLink = page.locator("//*[@href='/invoice/0']")
    }

}

export class InvoiceDetails {
    readonly page: Page;
    readonly nameHotel: Locator;
    readonly invoiceDate: Locator;
    readonly duoDate: Locator;
    readonly invoiceNumber: Locator;
    readonly bookingCode: Locator;
    readonly customerDetailLine1: Locator;
    readonly room: Locator;
    readonly checkIn: Locator;
    readonly checkOut: Locator;
    readonly totalStayCount: Locator;
    readonly totalStayAmount: Locator;
    readonly depositNow: Locator;
    readonly taxVat: Locator;
    readonly totalAmount: Locator;

    constructor(page: Page) {
        this.nameHotel = page.getByText("Rendezvous Hotel");
        this.invoiceDate = page.locator("//*[contains(text(),' 14/01/2018')]");
        this.duoDate = page.locator("//*[contains(text(),' 15/01/2018')]");
        this.invoiceNumber = page.getByText("Invoice #110 details");
        this.bookingCode = page.getByText("0875");
        this.customerDetailLine1 = page.locator("//*[contains(text(),'JOHNY SMITH')]");
        this.room = page.getByText("Superior Double");
        this.checkIn = page.locator("//table[@class='table'][1] //tbody/tr[5]/td[2]");
        this.checkOut = page.locator("//table[@class='table'][1] //tbody/tr[6]/td[2]");
        this.totalStayCount = page.locator("//table[@class='table'][1] //tbody/tr[3]/td[2]");
        this.totalStayAmount = page.locator("//table[@class='table'][1] //tbody/tr[4]/td[2]");
        this.depositNow = page.locator("//table[@class='table'][2] /tbody/tr/td[1]");
        this.taxVat = page.locator("//table[@class='table'][2] /tbody/tr/td[2]");
        this.totalAmount = page.locator("//table[@class='table'][2] /tbody/tr/td[3]");



    }
}

