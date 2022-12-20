Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Check the User List', () => {
    const email = 'admin@admin.com'
    const password = 'admin'

    it('Enter valid User Name and valid Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .nk-menu-link > .nk-menu-text').click()
        cy.wait(2000)
    })
})