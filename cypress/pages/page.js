/**
 * Element locator strategies used by cypress.
 * @type {{XPATH: string, CSS: string}}
 */
const ELEMENT_TYPE = {
    XPATH: 'xpath',
    CSS: 'css'
};

/**
 * Element selectors for the common web-elements which can be used throughout common pages.
 */
const ELEMENTS = {
    PAGE_BODY_CSS: 'body'
};

class Page {
    constructor() {
        /** @protected @type {{XPATH: string, CSS: string}} */
        this.ELEMENTS_TYPE = ELEMENT_TYPE;
    }

    /**
     * This method will wait till page is being loaded.
     */
    waitForPageLoading() {
        cy.get(ELEMENTS.PAGE_BODY_CSS).should('visible');
    }

    /**
     * Waiting for element displayed.
     * @param {ELEMENT_TYPE} locatorType An element locator finding strategy.
     * @param {string} locatorValue An element locator(selector).
     * @returns {Cypress.Chainable<JQuery<HTMLElementTagNameMap[*]>>|Cypress.Chainable<JQuery<HTMLElement>>}
     */
    waitTillElementIsDisplayed(locatorType, locatorValue) {
        switch (locatorType) {
            case ELEMENT_TYPE.XPATH:
                return cy.xpath(locatorValue).should('visible');
            case ELEMENT_TYPE.CSS:
                return cy.get(locatorValue).should('visible');
        }
    }

    /**
     * This method will check that given element is not exist.
     * @param {ELEMENT_TYPE} locatorType The locator type
     * @param {string} locatorValue An element locator
     * @returns {Cypress.Chainable<JQuery<HTMLElementTagNameMap[*]>>|Cypress.Chainable<JQuery<HTMLElement>>}
     */
    elementShouldNotExist(locatorType, locatorValue) {
        switch (locatorType) {
            case ELEMENT_TYPE.XPATH:
                return cy.xpath(locatorValue).should('not.exist');
            case ELEMENT_TYPE.CSS:
                return cy.get(locatorValue).should('not.exist');
        }
    }

    /**
     * Type in to the Input type Elements.
     * @param {ELEMENT_TYPE} locatorType The locator type.
     * @param {string} locatorValue An element locator.
     * @param {string} text The text string to be entered in the input field.
     */
    typeIn(locatorType, locatorValue, text) {
        this.waitTillElementIsDisplayed(locatorType, locatorValue).clear().type(text);
    }

    /**
     * To click on element(buttons, radio-buttons, checkboxes etc..)
     * @param {ELEMENT_TYPE} locatorType The locator type.
     * @param {string} locatorValue An element locator.
     */
    clickOn(locatorType, locatorValue) {
        return this.waitTillElementIsDisplayed(locatorType, locatorValue).click();
    }

    /**
     * This is the common method to select the "Checkbox" or "Radio button"
     * @param {ELEMENT_TYPE} locatorType The locator type.
     * @param {string} locatorValue An element locator value.
     */
    check(locatorType, locatorValue) {
        this.waitTillElementIsDisplayed(locatorType, locatorValue).check();
    }

    /**
     * This method is used to select value from drop-down menu.
     * @param {object} dropDownButtonElement A dropdown button, when it's clicked dropdown input field will be shown.
     * @param {object} dropDownInputElement A dropdown input element.
     * @param {string} option The drop-down option text to be enetered into the drop-down input field.
     */
    selectValue(dropDownButtonElement, dropDownInputElement, option) {
        const {dropDownButtonElType, dropDownButtonElLocator} = dropDownButtonElement;
        const {dropDownInputElType, dropDownInputElLocator} = dropDownInputElement;
        this.clickOn(dropDownButtonElType, dropDownButtonElLocator);
        this.waitTillElementIsDisplayed(dropDownInputElType, dropDownInputElLocator)
            .click({force: true})
            .type(option)
            .type('{enter}');
    }
}

module.exports = Page;
