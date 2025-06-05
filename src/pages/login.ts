import {Page, Locator} from '@playwright/test'
import {BASED_URLS} from '../config/urls.ts';
import { BasePage } from './base.ts';

export class SauceLoginPage extends BasePage{
  readonly url: string;
  readonly username: Locator;
  readonly password: Locator;
  readonly login_button: Locator;

  constructor(page: Page) {
    super(page)
    this.url = BASED_URLS.sauceLogin;

    this.username = page.getByTestId("username")
    this.password = page.getByTestId("password")
    this.login_button = page.getByTestId("login-button")

  }

  async goto(url = this.url){
    await this.page.goto(url);
    await this.page.waitForURL(url)
  }

  async login(username: string, password: string){
    await this.username.fill(username)
    await this.password.fill(password)
    await this.login_button.click()
  }

}