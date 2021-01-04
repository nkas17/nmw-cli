import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should display initial page', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      '<nmw /> React Template Project'
    );
  });
});
