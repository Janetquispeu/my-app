import gql from 'graphql-tag';

export const USER_QUERY = gql`{
    viewer { 
        login
    }
}`;
