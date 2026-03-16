beforeEach(() => {
    cy.visit('../src/index.html')
    cy.get('#title').should('be.visible').and('have.text', 'CAC TAT')
});

describe('Checkbox', () => {

    it('Ex0 - Marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last() 
          .uncheck()
          .should('not.be.checked')
    });

    it('Ex1 - Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Ana Elisa',{ delay: 0 })
        cy.get('#lastName').type('de Oliveira Martins',{ delay: 0 })
        cy.get('#email').type('teste@teste.com')

        cy.get('#phone-checkbox')
          .check()
          .should('be.checked')
          
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible').and('contain.text', 'Valide os campos obrigatórios!')
        cy.get('.phone-label-span').should('be.visible').and('contain.text', 'obrigatório')
    });
    
});