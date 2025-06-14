describe("Login Test", () => {
  console.log(process.env.LOGIN_URL);
  console.log(Cypress.env("login_url"));
  it("should login successfully", () => {
    cy.log(Cypress.env("login_url"));
    cy.log(Cypress.env("username"));
    cy.log(Cypress.env("password"));
    cy.log(Cypress.env("api_url"));
  });
});
