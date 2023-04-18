import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { GlobalStyle } from 'styles/GlobalStyles';

import App from './App';
import { GlobalProvider } from './context/GlobalContext';
import client from './services/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <GlobalStyle />
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </React.StrictMode>
  </ApolloProvider>,
);
