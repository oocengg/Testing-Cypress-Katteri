describe('Check the Register Functionality', () => {
    const name = 'Fauzi Tesiting'
    const email = 'testingfauzi123@gmail.com'
    const email2 = 'testingfauzi1234@gmail.com'
    const emailInvalid = 'fauzitest'
    const password = 'fauzi123'
    const passwordInvalid = 'test'

    it('Enter valid Name, valid Email, valid Password, and valid Repeat Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('.signup-image-link').click()
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#password_confirmation').type(password)
        cy.get('.label-agree-term > :nth-child(1)').click()
        cy.get('#signup').click()
        cy.wait(2000)
    })

    it('Enter valid Name, invalid Email, valid Password, and valid Repeat Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('.signup-image-link').click()
        cy.get('#name').type(name)
        cy.get('#email').type(emailInvalid)
        cy.get('#password').type(password)
        cy.get('#password_confirmation').type(password)
        cy.get('.label-agree-term > :nth-child(1)').click()
        cy.get('#signup').click()
        cy.wait(2000)
    })

    it('Enter valid Name, valid Email, invalid Password, and valid Repeat Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('.signup-image-link').click()
        cy.get('#name').type(name)
        cy.get('#email').type(email2)
        cy.get('#password').type(passwordInvalid)
        cy.get('#password_confirmation').type(passwordInvalid)
        cy.get('.label-agree-term > :nth-child(1)').click()
        cy.get('#signup').click()
        cy.wait(2000)
    })

    it('Enter valid Name, valid Email, valid Password, and invalid Repeat Password', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('.signup-image-link').click()
        cy.get('#name').type(name)
        cy.get('#email').type(email2)
        cy.get('#password').type(password)
        cy.get('#password_confirmation').type(passwordInvalid)
        cy.get('.label-agree-term > :nth-child(1)').click()
        cy.get('#signup').click()
        cy.wait(2000)
    })

    it('Enter Form with same Email that have been registered.', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('.signup-image-link').click()
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#password_confirmation').type(password)
        cy.get('.label-agree-term > :nth-child(1)').click()
        cy.get('#signup').click()
        cy.wait(2000)
    })

    it('Let the Name, Email, Password, and Repeat Password blank', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('.signup-image-link').click()
        cy.get('.label-agree-term > :nth-child(1)').click()
        cy.get('#signup').click()
        cy.wait(2000)
    })
})