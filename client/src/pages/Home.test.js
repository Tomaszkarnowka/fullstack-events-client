import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

const events = [
  {
    id: '1',
    userFirstName: 'Tomek',
    userSecondName: 'Karnówka',
    userEmail: 'tomek@gmail.com',
    userDate: '2022-08-26T00:00:00.000Z',
  },
  {
    id: '2',
    userFirstName: 'Tomasz',
    userSecondName: 'Karnówka',
    userEmail: 'tomasz@gmail.com',
    userDate: '2023-08-26T00:00:00.000Z',
  },
];
it('renders', () => {
  const onDeleteMock = jest.fn();

  render(
    <Router>
      <Home events={events} onDelete={onDeleteMock} />
    </Router>
  );

  const eventComponents = screen.getAllByTestId('event');

  expect(eventComponents.length).toBe(2);
});

const emptyEvents = [];
it('renders "No event"', () => {
  const onDeleteMock = jest.fn();

  render(
    <Router>
      <Home events={emptyEvents} onDelete={onDeleteMock} />
    </Router>
  );

  const eventComponent = screen.getByText(/No event/i);

  expect(eventComponent).toBeInTheDocument();
});
const singleEvent = [
  {
    id: '1',
    userFirstName: 'Tomek',
    userSecondName: 'Karnówka',
    userEmail: 'tomek@gmail.com',
    userDate: '2022-08-26T00:00:00.000Z',
  },
];

it('renders correct values', () => {
  const onDeleteMock = jest.fn();

  render(
    <Router>
      <Home events={singleEvent} onDelete={onDeleteMock} />
    </Router>
  );

  const firstName = screen.getByTestId('firstName');
  expect(firstName).toHaveTextContent('Tomek');

  const secondName = screen.getByTestId('secondName');
  expect(secondName).toHaveTextContent('Karnówka');

  const userEmail = screen.getByTestId('userEmail');
  expect(userEmail).toHaveTextContent('tomek@gmail.com');

  const userDate = screen.getByTestId('userDate');
  expect(userDate).toHaveTextContent('26/08/2022');
});

it('delete button', () => {
  const onDeleteMock = jest.fn();

  render(
    <Router>
      <Home events={events} onDelete={onDeleteMock} />
    </Router>
  );

  const deleteBttn = screen.getByTestId(1);
  fireEvent.click(deleteBttn);
  expect(onDeleteMock).toHaveBeenCalledTimes(1);
});
it('edit button link to "/edit-event/1"', async () => {
  const onDeleteMock = jest.fn();

  render(
    <Router>
      <Home events={singleEvent} onDelete={onDeleteMock} />
    </Router>
  );

  const editBttn = screen.getByRole('link');

  expect(editBttn.getAttribute('href')).toBe('/edit-event/1');
});
