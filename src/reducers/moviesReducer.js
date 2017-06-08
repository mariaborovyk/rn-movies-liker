import {SET_INDEX, LOAD_ORIGINAL_MOVIES, SET_MOVIE_STATUS} from '../actions/actions';

const initialState = {
	movies: [],
	current: 0
};

export default function moviesReducer(state = initialState, action = {}) {
	switch (action.type) {
		case LOAD_ORIGINAL_MOVIES:
			return {
				...state,
				movies: action.movies
			};
		case SET_INDEX:
			return {
				...state,
				current: state.current + 1
			};
		case SET_MOVIE_STATUS:
			return {
				...state,
				movies: [
					...state.movies.slice(0, state.current),
					{...state.movies[state.current], isLiked: action.isLiked, likedDate: new Date()},
					...state.movies.slice(state.current + 1)
				],
				current: state.current + 1
			};
		default:
			return state;
	}
}