import data from "../fixtures/acount.json";

class Account {
    login() {
        cy.visit('/');
        cy.get('input[name="email"]').type(data.email);
        cy.get('input[name="password"]').type(data.password);
        cy.get('button[class="signin"]').click();
        cy.get("[class*='Toastify__toast--success']").should('be.visible');
    }
}
export default new Account();