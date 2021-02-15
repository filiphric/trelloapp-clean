
before(() => {
    cy
    .task('resetDatabase')

    cy
        .visit('/');
});


it('api auth', () => {
    cy
        .visit('/')

    cy
        .request({
        method: 'GET', 
        url: '/api/boards',
        headers: {
            accept: 'application/json, text/plain, */*',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwiaWF0IjoxNjEzMzQyMDI1LCJleHAiOjE2MTMzNDU2MjUsInN1YiI6IjEifQ.i3s9b0hsGqOVJ6cZUUZyz1ZzxOBzls4jYKr8d7ShKD4'
        }
        })
  
});


it('login token', () => {
    cy 
      .loginUser('test@email.com', 'password')

});