import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphqlUrl = `${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`;

export const client = new ApolloClient({
  uri: graphqlUrl,
  cache: new InMemoryCache()
});
