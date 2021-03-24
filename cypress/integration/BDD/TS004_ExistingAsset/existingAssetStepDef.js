import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ElementsLandingPage from "../../../support/pageObjects/ElementsLandingPage.js";
import ElementsAddAssetPage from "../../../support/pageObjects/ElementsAddAssetPage.js";
import ElementsExistingAssetsPage from "../../../support/pageObjects/ElementsExistingAssetsPage.js";

const LandingPage = new ElementsLandingPage();
const AddAssetPage = new ElementsAddAssetPage();
const ExistingAssetPage = new ElementsExistingAssetsPage();

let id = 10000000000
let Number = Math.floor(Math.random() * id);
// Stick same style. Either start all vars with capital and don't mix conventions 
// Remove
// console.log(Number);
if (Number < id - 1) Number = Number + id;
//remove 
// console.log(Number);
//Avoid using global variables whenever possible
const Name = `EXIS${Number}`;

//1. Better use following Given('I....  {string} ... ',(variable) => { .. code ..})
//   That will make code much more readble.
//2. Avoid entering redundant new lines
//3. Keep gherkin statements and short clean. See more comments in feature files
//4. Combine-ing AND statement in single statment not a good idea 
Given('User creates an Asset {string}',(name) => {
    //Navigating to the Add Asset Page from Landing Page
     
    //cy.visit always navigates to baseURL provided in cypress.json
    cy.visit(this.data.baseURL); //Not needed.
    LandingPage.getAddAssetTab().click();
    //Creating asset to search in the search box
    AddAssetPage.getAddAssetField().type(name);
    AddAssetPage.getSendButton().click();
    cy.wait(1000);  //Why? Avoid explicit waits. 
    AddAssetPage.getSuccessMessageCloseButton().click();

    // Navigating to the Existing Assets page
    LandingPage.getExistingAssetTab().click();
});

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

//Provide harcoded values from feature file, not in JS code 
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
