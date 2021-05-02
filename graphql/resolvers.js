import { addMovie, deleteMovie, getMovie, getMovies } from './db';
import { getYtsMovie, getYtsMovies } from './ytsDb';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovie(id),
    ytsMovies: (_, { limit, rating }) => getYtsMovies(limit, rating),
    ytsMovie: (_, { id }) => getYtsMovie(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
