import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovie } from 'services/api';

const MoviesPage = () => {
    const [name, setName] = useState('');
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const location = useLocation();
    const [searchParams] = useSearchParams();
    const movieName = searchParams.get("query") ?? "";
    movieName && !name && setName(movieName)

    useEffect(() => {
        if (!name) return;

        const fetchMovieByName = async name => {
            try {
                setIsLoading(true);
                const { results } = await getSearchMovie(name);
                setMovies(results);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovieByName(name);
    }, [name]);

    const onSelectName = name => {
        setName(name);
        setMovies([]);

    };

    return (
        <div>
            <SearchForm onSelectName={onSelectName} />

            {error.length > 0 && (
                <p>Upss, Some error occured... {error}</p>
            )}
            {isLoading && <Loader />}
            <ul>
                {Boolean(movies?.length) &&
                    movies.map(movie => {
                        return (
                            <li key={movie.id}>
                                <Link to={`/movies/${movie.id}`} state={{ from: location }}><h2>{movie.title}</h2></Link>
                            </li>
                        );
                    })}
            </ul>
        </div>

    )
}

export default MoviesPage;