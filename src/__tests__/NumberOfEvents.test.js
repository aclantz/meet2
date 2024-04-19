
import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';


describe('<NumberOfEvents /> component', () => {
  let NOEComponent;

  beforeEach(() => {
    NOEComponent = render(<NumberOfEvents setCurrentNOE={() => {}} />);
  });

  test('NumberOfEvents has a text box', () => {
    expect(NOEComponent.queryByRole('textbox')).toBeInTheDocument();
  })

  test('defualt value of textbox is 32', () => {
    expect(NOEComponent.queryByRole('textbox')).toHaveValue('32');
  });

  //Test worked on first try, nothing to adjust?
  test('NumberOfEvents has a value that the user can change', async () => {
    const user = userEvent.setup();
    const NOETextBox = NOEComponent.queryByRole('textbox');

    await user.type(NOETextBox, '{backspace}{backspace}10');  

    expect(NOEComponent.queryByRole('textbox')).toHaveValue('10');
  })
})