class ElementsAddAssetPage {
  getNewAssetHeader() {
    return cy.get(".grey-text");
  }

  getAddAssetField() {
    return cy.get("#defaultFormAddAsset");
  }

  getSendButton() {
    return cy.get("[data-test=button]");
  }

  getSuccessMessage() {
    return cy.get("[data-test=modal-body]");
  }

  getSuccessMessageCloseButton() {
    return cy.get("[data-test=modal-footer] > [data-test=button]");
  }

  getSuccessMessageTitle() {
    return cy.get("[data-test=modal-header]");
  }

  getInvalidFormatMessage() {
    return cy.get(".invalid-feedback");
  }

  getValidFormatMessage() {
    return cy.get(".valid-feedback");
  }
}

export default ElementsAddAssetPage;
