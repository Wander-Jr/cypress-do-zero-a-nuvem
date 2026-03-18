beforeEach(() => {
  cy.visit('../src/index.html')
  cy.get('#title').should('be.visible').and('have.text', 'CAC TAT')
});

describe('Utilizando o comando invoke', () => {

  it('Exibe e oculta as mensagens de sucesso e erro usando invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show') 
      .should('be.visible')
      .and('contain.text', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')

      cy.get('.error')
        .should('not.be.visible')
        .invoke('show') 
        .should('be.visible')
        .and('contain.text', 'Valide os campos obrigatórios!')
        .invoke('hide')
        .should('not.be.visible')
  });


  it.only('Preenche a área de texto usando invoke', () => {
    const longText = Cypress._.repeat('Texto longo para teste de área de texto. ', 20)

    cy.get('#open-text-area')
      .invoke('val', longText)
      .should('have.value', longText)
  });

});