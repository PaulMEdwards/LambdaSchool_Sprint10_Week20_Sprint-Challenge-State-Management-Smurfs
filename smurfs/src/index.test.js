import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './components/App';

it('Site renders without crashing', (done) => {
  render(<App />);

  done();
});