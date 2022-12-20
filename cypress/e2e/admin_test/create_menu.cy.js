Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Check the Create Menu functionality', () => {
    const email = 'admin@admin.com'
    const password = 'admin'
    const productTitle = 'Test Nasi Goreng'
    const productDesc = 'Test Deskripsi Nasi Goreng'
    const productNT = 'Test Kalori 100'


    it('Input Menu in add menu form without add image', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(1000)
        cy.get('.nk-menu-toggle > .nk-menu-text').click({ force: true })
        cy.wait(1000)
        cy.get(':nth-child(1) > .nk-menu-link > .nk-menu-text').click()
        cy.get('.nk-block-tools-opt > .d-none').click()
        cy.get('#product-title').type(productTitle)
        cy.get('#description').type(productDesc)
        cy.get('#cke_21_contents > .cke_wysiwyg_frame').type(productNT)
        cy.get(':nth-child(6) > .btn').click()
    })
})