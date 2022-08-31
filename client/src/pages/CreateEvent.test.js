import { render, screen } from '@testing-library/react';
import CreateEvent from './CreateEvent';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import * as Yup from 'yup';

const initialValues = {
  userFirstName: '',
  userSecondName: '',
  userEmail: '',
  userDate: '',
};
const validationSchema = Yup.object().shape({
  userFirstName: Yup.string().required(),
  userSecondName: Yup.string().required(),
  userEmail: Yup.string().email().required(),
  userDate: Yup.date().required(),
});

it('renders', () => {
  const onSubmitMock = jest.fn();
  render(
    <Router>
      <CreateEvent
        initialValues={initialValues}
        onSubmit={onSubmitMock}
        validationSchema={validationSchema}
      />
    </Router>
  );

  const editEventComponent = screen.getAllByTestId('editEvent');

  expect(editEventComponent.length).toBe(1);
});

it('renders correct values in placeholder', () => {
  const onSubmitMock = jest.fn();
  render(
    <Router>
      <CreateEvent
        initialValues={initialValues}
        onSubmit={onSubmitMock}
        validationSchema={validationSchema}
      />
    </Router>
  );

  const firstName = screen.getByTestId('firstName');

  expect(firstName.value).toBe('');
  const secondName = screen.getByTestId('secondName');
  expect(secondName.value).toBe('');
  const userEmail = screen.getByTestId('userEmail');
  expect(userEmail.value).toBe('');
  const userDate = screen.getByTestId('userDate');
  expect(userDate.value).toBe('');
});
