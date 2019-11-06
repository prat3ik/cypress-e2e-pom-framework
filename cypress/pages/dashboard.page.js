/**
 * Below are the element selectors which will be used throughout the class.
 */
const ELEMENTS = {
    USERNAME_LABEL: '#usernameLabel',
};

class DashboardPage extends Page {
    //-------------------- Verify elements on page ----------------//
    /**
     * To check that Dashboard is displayed.
     */
    verifyDashboardPageIsDisplayed() {
        this.waitTillElementIsDisplayed(this.ELEMENTS_TYPE.CSS, ELEMENTS.USERNAME_LABEL);
    }
}

module.exports = new DashboardPage();
