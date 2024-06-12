@investors
Feature: Investors
  
  @input
  Scenario: Corresponding messages are displayed on attempt of invalid input
    When I open "About" item and "Contact Us" sub-item in Top Navigation bar
    And I scroll to Submit button
    And I click Submit button
    Then "Validation" message for "First Name" field should be displayed
    Then "Validation" message for "First Name" field should have "This is a required field" text
    And I set random value in "First Name" input field
    And I click Submit button
    Then "Validation" message for "First Name" field should not be displayed
    Then "Validation" message for "First Name" field should not have "This is a required field" text
