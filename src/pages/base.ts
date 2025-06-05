import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    if (!url) {
      throw new Error('URL not provided to BasePage.goto');
    }
    await this.page.goto(url);
    await this.page.waitForURL(url);
  }

}
