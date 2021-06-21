describe('Home page', () => {
    beforeEach(() => {
        cy.request('POST', '/api/reset')
        cy.visit('/')
    })
    it('loads successfully', () => {
        cy.contains('My Boards')
        cy.get('[data-cy=board-item]').should('not.exist')
    })
    it('can create tasks without being logged in', () => {
        const title = 'Board Name'
        cy.get('[data-cy=create-board]').type(`${title}{enter}`)
        cy.url().should('contain', '/board/')
        cy.get('[data-cy=board-title]').should('have.value', title)
        cy.get('[data-cy=add-list]').type('List')
        cy.get('[data-cy=save]').click()
        cy.get('[data-cy=new-task]').click()
        cy.get('[data-cy=task-input]').type('A new task{enter}')
        cy.get('[data-cy=tasks-list]').children().should('have.length', 1)
    })
    it('can sign up and log out', () => {
        const username = 'username@example.com'
        cy.get('[data-cy=login-menu]').click()
        cy.contains('Sign up').click()
        cy.get('[data-cy=signup-email]').type(username)
        cy.get('[data-cy=signup-password]').type('password')
        cy.get('[data-cy=signup]').click()
        cy.get('[data-cy=logged-user]').contains(username)
        cy.get('[data-cy=logged-user]').click()
        cy.contains('Log out').click()
        cy.get('[data-cy=logged-user]').should('not.be.visible')
    })
})

