const Page = require('./page');

const ELEMENTS = {
    BOATIM_FOR_BOAT_DEALER_LINK: '.footer-container a[href*="dealers/register"]'
};

class HomePage extends Page{

    //-------------------- Click on elements---------------------//
    clickOnBoatimForBoatDealerLink(){
        this.clickOn(this.ELEMENTS_TYPE.CSS, ELEMENTS.BOATIM_FOR_BOAT_DEALER_LINK);
    }
}

module.exports = new HomePage();
