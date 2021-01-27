describe('Log Out', function () {
    it('Sign Out', function () {
        cy.visit('http://localhost:4200/Users');
        cy.get('button[name="Person"]').contains('person').click()
        cy.get('button[name="Exit"]').contains('Sign Out').click()
        cy.get('button[name="Okby"]').contains('Exit').click()

        cy.location().should((loc) => {
            expect(loc.toString()).to.eq('http://localhost:4200/AdminLogin')
        })
    })
})