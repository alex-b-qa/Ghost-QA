/// <reference types="Cypress"/>


describe('Post Management Tests', () => {


    // #region dogTrainingPost
    const dogTrainingPost = `Training your dog is about building a language of trust, consistency, and clear communication. The secret weapon? Positive reinforcement. 
    When you reward good behaviors with high-value treats and enthusiastic praise, your dog learns to associate following commands with great outcomes.`
    // #endregion


    beforeEach('Open Ghost', () => {
        cy.visit('/ghost')
    })

    it('Create a new draft post GQ-T3', () => {
        cy.login()
        cy.get('[aria-label="Create new post"]').click()
        cy.get('[placeholder="Post title"]').should('be.visible')
        cy.get('[placeholder="Post title"]').type("Unleashing Your Pup's Potential")
        cy.get('[contenteditable="true"]')
            .first()
            .focus()
            .type(dogTrainingPost)
        cy.get('[data-test-link="posts"]').click()
        cy.get('div').should('contain', "Unleashing Your Pup's Potential")
        cy.get('[data-test-editor-post-status]').should('contain', 'Draft')

    })


    it('Preview a post before publising GQ-T5', () => {
        cy.login()
        cy.createPost()
        cy.get('[data-sidebar="menu-button"]')
            .contains('Draft')
            .click()
        cy.url().should('contain', '/#/posts?type=draft')
        cy.get('[data-testid="posts-list-item"]')
            .first()
            .click()
        cy.get('[data-test-button="publish-flow"]').should('contain', 'Publish')
        cy.get('[data-test-button="publish-preview"]')
            .contains('Preview')
            .click()
        cy.get('[data-test-modal="preview-email"]').should('contain', 'Preview')
        cy.contains('[type="button"]', 'Close').click()
        cy.get('[data-test-button="publish-preview"]').should('contain', 'Preview')

    })

    it('Publish a draft post GQ-T4', () => {
        cy.login()
        cy.createPost()
        cy.get('[data-sidebar="menu-button"]')
            .contains('Draft')
            .click()
        cy.url().should('contain', 'ghost/#/posts?type=draft')
        cy.get('[data-testid="posts-list-item"]')
            .first()
            .click()
        cy.get('[data-test-editor-post-status]').should('contain', 'Draft')
        cy.get('[data-test-button="publish-flow"]')
            .first()
            .click()
        cy.get('[data-test-button="continue"]')
            .should('be.visible')
            .click()
        cy.get('[data-test-button="confirm-publish"]')
            .should('be.visible')
            .click()
        cy.get('[data-test-button="close-publish-flow"]')
            .should('be.visible')
            .click()



    })

})