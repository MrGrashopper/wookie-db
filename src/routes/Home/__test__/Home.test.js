import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
 
describe('Home', () => {
  it('renders App component', () => {
    render(<Home />);
    // screen.debug();
  });
});