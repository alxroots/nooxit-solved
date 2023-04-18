import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import {
  ColorPickerContainer,
  ColorPickerLabel,
  ColorPickerInput,
} from './ColorPicker.styles';

interface ColorPickerDataProps {
  setColor: Dispatch<SetStateAction<string>>;
  color: string;
}

export function ColorPicker({ setColor, color }: ColorPickerDataProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <ColorPickerContainer>
      <ColorPickerLabel htmlFor="color">Choose a color:</ColorPickerLabel>
      <ColorPickerInput id="color" type="color" onChange={handleChange} />
    </ColorPickerContainer>
  );
}
