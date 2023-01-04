describe('Contact me page', () => {
  it('Fill Form - Happy Path', () => {

    // czemu tu jest redirect?
    cy.visit('')
    cy.contains('Contact').click()

    cy.get("[data-name='your-name']").type("to idzie gorzej niz myslałem");
    cy.get("[data-name='your-email']").type("killme@now.pl");
    cy.get("[data-name='your-subject']").type("To jest trudne");
    cy.contains("Submit").click();

    cy.contains("Twoja wiadomość została wysłana")
})
})