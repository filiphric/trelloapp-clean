/// <reference types="cypress" />

import CreateBoard from '../../support/PageObjects/manageboard';

describe('Drag a task',function()
{
    before(function(){
        cy
            .request('POST', '/reset');                     //To reset the stored data

        const status=new CreateBoard()

        status.visit()
        cy
            .wait(1000)
        status.createboard("Status Board")
        cy
            .wait(1000)
        status.addlist("ToDo")
        cy
            .wait(1000)
        status.addtask("task2",0)
        status.addtask("task3",0)
        status.addtask("task4",0)
        status.addlist("InProgress")
        cy
            .wait(1000)
        status.addtask("task1",1)
        status.addlist("Completed")

    })
    it('Drag a task from list1 to list2',function()
    {   
        cy
            .get('[data-cy=tasks-list]')
            .eq(0)
            .as('todo');

        cy
            .get('[data-cy=tasks-list]')
            .eq(1)    
            .as('inprogress');

        cy
            .get('[data-cy=tasks-list]')
            .eq(2)    
            .as('completed');

        cy
            .get('[data-cy=task]')
            .eq(0)
            .drag('@inprogress')

        cy
            .get('@inprogress')
            .should('contain','task2')                  //assertion: To check the dragged task is in Inprogress list

        cy
            .get('[data-cy=task]')
            .eq(3)
            .drag('@completed')

        
        cy
            .get('@completed')
            .should('contain','task1')                  //assertion: To check the dragged task is in completed list

    })
    it('Drag a task from list2 to list1',function()
    {
        cy
            .get('[data-cy=tasks-list]')
            .eq(0)
            .as('todo');

        cy
            .get('[data-cy=task]')
            .eq(2)
            .drag('@todo')

        cy
            .get('@todo')
            .should('contain','task2')                  //assertion: To check the dragged task is in todo list

    })
    it('Drag a task from list1 to list3',function()
    {
        cy
            .get('[data-cy=tasks-list]')
            .eq(2)
            .as('completed');
            
        cy
            .get('[data-cy=task]')
            .eq(0)
            .drag('@completed')

        cy
            .get('@completed')
            .should('contain','task2')                  //assertion: To check the dragged task is in completed list

    })




})