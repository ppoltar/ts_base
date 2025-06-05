import {Page, Locator} from '@playwright/test'
import {BASE_URLS} from '../config/urls.ts';
import {BasePage} from './base.ts';
import { SAUCE_INVENTORS_LOCATORS } from "../locators/inventory.locators.ts";

  export class SauceInventoryPage extends BasePage {
    readonly url: string;
    readonly pageTitle: Locator;

    constructor(page: Page) {
      super(page)
      this.url = BASE_URLS.sauceInventory;

      this.pageTitle = page.getByText(SAUCE_INVENTORS_LOCATORS.title)
    }

  }