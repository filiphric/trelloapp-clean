const { get } = require("http");

before(() => {
    cy
    .task('seedDatabase')

    cy
        .visit('/');
});



it('api presentation', () => {
    cy
        .request({
            method: 'GET',
            url: '/boards/31092054328',
            headers: {
                accept: 'application/json, text/plain, */*'
            }
        }).then(board => {
            const listsLength = board.body.lists.length

            if ( listsLength !== 1) {
                throw new Error ('list should be just one')
            }
            if (board.body.tasks.length !== 2) {
                throw new Error('there should be two tasks')
            }
            
        })



})




