import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ElementsLandingPage from "../../../support/pageObjects/ElementsLandingPage.js";

const LandingPage = new ElementsLandingPage();

Given(/^User is on the landing Page$/, function () {
  // Here goes the step definition code
  cy.visit(this.data.baseURL);
});

Then(
  /^The main header should be Frontend test-developer technical assignment$/,
  function () {
    LandingPage.getLandingPageHeader().should(
      "have.text",
      "Frontend test-developer technical assignment"
    );
  }
);

And(/^The sub header should be System Requirements$/, function () {
  LandingPage.getPageSubHeader().should("have.text", "System requirements");
});

And(
  /^The tabs titles should be mentioned as Description,Add Asset and existing asset.$/,
  function () {
    LandingPage.getAddAssetTab()
      .should("have.text", "Add Asset")
      .and("have.attr", "href");
    LandingPage.getExistingAssetTab()
      .should("have.text", "Existing Assets")
      .and("have.attr", "href");
    LandingPage.getDescriptionTab()
      .should("have.text", "Description")
      .and("have.attr", "href");
  }
);

When(/^User Clicks on the Add Asset Tab$/, function () {
  LandingPage.getAddAssetTab().click();
});

Then(/^The User should be navigated to Add Asset Tab$/, function () {
  cy.url().should("eq", `${this.data.baseURL}/#/add`);
});

When(/^User clicks on the Exisitng Asset Tab$/, function () {
  LandingPage.getExistingAssetTab().click();
});

Then(/^The User should be navigated to Existing Asset Tab$/, function () {
  cy.url().should("eq", `${this.data.baseURL}/#/assets`);
});
