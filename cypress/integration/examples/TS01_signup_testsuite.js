/// <reference types="cypress" />
describe('Signup Test Suite',function()
{
    before(function()
    {
        cy
            .request('POST', '/reset');                     //To reset the stored data
    })

   beforeEach(function()
    {
        cy.fixture('signup_testdata').then(function(data)  //To read data from Fixtures file  
        {                            
        this.data=data
        })
    })

    it('Signup success with new User',function()              //Valid Credentials
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
         
        
        }
        
    })
     
    it('Signup unsuccess with invalid credentials',function()      //Invalid Credentials
    {
        for(let i=0; i<this.data.invaliduser.length; i++)
        {
    
        cy.signup(this.data.invaliduser[i].email,this.data.invaliduser[i].password)    
        expect(cy.get("[data-cy=signup]")).to.exist             //Signup should not be allowed  
        cy
            .get("[data-cy=signup-email]").clear()
            .get("[data-cy=signup-password]").clear()                 
        }               
    })

})