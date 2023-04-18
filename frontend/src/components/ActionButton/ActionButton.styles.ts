import styled from 'styled-components';

interface ButtonType {
  buttonType: 'add' | 'remove';
}
export const StyledButton = styled.button<ButtonType>`
  background-color: ${(props) =>
    props.buttonType === 'add' ? '#85b8d0' : '#f28e8e'};
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
