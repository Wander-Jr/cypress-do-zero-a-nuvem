beforeEach(() => {
  cy.visit('../src/index.html')
  cy.get('#title').should('be.visible').and('have.text', 'CAC TAT')
});

describe('Aba Tempo', () => {
    it('Preencher os campos obrigatórios e enviar o formulário avançando e concelando o tempo', () => {
        cy.clock()

        cy.get('#firstName').type('Ana Elisa',{ delay: 0 })
        cy.get('#lastName').type('de Oliveira Martins',{ delay: 0 })
        cy.get('#email').type('ana.elisa@example.com', { delay: 0 })
        cy.get('#open-text-area').type('Gostaria de saber mais sobre os cursos oferecidos pela escola.', { delay: 0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible').and('contain.text', 'Mensagem enviada com sucesso.') 

        cy.tick(3000)
        cy.get('.success').should('not.be.visible')
  })
});