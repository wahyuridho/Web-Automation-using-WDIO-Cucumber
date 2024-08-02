import { $ } from '@wdio/globals'
import Page from './page.js'

class LoginPage extends Page {
    get inputEmail () { return $('//input[@id="email"]') }
    get inputPassword () { return $('//input[@id="password"]') }
    get btnSubmit () { return $('//button[@type="submit"]') }
    get errorMessage () {return $('//div[@role="alert"]')}
    get userLoggedIN () {return $('//button[@aria-haspopup="menu"]')}
    get logOutBtn () {return $('//button[text()="logout"]')}


    open = async () => {
        return await super.open('/login')
    }

    login = async (email, password) => {
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)
    }

    submit = async () => {
        return await this.btnSubmit.click()
    }

    isLoggedIn = async () => {
        return (await this.userLoggedIN).isDisplayed()
    }

    logOut = async () => {
        await this.userLoggedIN.click()
        await this.logOutBtn.click()
    }
}

export default new LoginPage();
