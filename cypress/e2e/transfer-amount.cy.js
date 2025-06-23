describe("Transfer Amount flow", () => {
  const validUser = {
    userName: "john",
    password: "demo",
  };
  const invalidUser = {
    userName: "invalid",
    password: "invalid",
  };
  const transferAmount = 100;
  beforeEach(() => {
    cy.visit("/index.htm");
  });
  it("should login and show dashboard", () => {
    cy.login(validUser.userName, validUser.password);
    cy.contains("Accounts Overview", { timeout: 10000 }).should("be.visible");
    cy.contains("Transfer Funds").should("be.visible");
  });
});
