Feature: User will be able to see the Existing Asset

    User will be able to see the existing asset, search asset, sort asset, filter asset

    #Scenarios should be self consistent
    Scenario: Searching for an already existing asset
        #Given I am at .... section
        Given User creates an Asset 
        And navigates to existing assets Tab
        When User enters the asset name 
        And searches for the existing asset
        Then The Searched asset should be visible for the User

    Scenario: Searching for a asset which is not present at all
        #Given I am at .... section
        Given The user is on the existing asset page
        When User enters an asset name which does not exist 
        #↓ ???
        And searches
        Then No Matching Records found message should be displayed

    Scenario: Verifying the sorting of the Names by Ascending
        Given The user is on the existing asset page
        When user sorts ascending order names 
        Then The table should be sorted in the ascending order

    #same here
    Scenario: Verifying the sorting of the Names by Descending
        Given The user is on the existing asset page
        When User clicks on the Name twice to sort the table in the descending order of the Names
        Then The table should be sorted in the descending order

    #Better to use scenario-outline
    Scenario:  Filtering with Different counts per page
        Given The user is on the existing asset page
        When User clicks on next page and previous page buttons
        And User Selects Number of assets per page to display and only that number of assets will be displayed
                 |number|
                    |10|
                    |20|
                    |50|
                    |100|
