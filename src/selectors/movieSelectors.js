import {createSelector} from 'reselect';

const getMoviesList = ({moviesReducer}) => moviesReducer.movies;

export const movies = createSelector(
	getMoviesList,
	moviesList => {
		return moviesList || []
	}
);

const isLikedMovies = movie => !!movie.isLiked;
const isDislikeMovies = movie => ('isLiked' in movie) &&  !movie.isLiked;

export const likedMovies = createSelector(
	movies,
	movies => movies.filter(isLikedMovies)
);

export const dislikedMovies = createSelector(
	movies,
	movies => movies.filter(isDislikeMovies)
);
