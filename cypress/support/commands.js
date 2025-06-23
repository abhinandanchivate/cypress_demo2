Cypress.Commands.add("login", (userName, password) => {
  cy.visit("/index.htm");
  cy.get('input[name="username"]').type(userName);
  cy.get('input[name="password"]').type(password);
  cy.get('input[type="submit"][value="Log In"]').click();
});
