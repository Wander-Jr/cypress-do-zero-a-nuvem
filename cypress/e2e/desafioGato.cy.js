beforeEach(() => {
  cy.visit('../src/index.html')
  cy.get('#title').should('be.visible').and('have.text', 'CAC TAT')
});

describe('Desafio do Gato',() => {
    it('Exibe a imagem do gato', () => {
        cy.get('#cat')
          .invoke('show')
          .should('be.visible')

        cy.get('#title')
          .should('be.visible')
          .invoke('text', 'CAT TAT ')
          .should('contain.text', 'CAT TAT')
    })
})