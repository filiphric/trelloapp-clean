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
        status.addlist("List1")
        cy
            .wait(1000)
        status.addtask("task1",0)
        status.addtask("task2",0)
        status.addlist("List2")
        cy
            .wait(1000)
        status.addtask("task1",1)
        status.addlist("List3")
        status.addtask("task1",2)
        status.addtask("task2",2)
    })

    it('Drag a list1 after list2',function()
    {
        cy
            .get('[data-cy=list]')
            .eq(0)
            .as('list1');

        cy
            .get('[data-cy=list]')
            .eq(1)
            .as('list2');
        cy
            .get('[data-cy=list]')
            .eq(2)
            .as('list3');

        cy
            .get('[data-cy=list')
            .eq(0)
            .drag('@list2')


        cy
            .get('[data-cy=list')
            .eq(2)
            .drag('@list2')
        
    })



})