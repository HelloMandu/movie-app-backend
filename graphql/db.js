let movies = [
  {
    id: 1,
    name: 'movie-A',
    score: 100,
  },
  {
    id: 2,
    name: 'movie-B',
    score: 100,
  },
  {
    id: 3,
    name: 'movie-C',
    score: 100,
  },
  {
    id: 4,
    name: 'movie-D',
    score: 100,
  },
  {
    id: 5,
    name: 'movie-E',
    score: 100,
  },
  {
    id: 6,
    name: 'movie-F',
    score: 100,
  },
  {
    id: 7,
    name: 'movie-G',
    score: 100,
  },
];

export const getMovies = () => movies;

export const getMovie = (id) => {
  return movies.find((p) => p.id === id);
};

export const addMovie = (name, score) => {
  const newMovie = { id: movies.length + 1, name, score };
  movies = movies.concat(newMovie);
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const filteredMovies = movies.filter((movie) => id !== movie.id);
  if (movies.length > filteredMovies.length) {
    movies = filteredMovies;
    return true;
  }
  return false;
};
