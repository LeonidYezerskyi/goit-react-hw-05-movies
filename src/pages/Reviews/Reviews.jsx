import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';



const ReviewsPage = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovieCast = async (movieId) => {
            try {
                setIsLoading(true);

                const reviews = await getMovieReviews(movieId);
                setMovieReviews(reviews.results);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovieCast(movieId);
        // eslint-disable-next-line
    }, [movieId]);

    useEffect(() => {
        console.log(movieReviews);
    }, [movieReviews])


    return (
        <section>
            {error.length > 0 && (
                <p>Upss, Some error occured... {error}</p>
            )}
            {isLoading && <Loader />}
            {movieReviews.length ? movieReviews.map(review => {
                return (
                    <li key={review.id}>
                        <p>Author: {review.author} </p>
                        <p>{review.content}</p>
                    </li>
                )
            }
            ) : (<p>We dont have any reviews for this movie</p>)}
        </section>
    )
}

export default ReviewsPage;