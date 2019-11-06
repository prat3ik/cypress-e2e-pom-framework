const Page = require('./page');

const ELEMENTS = {
    START_FREE_PLAN_BUTTON_CSS: 'button#startFreePlan',
    REGISTRATION_POPUP_CSS: 'div.auth-popup',
    REGISTRATION_FORM_EMAIL_INPUT_CSS: 'input.email',
    REGISTRATION_FORM_FULLNAME_INPUT_CSS: 'input.fullName',
    REGISTRATION_FORM_PASSWORD_INPUT_XPATH: './/input[@name="password"]',
    REGISTRATION_FORM_CONFIRM_PASSWORD_INPUT_XPATH: './/input[@name="password2"]',
    REGISTER_SUBMIT_BUTTON_CSS: 'button#registerSubmit',
    VERIFY_EMAIL_TEXT_CSS: 'h1.verify-email',
    VERIFY_BUTTON_CSS: 'button.send-verify-email-popup-btn'

};

class DealerRegistrationPage extends Page{
    //------------------------- Verify element or pages ----------------//
    isRegistrationPopupDisplayed(){
        this.waitForIsShown(this.ELEMENTS_TYPE.CSS, ELEMENTS.REGISTRATION_POPUP_CSS);
    }

    isVerifyEmailAlertDisplayed(){
        this.waitForIsShown(this.ELEMENTS_TYPE.CSS, ELEMENTS.VERIFY_BUTTON_CSS);
        this.waitForIsShown(this.ELEMENTS_TYPE.CSS, ELEMENTS.VERIFY_EMAIL_TEXT_CSS);
    }

    //------------------------ Filling Registration Form ---------------//
    fillRegistrationForm(regData){
        this.typeIn(this.ELEMENTS_TYPE.CSS, ELEMENTS.REGISTRATION_FORM_EMAIL_INPUT_CSS, regData.email);
        this.typeIn(this.ELEMENTS_TYPE.CSS, ELEMENTS.REGISTRATION_FORM_FULLNAME_INPUT_CSS, regData.fullName);
        this.typeIn(this.ELEMENTS_TYPE.XPATH, ELEMENTS.REGISTRATION_FORM_PASSWORD_INPUT_XPATH, regData.password);
        this.typeIn(this.ELEMENTS_TYPE.XPATH, ELEMENTS.REGISTRATION_FORM_CONFIRM_PASSWORD_INPUT_XPATH, regData.password);
    }

    //------------------------- Click on elements ----------------------//
    clickOnStartFreePlanButton(){
        this.clickOn(this.ELEMENTS_TYPE.CSS, ELEMENTS.START_FREE_PLAN_BUTTON_CSS);
    }

    clickOnRegisterSubmitButton(){
        this.clickOn(this.ELEMENTS_TYPE.CSS, ELEMENTS.REGISTER_SUBMIT_BUTTON_CSS);
    }
}

module.exports = new DealerRegistrationPage();
