describe('API', () => {
    it('reset storage', () => {
        cy.request('POST', 'api/reset')
        cy.readFile('public/data/data.json').then((json) => {
            expect(json).to.have.keys(['users', 'boards', 'lists', 'tasks'])
            expect(json).to.have.deep.property('users', [])
            expect(json).to.have.deep.property('boards', [])
            expect(json).to.have.deep.property('lists', [])
            expect(json).to.have.deep.property('tasks', [])
        })
    })
    it('create a board', () => {
        const name = 'My Board'
        cy.request('POST', 'api/boards', {name: name}).then((response) => {
            expect(response.body).to.have.property('name', name)
            expect(response.body).to.have.property('user', 0)
            expect(response.body).to.have.property('id').and.to.be.a('number')
        })
    })
    describe('Modifying a board', () => {
        beforeEach(() => {
            cy.createBoard()
        })
        it('star an existing board', () => {
            cy.readFile('public/data/data.json').then((data) => {
                const boardId = data['boards'][0]['id']
                cy.request('PATCH', `api/boards/${boardId}`, {starred: true}).then((response) => {
                    expect(response.body).to.have.property('id', boardId)
                })
            })
        })
        it('delete a board', () => {
            cy.readFile('public/data/data.json').then((data) => {
                const boardId = data['boards'][0]['id']
                cy.request('DELETE', `api/boards/${boardId}`)
            })
        })
    })
    it('delete non-existent board', () => {
        cy.request({
            method: 'DELETE',
            url: 'api/boards/0',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
})
