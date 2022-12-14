import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link, Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import { getMovieDetails } from 'services/api';
import arrow from '../../images/arrow.svg';

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

    const handleGoBack = () => {
        if (location.state) {
            navigate(location.state.from);
            return;
        }
        navigate('/');
    }

    const LazyCastPage = lazy(() => import("../Cast/CastPage"));
    const LazyReviewsPage = lazy(() => import("../ReviewsPage/ReviewsPage"));


    return (
        <div className={css.movieInfo}>
            {isLoading && <Loader />}
            {error.length > 0 && (
                <p className={css.errorText}>Upss, Some error occured... {error}</p>
            )}
            {movieData && (
                <section>
                    <button className={css.button} onClick={handleGoBack}>
                        <img src={arrow} alt="arrow" width="15" />
                        Go back</button>
                    <div className={css.description}>
                        <img src={movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} width='300' alt="movie moment" />
                        <div>
                            <h2 className={css.titleMovie}>{movieData.title}</h2>
                            <p className={css.scoreInfo}>User score: <span className={css.scoreNumber}>{parseInt(movieData.vote_average * 10)}%</span></p>
                            <h3>Overview</h3>
                            <span className={css.overviewText}>{movieData.overview}</span>
                            <h4>Genres</h4>
                            <span className={css.genresList}>{movieData?.genres && movieData.genres.map(({ id, name }) => {
                                return <li key={id}>{name}</li>;
                            })}</span>
                        </div>

                    </div>

                    <div className={css.addInfo}>
                        <h5 className={css.addTitle}>Additional information</h5>
                        <div className={css.addLinks}>
                            <Link to='cast' state={{ from: location.state?.from }}><p>Cast</p></Link>
                            <Link to='reviews' state={{ from: location.state?.from }}><p>Reviews</p></Link>
                        </div>
                    </div>

                    <Suspense>
                        <Routes>
                            <Route path='cast' element={<LazyCastPage />} />
                            <Route path='reviews' element={<LazyReviewsPage />} />
                        </Routes>
                    </Suspense>

                </section>)}
        </div>
    )
}

export default MovieDetails;