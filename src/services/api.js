import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// Base da API: /movie/now_playing?api_key=2405f0f80f814d36c526325c06c2ba3f&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;