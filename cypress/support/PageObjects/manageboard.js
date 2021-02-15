/// <reference types="cypress" />

class CreateBoard {

    visit()
    {
        cy
            .visit('/');
    }

    createboard(boardname)                          //To create a board
    {
    cy
        .contains('h1','Create a board...')
        .click()    
        
    cy      
        .get('[placeholder="Create a board...')
        .type(boardname+'{enter}');
    
    

    }

    addlist(listname)                           //To add a list
    {
    cy
        .get('[data-cy=add-list]')
        .should('be.visible')
    
    
    cy
        .contains('h3','Add a list...')
        .click()

    cy
        .get('[placeholder="Add a list...')
        .type(listname+'{enter}');
    }

    addtask(taskname,listitem)                  //To add a task
    {
    cy
        .get('[data-cy=new-task]')
        .eq(listitem)
        .should('be.visible')
    

    cy
        .get('[data-cy=new-task]')
        .eq(listitem)
        .click()

    cy
        .get('[data-cy=task-input]')
        .eq(listitem)
        .type(taskname+'{enter}');

    }

    


    
    
}
export default CreateBoard