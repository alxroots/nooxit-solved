import styled from 'styled-components';

export const Container = styled.pre`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  white-space: pre-wrap;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Code = styled.code`
  font-size: 1.1rem;
  font-family: 'Fira Code', monospace;
  color: #3a3a3a;
  li {
    line-height: 2rem;;
  }
`;
