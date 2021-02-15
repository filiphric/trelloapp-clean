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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';

//import CreateBoard from '../examples/PageObjects/CreateBoard';
//Signup Customize Command

Cypress.Commands.add("signup", (email, password) => {

    cy
        .visit('/');                                    //Opening URL

    cy
        .get('[data-cy=login-menu]')
        .click()                                           //Click the Login Button

    cy
        .get(':nth-child(2) > .LoginModule_logSignSwitch > a')
        .click()                                           //Click the Signin Link'
    cy
        .get('[data-cy=signup-email]')
        .type(email)                                       //Input the email id
    cy
        .get('[data-cy=signup-password]')
        .type(password)                                    //Input the password
    cy
        .get('[data-cy=signup]')
        .click()                                          //Click the signup button


})

//Login Customize Command
Cypress.Commands.add("login", (email, password) => {

    cy
        .visit('/')                                                      //Opening URL

    cy
        .get('[data-cy=login-menu]')
        .click()                                                        //Click the Login Button
    cy                                                     
        .get('[data-cy=login-email]')
        .type(email)                                                   //Input the email id
    cy
        .get('[data-cy=login-password]')
        .type(password)                                                 //Input the password

    cy
        .get('[data-cy=login]')
        .click()                                                        //Click the Login button


})
//Logoff Customize Command
Cypress.Commands.add("logoff", () => 
{

    cy 
        .get('[data-cy=logged-user]')
        .click()               
        .get('[data-cy=logged-user] > #myDropdown > span')  //Logoff
        .click()
})
