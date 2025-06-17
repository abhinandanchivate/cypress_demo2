describe("Home Page Test", () => {
  // test cases we will write it ==> are here for home page for https://example.cypress.io/

  // beforeEach ==> this is a hook that will run before each test case
  // as a prerequisite we will visit the home page
  // whatever the common thigns are required for the test cases we will hold the common req in the beforeEach hook
  beforeEach(() => {
    cy.visit("https://example.cypress.io/");
  });

  it("should load the page with correct title ", () => {
    cy.title().should("include", "Cypress.io");
  });

  // to verify the logo / image for our application

  // 100 test cases there tell me if i need to open  or visit cy.visit() everytime
});

describe("Logo Test", () => {
  it("should display the logo", () => {
    cy.visit("http://localhost:5500/");
    cy.get(".banner").find("img").should("be.visible");
  });
});
