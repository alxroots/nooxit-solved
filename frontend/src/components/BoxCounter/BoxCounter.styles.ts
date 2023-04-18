import styled from 'styled-components';

export const BoxCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;

  span {
    font-size: 1.25rem;
    color: #333;
    margin: 0.25rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
