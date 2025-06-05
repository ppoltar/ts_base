import {Page, Locator} from '@playwright/test'
import {BASED_URLS} from '../config/urls.ts';
import {BasePage} from './base.ts';

  export class SauceInventoryPage extends BasePage {
    readonly url: string;
    readonly pageTitle: Locator;

    constructor(page: Page) {
      super(page)
      this.url = BASED_URLS.sauceInventory;

      this.pageTitle = page.getByText("Swag Labs")
    }

    async open() {
      await this.goto(this.url);
    }
  }