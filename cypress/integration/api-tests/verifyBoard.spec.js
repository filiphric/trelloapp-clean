/// <reference types="Cypress"/>

describe('Verify create board, Edit board and delete board functionality', () => {
    beforeEach(() => {
        cy
            .request('POST', '/reset')

    })
    it('Create new board with valid data', () => {
        const todayDate = Cypress.moment().format('yyyy-MM-DD')
        var createBoard = {
            "name": "My board"
        }

        cy.request('POST', '/api/boards', createBoard).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal(createBoard.name)
            expect(response.body.created).equal(todayDate)
        })
    })
    it('Edit an existing board', function () {
        const todayDate = Cypress.moment().format('yyyy-MM-DD')
        var createBoard = {
            "name": "My board"
        }
        cy
            .request('POST', '/api/boards', createBoard)
            .as('board')

        cy
            .then(() => {
                cy
                    .request('POST', '/api/boards', {
                        title: 'My board edited',
                        boardId: this.board.body.id
                    }).then((response) => {
                        expect(response.body.title).equal(createBoard.name + ' edited')
                    })
            })

    })
    it('Delete an existing board', function () {
        var createBoard = {
            "name": "My board"
        }
        cy
            .request('POST', '/api/boards', createBoard)
            .as('board')

        cy
            .then(() => {
                cy
                    .request('DELETE', '/api/boards/' + this.board.body.id)
                    .then((response) => {
                        expect(response.status).equal(200)
                    })
            })

    })
})