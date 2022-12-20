Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Check the Update menu functionality', () => {
    const email = 'admin@admin.com'
    const password = 'admin'
    const updateName = 'Keto Monterey Spinach Chicken Test'

    it('Edit the name of menu in update menu form', () => {
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
        cy.get(':nth-child(2) > .nk-tb-col-tools > .nk-tb-actions > .mr-n1 > .dropdown > .dropdown-toggle > .icon').click()
        cy.get(':nth-child(2) > .nk-tb-col-tools > .nk-tb-actions > .mr-n1 > .dropdown > .dropdown-menu > .link-list-opt > :nth-child(1) > a').click()
        cy.get('#updateModal5 > .modal-dialog > .modal-content > form > .modal-body > .row > :nth-child(1) > .form-group > .form-control-wrap > #full-name').clear()
        cy.get('#updateModal5 > .modal-dialog > .modal-content > form > .modal-body > .row > :nth-child(1) > .form-group > .form-control-wrap > #full-name').type(updateName)
        cy.wait(1000)
        cy.get('#updateModal5 > .modal-dialog > .modal-content > form > .modal-footer > [type="submit"]').click()
        cy.wait(1000)
    })
})