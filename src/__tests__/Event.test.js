
import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from '@testing-library/user-event';
import { getEvents } from "../api";

describe('<Event /> Component', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async() => {
    allEvents = await getEvents();
  });
  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });
  
  test('render events title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('render event start time', () => {
    expect(EventComponent.queryByText(allEvents[0].start.dateTime)).toBeInTheDocument();
  });

  test('render event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('render event details button, titled (show details)', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

  //Strange that this test passes on first try, and fails later
  test('by default, event details section is hidden', () => {
    expect(EventComponent.container.querySelector('#event-details')).not.toBeInTheDocument();
  });

  test('show event details section when the user clicks on the "show details" button', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText('Show Details');

    await user.click(showDetailsButton);
    expect(EventComponent.container.querySelector('#event-details')).toBeInTheDocument();
  });

  test('hide event details section when the user clicks on the "hide details" button', async () => {
    const user = userEvent.setup();
    const hideDetailsButton = EventComponent.queryByText('Hide Details');

    await user.click(hideDetailsButton);
    expect(EventComponent.container.querySelector('#event-details')).not.toBeInTheDocument();
  });
})