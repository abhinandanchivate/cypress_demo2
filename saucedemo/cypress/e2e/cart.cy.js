describe("Cart Functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("should add a single item to cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.screenshot("add-single-item-to-cart");
  });

  it("should remove the item from cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_badge").should("not.exist");
    cy.screenshot("remove-single-item-from-cart");
  });

  it("should add multiple items to cart and validate count", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get(".shopping_cart_badge").should("contain", "3");
    cy.screenshot("add-multiple-items-to-cart");
  });

  it("should reflect correct items on cart page", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".cart_item").should("have.length", 2);
    cy.screenshot("cart-page-items-validation");
  });

  it("should persist cart items after navigating away and back", () => {
    cy.get(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    ).click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("have.length", 1);
    cy.screenshot("cart-persistence-check-1");

    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("have.length", 1);
    cy.get(".shopping_cart_link").click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.screenshot("cart-persistence-check-2");
  });

  it("should show empty cart when no items added", () => {
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("have.length", 0);
    cy.screenshot("empty-cart-screenshot");
  });

  it("should add then remove multiple items", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_badge").should("contain", "2");
    cy.screenshot("added-two-items");

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_badge").should("not.exist");
    cy.screenshot("removed-two-items");
  });
});
