import { render, screen } from '@testing-library/react';
import { Dispatch, SetStateAction } from 'react';

import { ColorPicker } from './index';

describe('ColorPicker', () => {
  const renderColorPicker = (
    setColor: Dispatch<SetStateAction<string>>,
    color: string,
  ) => {
    render(<ColorPicker setColor={setColor} color={color} />);
  };

  test('renders the color picker label and input', () => {
    const setColor = jest.fn();
    const color = '#ffffff';

    renderColorPicker(setColor, color);

    const label = screen.getByText('Choose a color:');
    expect(label).toBeInTheDocument();

    const input = screen.getByLabelText('Choose a color:') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('color');
  });
});
