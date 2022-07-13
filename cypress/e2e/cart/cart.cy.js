/// <reference types="cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { cart } from '../../support/elementSelectors/selectors';
import { expectedResults } from "../../fixtures/const";

let quantity;
let priceProduct;
let shipping;
let total;

When('user deletes product', () => {
    cy.get(cart.deleteIcon).click();
});

When('user changes quantity to {}', (quantity) => {
    cy.get(cart.quantity).type(quantity);
    cy.waitForPriceUpdate();
});

Then('cart is empty and alert message appears', () => {
    cy.get(cart.productsList).should('have.length', 0);
    cy.elementShouldContainText(cart.cartEmptyMessage, expectedResults.emptyCartMessage);
});

Then('price is changed accordingly', () => {
    cy.getQuantity(cart.quantity).then(qty => {
        quantity = parseInt(qty);
        cy.getPrice(cart.productPrice, 'text').then(price => {
            priceProduct = parseInt(price);
            cy.getPrice(cart.shippingPrice, 'text').then(price => {
                shipping = parseInt(price);
                cy.getPrice(cart.totalPrice, 'text').then(price => {
                    total = parseInt(price);
                });
            });
        });
    }).then(() => {
        expect(quantity * priceProduct + shipping).to.eq(total);
    });
});