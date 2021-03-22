Feature: Addition of the asset information

    The Assets can be added with the combination of 4 alphabets and 10 Numbers

    Scenario: Addition of the Asset in the given format.
    Given The User is on Add asset page
    When The user enters the asset name and clicks on Send
    Then The Asset should be created and the message should be shown

    Scenario: Addition of Asset which is already present
    Given The User is on Add asset page
    When The user Enters an existing Asset Name and click on Send
    Then Asset already exists error message should be displayed

    Scenario:  Addition of the Asset in wrong formats
    Given The User is on Add asset page
    Then The user Enters the Name of the Assets in wrong formats and validates
                 |name|
                |names123456789| 
                |abcdefghijklmn|
                |qwertyuiop1234|
                |qwe12345678900|
                |12345678901234|
                |1234NAME123412|
                |1234567890NAME|
                |QWERTYUIOPQWER|
                |NAMES1234NAMES|
                |!@#$%^&*()_+{}|

    Scenario: UI check for the Pop Ups
    Given The User is on Add asset page
    When The user enters the asset name and clicks on Send
    Then The asset should be added with a success message displayed

