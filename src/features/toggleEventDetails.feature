Feature: Toggle Event Details

  Scenario: An event element is collapsed by default
    Given the user is on the event list page
    And an event is displayed
    Then the event details are hidden
    And the "Show Details" button is visible

  Scenario: User can expand an event to see details
    Given the user is on the event list page
    And an event is displayed with a "Show Details" button
    When the user clicks the "Show Details" button
    Then the event details are displayed
    And the "Show Details" button is replaced with a "Hide Details" button

  Scenario: User can collapse an event to hide details
    Given the user is on the event list page
    And an event is displayed with event details shown
    And the "Hide Details" button is visible
    When the user clicks the "Hide Details" button
    Then the event details are hidden
    And the "Hide Details" button is replaced with a "Show Details" button
