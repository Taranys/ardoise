context('Homepage', () => {
  it('should verify that homepage works', () => {
    cy.visit('/')
    cy.contains('Yay! You’re on Rails!')
  })
})
