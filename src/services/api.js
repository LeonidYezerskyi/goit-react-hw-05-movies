import axios from 'axios';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=0b64762ebc7274a2812ac6387d535224'
  );
  return data;
};

export const getMovieDetails = async (movie_id = '') => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB`
  );
  return data;
};

export const getMovieCredits = async (movie_id = '') => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB`
  );
  return data;
};

export const getMovieReviews = async (movie_id = '') => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB&page=1`
  );
  return data;
};

export const getSearchMovie = async (name = '') => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=0b64762ebc7274a2812ac6387d535224&language=en-US&page=1&include_adult=false`
  );
  return data;
};
