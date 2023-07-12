import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('CalculatorPage', () => {
  test('should render the navbar and calculator page correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const navBar = screen.getByText('Welcome to our page!');
    expect(navBar).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3); // Ensure that there is only one link element
  });
});
