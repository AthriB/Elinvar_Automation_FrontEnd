class ElementsLandingPage {
  getLandingPageHeader() {
    return cy.get("h1");
  }

  getDescriptionTab() {
    return cy.get('[href="#/"]');
  }

  getAddAssetTab() {
    return cy.get('[testid="add-asset"]');
  }

  getExistingAssetTab() {
    return cy.get('[href="#/assets"]');
  }

  getPageSubHeader() {
    return cy.get("h2");
  }
}
export default ElementsLandingPage;
