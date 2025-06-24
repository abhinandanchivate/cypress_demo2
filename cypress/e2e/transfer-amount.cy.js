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
  it("should not login with invalid user", () => {
    cy.login(invalidUser.userName, invalidUser.password);
  });
  it("should transfer amount safely", () => {
    cy.login("john", "demo");

    // Navigate to Transfer Funds page
    cy.get('a[href="transfer.htm"]').first().click();
    cy.url().should("include", "transfer.htm");
    cy.contains("Transfer Funds").should("be.visible");

    // Wait for dropdowns and amount field
    cy.get("#fromAccountId").should("be.visible");
    cy.get("#toAccountId").should("be.visible");
    cy.get("#amount").should("be.visible");

    // Ensure dropdowns are populated
    cy.get("#fromAccountId")
      .find("option")
      .should("have.length.greaterThan", 1)
      .then(($options) => {
        const fromVal = $options.eq(0).val();
        const toVal = $options.eq(1).val();

        expect(fromVal, "fromVal should not be undefined").to.not.be.undefined;
        expect(toVal, "toVal should not be undefined").to.not.be.undefined;

        // Perform transfer
        cy.get("#amount").type("100");
        // we have to check that this provided value is valid or not
        cy.get("#fromAccountId").select(fromVal);
        cy.get("#toAccountId").select(toVal);
        cy.get('input[type="submit"][value="Transfer"]').first().click();
      });

    // Assert success message
    cy.contains("Transfer Complete!").should("be.visible");
    cy.contains("$100.00 has been transferred").should("exist");
  });

  //   it(" should transfer amount safely", () => {
  //     cy.login("john", "demo");

  //     cy.get('a[href="transfer.htm"]').first().click();
  //     cy.url().should("include", "transfer.htm");
  //     cy.contains("Transfer Funds").should("be.visible");

  //     cy.get("#fromAccountId", { timeout: 10000 }).should("be.visible");
  //     cy.get("#toAccountId").should("be.visible");
  //     cy.get("#amount").should("be.visible");

  //     // Wait for options to load fully
  //     cy.get("#fromAccountId option").should("have.length.greaterThan", 1);

  //     // cy.get ==> returns a chainable object==> not a real DOM element but a wrapper around it.
  //     // then ==> returns a promise
  //     // cy.get().then()==> we need to access the DOM element returned by the get command.
  //     // inside then method :
  //     // 1. we can access the DOM element
  //     // 3. jquery object usage.
  //     // 2. exit cypress command chain, so that we can write synchronous code / js ==> taks like
  //     //   accessing the DOM element, reading its properties, extracting values, loop through options(select options), usage of val method.

  //     cy.get("#fromAccountId").then(($fromSelect) => {
  //       const options = $fromSelect.find("option");

  //       const fromVal = options.eq(0).val(); // 0th index element
  //       console.log(fromVal);
  //       const toVal = options.eq(1).val(); // 1st index element
  //       console.log(toVal);

  //       expect(fromVal, "fromVal should not be undefined").to.not.be.undefined;
  //       expect(toVal, "toVal should not be undefined").to.not.be.undefined;

  //       cy.get("#amount").type("100");
  //       cy.get("#fromAccountId").select(fromVal);
  //       cy.get("#toAccountId").select(toVal);
  //       cy.get('input[type="submit"][value="Transfer"]').click();

  //       cy.contains("Transfer Complete!").should("be.visible");
  //       cy.contains("$100.00 has been transferred").should("exist");
  //     });
  //   });
});
