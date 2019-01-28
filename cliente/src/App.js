import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Contacto from './component/user'

// import { createHttpLink } from 'apollo-link-http';
// import { setContext } from 'apollo-link-context';
// import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  },
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 8e0fda845bbf12172fe1643bd2697e05f4166bff`,
      },
    });
  },
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1>React</h1>
        <Contacto/>
      </ApolloProvider>
    );
  }
}

export default App;
