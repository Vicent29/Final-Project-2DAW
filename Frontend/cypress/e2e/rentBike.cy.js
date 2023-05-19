import {login, regsiter} from '../page-objects/acount.js'
describe('Check that new features', () => {
  it('Open Rent and Close Rent', () => {
    cy.viewport(1680, 940)
    login();
    cy.visit('http://localhost:3000/#/home');
    cy.wait(6000);
    cy.get('div > button:first').click();
    cy.get('div[id*="listBike"]:first').click();
    cy.get('button[id*="confirmRent"]').click();
    cy.get("[class*='Toastify__toast--success']").should('be.visible').should('contain', 'rented successfully');
    cy.visit('http://localhost:3000/#/profile');
    cy.get('button[id*="leaveBike"]').click();
    cy.get("[class*='Toastify__toast--success']").should('be.visible').should('contain', 'Your balance has been updated to');
  })
 
})