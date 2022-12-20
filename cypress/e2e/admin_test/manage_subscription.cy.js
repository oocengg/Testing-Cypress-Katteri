Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Manage Subscription List', () => {
    const email = 'admin@admin.com'
    const password = 'admin'

    it('Accepting the subscription apply', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > .nk-menu-link').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .tb-tnx-action > .dropdown > .text-soft > .icon').click()
        cy.get(':nth-child(1) > .tb-tnx-action > .dropdown > .dropdown-menu > .link-list-plain > li > a').click()
        cy.get('#modal-1 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(1000)
    })

    it('Rejecting the subscription apply', () => {
        cy.viewport(1280, 720)
        cy.visit('http://127.0.0.1:8000/')
        cy.get('.container > .btn-book-a-table').click()
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#signin').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > .nk-menu-link').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .tb-tnx-action > .dropdown > .text-soft > .icon').click()
        cy.get(':nth-child(1) > .tb-tnx-action > .dropdown > .dropdown-menu > .link-list-plain > li > a').click()
        cy.get('.btn-danger').click()
        cy.wait(1000)
    })
})