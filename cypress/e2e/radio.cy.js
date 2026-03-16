
beforeEach(() => {
    cy.visit('../src/index.html')
    cy.get('#title').should('be.visible').and('have.text', 'CAC TAT')
});

describe('Radio', () => {
    it('Ex0 - Marca cada tipo de feedback', () => {
        cy.get('input[type="radio"][value="feedback"]')
          .check('feedback')
          .should('have.value', 'feedback')
    })

     it('Ex1 - Marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"][value="ajuda"]')
          .check('ajuda')
          .should('be.checked', 'ajuda')
    })

     it('Ex2 - Marca cada tipo de Elogio usando contains e find', () => {
        cy.contains('label','Elogio')
            .find('input[type="radio"]')
            .check('elogio')
            .should('be.checked', 'elogio')
    })

      it('Ex3 - Marca cada tipo de Elogio usando id da div e find', () => {
        cy.get('#support-type')
          .find('input[type="radio"][value="elogio"]')
          .check('elogio')
          .should('be.checked', 'elogio')   
    })

    it('Ex4 - Marca cada tipo de Elogio usando each e wrap', () => {
    cy.get('#support-type')
        .each(($radio) => {
            if ($radio.val() === 'elogio') {
                cy.wrap($radio)
                .check('elogio')
                .should('be.checked', 'elogio')
            }
        })
    })


    it('Ex4.1 - Marca cada tipo de Elogio usando each e wrap OUTRA MANEIRA DE USAR', () => {
        cy.get('input[type="radio"][value="elogio"]')
            .each(($radio) => {
            cy.wrap($radio)
                .check('elogio')
                .should('be.checked', 'elogio')
            })
        })
})