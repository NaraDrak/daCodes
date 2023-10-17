import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GET_MOVIES_URL as string;
const API_TOKEN = import.meta.env.VITE_API_TOKEN as string;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  },
});

export const getMoviesMoviesByCategory = async (category:string, page: number = 1) => { 
  try {
    const response = await api.get(`/movie/${category}`, {
      params: {
        language: 'es-ES', 
        page: page
      }
    });
    
    if (category === 'latest' && typeof response.data === 'object' && !Array.isArray(response.data)) {
      return { ...response.data, results: [response.data] }; 
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
