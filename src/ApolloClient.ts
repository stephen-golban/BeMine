import * as Keychain from 'react-native-keychain';
import { GRAPHQL_API_URL } from 'react-native-dotenv';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';

const link = createHttpLink({
  uri: GRAPHQL_API_URL + '/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const value = await Keychain.getGenericPassword();
  const token = value && JSON.parse(value.password).accessToken;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink.concat(link)]),
  cache: new InMemoryCache(),
});

export default client;
