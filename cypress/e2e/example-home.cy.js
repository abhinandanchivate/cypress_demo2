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

  it("should have navigation links visible ", () => {
    cy.get("nav").within(() => {
      cy.contains("Commands").should("be.visible");
      cy.contains("Utilities").should("be.visible");
      cy.contains("Cypress API").should("be.visible");
    });
  });
  // click to the Command link / button
  it("should navigate to Querying tests page", () => {
    cy.contains("Commands").click();
    cy.contains("Querying").click();
    cy.url().should("include", "/commands/querying");
  });
  //   it("should scroll to the commands section and click on it", () => {
  //     cy.contains("Commands").click();
  //     // does it have some menu options or not
  //     cy.get(".dropdown-menu").should("be.visible");
  //     // verify the URL after clicking the Commands link
  //     cy.url().should("include", "/commands");
  //     // cy.url().should("include", "#commands");
  //   });
  // to verify the logo / image for our application

  // 100 test cases there tell me if i need to open  or visit cy.visit() everytime
});

// describe("Logo Test", () => {
//   it("should display the logo", () => {
//     cy.visit("http://localhost:5500/");
//     cy.get(".banner").find("img").should("be.visible");
//   });
// });

// describe("Amazon", () => {
//   it("should display the amazon logo", () => {
//     cy.visit("https://www.amazon.in/");
//     cy.get("#nav-logo-sprites", { timeout: 10000 }).should("be.visible");
//   });
// });
