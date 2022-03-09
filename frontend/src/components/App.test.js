import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './components/App';

test('renders title', () => {
  render(<MockedProvider><App /></MockedProvider>);
  const headerElement = screen.getByText(/Land/i);
  expect(headerElement).toBeInTheDocument();
});
