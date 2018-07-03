import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ErrorBoundary from './components/ErrorBoundary';

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const MainApp = () => (
  <ApolloProvider client={client}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ApolloProvider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
