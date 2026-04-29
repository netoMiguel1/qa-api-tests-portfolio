describe('Testes de API - Users', () => {

  it('Deve listar usuários com sucesso', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.length).to.be.greaterThan(0)
      })
  })

  it('Deve retornar usuário específico', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(1)
      })
  })

})