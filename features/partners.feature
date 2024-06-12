@partners
Feature: Partners
  
  @blocks
  Scenario Outline: Corresponding number of partners in <Name of tab> tab is displayed
    When I click Hamburger Menu button
    And I open item "Services" and sub-item "Partners" in Hamburger menu
    Then Number of blocks in "<Name of tab>" tab should be equal to <Number of blocks>

  Examples:
  | Name of tab | Number of blocks |
  | Digital     | 23               |
  | Technology  | 29               |
  | All         | 52               |
