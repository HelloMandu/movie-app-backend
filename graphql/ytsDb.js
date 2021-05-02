import axios from 'axios';

const BASE_URL = 'https://yts-proxy.now.sh/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;

export const getYtsMovies = async (limit, rating) => {
  const response = await axios.get(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return response.data.data.movies;
};

export const getYtsMovie = async (id) => {
  const response = await axios.get(MOVIE_DETAILS_URL, {
    params: { movie_id: id },
  });
  return response.data.data.movie;
};
