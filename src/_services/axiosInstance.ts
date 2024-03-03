import axios from 'axios';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    config.headers.Accept ||= 'application/json';
    config.headers['Content-Type'] ||= 'application/json';

    return config;
  },
  error => Promise.reject(error),
);
axiosApiInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    return Promise.reject(error);
  },
);

export default axiosApiInstance;
