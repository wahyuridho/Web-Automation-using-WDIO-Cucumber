import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import KategoriPage from '../pageobjects/kategori.page.js';

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


When(/^I click on the Kategori Tab$/, async () => {
    await KategoriPage.kategoriTab.click()
})

Then(/^I should see the Kategori Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories')
})

When(/^I click the Tambah button$/, async () => {
    await KategoriPage.addButton.click()
})

Then(/^I shoul see the Kategori Create Page$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories/create')
})

When(/^I input a name and description for the new Kategori$/, async () => {
    await KategoriPage.addKategori('Box', 'Satuan Satu dus')
})

When(/^I Click Save Button$/, async () => {
    await KategoriPage.submit()
})

Then(/^I should see the new kategori in the list$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories')
    await expect(KategoriPage.alert).toBeDisplayed()
    await browser.refresh()
    await KategoriPage.setKategori("Box")
    await expect(KategoriPage.kategoryAdded).toBeDisplayed()
})


When(/^I click option Espisilis button on kategori list$/, async () => {
    await KategoriPage.setKategori("Box")
    await KategoriPage.epsilisBtn.click()
})

Then(/^I should see submenu$/, async () => {
    await expect(KategoriPage.submenu).toBeDisplayed()
}) 

When(/^I clik ubah button$/, async () => {
    await KategoriPage.setKategori("Box")
    await KategoriPage.ubahButton.click()
})

Then(/^I should See Update Kategori Page$/, async () => {
    await expect(browser).toHaveUrl(expect.stringContaining('/edit'))
})

When(/^I input a new name and description$/, async () => {
    await KategoriPage.updKategori("Pack", "Satuan kotak kecil")
})

Then(/^I should see the update kategori in the list$/, async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/categories')
    await expect(KategoriPage.alert).toBeDisplayed()
    await browser.refresh()
    await KategoriPage.setKategori("Pack")
    await expect(KategoriPage.kategoryAdded).toBeDisplayed()
})

When(/^I Click hapus button$/, async () => {
    await KategoriPage.setKategori("Box")
    await KategoriPage.hapusBtn.click()
})

Then(/^I should See Pop Up verification$/, async () => {
    await expect(KategoriPage.alertDialog).toBeDisplayed()
})
When(/^I click Delete Button$/, async () => {
    await expect(KategoriPage.deleteButton).toBeClickable()
    await KategoriPage.deleteButton.click()
})

Then(/^I should see the kategori was deleted$/, async () => {
    await expect(KategoriPage.alert).toBeDisplayed()
    await KategoriPage.setKategori("Box")
    await expect(KategoriPage.kategoryAdded).not.toBePresent()
})