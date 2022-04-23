import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import BackButton from '../components/BackButton';

test('BackButton', () => {
  render(<BackButton />);

  expect(screen.getByRole('button', { name: /back/i })).toBeDefined;
});
