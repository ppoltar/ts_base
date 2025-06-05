import {Page, Locator} from '@playwright/test'
import {BASE_URLS} from '../config/urls.ts';
import { BasePage } from './base.ts';
import {SAUCE_LOGIN_LOCATORS} from "../locators/login.locators.ts";

export class SauceLoginPage extends BasePage{
  readonly url: string;
  readonly username: Locator;
  readonly password: Locator;
  readonly login_button: Locator;

  constructor(page: Page) {
    super(page)
    this.url = BASE_URLS.sauceLogin;

    this.username = page.getByTestId(SAUCE_LOGIN_LOCATORS.username)
    this.password = page.getByTestId(SAUCE_LOGIN_LOCATORS.password)
    this.login_button = page.getByTestId(SAUCE_LOGIN_LOCATORS.loginButton)

  }

  async open() {
    await this.goto(this.url);
  }

  async login(username: string, password: string){
    await this.username.fill(username)
    await this.password.fill(password)
    await this.login_button.click()
  }

}