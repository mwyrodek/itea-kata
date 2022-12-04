describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.wyrodek.pl/')

    cy.contains('Contact').click()

    cy.get('#wpcf7-f257-p4022-o1 > form > p:nth-child(2) > label > span > input').type('Welcome')

    cy.get('#wpcf7-f257-p4022-o1 > form > p:nth-child(3) > label > span > input').type('nrz38986@nezid.com')

    cy.get('#wpcf7-f257-p4022-o1 > form > p:nth-child(4) > label > span > input').type('Welcome')

    cy.contains('Submit').click()

  })
})