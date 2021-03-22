import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ElementsLandingPage from "../../../support/pageObjects/ElementsLandingPage.js";
import ElementsAddAssetPage from "../../../support/pageObjects/ElementsAddAssetPage.js";
import ElementsExistingAssetsPage from "../../../support/pageObjects/ElementsExistingAssetsPage.js";

const LandingPage = new ElementsLandingPage();
const AddAssetPage = new ElementsAddAssetPage();
const ExistingAssetPage = new ElementsExistingAssetsPage();

let Number = Math.floor(Math.random() * 10000000000);
console.log(Number);
if (Number < 999999999) Number = Number + 1000000000;
console.log(Number);
const Name = `EXIS${Number}`;

Given(
  /^User creates an Asset and navigates to existing assets Tab$/,
  function () {
    //Navigating to the Add Asset Page from Landing Page
    cy.visit(this.data.baseURL);
    LandingPage.getAddAssetTab().click();
    //Creating asset to search in the search box
    AddAssetPage.getAddAssetField().type(Name);
    AddAssetPage.getSendButton().click();
    cy.wait(1000);
    AddAssetPage.getSuccessMessageCloseButton().click();

    // Navigating to the Existing Assets page
    LandingPage.getExistingAssetTab().click();
  }
);

When(
  /^User enters the asset name and searches for the existing asset$/,
  function () {
    ExistingAssetPage.getSearchBox().type(Name);
  }
);

Then(/^The Searched asset should be visible for the User$/, function () {
  ExistingAssetPage.getFirstRowAfterSearch().should("have.text", Name);
});

Given(/^The user is on the existing asset page$/, function () {
  cy.visit(this.data.baseURL);
  LandingPage.getExistingAssetTab().click();
});

When(
  /^User enters an asset name which does not exist and searches$/,
  function () {
    ExistingAssetPage.getSearchBox().type("RANDOM123123");
  }
);

Then(/^No Matching Records found message should be displayed$/, function () {
  ExistingAssetPage.getFirstRowAfterSearch().should(
    "have.text",
    "No matching records found"
  );
});

When(
  /^User clicks on the name to sort the table in the ascending order of the names$/,
  function () {
    ExistingAssetPage.getSortButton().click();
  }
);

Then(/^The table should be sorted in the ascending order$/, function () {
  ExistingAssetPage.getFirstRowWhenSorted().should(
    "have.text",
    "AAAA0000000000"
  );
});

When(
  /^User clicks on the Name twice to sort the table in the descending order of the Names$/,
  function () {
    ExistingAssetPage.getSortButton().click();
    ExistingAssetPage.getSortAscendingButton().click();
  }
);

Then(/^The table should be sorted in the descending order$/, function () {
  ExistingAssetPage.getFirstRowWhenSorted().should(
    "have.text",
    "ZZZZ9999999999"
  );
});

When(/^User clicks on next page and previous page buttons$/, function () {
  ExistingAssetPage.getNextPageButton().click();
  ExistingAssetPage.getDataPerPageInfo().should(
    "include.text",
    "Showing 11 to 20"
  );
  ExistingAssetPage.getPreviousButton().click();
  ExistingAssetPage.getDataPerPageInfo().should(
    "include.text",
    "Showing 1 to 10"
  );
});

And(
  /^User Selects Number of assets per page to display and only that number of assets will be displayed$/,
  function (dataTable) {
    dataTable.hashes().forEach((element) => {
      ExistingAssetPage.getSelectAssetsPerPage().select(element.number);
      ExistingAssetPage.getDataPerPageInfo().should(
        "include.text",
        `Showing 1 to ${element.number}`
      );
    });
  }
);
