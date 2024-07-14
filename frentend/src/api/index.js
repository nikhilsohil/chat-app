import axios from 'axios'

const userApi = axios.create({
    baseURL: 'http://localhost:5000/api/users',
    timeout: 1000,
  });

export default userApi;

// userApi.interceptors.request.use(
