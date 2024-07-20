import { Page, expect } from '@playwright/test';

export class AccountPage {
  constructor(public page: Page) {
    this.page = page;
  }
  async validateSucessfulLogin() {
    await expect(
      await this.page.getByRole('link', { name: 'Create Event' }),
    ).toBeVisible();

    await expect(await this.page.getByLabel('Open user button')).toBeVisible();
  }
}
