// src/graphql/typeDefs.js
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {    
    name: String!
    rating: Int!
  }

  type Query {
    movies: [Movie!]!
    movie(name: String!): Movie
  }

  type Mutation {
    createMovie(name: String!, rating: Int!): Movie!
  }
`;

export default typeDefs;