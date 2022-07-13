/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { homePage, header, signInPage, common , tabs, product, cart, address, shipping, payment, orderConfirmation } from '../../support/elementSelectors/selectors';
import { expectedResults } from '../../fixtures/const';

const customer = Cypress.env('customer');
const invalidCustomer = Cypress.env('invalidCustomer');

Given('home page is loaded', () => {
    cy.visit('/');
    cy.elementShouldBeVisible(homePage.logo);
});

Given('sign in button is displayed in header', () => {
    cy.elementShouldBeVisible(header.signIn);
});

When('user clicks on {} button in header', (button) => {
    switch (button) {
        case 'sign in': {
            cy.get(header.signIn).click();
            break;
        }
        case 'sign out': {
            cy.get(header.signOut).click();
            break;
        }
    }
});

Then('{} is displayed', (element) => {
    switch (element) {
        case 'sign in form': {
            cy.elementShouldBeVisible(signInPage.signInForm);
            break;
        }
        case 'users account': {
            cy.elementShouldContainText(common.pageHeading, expectedResults.myAccountTitle);
            cy.elementShouldBeVisible(header.account);
            break;
        }
        case 'users address': {
            cy.elementShouldBeVisible(address.deliveryAddress);
            cy.elementShouldBeVisible(address.billingAddress);
            break;
        }
        case 'shipping page': {
            cy.elementShouldContainText(common.pageHeading, expectedResults.shippingHeading);
            break;
        }
        case 'payment page': {
            cy.elementShouldBeVisible(payment.paymentOptions);
            break;
        }
        case 'order confirmation summary': {
            cy.elementShouldContainText(orderConfirmation.orderSummary, expectedResults.completeOderConfirmation);
            break;
        }
    }

});

When('user submits {} credentials', (isCorrect) => {
    switch (isCorrect) {
        case 'correct': {
            cy.signIn(customer.email, customer.password);
            break;
        }
        case 'invalid': {
            cy.signIn(invalidCustomer.email, invalidCustomer.password);
            break;
        }
    }
});

When('user chooses dresses', () => {
    cy.get(tabs.dresses).click();
});

When('adds 1 product to cart', () => {
    cy.get(product.addToCart).invoke('show').eq(0).click();
});

When('user proceeds to checkout', () => {
    cy.get(product.proceedToCheckout).click();
});

Then('{} product is in the cart', (quantity) => {
    cy.get(cart.productsList).should('have.length', quantity);
    cy.get(cart.quantity).should('contain.value', quantity);
});