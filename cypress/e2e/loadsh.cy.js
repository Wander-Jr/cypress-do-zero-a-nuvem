
describe('Loadsh', () => {
    Cypress._.times(3, () => {
        
        it('Testa a função _.repeat do Lodash', () => {
            cy.visit('../src/privacy.html')   
            cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
            cy.contains('p', 'Talking About Testing').should('be.visible')
        })
    })
});