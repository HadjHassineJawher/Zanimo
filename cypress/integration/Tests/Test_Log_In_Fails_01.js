const { createVariableDeclaration } = require("typescript");

describe('LogIn', function () {
    it('Sign in', function () {
        cy.visit('http://localhost:4200/AdminLogin');
        cy.get('input[name="mail"]').type('Hadjhassinejawher@gmail.com');
        cy.get('input[name="motdepasse"]').type('jawher123');
        cy.get('button[name="Connect"]').contains('Connect').click();

        cy.location().should((loc) => {
            expect(loc.toString()).to.eq('http://localhost:4200/AdminLogin')
        })
    })
})