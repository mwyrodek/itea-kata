export const z = (a,b) =>
{
    expect(a).to.contain(b)
}

export const v = (a) =>
{
    cy.g(a).should('be.visible')
}

export const t = (a,e) =>
{
    cy.g(a).should('have.text',e)
}