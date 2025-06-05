import { SauceLoginPage } from '../pages/login.ts';
import {test as pageTest} from '@playwright/test'

export type TestOptions = {
  username:string,
  password: string,
}

type sauceLoginFixture = {
  testOptions: TestOptions;
  sauceLoginPage: SauceLoginPage;
}

export const test = pageTest.extend<sauceLoginFixture>({
  testOptions: { username: '', password: '' },
  sauceLoginPage: async ({testOptions, page}, use) => {
    const sauceDemoPage = new SauceLoginPage(page);
    await sauceDemoPage.goto()
    await sauceDemoPage.login(testOptions.username, testOptions.password)
    await use(sauceDemoPage)
  }
});
