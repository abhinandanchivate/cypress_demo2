describe("Checkout Functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
  });

  // it("should fill in checkout information and complete purchase", () => {
  //   cy.get('[data-test="firstName"]').type("John");
  //   cy.get('[data-test="lastName"]').type("Doe");
  //   cy.get('[data-test="postalCode"]').type("12345");
  //   cy.screenshot("checkout-step-one-filled");
  //   cy.get('[data-test="continue"]').click();
  //   cy.get(".summary_info").should("exist");
  //   cy.get('[data-test="finish"]').click();
  //   cy.url().should("include", "/checkout-complete.html");
  //   cy.screenshot("checkout-complete");
  // });

  it("should validate empty fields during checkout", () => {
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should(
      "contain",
      "Error: First Name is required"
    );
    cy.screenshot("checkout-missing-first-name");

    cy.get('[data-test="firstName"]').should("be.visible").type("Jane");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should(
      "contain",
      "Error: Last Name is required"
    );
    cy.screenshot("checkout-missing-last-name");

    cy.get('[data-test="lastName"]').should("be.visible").type("Doe");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should(
      "contain",
      "Error: Postal Code is required"
    );
    cy.screenshot("checkout-missing-postal-code");

    // Optional: Complete checkout
    cy.get('[data-test="postalCode"]').should("be.visible").type("12345");
    cy.get('[data-test="continue"]').click();
    cy.get(".summary_info").should("exist");
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("contain", "Thank you for your order!");
    cy.screenshot("checkout-success-after-validation");
  });
});
