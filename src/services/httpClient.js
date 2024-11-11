// src/services/httpClient.js
const axios = require('axios');

const httpClient = axios.create({
  timeout: 5000, // Set a timeout for requests
});

// Intercept responses to handle errors globally
httpClient.interceptors.response.use(
  response => response,
  error => {
    console.error('HTTP Request Error:', error.message);
    return Promise.reject(error.response ? error.response.data : error);
  }
);

module.exports = httpClient;
