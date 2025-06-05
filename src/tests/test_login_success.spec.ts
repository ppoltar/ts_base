    import { test } from '../fixtures/login_fixture.ts';
    import {expect} from '@playwright/test';
    import { SauceInventoryPage } from '../pages/inventory.ts';

    test.use({
      testOptions:{
        username: "standard_user",
        password: "secret_sauce"
      }
    })


    test('Login successfully test @login', async (
      {sauceLoginPage: sauceLoginPage}) => {

      test.info().annotations.push({
        type: 'Description',
        description: `Testing login to the sauce inventory page successfully`
      });

      const sauceInventoryPage = new SauceInventoryPage(sauceLoginPage.page);

      await test.step('Verify that the user is on the inventory page', async () => {
        await expect(sauceInventoryPage.pageTitle).toBeVisible();
      })
    })