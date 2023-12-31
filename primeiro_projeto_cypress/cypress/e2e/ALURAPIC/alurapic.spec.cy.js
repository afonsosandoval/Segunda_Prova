const { contains } = require("cypress/types/jquery");

describe('alura busca cursos', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('verifica mensagens do email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('jaquelinie');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
        //
    })
    it('verifica mensagens do senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
      
    })
   
}
)
