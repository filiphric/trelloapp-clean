/// <reference types="Cypress"/>

describe('Verify the login functionality of the app', () => {
    beforeEach(() => {
        cy
            .request('POST', '/reset')
        cy
            .visit('/')
    })

    it('Verify login with valid user credentials', () => {
        cy
            .fixture('validData-signup')
            .then(testdata => {
                const email = testdata[0].email
                const password = testdata[0].password
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
                    .logOut()

                cy
                    .loginUi(email, password)
                cy
                    .get('[data-cy="login-module"]')
                    .should('not.be.visible');
                cy
                    .getCookie('trello_token')
                    .should('exist');
            })
    })

    it('Verify login with invalid user credentials', () => {
        cy
            .fixture('invalidData-signup')
            .then(testdata => {
                const email = testdata[0].email
                const password = testdata[0].password

                cy
                    .loginUi(email, password)
                cy
                    .get('[data-cy="login-module"]')
                    .should('be.visible');
                cy
                    .getCookie('trello_token')
                    .should('not.exist');
            })
    })
})