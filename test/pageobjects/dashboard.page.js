const { Page } = require("./page.js");

class DashboardPage extends Page{

    get userLoggedIN () {return $('//button[@aria-haspopup="menu"]')}
    get logOutBtn () {return $('//button[text()="logout"]')}

    isLoggedIn = async () => {
        return (await this.userLoggedIN).isDisplayed()
    }

    logOut = async () => {
        await this.userLoggedIN.click()
        await this.logOutBtn.click()
    }

}

export default new DashboardPage()