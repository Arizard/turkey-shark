import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('initially renders', () => {
  const { getByText } = render(<App />);
});
