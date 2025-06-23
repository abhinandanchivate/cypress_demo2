describe("User Login flow", () => {
  const timestamp = Date.now();
  const user = {
    email: `john`,
    password: "demo",
  };
  beforeEach(() => {
    cy.visit("/index.htm");
    cy.log("navigated for login");
    cy.get('input[name="username"]').type(user.email);
    cy.get('input[name="password"]').type(user.password);
    cy.get('input[type="submit"][value="Log In"]').click();
  });
  it("Login with valid credentials", () => {
    cy.contains("Accounts Overview", { timeout: 10000 }).should("be.visible");
  });
  // it("Login with invalid credentials", () => {});
  // it("should display account balances after login", () => {});
  it("should logout successfully", () => {
    cy.contains("Log Out", { timeout: 5000 }).click();
    cy.contains("Customer Login").should("be.visible");
  });
});

// it login with credentials  :log in ops
// but log out successfully case ==> fresh start
// it is not able to find out log out button.
// login credentials form itself i put into before each.
// Test Isolation in cypress.
