import { useMutation } from '@apollo/client';
import { Dispatch, SetStateAction } from 'react';

import { BoxColumns } from '../../types/global-types';
import { CLEAR_BOXES } from '../../services/queries';
import { ClearButtonWrapper } from './ClearButton.styles';

interface ClearButtonDataProps {
  setCounter: Dispatch<SetStateAction<number>>;
  setBoxes: Dispatch<SetStateAction<BoxColumns[]>>;
}

export function ClearButton({ setCounter, setBoxes }: ClearButtonDataProps) {
  const [clearBoxes] = useMutation(CLEAR_BOXES);

  const handleClear = async () => {
    try {
      await clearBoxes();
      setCounter(0);
      setBoxes([]);
    } catch (error) {
      console.error('Error clearing boxes:', error);
    }
  };

  return (
    <ClearButtonWrapper>
      <button className="clear-button" onClick={() => handleClear()}>
        Clear
      </button>
    </ClearButtonWrapper>
  );
}
