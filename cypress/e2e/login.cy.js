describe("User Login flow", () => {
  const timestamp = Date.now();
  const user = {
    email: `advik@gmail.com`,
    password: "123456",
  };
  beforeEach(() => {
    cy.visit("/login");
    cy.log("navigated to /register");
  });

  // it("should login a new user", () => {
  //   cy.get('[data-testid="register-email"]')
  //     .type(user.email)
  //     .should("have.value", user.email);

  //   cy.get('[data-testid="register-password"]')
  //     .type(user.password)
  //     .should("have.value", user.password);

  //   cy.get('[data-testid="login-submit"]').click();
  //   cy.url().should("include", "/dashboard");
  //   cy.contains("Dashboard").should("be.visible");

  //   // we need to handle the form
  //   // form based on react / angular / vue
  //   // data-testid : is a custom attribute often added to HTML elements (usually in react angular or vue) to make UI testing more stable and reliable.
  //   // WHY ?
  //   // DOM :
  //   // dom tree may have some elements :
  //   // 1. dynamic Class Names(from css modules)
  //   // changing content i18N
  //   // no unique identifiers. form
  //   // <input type='text>
  //   // <input type='email'>
  //   // <input type='password'>
  //   // cy.get('input')==> where to type the data
  // });

  // it("should show error for incorrect password", () => {
  //   cy.get('[data-testid="register-email"]').type(user.email);
  //   cy.get('[data-testid="register-password"]').type("wrongpassword");
  //   cy.get('[data-testid="login-submit"]').click();
  // });
  // // provide unknown email id
  // it("should show error for unknown email id", () => {
  //   cy.get('[data-testid="register-email"]').type("unknown@gmail.com");
  //   cy.get('[data-testid="register-password"]').type(user.password);
  //   cy.get('[data-testid="login-submit"]').click();
  // });

  // // empty hit
  // it("should show error for empty fields", () => {
  //   cy.get('[data-testid="register-email"]').type("");
  //   cy.get('[data-testid="register-password"]').type("");
  //   cy.get('[data-testid="login-submit"]').click();
  // });

  it("should not proceed with empty fields", () => {
    // cy.get('[data-testid="register-email"]').type("");
    // cy.get('[data-testid="register-password"]').type("");
    cy.get('[data-testid="login-submit"]').click();
    cy.url().should("include", "/login");
    cy.contains("Please include a valid email").should("be.visible");
  });
});
