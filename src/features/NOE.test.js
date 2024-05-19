import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { defineFeature, loadFeature } from 'jest-cucumber';
import NumberOfEvents from '../components/NumberOfEvents'; // Adjust the import path as necessary

const feature = loadFeature('./src/features/NOE.feature');

defineFeature(feature, test => {
  let setCurrentNOE;

  beforeEach(() => {
    setCurrentNOE = jest.fn();
    render(<NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={() => {}} />);
  });

  test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
    given('the user is on the events page', () => {
      // Initial render done in beforeEach
    });

    when('the user hasn\'t specified a number of events', () => {

    });

    then('the number of events displayed is 32 by default', () => {
      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toHaveValue('32');
    });
  });

  test('User can change the number of events displayed', ({ given, when, then }) => {
    given('the user is on the events page', () => {
      // Initial render done in beforeEach
    });

    when('the user enters a number in the number of events input field', () => {
      const inputElement = screen.getByRole('textbox');
      fireEvent.change(inputElement, { target: { value: '10' } });
    });

    then('the number of events displayed is updated to the specified number', () => {
      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toHaveValue('10');
      expect(setCurrentNOE).toHaveBeenCalledWith('10');
    });
  });
});
