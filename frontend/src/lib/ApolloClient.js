import { ApolloClient, InMemoryCache, gql} from "@apollo/client";
  
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});
  
const PARCELS = gql`
  query Parcels {
    parcels {
      id
      owner
      area
      address
      geometry {
        type
        coordinates
      }
    }
  }
`;

export {client, PARCELS};