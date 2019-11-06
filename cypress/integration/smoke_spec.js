const registrationPage = require('../pages/registration.page');
const dashboardPage = require('../pages/dashboard.page.page');

describe('Smoke tests:', () => {
   it('Valid user should able to login', () => {
      // Verify Login page is displayed
      registrationPage.verifyLoginPageIsDisplayed();

      // Do login using data from "login.data.json"
      cy.fixture('login.data.json').then(loginData => {
         registrationPage.doLogin(loginData.username, loginData.password);
      });

      // Verify Dashboard page appears after successful login.
      dashboardPage.verifyDashboardPageIsDisplayed();
   });
});
