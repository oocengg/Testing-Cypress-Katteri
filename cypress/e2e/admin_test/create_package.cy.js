Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Check the Create Paket functionality', () => {
    const email = 'admin@admin.com'
    const password = 'admin'
    const title = 'Paket 1'
    const price = '100000'
    const description = 'Paket 1 Test'

    it('Input package with valid data', () => {
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
        cy.get('.nk-block-tools-opt > .d-none').click()
        cy.get(':nth-child(1) > .form-group > .form-control-wrap > #product-title').type(title)
        cy.get('#description').type(description)
        cy.get('input[name=harga_paket]').type(price)
        cy.get(':nth-child(4) > .form-group > .form-control-wrap > #product-title').selectFile('cypress/fixtures/package.png')
        cy.get(':nth-child(5) > .btn').click()
    })

    it('Input package without upload an image', () => {
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
        cy.get('.nk-block-tools-opt > .d-none').click()
        cy.get(':nth-child(1) > .form-group > .form-control-wrap > #product-title').type(title)
        cy.get('#description').type(description)
        cy.get('input[name=harga_paket]').type(price)
        cy.get(':nth-child(5) > .btn').click()
    })
})