import { render, screen, fireEvent } from '@testing-library/react';

import { GlobalProvider } from '../../context/GlobalContext';
import { ActionButton } from './index';

describe('ActionButton', () => {
  const renderActionButton = (action: 'add' | 'remove') => {
    render(
      <GlobalProvider>
        <ActionButton action={action} />
      </GlobalProvider>,
    );
  };

  test('renders add button', () => {
    renderActionButton('add');
    const addButton = screen.getByRole('button', { name: '+' });
    expect(addButton).toBeInTheDocument();
  });

  test('renders remove button', () => {
    renderActionButton('remove');
    const removeButton = screen.getByRole('button', { name: '-' });
    expect(removeButton).toBeInTheDocument();
  });

  test('add button click changes state', () => {
    renderActionButton('add');
    const addButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(addButton);

    expect(addButton).toHaveClass('action-button plus-button');
  });

  test('remove button click changes state', () => {
    renderActionButton('remove');
    const removeButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(removeButton);

    expect(removeButton).toHaveClass('action-button minus-button');
  });
});
