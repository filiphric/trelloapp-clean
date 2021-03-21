/// <reference types="Cypress"/>

describe('Verify Create board, Edit board and Delete board functionality', () => {
    beforeEach(() => {
        cy
            .request('POST', '/reset')
        cy
            .visit('/')
    })

    it('Create a new Board', () => {
        const boardName = 'My Board'
        cy
            .log('Clicking on create a new board')
            .get('h1.board_title')
            .click()

        cy
            .log('Entering the name of the board')
            .get('[data-cy="new-board-input"]')
            .type(boardName)

        // verifying the cancel button
        cy
            .log('Verify cancel button')
            .get('[data-cy="new-board-cancel"]')
            .should('be.visible')
            .click()

        // verifying the save button
        cy
            .log('Clicking on create a new board')
            .get('h1.board_title')
            .click()
        cy
            .log('Entering the name of the board')
            .get('[data-cy="new-board-input"]')
            .clear()
            .type(boardName)
        cy
            .log('Verify save button')
            .get('[data-cy="new-board-create"]')
            .should('be.visible')
            .click()

        // Verifying that create a board section is not displayed after creating a board
        cy
            .log('Verifying that the create board')
            .get('h1.board_title')
            .should('not.exist')

        // Verifying the created board is displayed on my boards page
        cy
            .contains('My Boards')
            .click()

        cy
            .log('Verifying the name of the created board')
            .get('h1.board_title')
            .eq(0)
            .should('have.text', boardName)
    })

    it('Verify editing the name of the board', () => {
        const boardName = 'My Board'
        cy
            .createBoardUi(boardName)
        cy
            .log('Edit the name of the board')
            .get('[data-cy="board-title"]')
            .click()
            .type(' edited{enter}')

        // Verifying the name is edited from my boards page
        cy
            .contains('My Boards')
            .click()
        cy
            .log('Verifying the name of the edited board')
            .get('h1.board_title')
            .eq(0)
            .should('have.text', boardName + ' edited')

    })
    
    it('Verify deletion of the created board', () => {
        const boardName = 'My Board'
        cy
            .createBoardUi(boardName)
        cy
            .log('Delete the created board')
            .get('[data-cy="board-options"]')
            .click()
        cy
            .log('Clicking on the delete option')
            .get('.delete:visible')
            .click()

        // Verifying no boards are present
        cy
            .log('Verifying that the create board is not displayed after deletion')
            .get('h1.board_title')
            .should('be.visible')
    })
})
