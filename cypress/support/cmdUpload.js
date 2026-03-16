Cypress.Commands.add('uploadFile', (fileName) => {
    cy.get('#file-upload').selectFile(`cypress/fixtures/${fileName}`, { force: true })
})  