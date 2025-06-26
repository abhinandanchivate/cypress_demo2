// sorting and verification of inventory items
describe("Inventory Sorting and Verification", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });

  it("Sort products low to high and verify order", () => {
    cy.get('[data-test="product-sort-container"]').select("lohi");
    cy.get(".inventory_item_price").then(($prices) => {
      const priceList = [...$prices].map((p) =>
        parseFloat(p.innerText.replace("$", ""))
      );
      const sorted = [...priceList].sort((a, b) => a - b);
      expect(priceList).to.deep.equal(sorted);
    });
  });
});
