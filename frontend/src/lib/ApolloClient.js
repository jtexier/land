import { ApolloClient, InMemoryCache, gql} from "@apollo/client";
  
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
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