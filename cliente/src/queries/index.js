import gql from 'graphql-tag';

export const USER_QUERY = gql`{
  viewer{
    repositories(last: 2) {
      edges{
        node{
          createdAt
          name
          url
          watchers(first: 5){
            totalCount
          }
          stargazers(first: 5){
            totalCount
          }
        }
      }
    }
  }
}`;
