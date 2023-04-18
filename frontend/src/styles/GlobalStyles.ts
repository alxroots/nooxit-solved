import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto+Mono:wght@400;500;700&display=swap');

  html {
    font-size: 80%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', monospace;
  }
`;
