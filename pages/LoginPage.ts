import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {
    this.page = page;
  }
  async enterEmailForRegistration(email: string) {
    await this.page
      .locator('#email_create')
      .fill(email.toLowerCase(), { timeout: 5000 });
  }
  async clickOnCreateAnAccountBtn() {
    await Promise.all([await this.page.locator('#SubmitCreate').click()]);
  }
  async enterEmailForLogin(email: string) {
    await this.page
      .getByLabel('Email address or username')
      .fill(email.toLowerCase(), { timeout: 5000 });
  }
  async enterpasswordForLogin(password: string) {
    await this.page
      .getByLabel('Password', { exact: true })
      .fill(password, { timeout: 5000 });
  }
  async clickOnSignInBtn() {
    await Promise.all([
      await this.page
        .getByRole('button', { name: 'Continue', exact: true })
        .click(),
    ]);
  }
  async verifyAccountNotFound() {
    await expect(
      await this.page.getByText("Couldn't find your account."),
    ).toBeVisible();
  }
}
