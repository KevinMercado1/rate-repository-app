import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const apolloUri = Constants.expoConfig?.extra?.APOLLO_URI;

const client = new ApolloClient({
  uri: apolloUri,
  cache: new InMemoryCache(),
});

export default client;
