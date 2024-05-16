Feature: Number of Events

  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given the user is on the events page
    When the user hasn't specified a number of events
    Then the number of events displayed is 32 by default

  Scenario: User can change the number of events displayed
    Given the user is on the events page
    When the user enters a number in the number of events input field
    Then the number of events displayed is updated to the specified number
