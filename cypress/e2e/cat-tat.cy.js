
beforeEach(() => {
  cy.visit('../src/index.html')
  cy.get('#title').should('be.visible').and('have.text', 'CAC TAT')
});

describe('Central de Atendimento CAT-TAT', () => {
  it('Verificar o titulo da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preencher os campos obrigatórios e enviar o formulário', () => {
    cy.get('#firstName').type('Ana Elisa',{ delay: 100 })
    cy.get('#lastName').type('de Oliveira Martins',{ delay: 100 })
    cy.get('#email').type('ana.elisa@example.com', { delay: 100 })
    cy.get('#open-text-area').type('Gostaria de saber mais sobre os cursos oferecidos pela escola.', { delay: 100 })
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible').and('contain.text', 'Mensagem enviada com sucesso.') 
  })

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Ana Elisa',{ delay: 100 })
    cy.get('#lastName').type('de Oliveira Martins',{ delay: 100 })
    cy.get('#email').type('emailerrado.com', { delay: 100 })
    cy.get('#open-text-area').type('Gostaria de saber mais sobre os cursos oferecidos pela escola.', { delay: 100 })
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible').and('contain.text', 'Valide os campos obrigatórios!')
  })

  it('Preencher o campo de telefone e validar telefone', () => {
    cy.get('#phone').type('teste').should('have.value', '')   
  })

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Enviar').click()
    
    cy.get('.error').should('be.visible').and('contain.text', 'Valide os campos obrigatórios!')
    cy.get('.phone-label-span').should('be.visible').and('contain.text', 'obrigatório')
  })

  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('Ana Elisa').should('have.value', 'Ana Elisa').clear().should('have.value', '')
    cy.get('#lastName').type('de Oliveira Martins').should('have.value', 'de Oliveira Martins').clear().should('have.value', '')
    cy.get('#email').type('ana.elisa@example.com').should('have.value', 'ana.elisa@example.com').clear().should('have.value', '')
    cy.get('#phone').type('1234567890').should('have.value', '1234567890').clear().should('have.value', '')
  })

    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
      cy.contains('button', 'Enviar').click()
      cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
      cy.get('.error').should('be.visible').and('contain.text', 'Valide os campos obrigatórios!') 
  })

  it('Envia o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible').and('contain.text', 'Mensagem enviada com sucesso.') 
  })

  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible').and('contain.text', 'Mensagem enviada com sucesso.') 
  })
})