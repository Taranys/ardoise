context('Homepage', () => {
  it('should verify that homepage works', () => {
    cy.visit('/')

    cy.contains('Ardoise')
  })
})
