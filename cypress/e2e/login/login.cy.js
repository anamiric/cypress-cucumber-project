/// <reference types="cypress" />
import { Then } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from '../../support/elementSelectors/selectors';
import { expectedResults } from "../../fixtures/const";

Then('error message is displayed', () => {
  cy.elementShouldContainText(signInPage.error, expectedResults.signInFailed);
});