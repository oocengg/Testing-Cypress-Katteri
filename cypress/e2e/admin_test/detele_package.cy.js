Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Check the Delete paket functionality', () => {
    const email = 'admin@admin.com'
    const password = 'admin'
    const newTitle = 'Paket 1 Setelah Update'

    it('Delete package', () => {
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
        cy.get(':nth-child(4) > .card > .product-thumb > a > .card-img-top').click()
        cy.get('.col-12 > .btn').click()
        cy.get('form > .btn').click()
    })
})