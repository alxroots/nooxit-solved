import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Dispatch, SetStateAction } from 'react';
import { BoxColumns } from 'types/global-types';

import { ClearButton } from './index';
import { CLEAR_BOXES } from '../../services/queries';

const mocks = [
  {
    request: {
      query: CLEAR_BOXES,
    },
    result: {
      data: {
        clearBoxes: true,
      },
    },
  },
];

describe('ClearButton', () => {
  const renderClearButton = (
    setCounter: Dispatch<SetStateAction<number>>,
    setBoxes: Dispatch<SetStateAction<BoxColumns[]>>,
  ) => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ClearButton setCounter={setCounter} setBoxes={setBoxes} />
      </MockedProvider>,
    );
  };

  test('renders the "Clear" button', () => {
    const setCounter = jest.fn();
    const setBoxes = jest.fn();

    renderClearButton(setCounter, setBoxes);

    const clearButton = screen.getByText('Clear');
    expect(clearButton).toBeInTheDocument();
  });

  test('calls setCounter and setBoxes when clicked', async () => {
    const setCounter = jest.fn();
    const setBoxes = jest.fn();

    renderClearButton(setCounter, setBoxes);

    const clearButton = screen.getByText('Clear');

    fireEvent.click(clearButton);

    await waitFor(() => {
      expect(setCounter).toHaveBeenCalledWith(0);
      expect(setBoxes).toHaveBeenCalledWith([]);
    });
  });
});
