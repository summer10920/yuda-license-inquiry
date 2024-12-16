import { ApolloClient, DocumentNode, InMemoryCache, gql } from "@apollo/client";

const apolloApi = async (endpoint: string, query: DocumentNode, data?: any) => {
  const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache(),
  });

  if (data) {
    return client.mutate({ mutation: gql`${query}`, variables: { data } })
      .then(response => response.data)
      .catch(error => {
        throw new Error(`Apollo Client Error: ${error.message}`);
      });
  } else {
    return client.query({ query: gql`${query}` })
      .then(response => response.data)
      .catch(error => {
        throw new Error(`Apollo Client Error: ${error.message}`);
      });
  }
};
export default apolloApi;