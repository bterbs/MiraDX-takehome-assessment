import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const header = screen.getByText(/sign up form/i);
  expect(header).toBeInTheDocument();
});
