const homePage = require('../pages/home.page');
const registrationPage = require('../pages/dealer.registration.page');

const REG_DATA = {
  email: Helper.getRandomEmail(),
  fullName: "John Doe",
  password: "boatWorld1"
};

describe('Dealer tests', () => {

   beforeEach(() => {

   });
   it('should test "As a professional seller, I want to register as a Dealer"', () => {
      cy.visit('/');
      homePage.clickOnBoatimForBoatDealerLink();
      registrationPage.waitForPageLoading();
      registrationPage.clickOnStartFreePlanButton();
      registrationPage.isRegistrationPopupDisplayed();
      registrationPage.fillRegistrationForm(REG_DATA);
      registrationPage.clickOnRegisterSubmitButton();
      registrationPage.isRegistrationPopupDisplayed();
      registrationPage.isVerifyEmailAlertDisplayed();
   });
});
