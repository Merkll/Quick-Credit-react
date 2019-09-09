/* eslint-disable no-param-reassign */
/**
 * An axios proxy to attach the base url and authentication token
 */
import axios from 'axios';

class ResponseError extends Error {
  constructor({ status, message, errors = [] }) {
    super();
    this.message = message;
    this.status = status;
    this.errors = errors;
  }
}

const http = axios.create({
  baseURL: process.env.API_ROUTE
});

http.interceptors.request.use((config) => {
  const { token } = Storage.getItem('user') || {};

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

http.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    const { response } = error;
    const { error: err } = response?.data;

    return Promise.reject(
      new ResponseError({ ...err, message: err?.message || error.message, status: response?.status })
    );
  }
);

export default http;
