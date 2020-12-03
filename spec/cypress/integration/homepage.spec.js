context('Homepage', () => {
  it('should verify that homepage works', () => {
    cy.visit('/')

    cy.contains('Ardoise')
    cy.contains('New category').should('not.exists')

    cy.contains('button', '+').click()

    cy.contains('New category')
  })
})
