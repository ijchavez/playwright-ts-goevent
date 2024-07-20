import { Page } from '@playwright/test';

export class LandingPage {
  constructor(public page: Page) {
    this.page = page;
  }
  async clickOnLoginBtn() {
    await this.page.getByRole('link', { name: 'Login' }).click();
  }
}
