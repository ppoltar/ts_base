import { SauceLoginPage } from '../pages/login.ts';
import {test as pageTest} from '@playwright/test'
import { Users } from "../config/users.ts";

export type TestOptions = {
  username:string,
  password: string,
}

type sauceLoginFixture = {
  testOptions: TestOptions;
  sauceLoginPage: SauceLoginPage;
}

export const test = pageTest.extend<sauceLoginFixture>({
  testOptions: Users.standard,
  sauceLoginPage: async ({testOptions, page}, use) => {
    const sauceDemoPage = new SauceLoginPage(page);
    await sauceDemoPage.open()
    await sauceDemoPage.login(testOptions.username, testOptions.password)
    await use(sauceDemoPage)
  }
});
