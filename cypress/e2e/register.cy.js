describe("User Registration flow", () => {
  const timestamp = Date.now();
  const user = {
    name: "John Doe",
    email: `john${timestamp}@example.com`,
    password: "password123",
  };
  beforeEach(() => {
    cy.visit("/register");
    cy.log("navigated to /register");
  });
  it("should register a new user", () => {
    cy.get('[data-testid="register-name"]')
      .type(user.name)
      .should("have.value", user.name);

    cy.get('[data-testid="register-email"]')
      .type(user.email)
      .should("have.value", user.email);

    cy.get('[data-testid="register-password"]')
      .type(user.password)
      .should("have.value", user.password);

    cy.get('[data-testid="register-password-confirmation"]')
      .type(user.password)
      .should("have.value", user.password);

    cy.get('[data-testid="register-submit"]').click();
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");

    // we need to handle the form
    // form based on react / angular / vue
    // data-testid : is a custom attribute often added to HTML elements (usually in react angular or vue) to make UI testing more stable and reliable.
    // WHY ?
    // DOM :
    // dom tree may have some elements :
    // 1. dynamic Class Names(from css modules)
    // changing content i18N
    // no unique identifiers. form
    // <input type='text>
    // <input type='email'>
    // <input type='password'>
    // cy.get('input')==> where to type the data
  });
});
