Cypress.Commands.add('loginUser', (email, password) => {

  cy
    .request({
      method: 'POST',
      url: '/login',
      body: { email, password }
    }).then( res => {
      cy
        .setCookie('trello_token', res.body.accessToken)
    })

})





