/// <reference types="Cypress"/>

/*
Feature: Navegando pela página principal
Scenario: Realizar acesso em todos os itens do cabeçalho
Dado que acessei a página principal do site "Narwal Sistemas"

Quando eu clico no item "Clientes" no cabeçalho
Então eu devo acessar a página do site Narwal "/clientes"

Quando eu clico no item "Soluções" no cabeçalho
Então eu devo acessar a página do site Narwal "/solucoes"

Quando eu clico eu passo o mouse sob o item "Módulos" no cabeçalho
Então o submenu deve ser exibido
Quando eu clico no item "Trading" do submenu
Então eu devo acessar a página do site Narwal "/trading"

Quando eu clico no item "Inteligência Artificial" no cabeçalho
Então eu devo acessar a página do site Narwal "/inteligenciaartificial"

Quando eu clico no item "Becomex" no cabeçalho
Então eu devo acessar a página do site Narwal "/becomex"

Quando eu clico no item "Blog" no cabeçalho
Então eu devo acessar a página do site Narwal "/blog"
*/

describe('Navegando pela página principal', () => {
    it('Realizar acesso em todos os itens do cabeçalho', () => {
        cy.visit("https://www.narwalsistemas.com.br/")

        cy.viewport(1280, 800)

        cy.get('nav').contains('Clientes').click()
        cy.url().should('include', '/clientes')

        cy.get('nav').contains('Soluções').click()
        cy.url().should('include', '/solucoes')

        cy.get('nav').contains('Módulos').then(($menu) => {
            const submenu = $menu[0].nextElementSibling; 
            submenu.style.display = 'block'; 
        })
        cy.wait(1000)
        cy.get('ul.sub-menu').contains('Trading').should('be.visible')
        cy.get('ul.sub-menu').contains('Trading').click()
        cy.url().should('include', '/trading')

        cy.get('nav').contains('Inteligência Artificial').click()
        cy.url().should('include', '/inteligenciaartificial')

        cy.get('nav').contains('Becomex').click()
        cy.url().should('include', '/becomex')

        cy.get('nav').contains('Blog').click()
        cy.url().should('include', '/blog')

    });
});