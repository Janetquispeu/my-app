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
        authorization: `Bearer adafcc926f6f33c68fc99fc8ac5c4f76aab1f40c`,
      },
    });
  },
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1>Listado de Repositorios</h1>
        <div className="b-row">
          <div className="b-col-2">Index</div>
          <div className="b-col-2">Name</div>
          <div className="b-col-2">CreatedAt</div>
          <div className="b-col-3">Url</div>
          <div className="b-col-2">Starts</div>
          <div className="b-col-2">Watchers</div>
        </div>
        <Contacto/>
      </ApolloProvider>
    );
  }
}

<<<<<<< HEAD
=======
// Linea de código
// Otra Linea de código
>>>>>>> 40b63a35... se agrega mensaje para otra prueba
export default App;
