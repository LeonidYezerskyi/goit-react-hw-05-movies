import React, { useEffect } from 'react';
import useFetchTrendingMovies from 'hooks/useFetchTrendingMovies';
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css'


const HomePage = () => {
    const { movies, error, isLoadingMovies, fetchTrendingMovies } = useFetchTrendingMovies([]);

    useEffect(() => {
        fetchTrendingMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <div className={css.moviesList}>
            <h1>Trending today</h1>
            {error.length > 0 && (
                <p className={css.notification}>Upss, Some error occured... {error}</p>
            )}
            {isLoadingMovies && <Loader />}
            <ul>
                {Boolean(movies?.length) &&
                    movies.map(movie => {
                        return (
                            <li key={movie.id}>
                                <Link to={`/movies/${movie.id}`}><h2 className={css.titleMovie}>{movie.title}</h2></Link>
                            </li>
                        );
                    })}
            </ul>
        </div >
    )
}

export default HomePage;