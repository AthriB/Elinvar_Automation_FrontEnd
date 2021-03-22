Feature: Landing page of the Frontend test-developer technical Assignment

    Landing page consists of three tabs Description,Add asset, existing assets also has the requirement.

    Scenario: Verify the Headers and Subheaders of the Landing page.
    Given User is on the landing Page
    Then The main header should be Frontend test-developer technical assignment
    And The sub header should be System Requirements
    And The tabs titles should be mentioned as Description,Add Asset and existing asset.

    
    Scenario: Verify the user ability to Navigate to Add Asset Tab
    Given User is on the landing Page
    When User Clicks on the Add Asset Tab
    Then The User should be navigated to Add Asset Tab

    Scenario: Verify the user ability to Navigate to Existing Assets Tab
    Given User is on the landing Page
    When User clicks on the Exisitng Asset Tab
    Then The User should be navigated to Existing Asset Tab