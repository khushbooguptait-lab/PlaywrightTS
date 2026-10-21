import { Page, Locator } from '@playwright/test';

export class DashboardPage {

    readonly loggedInAs: Locator;

    constructor(private page: Page) {
        this.loggedInAs = page.getByText('Logged in as');
    }
}