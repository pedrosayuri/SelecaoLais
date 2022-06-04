import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3004/users'
});

export default api;