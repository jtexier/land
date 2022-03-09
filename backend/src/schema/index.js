const { gql } = require('apollo-server');

const typeDefs = gql`
scalar Date 
scalar GeoPoint

type Parcel {
  id: String!
  address: String!
  owner: String!
  area: String!
  geometry: Geometry  
}

type Feature {
    id: String!
    geometry: Geometry
    properties: Property!
  }

type Geometry {
    type: String!
    coordinates: [GeoPoint]
  }
  
type Property {
    id: String!
    commune: Int!  
    prefixe: String!
    section: String! 
    numero: String!
    contenance: Int!
    arpente: Boolean!
    created: Date!
    updated: Date!
}

type Query {
  parcel(id: String!): Parcel
  parcels: [Parcel]
}
`;
  
module.exports = typeDefs;