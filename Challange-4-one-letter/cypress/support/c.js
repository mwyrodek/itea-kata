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
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('g', { prevSubject: 'optional'}, (s, o) => { 
    return cy.get(o,s);
 })

 Cypress.Commands.add('v', (u, o) => { 
    return cy.visit(u,o);
 })

 Cypress.Commands.add('c', { prevSubject: 'optional'}, (s, o) => { 
    return cy.wrap(s).click(o);
 })

 Cypress.Commands.add('u', () => { 
    return cy.url;
 })

 Cypress.Commands.add('t', { prevSubject: 'element'}, (s, t) => { 
   return cy.wrap(s).type(t)
})


Cypress.Commands.add('w', (t) => { 
   cy.wait(t)
})

 
 Cypress.Commands.add('f', { prevSubject: 'element'}, (s) => { 
   return cy.wrap(s).first();
})

Cypress.Commands.add('l', { prevSubject: 'element'}, (s) => { 
   return cy.wrap(s).l();
})
