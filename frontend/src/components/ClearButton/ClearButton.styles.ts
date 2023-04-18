import styled from 'styled-components';

export const ClearButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;

  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    background-color: #3b82f6;
    border: none;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #2563eb;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    }
  }

  @media (max-width: 767px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;
