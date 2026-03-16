

beforeEach(() => {
    cy.visit('../src/index.html')
    cy.get('#title').should('be.visible').and('have.text', 'CAC TAT')
});
describe('Upload de arquivo', () => {
    it('Realizar upload de arquivo', () => {

        cy.uploadFile('example.json')

        cy.get('#file-upload').then(input => {
            expect(input[0].files[0].name).to.equal('example.json')
        })
    });

    it.only('Realizar upload de arquivo arrastando e soltando', () => {

        cy.get('#file-upload').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })

        cy.get('#file-upload').then(input => {
            expect(input[0].files[0].name).to.equal('example.json')
        })
    });

    it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {

        cy.fixture('example.json').as('fileInput')
        cy.get('#file-upload')
          .selectFile('@fileInput', { force: true })
          .should((input) => {
            expect(input[0].files[0].name).to.equal('example.json')
          })
    });
    

    it.only('Seleciona vários arquivos', () => {
        cy.get('#file-upload')          
          .selectFile(['cypress/fixtures/example.json', 'cypress/fixtures/documento.docx'], { force: true })
          .should((input) => {
            expect(input[0].files[0].name).to.equal('example.json')
            expect(input[0].files[1].name).to.equal('documento.docx')
          })
    });
});