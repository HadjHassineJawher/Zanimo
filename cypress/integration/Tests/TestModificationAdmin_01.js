describe('Modification', function () {
    it('delete post', function () {
        cy.visit('http://localhost:4200/AdminSettings');

        cy.get('button[name="Modifie"]').contains('Modifie').click()

        cy.get('input[name="nom"]').clear()
        cy.get('input[name="nom"]').type('jawher')

        cy.get('input[name="prenom"]').clear()
        cy.get('input[name="prenom"]').type('hadj hassine')

        cy.get('input[name="mail"]').clear()
        cy.get('input[name="mail"]').type('jawher@test.com')

        cy.get('input[name="numtel"]').clear()
        cy.get('input[name="numtel"]').type('22223311')

        cy.get('input[name="motdepasse"]').clear()
        cy.get('input[name="motdepasse"]').type('jawher123')

        cy.get('button[name="Apply"]').contains('Apply Changes').click()
        cy.visit('http://localhost:4200/Users')

        cy.location().should((loc) => {
            expect(loc.toString()).to.eq('http://localhost:4200/Users')
        })
    })
})