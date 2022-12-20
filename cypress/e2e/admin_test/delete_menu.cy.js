Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Check the Delete menu functionality', () => {
  const email = 'admin@admin.com'
  const password = 'admin'

  it('Delete the menu', () => {
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
      cy.get(':nth-child(18) > .nk-tb-col-tools > .nk-tb-actions > .mr-n1 > .dropdown > .dropdown-toggle > .icon').click()
      cy.get(':nth-child(18) > .nk-tb-col-tools > .nk-tb-actions > .mr-n1 > .dropdown > .dropdown-menu > .link-list-opt > :nth-child(3) > a').click()
      cy.wait(1000)
      cy.get('#deleteModal9 > .modal-dialog > .modal-content > form > .modal-footer > .btn-danger').click()
      cy.wait(1000)
  })
})