/// <reference types="cypress" />

import CreateBoard from '../../support/PageObjects/manageboard';

describe('Upload the image in task',function()
{

    before(function(){
        cy
            .request('POST', '/reset');
            
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
        cb.addtask("task3",0)
        
    })

    it('Upload the image in task',function()
    {
        
        cy
            .get('[data-cy=task]')
            .eq(0)
            .click()

        cy
            .get('[data-cy=task-module]')
            .should('be.visible')

        //cy
          //  .fixture('image1.jpg').as('image')
        cy
            .get('[type=\'file\']')
            .attachFile('image1.jpg');
        cy
            .wait(1000);

        cy
            .get('.imagePreview > img')
            .should('be.visible')

        cy
            .get('[data-cy=task-module-close]')
            .click()

        cy
            .get('[data-cy=task-dropdown] > :nth-child(1)')
            .click()

    })
    it('Drag and drop the image in task',function()
    {
        cy
            .get('[data-cy=task]')
            .eq(1)
            .should('be.visible')


        cy
            .get('[data-cy=task]')
            .eq(1)
            .click()

        cy
            .get('[data-cy=task-module]')
            .should('be.visible')

        cy
            .get('[type=\'file\']')
            .attachFile('image1.jpg', {subjectType: 'drag-n-drop'});

        cy
            .wait(1000)

        cy
            .get('.imagePreview > img')
            .should('be.visible')

        cy
            .get('[data-cy=task-module-close]')
            .click()

        cy
            .get('[data-cy=task-dropdown] > :nth-child(1)')
            .click()
        
    })
    it('Upload the other file(not image file) in task',function()       
    {
        cy
            .get('[data-cy=task]')
            .eq(2)
            .should('be.visible')
        
        cy
            .get('[data-cy=task]')
            .eq(2)
            .click()

        cy
            .get('[data-cy=task-module]')
            .should('be.visible')

        //cy
          //  .fixture('image1.jpg').as('image')
        cy
            .get('[type=\'file\']')
            .attachFile('login_testdata.json');
        
        cy
            .wait(1000)

        cy
            .get('.imagePreview > img')
            .should('not.be.visible')               //preview not been visible
            

        cy
            .get('[data-cy=task-module-close]')
            .click()

        cy
            .get('[data-cy=task-dropdown] > :nth-child(1)')
            .click()

        

    })

})