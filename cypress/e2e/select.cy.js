beforeEach(() => {
    cy.visit('../src/index.html')
    cy.get('#title').should('be.visible').and('have.text', 'CAC TAT')
});

describe('Seletores', () => {

    it('Ex0 - seleciona um produto (YouTube) por seu texto', () => {
        cy.get('#product')
          .select('YouTube')
          .should('have.value', 'youtube')
    });

    it('Ex1 - Seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.get('#product')
          .select('mentoria')
          .should('have.value', 'mentoria')
    });
    
      it('Ex2 - Seleciona um produto (Blog) por seu índice', () => {
        cy.get('#product')
          .select(1)
          .should('have.value', 'blog')
    });
    
});