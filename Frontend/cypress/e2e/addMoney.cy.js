import {login, regsiter} from '../page-objects/acount.js'
describe('Check that new features', () => {
  it('Add Money in balance', () => {
    login();
    cy.visit('http://localhost:3000/#/profile');
    cy.get('button[id*="addMoney"]',{ timeout: 10000 }).click({ force: true });
    cy.get('button[id*="5€"]').click();
    cy.get('input[name="email"]', { timeout: 10000 }).type('vicent@gmail.com');
    cy.get('input[id="cardNumber"]').type('4242424242424242');
    cy.get('input[id="cardExpiry"]').type('09/28');
    cy.get('input[id="cardCvc"]').type('123');
    cy.get('input[id="billingName"]').type('Vicent Esteve');
    cy.get('[id="SubmitButton-IconContainer"]', { timeout: 10000}).click();
    cy.url().should('contain', 'profileStripe');
    cy.get("[class*='Toastify__toast--success']").should('be.visible');
    cy.get("[class*='Toastify__toast--success']").should('be.visible').should('contain', 'Your balance has been updated to');
  })

})