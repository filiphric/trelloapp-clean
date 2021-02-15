before(() => {
    // cy
    //   .request('POST', '/api/reset');

    cy
    .task('resetDatabase')

    cy
        .visit('/');
});

it.only('login function check', () => {
    cy
      .get('[data-cy=login-menu]')
      .click()
  
    cy  
      .get('[data-cy=login-email]')
      .type('test@email.com')
      .should('have.value', 'test@email.com')
  
    cy  
      .get('[data-cy=login-password]')
      .type('password')
      .should('have.value', 'password')
  
    cy
      .get('[data-cy=login]')
      .click()
});

it.only('logout function check', () => {
    cy  
      .wait(200)

    // cy
    //   .get('.invisible-overlay')
    //   .invoke('css', 'display', 'none')

    cy
      .get('[data-cy=logged-user]')
      .click()
  
    cy  
      .get('#myDropdown')
      .click()

    cy
      .get('[data-cy=logged-user]')
      .should('have.css', 'display', 'none')
  
});