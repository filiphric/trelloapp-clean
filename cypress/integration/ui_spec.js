describe('Home page', () => {
    beforeEach(() => {
        cy.request('POST', '/api/reset')
        cy.visit('/')
    })
    it('loads successfully', () => {
        cy.contains('My Boards')
        cy.get('[data-cy=board-item]').should('not.exist')
    })
    it('can create a board without being logged in', () => {
        const title = 'Board Name'
        cy.get('[data-cy=create-board]').type(`${title}{enter}`)
        cy.url().should('contain', '/board/')
        cy.get('[data-cy=board-title]').should('have.value', title)
    })
    it('can sign up', () => {
        const username = 'username@example.com'
        cy.get('[data-cy=login-menu]').click()
        cy.contains('Sign up').click()
        cy.get('[data-cy=signup-email]').type(username)
        cy.get('[data-cy=signup-password]').type('password')
        cy.get('[data-cy=signup]').click()
        cy.get('[data-cy=logged-user]').contains(username)
    })
})

