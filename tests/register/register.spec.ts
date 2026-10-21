import { test } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';

test('TC1 - Register User', async ({ page }) => {

    const signupPage = new SignupPage(page);

    // Open Automation Exercise
    await page.goto('https://automationexercise.com');

    // Click Signup / Login
    await signupPage.clickSignupLogin();

    // Verify New User Signup
    await signupPage.verifyNewUserSignup();

    // Enter name and email
    await signupPage.enterSignupDetails(
        'Khushboo Test',
        `khushboo${Date.now()}@test.com`
    );

    // Click Signup
    await signupPage.clickSignup();

    await signupPage.fillAccountInformation();

    await signupPage.fillAddressInformation();

    //Click Account Create Button
    await signupPage.createAccount()
});