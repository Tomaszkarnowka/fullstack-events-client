import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Create a event/i);
  expect(linkElement).toBeInTheDocument();
});
