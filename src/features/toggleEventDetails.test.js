import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { defineFeature, loadFeature } from 'jest-cucumber';
import Event from '../components/Event'; // Adjust the import path as necessary

const feature = loadFeature("./src/features/toggleEventDetails.feature");

defineFeature(feature, test => {
  let event;

  beforeEach(() => {
    event = {
      summary: 'Event Title',
      start: { dateTime: '2024-05-16T10:00:00Z' },
      location: 'Event Location',
    };
    render(<Event event={event} />);
  });

  //Scenario 1
  test('An event element is collapsed by default', ({ given, then }) => {
    given('the user is on the event list page', () => {
      // Initial render done in beforeEach
    });

    given('an event is displayed', () => {
      expect(screen.getByText(event.summary)).toBeInTheDocument();
    });

    then('the event details are hidden', () => {
      expect(screen.queryByText('Hide Details')).not.toBeInTheDocument();
    });

    then('the "Show Details" button is visible', () => {
      expect(screen.getByText('Show Details')).toBeInTheDocument();
    });
  });

  //scenario 2
  test('User can expand an event to see details', ({ given, when, then }) => {
    given('the user is on the event list page', () => {
      // Initial render done in beforeEach
    });

    given('an event is displayed with a "Show Details" button', () => {
      expect(screen.getByText('Show Details')).toBeInTheDocument();
    });

    when('the user clicks the "Show Details" button', () => {
      fireEvent.click(screen.getByText('Show Details'));
    });

    then('the event details are displayed', () => {
      expect(screen.getByText('Hide Details')).toBeInTheDocument();
    });

    then('the "Show Details" button is replaced with a "Hide Details" button', () => {
      expect(screen.getByText('Hide Details')).toBeInTheDocument();
    });
  });

  //scenario 3
  test('User can collapse an event to hide details', ({ given, and, when, then }) => {
    given('the user is on the event list page', () => {
      // Initial render done in beforeEach
    });

    and('an event is displayed with event details shown', () => {

    });

    and('the "Hide Details" button is visible', () => {

    });

    when('the user clicks the "Hide Details" button', () => {
      fireEvent.click(screen.getByText('Show Details'));
      expect(screen.getByText('Hide Details')).toBeInTheDocument();
    });

    then('the event details are hidden', () => {
      expect(screen.getByText('Hide Details')).toBeInTheDocument();
    });

    and('the "Hide Details" button is replaced with a "Show Details" button', () => {

    })
  });
});
