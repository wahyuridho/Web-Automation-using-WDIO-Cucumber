import Page from "./page.js"
import { Key } from 'webdriverio'

class PenggunaPage extends Page{
    get penggunaTab () { return $('//div[text()="pengguna"]') }
    get addButton () { return $('//a[@class="chakra-button css-1piskbq"]') }
    get namaInput () { return $('//input[@id="nama"]') }
    get emailInput () { return $('//input[@id="email"]') }
    get passwordInput () { return $('//input[@id="password"]') }
    get saveBtn () { return $('//button[normalize-space()="simpan"]') }
    get alert () { return $('//div[@role="alert"]') }
    get userAdded () { return $(`//td[normalize-space()="${this.user}"]//parent::tr[@role="row"]`) }
    get epsilisBtn () { return $(`//td[normalize-space()="${this.user}"]//following-sibling::*//button[@aria-haspopup="menu"]`) }
    get submenu() { return $('//div[@data-popper-placement="bottom-end"]') }
    get ubahButton() { return $(`//td[normalize-space()="${this.user}"]//following-sibling::*//child::a[@tabindex="0"]`) }
    get hapusBtn() { return $(`//td[normalize-space()="${this.user}"]/following-sibling::*//button[@role="menuitem"]`) }
    get alertDialog() { return $('//section[@role="alertdialog"]') }
    get deleteButton() { return $('//button[text()="Delete"]') }

    setPengguna = (user) => {
        this.user = user
    }

    addPengguna = async (nama, email, password) => {
        await this.namaInput.addValue(nama)
        await this.emailInput.addValue(email)
        await this.passwordInput.addValue(password)
    }

    submit = async () => {
        return await this.saveBtn.click()
    }

    updPengguna = async (nama, email, password) => {
        await this.namaInput.click()
        await browser.keys([Key.Ctrl, 'a', 'Backspace']);
        await this.emailInput.click()
        await browser.keys([Key.Ctrl, 'a', 'Backspace']);

        await this.namaInput.addValue(nama)
        await this.emailInput.addValue(email)
        await this.passwordInput.addValue(password)
    }
}

export default new PenggunaPage();