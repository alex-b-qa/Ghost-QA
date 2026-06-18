// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


Cypress.Commands.add('login', () => {
    cy.env(['email', 'password']).then(({ email, password }) => {
        cy.get('[data-test-input="email"]').type(email)
        cy.get('[data-test-input="password"]').type(password)
        cy.get('[data-test-button="sign-in"]').click()
        cy.url().should('contain', 'ghost/#/analytics')
    })
})

    // #region dogTrainingPost
    const dogTrainingPost = `Training your dog is about building a language of trust, consistency, and clear communication. The secret weapon? Positive reinforcement. 
    When you reward good behaviors with high-value treats and enthusiastic praise, your dog learns to associate following commands with great outcomes.`
    // #endregion

Cypress.Commands.add('createPost', () => {
    //cy.login('alexbryant2011@yahoo.com', 'howfuq-nYbzop-dajhu8')
        cy.get('[aria-label="Create new post"]').click()
        cy.get('[placeholder="Post title"]').type("Unleashing Your Pup's Potential")
            cy.get('[contenteditable="true"]')
                .first()     // Grabs the first editable field (the text container)
                .focus()     // Physically forces the text cursor to flash inside it
                .type(dogTrainingPost)
        cy.get('[data-test-link="posts"]').click()
        cy.get('div').should('contain', "Unleashing Your Pup's Potential")
        cy.get('[data-test-editor-post-status]').should('contain', 'Draft')



})
