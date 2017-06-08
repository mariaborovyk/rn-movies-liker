import axios from 'axios';
import {moviesUrl} from './url';

const apiKey = '0adbb34bf81e230a73e19aaaeee72637';

export const getUpcomingMovies = () => {
	return axios.get(`http://localhost:8081/data.json`);
	//return axios.get(`${moviesUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
};

export const getTopRatedMovies = () =>
	axios.get(`${moviesUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);

export const getPopularMovies = () =>
	axios.get(`${moviesUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
