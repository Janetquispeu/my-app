import React from 'react';
import { Query } from 'react-apollo';
import { USER_QUERY } from '../queries'

const Contactos = () => (
    <Query query={USER_QUERY}>
        {({loading, error, data}) => {
            if(loading) return '...Cargando';
            if(error) return `Error: ${error.message}`;
            console.log('data', data);

            return (
                <h2>Listado  </h2>            
            )
        }}
    </Query>
);

export default Contactos;