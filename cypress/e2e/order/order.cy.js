/// <reference types="cypress" />
import { When } from 'cypress-cucumber-preprocessor/steps';
import { shipping, payment, orderConfirmation, common } from '../../support/elementSelectors/selectors';

When('user goes next step', () => {
    cy.get(common.proceedToCheckoutBtn).click();
});

When('user agrees to terms of service', () => {
    cy.get(shipping.tearmsOfServices).check();
});

When('user chooses pay by bank wire payment option', () => {
    cy.get(payment.payByBankWire).click();
});

When('user confirms order', () => {
    cy.get(orderConfirmation.confirmOrder).click();
});
