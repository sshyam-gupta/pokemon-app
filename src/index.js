import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import ErrorBoundary from './components/ErrorBoundary';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
});

const MainApp = () => (
	<BrowserRouter>
		<ApolloProvider client={client}>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</ApolloProvider>
	</BrowserRouter>

);

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
