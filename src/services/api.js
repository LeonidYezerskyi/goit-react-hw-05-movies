import axios from 'axios';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=0b64762ebc7274a2812ac6387d535224'
  );
  return data;
};
