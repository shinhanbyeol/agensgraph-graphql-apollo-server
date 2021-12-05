import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

// ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// server start
server.listen(3999).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});