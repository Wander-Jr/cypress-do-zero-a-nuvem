Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Ana Elisa')
    cy.get('#lastName').type('de Oliveira Martins')
    cy.get('#email').type('ana.elisa@example.com')
    cy.get('#open-text-area').type('Gostaria de saber mais sobre os cursos oferecidos pela escola.')
    cy.contains('button', 'Enviar').click()  
})