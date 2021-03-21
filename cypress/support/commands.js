// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

Cypress.Commands.add("signupUi", (email, password) => {
    cy
        .log('Clicking on the login button')
        .get('[data-cy="login-menu"]')
        .click()
    cy
        .log('Click on the sign up link')
        .get('.LoginModule_logSignSwitch a:visible')
        .click()
    cy
        .log('Signing up with email: ' + email)
        .log('Signing up with password: ' + password)

    cy
        .log('Typing in the email address')
        .get('[data-cy="signup-email"]')
        .clear()
        .type(email)
    cy
        .log('Typing in the password')
        .get('[data-cy="signup-password"]')
        .clear()
        .type(password)

})
Cypress.Commands.add("logOut", () => {
    cy
        .get('[data-cy="logged-user"]')
        .click()
    cy
        .get('#myDropdown span')
        .click()
})
Cypress.Commands.add("loginUi", (email, password) => {
    cy
        .log('Clicking on the login button')
        .get('[data-cy="login-menu"]')
        .click()

    cy
        .log('Log in with email: ' + email)
        .log('Log in with password: ' + password)

    cy
        .log('Typing in the email address')
        .get('[data-cy="login-email"]')
        .clear()
        .type(email)
    cy
        .log('Typing in the password')
        .get('[data-cy="login-password"]')
        .clear()
        .type(password)
    cy
        .log('Clicking on the login button')
        .get('[data-cy="login"]')
        .click()
})
Cypress.Commands.add("createBoardUi", (boardName) => {
    cy
        .log('Clicking on create a new board')
        .get('h1.board_title')
        .click()
    cy
        .log('Entering the name of the board')
        .get('[data-cy="new-board-input"]')
        .type(boardName + '{enter}')
})
Cypress.Commands.add("addListUi", (listName) => {
    cy
        .log('Clicking on the Add a list section')
        .get('[data-cy="add-list"]')
        .click()
    cy
        .log('Typing the name of list and adding it')
        .get('[data-cy="add-list-input"]')
        .type(listName + '{enter}')
})
Cypress.Commands.add("addTaskUi", (taskName) => {
    cy
        .log('Clicking on the Add a new task link')
        .get('[data-cy="new-task"]')
        .click()
    cy
        .log('Typing in the name of the new task and saving it')
        .get('[data-cy="task-input"]')
        .type(taskName+'{enter}')
})