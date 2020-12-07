context('Homepage', () => {
  it('should verify that homepage works', () => {
    cy.visit('/')

    cy.contains('Ardoise')
    cy.contains('New category').should('not.exist')

    cy.contains('button', '+').click()

    cy.contains('New category')
  })
})
