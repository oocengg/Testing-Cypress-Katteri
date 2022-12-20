Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Check the Subscription list functionality', () => {
    const email = 'admin@admin.com'
    const password = 'admin'

    it('Check the subscription list already displayed', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > .nk-menu-link').click()
        cy.wait(1000)
    })
})