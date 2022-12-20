describe('Check the Your Food (Food Active) Page', () => {
    const email = 'fauzi@gmail.com'
    const password = 'fauzi123'
    const emailHaveOrder = 'testingfauzi123@gmail.com'
    const passwordHaveOrder = 'fauzi123'

    it('Check Your Food page before order any packages', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(2000)
        cy.get('ul > :nth-child(3) > a').click()
        cy.get('.section-header > p').contains('Kamu belum berlangganan!')
        cy.wait(2000)
    })

    it('Check Your Food page after order any packages', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(emailHaveOrder)
        cy.get('#password').type(passwordHaveOrder)
        cy.get('#signin').click()
        cy.wait(2000)
        cy.get('ul > :nth-child(3) > a').click()
        cy.get('.section-header > p').contains('This Is Your Food')
        cy.wait(2000)
    })
})