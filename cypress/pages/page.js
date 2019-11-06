const COMMON_ELEMENTS = {
    PAGE_BODY_CSS: 'body'
};

const ELEMENT_TYPE = {
    XPATH: 'xpath',
    CSS: 'css'
};

class Page {

    constructor() {
        this.ELEMENTS_TYPE = ELEMENT_TYPE;
    }

    /**
     * This method will till page is being loaded completely.
     */
    waitForPageLoading() {
        cy.get(COMMON_ELEMENTS.PAGE_BODY_CSS, {timeout: 60000}).should('visible');
    }

    /**
     * This method will wait till element is shown
     * @param locatorType
     * @param locatorValue
     */
    waitForIsShown(locatorType, locatorValue) {
        switch (locatorType) {
            case ELEMENT_TYPE.XPATH:
                cy.xpath(locatorValue, {timeout: 60000}).should('visible');
                break;
            case ELEMENT_TYPE.CSS:
                cy.get(locatorValue, {timeout: 60000}).should('visible');
        }
    }

    /**
     * This method will type in to particular element
     * @param locatorType
     * @param locatorValue
     * @param text
     */
    typeIn(locatorType, locatorValue, text) {
        switch (locatorType) {
            case ELEMENT_TYPE.XPATH:
                cy.xpath(locatorValue, {timeout: 60000}).type(text);
                break;
            case ELEMENT_TYPE.CSS:
                cy.get(locatorValue, {timeout: 60000}).type(text);
        }
    }

    /**
     * This method will click on the element
     * @param locatorType
     * @param locatorValue
     */
    clickOn(locatorType, locatorValue) {
        switch (locatorType) {
            case ELEMENT_TYPE.XPATH:
                cy.xpath(locatorValue, {timeout: 60000}).click();
                break;
            case ELEMENT_TYPE.CSS:
                cy.get(locatorValue, {timeout: 60000}).click();
        }
    }
}

module.exports = Page;
