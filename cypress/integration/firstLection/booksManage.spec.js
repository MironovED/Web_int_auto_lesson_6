beforeEach(() => {
    cy.visit("/");
  });
  
  it("shouldAddBook", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Esenin", "Something go0d", "Some guy");
    cy.contains("Esenin").should("be.visible");
  });
  
  it("shouldAddBookToFavorites", () => {
    cy.login("test@test.com", "test");
    cy.addBookWithFavorite("NeEsenin", "Something", "guy");
    cy.get("h4").click();
    cy.contains("NeEsenin").should("be.visible");
  });
  
  it("shoulDeleteBookFromFavorites", () => {
    cy.login("test@test.com", "test");
    cy.addBookWithFavorite("asc", "Something go0d", "Some guy");
    cy.get("h4").click();
    cy.deleteBookFromFavoriteForTitle("asc");
    cy.contains("asc").should("not.exist");
  });