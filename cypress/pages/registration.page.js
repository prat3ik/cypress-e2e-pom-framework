/**
 * Below are the element selectors which will be used throughout the class.
 */
const ELEMENTS = {
    USERNAME_INPUT: '#username',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: '#loginBtn',
};

class LoginPage extends Page {
    //-------------------- Verify elements on page ----------------//
    /**
     * To check that Login page is displayed.
     */
    verifyLoginPageIsDisplayed() {
        this.waitTillElementIsDisplayed(this.ELEMENTS_TYPE.CSS, ELEMENTS.USERNAME_INPUT);
        this.waitTillElementIsDisplayed(this.ELEMENTS_TYPE.CSS, ELEMENTS.PASSWORD_INPUT);
        this.waitTillElementIsDisplayed(this.ELEMENTS_TYPE.CSS, ELEMENTS.LOGIN_BUTTON);
    }

    /**
     * To do login.
     * @param {string} username A username.
     * @param {string} password The password of the username.
     */
    doLogin(username, password) {
        this.typeIn(this.ELEMENTS_TYPE.CSS, ELEMENTS.USERNAME_INPUT, username);
        this.typeIn(this.ELEMENTS_TYPE.CSS, ELEMENTS.PASSWORD_INPUT, password);
        this.clickOn(this.ELEMENTS_TYPE.CSS, ELEMENTS.LOGIN_BUTTON);
    }
}

module.exports = new LoginPage();
