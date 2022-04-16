// src/graphql/typeDefs.js
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {    
    name: String!
    rating: Int!
    reviewed: [Review]
  }

  type Review {
    rating: Int
    review: String
    reviewer: String
  }

  type Query {
    movies(name: String, rating: Int): [Movie]
    movie(name: String!, rating: Int): Movie
  }

  type Mutation {
    createMovie(name: String!, rating: Int!): Movie!
  }
  
`;

export default typeDefs;