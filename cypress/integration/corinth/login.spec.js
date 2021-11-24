describe('Login to the application', ()=>{
    
    it('first test', ()=>{

        cy.visit("http://localhost:3000")
        cy.title().should('eq', 'Todo App')
    })

})