import { useState } from 'react';
import { getTrendingMovies } from 'services/api';

function useFetchTrendingMovies(INITIAL_DATA = null) {
    const [movies, setMovies] = useState(INITIAL_DATA);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchTrendingMovies = async () => {
        try {
            setIsLoading(true);

            const movies = await getTrendingMovies();

            setMovies(movies);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { movies, error, isLoadingMovies: isLoading, fetchTrendingMovies };
}

export default useFetchTrendingMovies;