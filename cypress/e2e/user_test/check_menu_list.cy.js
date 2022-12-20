describe('Check the Menu List Page', () => {
    const email = 'testingfauzi123@gmail.com'
    const password = 'fauzi123'

    it('Check the Weight Loss Package Menu', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.get('ul > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get('a').contains('Weight Loss Package').click({ force: true })
        cy.wait(2000)
    })

    it('Check the Weight Gain Package Menu', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.get('ul > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get('a').contains('Weight Gain Package').click({ force: true })
        cy.wait(2000)
    })

    it('Check the Muscle Gain Package Menu', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.get('ul > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get('a').contains('Muscle Gain Package').click({ force: true })
        cy.wait(2000)
    })
})