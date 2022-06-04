import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3004'
});

api.interceptors.request.use(async config => {
  const token = "$2a$10$HNDi9d4SXgBOrpq9VBUvbeKOm/Ko5rOWRbZIvCKttMQaA/6k5Ry5G";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;