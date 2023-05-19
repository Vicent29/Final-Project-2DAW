import {login, regsiter} from '../page-objects/acount.js'
describe('Check that new feature Incident', () => {
  it('Create a incident', () => {
    login();
    cy.visit('http://localhost:3000/#/profile');
    cy.get('[alt*="Icon incidences"]').click({ force: true });
    cy.wait(6000);
    cy.get('[id="next"]').click();
    cy.wait(2000);
    cy.get('[id="next"]').click();
    cy.wait(1000);
    cy.get('input[id="descIncident"]').type('The bike does not work properly');
    cy.get('[id="sendIncident"]').click();
    cy.get("[class*='Toastify__toast--success']").should('be.visible').should('contain', ' successfully');
  })
})