describe("Bootstrap menu 3 level dropdown navigation", () => {
  const URL = "https://bootstrap-menu.com/demos/multilevel.html";
  it("should oopen menu ==> submenu ===> submenu and clicks to item", () => {
    cy.visit(URL);
    // level 1
    cy.contains("nav li >a ", "Treeview menu").click(); // click on the main menu item
    // nav : a css selector that narros the search to only the a tag (anchor tag) inside the li element ==> inside the nav element
    // level 2
    cy.contains("ul.dropdown-menu li > a", "Dropdown item 2").trigger(
      "mouseover"
    ); // hover over the submenu item
    // ul ==> dropdown-menu as a css class ==> it will search for
    // li ==> a tag
    // level 3
    cy.contains("ul.dropdown-menu li >a", "Submenu item 3").trigger(
      "mouseover"
    );
  });
});
