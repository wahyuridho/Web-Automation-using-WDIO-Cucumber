import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';

Given(/^I open the Kasir Aja website$/, async () => {

    await LoginPage.open()
})

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('srituemail@test.com', 'Test123')
    await LoginPage.submit()
})

Then(/^I should see the Dashboard Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard')
})

When(/^I attempt to login with "([^"]*)" and "([^"]*)"$/, async (email, password) => {
    await LoginPage.login(email, password)
    await LoginPage.submit()
})

Then(/^I should see an error message "(.*)"$/, async (error_message) => {
    await expect(LoginPage.errorMessage).toHaveText(error_message);
});