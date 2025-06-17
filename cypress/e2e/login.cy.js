const cypress = require("cypress");

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

// Cypress.Commands.add("login with SSO", () => {
//   cy.request("post", "https://sso.example.com/login", {
//     username: Cypress.env("username"),
//     password: Cypress.env("password"),
//   }).then((response) => {
//     cy.setCookie("session_id", response.body.session_id);
//   });
// });

// cy.session("sso-login", () => {
//   cy.visit("https://example.com/sso-login-page");
//   cy.get("#username").type(Cypress.env("username"));
//   cy.get("#password").type(Cypress.env("password"));
//   cy.get("#login-button").click();
//   cy.url().should("include", "/dashboard");
// });
