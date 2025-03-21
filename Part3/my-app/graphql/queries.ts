import { gql } from '@apollo/client';

export const ME = gql`
  query {
    me {
      id
      username
      email
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;
