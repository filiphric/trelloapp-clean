/// <reference types="cypress" />

import CreateBoard from '../../support/PageObjects/manageboard';

describe('Due Date Test',function()
{
    before(function(){
        cy
            .request('POST', '/reset');                     //To reset the stored data

        const cb=new CreateBoard()

        cb.visit()
        cy
            .wait(2000)
        cb.createboard("Status Board")
        cy
            .wait(2000)
        cb.addlist("ToDo")
        cy
            .wait(2000)
        cb.addtask("task1",0)
        cb.addtask("task2",0)
        cb.addtask("task3", 0)
    })

    it('Past Due Test',function()
    {  
        cy
            .get('[data-cy=task]')
            .eq(0)
            .click()

        cy
            .get('[data-cy=task-deadline]')
            .should('be.visible')
            
        cy
            .get('[placeholder="yyyy-mm-dd"]')
            .clear()
            .type('2021-02-03')

        cy
            .get('[data-cy=task-deadline]')
            .should('have.css','background-color').and('equal', 'rgb(231, 116, 141)');   //Overdue should be shown in Pink colour

            cy
            .get('[data-cy=task-module-close]')
            .click()

        cy
            .get('[data-cy=task-dropdown] > :nth-child(1)')
            .click()

        cy
            .get('[data-cy="task"]')
            .eq(0)
            .should('be.visible')
            .should('have.css','background-color').and('equal', 'rgb(231, 116, 141)');  //Overdue should be shown in Pink colour

    })

    it('Due Date Test',function()
    {  
        cy
            .get('[data-cy=task]')
            .eq(1)
            .click()

        cy
            .get('[data-cy=task-deadline]')
            .should('be.visible')
            
        cy
            .get('[placeholder="yyyy-mm-dd"]')
            .clear()
            .type('2022-10-10')

        cy
            .get('[data-cy=task-deadline]')
            .should('have.css','background-color').and('equal', 'rgba(0, 0, 0, 0)'); // should be shown in default colour

            cy
            .get('[data-cy=task-module-close]')
            .click()

        cy
            .get('[data-cy=task-dropdown] > :nth-child(1)')
            .click()

        cy
            .get('[data-cy="task"]')
            .eq(1)
            .should('be.visible')
            .should('have.css','background-color').and('equal', 'rgb(255, 255, 255)'); // should be shown in default colour

    })

    it('Today Due Test',function()
    {  
        cy
            .get('[data-cy=task]')
            .eq(2)
            .click()

        cy
            .get('[data-cy=task-deadline]')
            .should('be.visible')
            
        cy
            .get('[placeholder="yyyy-mm-dd"]')
            .clear()
            .type(Cypress.moment().format('YYYY-MM-DD'))

        cy
            .get('[data-cy=task-deadline]')
            .should('have.css','background-color').and('equal', 'rgb(231, 116, 141)');  //Overdue should be shown in Pink colour

            cy
            .get('[data-cy=task-module-close]')
            .click()

        cy
            .get('[data-cy=task-dropdown] > :nth-child(1)')
            .click()

        cy
            .get('[data-cy="task"]')
            .eq(2)
            .should('be.visible')
            .should('have.css','background-color').and('equal', 'rgb(231, 116, 141)'); //Overdue should be shown in pink colour

    })



})