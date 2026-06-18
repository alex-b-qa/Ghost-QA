/// <reference types="cypress"/>

describe('Login Logout Test Cases', () => {

        beforeEach('Open Ghost', () => {
            cy.visit('/ghost')
        })

    it('Successful login with valid credentials GQ-T1', () => {
        cy.login()
        cy.url().should('contain', '/ghost/#/analytics')  
    })


    it('Logout from Ghost admin GQ-T9', () => {
        cy.login()
        cy.get('[aria-label="User menu"]').click()
        cy.contains('span', 'Sign out').click()
        cy.get('[data-test-button="sign-in"]').should('be.visible')
        cy.url().should('contain', '/ghost/#/signin')
    })



       it('Prevent unauthorized access after logout GQ-T10', () => {
        cy.login()
        cy.get('[aria-label="User menu"]').click()
        cy.contains('span', 'Sign out').click()
        cy.get('[data-test-button="sign-in"]').should('be.visible')
        cy.url().should('contain', '/ghost/#/signin')
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.reload()
        cy.get('[data-test-button="sign-in"]').should('be.visible')
        cy.url().should('not.contain', '/ghost/#/analytics')  
       })
    

    })
    
