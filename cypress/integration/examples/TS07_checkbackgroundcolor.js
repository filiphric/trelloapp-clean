/// <reference types="cypress" />    

import CreateBoard from '../../support/PageObjects/manageboard';

describe('Background Colour',function()
{
    it('Background Colour',function()
    {
        cy
            .request('POST', '/reset');     
            
        const status=new CreateBoard()

        status.visit()
        cy
            .wait(1000)
            
        for(let i=1;i<11;i++)
        {
        cy
            .get('.background')
            .should('have.css','background-color').and('equal', 'rgb(255, 255, 255)');

        status.createboard("board"+i)
        cy
            .get('.background')
            .should('have.css','background-color').and('equal', 'rgb(0, 121, 191)');

        cy
            .get('.Nav_boards')
            .click()
        
        cy
            .get('[data-cy=board-item]')
            .eq(i-1)
            .should('have.css','background-color').and('equal', 'rgb(2, 106, 167)');
        
        
        
        }

           /* .get('[data-cy=board-item] > .board_title').invoke('text').then((boardtitle => {

               expect(boardtitle).to.include('MyBoard1')
            }))*/
            
         
            




    })

})