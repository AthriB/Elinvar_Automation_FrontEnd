class ElementsExistingAssetsPage {
  getSearchBox() {
    return cy.get("[data-test=datatable-input] > .form-control");
  }

  getSortAscendingButton() {
    return cy.get(".sorting_asc");
  }

  getSortButton() {
    return cy.get(".sorting");
  }
  getSorDescendingButton() {
    return cy.get(".sorting_desc");
  }

  getSelectAssetsPerPage() {
    return cy.get(".custom-select");
  }

  getDataPerPageInfo() {
    return cy.get(".dataTables_info");
  }

  getShowEntriesInfo() {
    return cy.get(".dataTables_info");
  }

  getFirstRowAfterSearch() {
    return cy.get("td");
  }

  //Better to use parents/child relations rahter then xpaths
  getFirstRowWhenSorted() {
    return cy.get(":nth-child(1) > td");
  }

  getNextPageButton() {
    return cy.contains("Next");
  }

  getPreviousButton() {
    return cy.contains("Previous");
  }
}
export default ElementsExistingAssetsPage;
