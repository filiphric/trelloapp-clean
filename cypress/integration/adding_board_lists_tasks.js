before(() => {

    // cy
    //   .request('POST', '/api/reset');

    cy
    .task('resetDatabase')

    cy
        .visit('/');
});

it('open app and check elements', () => {
    cy
        .get('.Nav_logo')
        .should('be.visible')
    
    cy
        .get('.Nav_button')
        .should('be.visible')
    
    cy
        .get('.background_title')
        .should('be.visible')
        .and('contain.text', 'My Boards')
  
    cy
        .get('#new-board')
        .find('.board_title')
        .should('contain.text', 'Create a board...')
});


it('create board',() => {
    cy
        .get('#new-board')
        .click()
         
    cy
        .get('#new-board input')
        .type('Kanban board{enter}');   
})


it('add lists and tasks', () => {
    cy
        .fixture('kanban').then(function (data) {
            const lists = data.lists;
            const tasks = data.tasks;
    
            for (let i = 0; i < lists.length; i++) {
                
            cy
                .get('.CreateList')
                .click()      
            cy
                .get('.CreateList_input')
                .type(lists[i]);
            cy
                .get('.CreateList-active button')
                .click();

            for (let j = 0; j < tasks.length; j++) {
                cy  
                    .get('.List_addTask')
                    .eq([i])
                    .click()
                cy
                    .get('.List textArea')
                    .eq([i])
                    .type(tasks[j])
                cy 
                    .get('.List_newTaskOptions button')
                    .eq([i])
                    .click()   
            };     
        }         
      })
})


