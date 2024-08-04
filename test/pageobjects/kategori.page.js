import Page from "./page.js"
import { Key } from 'webdriverio'

class KategoriPage extends Page{
    get kategoriTab () { return $('//div[text()="kategori"]') }
    get addButton () { return $('//a[@class="chakra-button css-1piskbq"]') }
    get namaInput () { return $('//input[@id="nama"]') }
    get descInput () { return $('//input[@id="deskripsi"]') }
    get saveBtn () { return $('//button[normalize-space()="simpan"]') }
    get alert () { return $('//div[@role="alert"]') }
    get kategoryAdded () { return $(`//td[normalize-space()="${this.kategori}"]//parent::tr[@role="row"]`) }
    get epsilisBtn () { return $(`//td[normalize-space()="${this.kategori}"]/following-sibling::*//button[@aria-haspopup="menu"]`) }
    get submenu() { return $('//div[@data-popper-placement="bottom-end"]') }
    get ubahButton() { return $(`//td[normalize-space()="${this.kategori}"]//following-sibling::*//child::a[@tabindex="0"]`) }
    get hapusBtn() { return $(`//td[normalize-space()="${this.kategori}"]/following-sibling::*//button[@role="menuitem"]`) }
    get alertDialog() { return $('//section[@role="alertdialog"]') }
    get deleteButton() { return $('//button[text()="Delete"]') }

    setKategori = (kategori) => {
        this.kategori = kategori
    }

    addKategori = async (nama, deskripsi) => {
        await this.namaInput.addValue(nama)
        await this.descInput.addValue(deskripsi)
    }

    submit = async () => {
        return await this.saveBtn.click()
    }

    updKategori = async (nama, deskripsi) => {
        await this.namaInput.click()
        await browser.keys([Key.Ctrl, 'a'])
        await browser.keys('Backspace')
        await this.descInput.click()
        await browser.keys([Key.Ctrl, 'a'])
        await browser.keys('Backspace')
        await this.namaInput.setValue(nama)
        await this.descInput.setValue(deskripsi)
    }
}

export default new KategoriPage();