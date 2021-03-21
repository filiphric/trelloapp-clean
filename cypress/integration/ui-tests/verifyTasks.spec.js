/// <reference types="Cypress"/>

describe('Verify adding a new task and dragging tasks', () => {
    beforeEach(() => {
        cy
            .request('POST', '/reset')
        cy
            .visit('/')
        // Adding a new board
        const boardName = 'My Board'
        cy
            .createBoardUi(boardName)

        // Adding a new list
        const listName = 'My list'
        cy
            .addListUi(listName)
    })

    it('Verify creating a new task', () => {
        const taskName = 'task 1'
        cy
            .log('Clicking on the Add a new task link')
            .get('[data-cy="new-task"]')
            .click()
        cy
            .log('Typing in the name of the new task')
            .get('[data-cy="task-input"]')
            .type(taskName)

        // verifying the cancel button
        cy
            .log('Verify cancel button')
            .get('[data-cy="cancel"]:visible')
            .should('be.visible')
            .click()

        // verifying the save button
        cy
            .log('Clicking on the Add a new task link')
            .get('[data-cy="new-task"]')
            .click()
        cy
            .log('Typing in the name of the new task')
            .get('[data-cy="task-input"]')
            .clear()
            .type(taskName)
        cy
            .log('Verify save button')
            .get('[data-cy="add-task"]')
            .should('be.visible')
            .click()
    })

    it('Add additional information to the task created', () => {
        cy
            .addTaskUi('Task 1')
        cy
            .log('Clicking on the name of the task to open the details modal')
            .get('[data-cy="task"]')
            .click()
        cy
            .log('Verifying that the modal has opened')
            .get('[data-cy="task-module"]')
            .should('be.visible')

        // add description to the task 
        cy
            .log('Adding description to the task')
            .get('[data-cy="task-description"]')
            .click()
        cy
            .get('[data-cy="task-description-input"]')
            .type('test description {enter}')

        // add Due date to the task
        cy
            .get('[data-cy="task-deadline"]')
            .focus()
            .type(Cypress.moment().format('YYYY-MM-DD'))
            .blur()

        // Verifying the back ground color when today's date is given
        cy
            .get('[data-cy=task-deadline]')
            .should('have.css', 'background-color')
            .and('equal', 'rgb(231, 116, 141)');
        cy
            .get('[type="file"]')
            .attachFile('cypressLogo.png');

    })
})