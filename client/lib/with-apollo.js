import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const graphqlUrl = `${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`;
const apolloConfig = {
  link: new HttpLink({
    uri: graphqlUrl
  })
}

export default withData(apolloConfig)
