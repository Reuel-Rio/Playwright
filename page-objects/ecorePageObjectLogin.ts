import {Locator, Page } from '@playwright/test';

export class ECorePageObjectLogin {
    readonly page: Page;
    readonly getNameUser: Locator;
    readonly getPasswordUser: Locator;
    readonly btnLogin: Locator;
    readonly titleSucess: Locator;
    readonly msgWrongLogin: Locator;
    readonly dataUser: [string, string, string];
    readonly dataPassword: [string, string, string];

    constructor (page: Page){
        this.btnLogin = page.getByRole('button', {name: 'Login'})
        this.getNameUser = page.getByTestId('username')
        this.getPasswordUser = page.getByTestId('password')
        this.titleSucess = page.getByText('Invoice List')
        this.msgWrongLogin = page.getByText('Wrong username or password.')
        this.dataUser = ['Demouser', 'demouser_', 'demouser'];
        this.dataPassword = ['abc123', 'xyz', 'nananana']
    }
   
}