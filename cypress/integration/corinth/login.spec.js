/// < reference types="cypress" />

describe('Login to the application', ()=>{
    
    it('first test', ()=>{

        cy.visit("https://corinth.dev.app.nurixtx.net")
        cy.get('delphi-corinth').shadow().find('global-css').shadow().find('slot').find('login-page').shadow().find('login-page-view').shadow().find('.container').shadow().get('[aria-labelledby="label"]').type('corinth-admin')
        //cy.get('main').should('exists')
    })

})