import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import { ApolloProvider } from "@apollo/client";
import { client } from './lib/ApolloClient'

render(
  <ApolloProvider client={client}><App /></ApolloProvider>,  document.getElementById('root')
);
