import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWY1MTFhNDkyM2NiMzYzZWE1MGQxYmY2NDRkOWQ4MSIsInN1YiI6IjY0OTJjZDUxNDNjZDU0MDBjODFhZjQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ZoWbX-qb3V6pyGWC-GdfRKa5qk6kiHeWeSt9uswZNE',
    accept: 'application/json'
};
 
export const getTrendingFilms = async () => {
    const response = await axios.get('trending/movie/day?language=en-US');
    return response.data.results;
};

export const getFilmsByQuery = async query => {
    const response = await axios.get('search/movie', {
        params: {
            query,
            include_adult: false,
            language: 'en-US',
            page: 1,
        }
    });
    return response.data.results;
};

export const getMovieInfo = async movieId => {
    const response = await axios.get(`movie/${movieId}?language=en-US`);
    return response.data;
};

export const getReviews = async movieId => {
    const response = await axios.get(`movie/${movieId}/reviews?language=en-US&page=1`);
    return response.data.results;
};

export const getCast=async movieId => {
    const response = await axios.get(`movie/${movieId}/credits?language=en-US`);
    return response.data.cast;
};