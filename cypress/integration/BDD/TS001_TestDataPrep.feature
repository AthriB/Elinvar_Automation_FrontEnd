Feature: Preparing test Data using the API before the execution of the Scenarios

    Adding Dummy data into the Database before execution.

    Scenario: Preperation of the test data by adding multiple dummy Data on to the database.
    Given User has dummy data in the database before the execution of the tests
    
    Scenario: Adding asset name to verify for the Ascending sort(This test will fail if the same entry is already present)
    Given User has Asset Name AAAA0000000000 to check sorting by Ascending using API

    Scenario: Adding asset name to verify for the Descending sort(This test will fail if the same entry is already present)
    Given User has Asset Name ZZZZ9999999999 to check sorting by Descending using API