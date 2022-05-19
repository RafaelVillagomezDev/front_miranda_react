describe('Test login ', () => {
  it('Homepage puede ser abierta', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('User')
  })
  it('Login form puede ser abierto', () => {
    cy.visit('http://localhost:3000/login')
    cy.contains('Enviar').click()
  })
  it('Comprobacion login', () => {
    cy.get('[placeholder="username"]').type('pepe')
    cy.get('[placeholder="password"]').type('1234')
  })

  it('verificamos que estamos en Home', () => {
    cy.contains('Enviar').click()
    cy.visit('http://localhost:3000/')
    cy.contains('Dashboard')
  })
})
