import { movie, movies, createMovie } from '../database/movie';

const resolvers = {
  Query: {
    movies: (_, { name, rating }) => movies({ name, rating }),
    movie: (_, { name, rating }) => movie({ name, rating }),
  },
  Mutation: {
    createMovie: (_, { name, rating }) => createMovie({ name, rating }),
  },
};

export default resolvers;
