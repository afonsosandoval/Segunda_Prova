/// <reference types="cypress" />

describe('alura busca cursos', () => {
    beforeEach('Ongs',() => {
        //cy.visit("http://processos.bdrsistemas.com.br/")
    });
    it('devem poder realizar um cadastro', () => {
      cy.login("afonsosandoval@gmail.com","123456");
      cy.get('[id="TotalProcessos"]').should('contain','138');
      cy.visit("http://processos.bdrsistemas.com.br/Home");
      //cy.visit("http://processos.bdrsistemas.com.br/Processos");
      //cy.get('button[id="BtnNovo"]').click();
      //cy.get('ul li a[href="Processos"]').click();
      //cy.get('a[href="Processos"]').click();
      cy.get('ul[class="nav nav-pills nav-sidebar flex-column"]').find('li').contains('a','Processos').should('be.called')
    });

    it('deve poder realizar um login no sistema', () => {
      
    });
}
);
