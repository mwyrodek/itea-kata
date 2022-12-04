describe('contact spec', () => {
  it('passes', () => {
    cy.visit('')

    cy.contains('Contact').click()

    cy.get('input[name="your-name"]').type('Tests Welcome')

    cy.get('input[name="your-email"]').type('nrz38986@nezid.com')

    cy.get('input[name="your-subject"]').type('Tests Welcome')

    cy.contains('Submit').click()

  })
})