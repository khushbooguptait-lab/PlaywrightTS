import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly productsLink: Locator;
    readonly cartLink: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.signupLoginLink = page.getByRole('link', {
            name: 'Signup / Login'
        });

        this.productsLink = page.getByRole('link', {
            name: 'Products'
        });

        this.cartLink = page.getByRole('link', {
            name: 'Cart'
        });

        this.logoutLink = page.getByRole('link', {
            name: 'Logout'
        });
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }

    async clickSignupLogin() {
        await this.signupLoginLink.click();
    }

    async clickProducts() {
        await this.productsLink.click();
    }

    async clickCart() {
        await this.cartLink.click();
    }
}