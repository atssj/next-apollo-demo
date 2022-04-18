import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const graphqlUrl = `${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`;
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ContactList: offsetLimitPagination()
      }
    }
  }
});

export const client = new ApolloClient({
  uri: graphqlUrl,
  cache
});
