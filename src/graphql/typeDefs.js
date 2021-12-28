// src/graphql/typeDefs.js
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    gid: Int!
    name: String!
    rating: Int!
  }

  type Person {
    gid: Int!
    name: String!
    born: string!
  }

  type Acted_in {
    properties: {
      role: String!
    }
    source: [Person]!
    target: [Movie]!
  }

  type Query {
    movies: [Movie!]
    persons: [Person!]
    person(name: String!): Person
    movie(name: String!): Movie
    actedIn(role: String!, source: [Person]!, target: [Movie]! ): Acted_in
  }

  type Mutation {
    createMovie(name: String!, rating: Int!): Movie!
    createPerson(name: String, born: String!): Person!
    actedIn(source: [Person]!, target:[Movie]!): Acted_in!
  }
`;

export default typeDefs;