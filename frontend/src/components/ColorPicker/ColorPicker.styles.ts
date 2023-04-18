import styled from 'styled-components';

export const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  gap: .5rem;
`;

export const ColorPickerLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

`;

export const ColorPickerInput = styled.input`
  width: 6rem;
  height: 3rem;
  cursor: pointer;
`;
