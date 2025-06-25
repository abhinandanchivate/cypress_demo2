describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Valid Login", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory");
    cy.screenshot("login-success");
  });

  it("Invalid Login", () => {
    cy.get("#user-name").type("locked_out_user");
    cy.get("#password").type("wrong_password");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("exist");
    cy.screenshot("login-failed");
  });
});
