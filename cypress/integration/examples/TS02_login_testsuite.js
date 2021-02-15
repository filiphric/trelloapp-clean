/// <reference types="cypress" />
describe('Login Test Suite',function()
{
    before(function()
    {
        cy
            .request('POST', '/reset');                     //To reset the stored data
    })
    beforeEach(function()
    {
        cy.fixture('login_testdata').then(function(data)    //To read data from Fixtures file   
        {                           
            this.data=data
        })
    })

    it('Login success with valid credentials',function()
    {
        for(let i=0; i<this.data.validuser.length; i++)
        {
        cy
            .signup(this.data.validuser[i].email,this.data.validuser[i].password)
        cy
            .get('[data-cy=logged-user]')
            .should('contain',this.data.validuser[i].email)   //User should be loggedin
        cy
            .logoff();
        
        cy
            .login(this.data.validuser[i].email,this.data.validuser[i].password)
        cy
            .get('[data-cy=logged-user]')
            .should('contain',this.data.validuser[i].email)     //To check Login successful

        cy 
            .logoff();
        }
    })
    it('Login unsuccess with invalid credentials',function()
    {
        for(let i=0; i<this.data.invaliduser.length; i++)
        {

        cy.login(this.data.invaliduser[i].email,this.data.invaliduser[i].password)
        expect(cy.get("[data-cy=login]")).to.exist
        
        cy
          .get("[data-cy=login-email]").clear()
          .get("[data-cy=login-password]").clear()

        
        }

    
    })
        


})
     