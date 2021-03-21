/// <reference types="Cypress"/>

describe('Verify the homepage of trello-clean app', () => {
    beforeEach(() => {
        cy
            .request('POST', '/reset')
        cy
            .visit('/')
    })

    it('Verify the Trello logo', () => {
        cy
            .log('Verifying the Trello logo')
            .get('.Nav img')
            .should('be.visible')
    })

    it('Verify the login button', () => {
        cy
            .log('Verifying the login button')
            .get('[data-cy="login-menu"]')
            .should('contain.text', 'Log in')
    })
    
    it('Verify the Board area', () => {
        cy
            .log('Verifying My boards title')
            .get('h1.background_title:visible')
            .should('contain.text', 'My Boards')

        cy
            .log('Verifying background color of Create a board section')
            .get('#new-board')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(205, 210, 212)')

        cy
            .log('Verifying place holder text in create a board section')
            .get('h1.board_title')
            .should('contain.text', 'Create a board...')
    })
})