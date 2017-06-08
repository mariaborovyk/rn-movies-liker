import {getUpcomingMovies} from '../api';

export const LOAD_ORIGINAL_MOVIES = 'LOAD_ORIGINAL_MOVIES';

export const SELECT_A_TAB = 'SELECT_A_TAB';

export const SET_INDEX = 'SET_INDEX';

export const SET_MOVIE_STATUS = 'SET_MOVIE_STATUS';


export function selectTab(selectedTab) {
	return {
		type: SELECT_A_TAB,
		selectedTab
	}
}

export function setLikedOrDisliked(isLiked) {
	return {
		type: SET_MOVIE_STATUS,
		isLiked
	}
}

export function setIndex() {
	return {
		type: SET_INDEX
	}
}

export function getMoviesFromDB() {
	return async function(dispatch){

		const {data: {results}} = await getUpcomingMovies();

		dispatch({
			type: LOAD_ORIGINAL_MOVIES,
			movies: results
		})

	}

}