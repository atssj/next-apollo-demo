import { expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoadMoreButton from '../components/LoadMoreButton';

test('LoadMoreButton', async () => {
  const spyOnClick = vi.fn();
  render(<LoadMoreButton label={`Load more`} onClick={spyOnClick} />);

  const button = screen.getByRole('button', { name: /load more/i });

  expect(button).toBeDefined;

  await fireEvent.click(button);

  expect(spyOnClick).toHaveBeenCalled();
});
