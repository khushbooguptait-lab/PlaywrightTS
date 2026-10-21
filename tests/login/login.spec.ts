import { test, expect } from '../../fixtures/testFixtures';
import loginData from '../../test-data/loginData.json';

test.describe('Login functionality', () => {

    test('Verify valid login', async ({ homePage, loginPage, page }) => {

        await homePage.navigateToHomePage();

        await homePage.clickSignupLogin();

        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

        await expect(page.getByText('Logged in as')).toBeVisible();
    });

});