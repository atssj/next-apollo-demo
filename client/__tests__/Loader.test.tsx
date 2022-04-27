import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loader from '../components/Loader';

test('Loader', () => {
  render(<Loader />);

  expect(screen.getByText('Loading...')).toBeDefined;
});
