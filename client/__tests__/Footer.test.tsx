import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Footer from '../components/Footer';

test('Footer', () => {
  render(<Footer />);

  const text = `Copyright © MyContacts - ${new Date().getFullYear()}`;

  const footer = within(screen.getByRole('contentinfo'));
  expect(footer.getByText(text)).toBeDefined;
});
