describe('Check the Orders Functionality', () => {
    const email = 'testingfauzi123@gmail.com'
    const password = 'fauzi123'
    const name = 'Muh. Fauzi Ramadhan Nugraha'
    const kodePos = '91511'
    const alamat = 'Jl. Dahlia X BTN Axuri Blok K/15, Mamuju, Sulawesi Barat'
    const noTelp1 = '082291291111'
    const noTelp2 = '082291292222'

    it('Order with Weight Loss Package', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.get('form > a.btn-book-a-table').click()
        cy.get('.d-flex > .btn-book-a-table').click()
        cy.get('#name').type(name, { force: true })
        cy.get('#kodepos').type(kodePos, { force: true })
        cy.get('.form-group > .form-control').type(alamat, { force: true })
        cy.get('#notelp1').type(noTelp1, { force: true })
        cy.get('#notelp2').type(noTelp2, { force: true })
        cy.wait(2000)
        cy.get('[type="radio"]').check('1', { force: true })
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(2000)
    })

    it('Order with Weight Gain Package', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.get('form > a.btn-book-a-table').click()
        cy.get('.d-flex > .btn-book-a-table').click()
        cy.get('#name').type(name, { force: true })
        cy.get('#kodepos').type(kodePos, { force: true })
        cy.get('.form-group > .form-control').type(alamat, { force: true })
        cy.get('#notelp1').type(noTelp1, { force: true })
        cy.get('#notelp2').type(noTelp2, { force: true })
        cy.wait(2000)
        cy.get('[type="radio"]').check('2', { force: true })
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(2000)
    })

    it('Order with Muscle Gain Package', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.get('form > a.btn-book-a-table').click()
        cy.get('.d-flex > .btn-book-a-table').click()
        cy.get('#name').type(name, { force: true })
        cy.get('#kodepos').type(kodePos, { force: true })
        cy.get('.form-group > .form-control').type(alamat, { force: true })
        cy.get('#notelp1').type(noTelp1, { force: true })
        cy.get('#notelp2').type(noTelp2, { force: true })
        cy.wait(2000)
        cy.get('[type="radio"]').check('3', { force: true })
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(2000)
    })
})