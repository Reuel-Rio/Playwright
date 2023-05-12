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
    readonly CUSTOMER_DETAILS: [string, string, string];
    readonly customerDetailLine1: Locator;
    readonly customerDetailLine2: Locator;
    readonly customerDetailLine3: Locator;
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
        this.invoiceDate = page.locator("/html/body/section/div/ul/li[1]/text()");
        this.duoDate = page.locator("/html/body/section/div/ul/li[2]/text()");
        this.invoiceNumber = page.getByText("Invoice #110 details");
        this.bookingCode = page.getByText("Invoice #110 details");
        this.customerDetailLine1 = page.locator("/html/body/section/div/div/text()[1]");
        this.customerDetailLine2 = page.locator("/html/body/section/div/div/text()[2]");
        this.customerDetailLine3 = page.locator("/html/body/section/div/div/text()[3]");
        this.CUSTOMER_DETAILS = ["JOHNY SMITH", "R2, AVENUE DU MAROC", "123456"];
        this.room = page.getByText("Superior Double");
        this.checkIn = page.locator("/html/body/section/div/table[1]/tbody/tr[5]/td[2]");
        this.checkOut = page.locator("/html/body/section/div/table[1]/tbody/tr[6]/td[2]");
        this.totalStayCount = page.locator("/html/body/section/div/table[1]/tbody/tr[3]/td[2]");
        this.totalStayAmount = page.locator("/html/body/section/div/table[1]/tbody/tr[4]/td[2]");
        this.depositNow = page.locator("/html/body/section/div/table[2]/tbody/tr/td[1]");
        this.taxVat = page.locator("/html/body/section/div/table[2]/tbody/tr/td[2]");
        this.totalAmount = page.locator("/html/body/section/div/table[2]/tbody/tr/td[3]");



    }
}

