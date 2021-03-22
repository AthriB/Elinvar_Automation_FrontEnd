import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ElementsLandingPage from "../../../support/pageObjects/ElementsLandingPage.js";
import ElementsAddAssetPage from "../../../support/pageObjects/ElementsAddAssetPage.js";
import ElementsExistingAssetsPage from "../../../support/pageObjects/ElementsExistingAssetsPage.js";

const LandingPage = new ElementsLandingPage();
const AddAssetPage = new ElementsAddAssetPage();
const ExistingAssetPage = new ElementsExistingAssetsPage();

Given(/^The User is on Add asset page$/, function () {
  cy.visit(this.data.baseURL);
  LandingPage.getAddAssetTab().click();
});

When(/^The user enters the asset name and clicks on Send$/, function () {
  const Number = Math.floor(Math.random() * 10000000000);
  if (Number < 999999999) Number = Number + 1000000000;
  const Name = `GOOD${Number}`;
  AddAssetPage.getAddAssetField().type(Name);
  AddAssetPage.getSendButton().click();
  cy.wait(1000);
  AddAssetPage.getSuccessMessage().should(
    "have.text",
    `Asset ${Name} was added to the list`
  );
});

Then(
  /^The Asset should be created and the message should be shown$/,
  function () {
    AddAssetPage.getSuccessMessageCloseButton().click();
    AddAssetPage.getValidFormatMessage().should("have.text", "Correct format");
  }
);

When(/^The user Enters an existing Asset Name and click on Send$/, function () {
  AddAssetPage.getAddAssetField().clear();
  AddAssetPage.getAddAssetField().type("AAAA0000000000");
  AddAssetPage.getSendButton().click();
});

Then(/^Asset already exists error message should be displayed$/, function () {
  cy.wait(1000);
  AddAssetPage.getSuccessMessage().should(
    "have.text",
    `Asset name should be unique. Assert with this name already exists`
  );
  AddAssetPage.getSuccessMessageCloseButton().click();
  AddAssetPage.getValidFormatMessage().should("have.text", "Correct format");
});

Then(
  /^The user Enters the Name of the Assets in wrong formats and validates$/,
  function (dataTable) {
    dataTable.hashes().forEach((element) => {
      AddAssetPage.getAddAssetField().clear();
      AddAssetPage.getAddAssetField().type(element.name);
      AddAssetPage.getSendButton().click();
      cy.wait(1000);
      AddAssetPage.getInvalidFormatMessage().should(
        "have.text",
        "Incorrect format"
      );
    });
  }
);

Then(
  /^The asset should be added with a success message displayed$/,
  function () {
    AddAssetPage.getSuccessMessageTitle().should("have.text", "Success");
  }
);
