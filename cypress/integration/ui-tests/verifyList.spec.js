/// <reference types="Cypress"/>

describe('Verify create list, edit list, delete list and drag list functionality', () => {
    beforeEach(() => {
        cy
            .request('POST', '/reset')
        cy
            .visit('/')
        // Creating a new board
        const boardName = 'My Board'
        cy
            .createBoardUi(boardName)
    })

    it('Create a new list', () => {
        const listName = 'List 1'
        cy
            .log('Clicking on the Add a list section')
            .get('[data-cy="add-list"]')
            .click()
        cy
            .log('Typing the name of list')
            .get('[data-cy="add-list-input"]')
            .type(listName)

        // verifying the cancel button
        cy
            .log('Verify cancel button')
            .get('[data-cy="cancel"]')
            .should('be.visible')
            .click()

        // verifying the save button
        cy
            .log('Clicking on the Add a list section')
            .get('[data-cy="add-list"]')
            .click()
        cy
            .log('Typing the name of list')
            .get('[data-cy="add-list-input"]')
            .type(listName)
        cy
            .log('Verify save button')
            .get('[data-cy="save"]')
            .should('be.visible')
            .click()

        // Verify that the Add a list section is not displayed anymore after a list is added
        cy
            .log('Verifying add list section')
            .get('[data-cy="add-list"]')
    })

    it('Verify editing the name of the list', () => {
        const listName = 'My list'
        // Adding a new list
        cy
            .addListUi(listName)
        cy
            .log('Clicking on the Add a list section')
            .get('[data-cy="add-list"]')
            .click()
        cy
            .log('Typing the name of list')
            .get('[data-cy="list-name"]')
            .type(' edited{enter}')
    })

    it('Verify deleting the name of the list', () => {
        const listName = 'My list'
        // Adding a new list
        cy
            .addListUi(listName)
        cy
            .log('Clickin on the options menu')
            .get('.List .dropdown')
            .click()

        cy
            .log('Clicking on the delete option ')
            .get('.delete:visible')
            .click()

        // Verify the list section is not present after deleting the list
        cy
            .log('Verifying the list section')
            .get('[data-cy="list"]')
            .should('not.exist')
    })

    it('Verify dragging the list', () => {
        const listName1 = 'My list 1'
        const listName2 = 'My list 2'
        // Adding new lists
        cy
            .addListUi(listName1)
        cy
            .addListUi(listName2)
        cy
            .log('Getting the first list')
            .get('[data-cy="list"]')
            .eq(0)
            .as('first list')
        cy
            .log('Getting the second list')
            .get('[data-cy="list"]')
            .eq(1)
            .as('second list')
        cy
            .log('Dragging the first list')
            .get('@first list')
            .eq(0)
            .drag('@second list')
    })
})