import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
    readonly page: Page;

    readonly signupLoginLink: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;
    readonly mrRadio: Locator;
    readonly passwordInput: Locator;
    readonly dayDropdown: Locator;
    readonly monthDropdown: Locator;
    readonly yearDropdown: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly address2Input: Locator;
    readonly countryDropdown: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileInput: Locator;
    readonly createAccountButton: Locator;
    readonly accountCreate: Locator;

    constructor(page: Page) {
        this.page = page;

        this.signupLoginLink = page.getByText('Signup / Login');
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.getByRole('button', { name: 'Signup' });
        this.mrRadio = page.locator('#id_gender1');
        this.passwordInput = page.locator('#password');
        this.dayDropdown = page.locator('#days');
        this.monthDropdown = page.locator('#months');
        this.yearDropdown = page.locator('#years');
        this.firstNameInput = page.locator('[data-qa="first_name"]');
        this.lastNameInput = page.locator('[data-qa="last_name"]');
        this.companyInput = page.locator('[data-qa="company"]');
        this.addressInput = page.locator('[data-qa="address"]');
        this.address2Input = page.locator('[data-qa="address2"]');
        this.countryDropdown = page.locator('[data-qa="country"]');
        this.stateInput = page.locator('[data-qa="state"]');
        this.cityInput = page.locator('[data-qa="city"]');
        this.zipcodeInput = page.locator('[data-qa="zipcode"]');
        this.mobileInput = page.locator('[data-qa="mobile_number"]');
        this.createAccountButton = page.getByRole('button', {
    name: 'Create Account'
});
        this.accountCreate = page.getByText('Account Created!',{
            exact: true,
    });
    }

    async clickSignupLogin() {
        await this.signupLoginLink.click();
    }

    async verifyNewUserSignup() {
        await expect(
            this.page.getByText('New User Signup!')
        ).toBeVisible();
    }

    async enterSignupDetails(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
    }

    async clickSignup() {
        await this.signupButton.click();
    }

    async fillAccountInformation() {

        await expect(
            this.page.getByText('Enter Account Information')
        ).toBeVisible();
    
        await this.mrRadio.check();
    
        await this.passwordInput.fill('Test@123');
    
        await this.dayDropdown.selectOption('10');
        await this.monthDropdown.selectOption('5');
        await this.yearDropdown.selectOption('1995');
    }

    async fillAddressInformation() {

        await this.firstNameInput.fill('Khushboo');
        await this.lastNameInput.fill('Test');
    
        await this.companyInput.fill('Test Company');
    
        await this.addressInput.fill('123 Test Street');
        await this.address2Input.fill('Test Area');
    
        await this.countryDropdown.selectOption({
            label: 'India'
        });
    
        await this.stateInput.fill('Madhya Pradesh');
        await this.cityInput.fill('Bhopal');
        await this.zipcodeInput.fill('462001');
        await this.mobileInput.fill('9876543210');
    }
    
    async createAccount() {
        await this.createAccountButton.click()
        await this.accountCreate.waitFor()
    }

}

