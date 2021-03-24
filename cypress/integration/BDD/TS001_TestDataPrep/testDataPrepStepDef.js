import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//Better to create cy. command for that not the test feature file.
//eg. Cypress.Commands.add("addStubData", () => { ... })
Given(
  /^User has dummy data in the database before the execution of the tests$/,
  function () {
    //avoid using arbitary numbers. Use named literals(variables instead)
    //let num_entries = 120
    //let isin_base = 10000000000
    for (let i = 0; i <= 120; i++) {
      const Number = Math.floor(Math.random() * 10000000000);
      console.log(Number);
      if (Number < 999999999) Number = Number + 1000000000;
      console.log(Number);
      const Name = `TEST${Number}`;
      cy.request({
        method: "POST",
        url: `${this.data.baseURL}/addAsset/${Name}`,
      }).then(function (response) {
        expect(response.status).to.eq(201);
      });
    }

    Given(
      /^User has Asset Name AAAA0000000000 to check sorting by Ascending using API$/,
      function () {
        cy.request({
          method: "POST",
          url: `${this.data.baseURL}/addAsset/AAAA0000000000`,
        }).then(function (response) {
          expect(response.status).to.eq(201);
        });
      }
    );

    Given(
      /^User has Asset Name ZZZZ9999999999 to check sorting by Descending using API$/,
      function () {
        cy.request({
          method: "POST",
          url: `${this.data.baseURL}/addAsset/ZZZZ9999999999`,
        }).then(function (response) {
          expect(response.status).to.eq(201);
        });
      }
    );
  }
);
