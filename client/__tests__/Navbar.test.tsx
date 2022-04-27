import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('Navbar', () => {
  render(<Navbar />);

  const navbar = within(screen.getByRole('navigation'));

  expect(navbar.getAllByRole('list').length).toBe(1);
  expect(navbar.getAllByRole('listitem').length).toBe(2);
  expect(navbar.getByText('MyContacts')).toBeDefined;
});
