Cypress.Commands.add('elementShouldBeVisible', (element) => {
    cy.get(element).should('be.visible');
});

Cypress.Commands.add("elementShouldContainText", (element, value) => {
    cy.get(element).should('contains.text', value);
});

Cypress.Commands.add('signIn', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#passwd').type(password);
    cy.get('#SubmitLogin').click();
});

Cypress.Commands.add('getPrice', (element, property) => {
    return cy.get(element).invoke(property).invoke('replace', '$', '');
});

Cypress.Commands.add('getQuantity', (element) => {
    return cy.get(element).invoke('val');
});

Cypress.Commands.add('waitForPriceUpdate', () => {
    cy.intercept({
        method: "POST",
        url: "/index.php?rand=**",
    }).as("priceUpdateAfterQuantityChange");
    cy.wait("@priceUpdateAfterQuantityChange").its('response.statusCode').should('eq', 200)
});