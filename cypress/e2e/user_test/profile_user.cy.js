describe('Check the Profile User Page', () => {
    const email = 'fauzi@gmail.com'
    const password = 'fauzi123'
    const emailHaveOrder = 'testingfauzi123@gmail.com'
    const passwordHaveOrder = 'fauzi123'
    it('Check Profil User page before order any packages', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(2000)
        cy.get('ul > :nth-child(4) > a').click()
        cy.scrollTo(0, 500)
        cy.get('.form-group > div > h1').contains('Belum ada riwayat transaksi.')
        cy.wait(2000)
    })

    it('Check Profil User page after order any packages', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(emailHaveOrder)
        cy.get('#password').type(passwordHaveOrder)
        cy.get('#signin').click()
        cy.wait(2000)
        cy.get('ul > :nth-child(4) > a').click()
        cy.scrollTo(0, 500)
        cy.get('.heading-small').contains('Transaction 1')
        cy.wait(2000)
    })
})