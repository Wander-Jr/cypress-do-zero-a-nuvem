
beforeEach(() => {
  cy.visit('../src/index.html')
  cy.get('#title').should('be.visible').and('have.text', 'CAC TAT')
});


describe('Aba Diferentes', () => {

    it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {

        cy.get('#privacy a')
          .should('have.attr', 'target', '_blank')    
          .and('have.attr', 'href', 'privacy.html')  

        cy.contains('a', 'Política de Privacidade')
          .and('have.attr', 'target', '_blank')
          .and('have.attr', 'href', 'privacy.html') 
    });

    it('Acessa a página de política de privacidade removendo o target e clicando no link', () => {

        cy.get('#privacy a')
          .invoke('removeAttr', 'target') 
          .click()

        cy.url().should('include', 'privacy.html') 
        cy.get('#title')
          .should('be.visible')
          .and('have.text', 'CAC TAT - Política de Privacidade') 
    });


    it.only('Acessa a página de política de privacidade usando o comando visit com a URL completa', () => {

        cy.visit('../src/privacy.html')
        cy.url().should('include', 'privacy.html')
        cy.get('#title')
          .should('be.visible')
          .and('have.text', 'CAC TAT - Política de Privacidade') 

        cy.contains('p', 'Não salvamos dados submetidos no formulário da aplicação CAC TAT.')
    });
        
    
});