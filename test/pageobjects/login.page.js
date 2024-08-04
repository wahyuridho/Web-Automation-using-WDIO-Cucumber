import { $ } from '@wdio/globals'
import Page from './page.js'

class LoginPage extends Page {
    get inputEmail () { return $('//input[@id="email"]') }
    get inputPassword () { return $('//input[@id="password"]') }
    get btnSubmit () { return $('//button[@type="submit"]') }
    get errorMessage () {return $('//div[@role="alert"]')}
    


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
}

export default new LoginPage();
