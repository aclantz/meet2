# Meet App
## Career Foundry Achievement 4

## Objective:
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Requirements
### Key Features:
- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App *When* Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

### Technical Requirements:
- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server
instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on
mobile.
- The app must be deployed on GitHub Pages.
- The app must implement an alert system using an OOP approach to show information to the
user.
- The app must make use of data visualization.
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online performance monitoring tool.

## User Stories

1. As a user I should be able to filter events by city, so that a list of events is available for only the city I am interested in.

2. As a user I should be able to click an event and view more or less details about it, so that I can learn more about the event.

3. As a user, I should be able to see the number of events listed for the city that is selected, so that I know how many events are taking place.

4. As a user, I should be able to access the app while offline, so that I have access to the information regardless of internet connection.

5. As a user, I should be able to add a shortcut to the app on my home screen, so that I have a more convenient way to access the app.

6. As a user, I should be able to view charts that display information and details about the events, so that I can have a better understanding of what kind of events are happening in the city.

## Scenarios 
Scenario 1: Filter events for a mix of Cities 
  - *Given* the user hasn't searched for any city 
  - *When* the user opens the app main page
  - *Then* the user should see an option to search for a city, and a list of events for a variety of cities.

Scenario 2: Suggestion list when searching for a city
  - *Given* the user hasn't searched for a city 
  - *When* the user begins to type a city name into the search bar
  - *Then* the user will be shown a suggested list of cities based on what they have typed in.

Scenario 3: Selecting a city
  - *Given* the user has searched for a city in the search bar
  - *When* the user chooses a city from the list that has been rendered
  - *Then* the user will be then be able to city the events that exist in the city they selected.

Scenario 4: Default of event element
  - *Given* the user is viewing the list of events for a selected city
  - *When* the user looks at a specific event
  - *Then* the user will see that the extra details about the event is collapsed

Scenario 5: Expand an event to see more details
  - *Given* the use has an event they wish to know more about
  - *When* the user clicks the expand button
  - *Then* the user will see an expanded description of the event

Scenario 6: Collapse an event to see less details
  - *Given* the user doesn't wish to see any more details about an expanded event
  - *When* the user clicks the collapse button
  - *Then* the user will see a collapsed version of the event with less details (the default)
  
Scenario 7: Specify Number of Events 
  - *Given* the user is looking at a selected city, and hasn't changed the default number of events displayed 
  - *When* the user looks at the list of events
  - *Then* they will see 20 events at a time

Scenario 8: User change the number of events shown
  - *Given* the user is looking at a specific city and its list of events
  - *When* the user selects the event view control
  - *Then* the user can choose how many events to see at one time
  
Scenario 9: Use the App when Offline 
  - *Given* the user has previously accessed the app 
  - *When* they lose internet connectivity 
  - *Then* they should still be able to see the cached data they have viewed

Scenario 10: Error when offline and changing search settings
  - *Given* the user has previously accessed the app, and currently does not have internet access
  - *When* the user changes the search options
  - *Then* the user will be shown an error
  
Scenario 11: Add an App Shortcut to the Home Screen
  - *Given* the user is accessing the app from a mobile device 
  - *When* they choose to add a shortcut to the home screen 
  - *Then* an app shortcut should be added 
  
Scenario 12: Display Charts Visualizing Event Details 
  - *Given* the user is viewing event details 
  - *When* they navigate to the charts section 
  - *Then* visualizations representing event details should be displayed 

  ## Serverless Functions
This application can use serverless functions to manage data processing, user experience, and token management. Allowing it to scale as needed, simplify the building process by removing the need to build an entire backend server, and remaining more cost effective.  