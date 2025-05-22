import axios from 'axios';

// Your OMDb API key
const API_KEY = '59868345';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query = '') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
      },
    });
    if (response.data.Response === "True") {
      return response.data.Search;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};