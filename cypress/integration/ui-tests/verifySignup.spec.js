/// <reference types="Cypress"/>

describe('Verify the sign up functionality', () => {
    beforeEach(() => {
        cy
            .request('POST', '/reset')
        cy
            .visit('/')
    })

    it('Verify sign up user with valid credentials and no welcome email', () => {
        cy
            .fixture('validData-signup')
            .then(testdata => {
                testdata.forEach(data => {
                    const email = data.email
                    const password = data.password
                    cy
                        .signupUi(email, password)
                    cy
                        .log('Clicking on the sign up button')
                        .get('[data-cy="signup"]')
                        .click()
                    cy
                        .get('[data-cy="login-module"]')
                        .should('not.be.visible');

                    cy
                        .location('pathname')
                        .should('eq', '/');

                    cy
                        .getCookie('trello_token')
                        .should('exist');
                    cy
                        .logOut()
                })
            })
    })

    it('Verify sign up user with valid data and welcome email', () => {
        cy
            .fixture('validData-signup')
            .then(testdata => {
                testdata.forEach(data => {
                    const email = data.email
                    const password = data.password
                    cy
                        .signupUi(email, password)
                    cy
                        .log('Checking the box to recieve welcome email')
                        .get('[data-cy="welcome-email-checkbox"]')
                        .check()
                    cy
                        .log('Clicking on the sign up button')
                        .get('[data-cy="signup"]')
                        .click()

                    cy
                        .get('[data-cy="login-module"]')
                        .should('not.be.visible');

                    cy
                        .location('pathname')
                        .should('eq', '/');

                    cy
                        .getCookie('trello_token')
                        .should('exist');
                    cy
                        .logOut()
                })
            })
    })
    it('Verify sign up user with invalid credentials', () => {
        cy
            .fixture('invalidData-signup')
            .then(testdata => {
                testdata.forEach(data => {
                    const email = data.email
                    const password = data.password
                    cy
                        .signupUi(email, password)

                    cy
                        .log('Clicking on the sign up button')
                        .get('[data-cy="signup"]')
                        .click()

                    cy
                        .get('[data-cy="login-module"]')
                        .should('be.visible');

                    cy
                        .getCookie('trello_token')
                        .should('not.exist');
                    cy
                        .log('Closing the signup form')
                        .get('[data-cy="close-login"]')
                        .click()

                })
            })
    })
})