describe('Realizar requisição HTTP', () => {

    
    it('Verifica o status da resposta', () => {
        cy.request('GET', 'https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
          .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
            expect(response.body).to.include('CAC TAT')
        })
    }) 
    
    it('Verifica o status da resposta usando o comando request com alias', () => {
        cy.request('GET', 'https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html').as('response')

        cy.get('@response').its('status').should('equal', 200)
        cy.get('@response').its('statusText').should('equal', 'OK')
        cy.get('@response').its('body').should('include', 'CAC TAT')
    })    
});