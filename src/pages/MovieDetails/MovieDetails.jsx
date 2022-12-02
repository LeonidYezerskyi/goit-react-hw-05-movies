import Loader from 'components/Loader/Loader';
import CastPage from 'pages/Cast/CastPage';
import ReviewsPage from 'pages/Reviews/Reviews';
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async (movieId) => {
            try {
                setIsLoading(true);
                const movieDetails = await getMovieDetails(movieId);
                setMovieData(movieDetails);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovieDetails(movieId);
        // eslint-disable-next-line
    }, [movieId]);

    useEffect(() => {
        console.log(movieData);
    }, [movieData])

    const handleGoBack = () => {
        if (location.state) {
            navigate(location.state.from);
            return;
        }
        navigate('/');
    }

    return (
        <div>
            {isLoading && <Loader />}
            {error.length > 0 && (
                <p>Upss, Some error occured... {error}</p>
            )}
            {movieData && (
                <section>
                    <button onClick={handleGoBack}>Go back</button>
                    <img src={movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} width='300' alt="movie moment" />
                    <h2>{movieData.title}</h2>
                    <p>{movieData.vote_average}</p>
                    <h3>Overview</h3>
                    <span>{movieData.overview}</span>
                    <h4>Genres</h4>
                    <span>{movieData?.genres && movieData.genres.map(({ id, name }) => {
                        return <li key={id}>{name}</li>;
                    })}</span>
                    <div>
                        <h5>Additional information</h5>
                        <div>
                            <Link to='cast' state={{ from: location }}><p>Cast</p></Link>
                            <Link to='reviews' state={{ from: location }}><p>Reviews</p></Link>
                        </div>
                    </div>
                    <Routes>
                        <Route path='cast' element={<CastPage movieId={movieId} />} />
                        <Route path='reviews' element={<ReviewsPage movieId={movieId} />} />
                    </Routes>
                </section>)}
        </div>
    )
}

export default MovieDetails;