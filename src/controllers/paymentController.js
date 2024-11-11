// src/controllers/paymentController.js
const httpClient = require('../services/httpClient');
const { paymentServiceUrl } = require('../config');

exports.createPaymentIntent = async (req, res, next) => {
  try {
    const response = await httpClient.post(`${paymentServiceUrl}/api/payment/create-payment-intent`, req.body);
    res.json(response.data);
  } catch (error) {
    next(error); // Passes errors to the error handler
  }
};
