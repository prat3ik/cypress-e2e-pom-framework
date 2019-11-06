// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-xpath';

global.Helper = require('../utils/helper');
global.faker = require('faker');
indexedDB.deleteDatabase('firebaseLocalStorageDb');

Cypress.on('window:before:load', win => {
 cy.stub(win.console, 'log', msg => {
  cy.task('log', `console.log --> ${msg}`);
 });
 cy.stub(win.console, 'error', msg => {
  cy.task('log', `console.error --> ${msg}`);
 });
});

beforeEach(() => {
 cy.visit('/');
});
