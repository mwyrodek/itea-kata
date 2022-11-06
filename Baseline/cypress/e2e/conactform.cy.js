describe("Contact Form", () => {
  it("Fill Contact Form", () => {
    cy.visit("").contains("Contact me").click();
    
    //fill and submit the form
    cy.get('span[data-name="your-name"]')
      .type("Itea")
      .get('span[data-name="your-email"]')
      .type("thisisfakeemail@wyrodek.pl")
      .get('span[data-name="your-subject"]')
      .type("Automation Test - Ignore This Message")
      .get("form.wpcf7-form")
      .submit();

    cy.contains("Twoja wiadomość została wysłana. Dziękujemy!");
  });
});
