import { gql, useQuery } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query {
    repositories {
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
`;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data?.repositories, loading, error };
};

export default useRepositories;
