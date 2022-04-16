import { movie, movies, createMovie } from '../database/movie';

const resolvers = {
  Query: {
    movies: () => movies(),
    movie: (_, { name }) => movie(name),
  },
  Mutation: {
    createMovie: (_, { name, rating }) => createMovie(name, rating),
  }
};

export default resolvers;
