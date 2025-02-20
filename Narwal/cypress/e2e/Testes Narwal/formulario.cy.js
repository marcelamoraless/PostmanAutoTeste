/// <reference types="Cypress"/>

/*
Feature: Teste de preenchimento do formulário para contato
Scenario: Preencher o formulário de contato sem enviar
Dado que acessei a página principal do site "Narwal Sistemas"

Quando eu clico no botão "Solicite uma demonstração"
Então eu devo acessar a página do site Narwal "/contato"

Quando eu preencho o campo "Nome" com "Marcela Morales"
Quando eu preencho o campo "Email" com "marceladefranceschi@gmail.com"
Quando eu preencho o campo "Cargo" com "Analista de teste"
Quando eu preencho o campo "Telefone" com "(48)991854484"
Quando eu preencho o campo "Empresa" com "Narwal Sistemas"
Quando eu seleciono no campo "Qual segmento" com a opção "3"
Então eu não devo submeter o formulario (evitando enviar informações, sempre enviar para testes)
Então o formulário deve permanecer na página
*/
describe('Teste de preenchimento do formulário para contato', () => {
    it('Preencher o formulário de contato sem enviar', () => {
        cy.visit('https://www.narwalsistemas.com.br/')
        cy.viewport(1280, 800)

        cy.contains('SOLICITE UMA DEMONSTRAÇÃO').click()
        cy.url().should('include', '/contato')

        cy.get('#rd-text_field-m4l7psxi').type('Marcela Morales')
        cy.get('#rd-text_field-m4l7psxi').type('marceladefranceschi@gmail.com')
        cy.get('#rd-text_field-m4l7psxk').type('Analista de teste')
        cy.get('#rd-phone_field-m4l7psxl').type('(48)991854484')
        cy.get('#rd-text_field-m4l7psxm').type('Narwal Sistemas')
        cy.get('#rd-select_field-m4l7psxn').select(3)

    });
});