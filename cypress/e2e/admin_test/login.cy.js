Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Check the Login Functionality', () => {
    const email = 'admin@admin.com'
    const password = 'admin'
    const emailInvalid = 'testingAdmin@admin.com'
    const passwordInvalid = 'testtest'

    it('Enter valid User Name and valid Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(2000)
    })

    it('Enter valid User Name and invalid Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(passwordInvalid)
        cy.get('#signin').click()
        cy.wait(2000)
    })

    it('Enter invalid User Name and valid Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(emailInvalid)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(2000)
    })

    it('Enter invalid User Name and invalid Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(emailInvalid)
        cy.get('#password').type(passwordInvalid)
        cy.get('#signin').click()
        cy.wait(2000)
    })

    it('Check the Show Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(passwordInvalid)
        cy.get('.label-agree-term > :nth-child(1)').click()
        cy.wait(2000)
    })
})