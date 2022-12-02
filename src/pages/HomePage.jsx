import React, { useEffect } from 'react';
import useFetchTrendingMovies from 'hooks/useFetchTrendingMovies';
import Loader from '../components/Loader/Loader';


const HomePage = () => {

    const { movies, error, isLoadingMovies, fetchTrendingMovies } = useFetchTrendingMovies([]);

    useEffect(() => {
        fetchTrendingMovies();
        // eslint-disable-next-line
    }, []);


    return (
        <div>
            <h1>Trending today</h1>
            {error.length > 0 && (
                <p>
                    Upss, Some error occured... {error}
                </p>
            )}
            {isLoadingMovies && <Loader />}
            <ul>
                {Boolean(movies?.length) &&
                    movies.map(movie => {
                        return (
                            <li key={movie.id}>
                                <p>{movie.title}</p>
                            </li>
                        );
                    })}
            </ul>
        </div>
    )
}

export default HomePage;