Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Check the Detail package functionality', () => {
    const email = 'admin@admin.com'
    const password = 'admin'

    it('Check Detail package already displayed', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(1000)
        cy.get('.nk-menu-toggle > .nk-menu-text').click({ force: true })
        cy.wait(1000)
        cy.get('.nk-menu-sub > :nth-child(2) > .nk-menu-link > .nk-menu-text').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .card > .product-thumb > a > .card-img-top').click()
        cy.wait(1000)
    })
})