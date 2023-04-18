import { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalContext';
import { StyledButton } from './ActionButton.styles';

interface ActionButtonDataProps {
  action: 'add' | 'remove';
  label?: string;
}

export function ActionButton({ action, label }: ActionButtonDataProps) {
  const { setSelectedAction, prevSelectedAction, setPrevSelectedAction } =
    useContext(GlobalContext);
  const buttonClass = action === 'add' ? 'plus-button' : 'minus-button';
  const buttonText = label || (action === 'add' ? '+' : '-');
  const handleButtonAction = () => {
    if (prevSelectedAction === action) {
      setSelectedAction(null);
      setPrevSelectedAction(null);
    } else {
      setSelectedAction(action);
      setPrevSelectedAction(action);
    }
  };

  return (
    <StyledButton
      className={`action-button ${buttonClass}`}
      onClick={() => handleButtonAction()}
      buttonType={action}
    >
      {buttonText}
    </StyledButton>
  );
}
