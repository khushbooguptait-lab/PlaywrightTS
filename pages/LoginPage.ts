import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.emailInput = page.locator('[data-qa="login-email"]');
        this.passwordInput = page.locator('[data-qa="login-password"]');

        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });

        this.loginErrorMessage = page.locator(
            'form[action="/login"] p'
        );
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getLoginErrorMessage() {
        return await this.loginErrorMessage.textContent();
    }
}