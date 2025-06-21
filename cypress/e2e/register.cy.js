describe("User Registration flow", () => {
  const timestamp = Date.now();
  const user = {
    name: `john${timestamp}`,
    lastName: `doe${timestamp}`,
    email: `john${timestamp}@example.com`,
    password: "password123",
  };
  beforeEach(() => {
    cy.visit("/register.htm");
    cy.log("navigated to /register");
    Cypress.on("window:before:load", (win) => {
      Object.defineProperty(win.navigator, "userAgent", {
        value:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113 Safari/537.36",
      });
    });
  });
  it("should register a new user", () => {
    cy.get('form:has(input[name="customer.firstName"])').within(() => {
      cy.get('input[name="customer.firstName"]').type(user.name);
      cy.get('input[name="customer.lastName"]').type(user.lastName);
      // address
      cy.get('input[name="customer.address.street"]').type("123 main st");

      // city
      cy.get('input[name="customer.address.city"]').type("New York");
      // state
      cy.get('input[name="customer.address.state"]').type("NY");
      // zip
      cy.get('input[name="customer.address.zipCode"]').type("10001");
      // phone
      cy.get('input[name="customer.phoneNumber"]').type("1234567890");
      // ssn
      cy.get('input[name="customer.ssn"]').type("123456789");
      // username
      cy.get('input[name="customer.username"]').type(user.email);

      cy.get('input[name="customer.password"]').type(user.password);
      cy.get('input[name="repeatedPassword"]').type(user.password);
      cy.get('input[type="submit"]').click();
      // cy.get('form:has(input[name="customer.firstName"])').submit();
      // cy.get("form").submit();
      // cy.get('form[name="customerForm"] input[type="submit"]')
      //   .then(($els) => console.log("found", $els.length))
      //   .click();
      // assert
      cy.pause();
      cy.get('button:contains("Verify")').click();
      cy.contains("Your account was created successfully").should("be.visible");
    });
  });
});
