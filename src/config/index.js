// src/config/index.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  paymentServiceUrl: process.env.PAYMENT_SERVICE_URL,
  orderServiceUrl: process.env.ORDER_SERVICE_URL,
  notificationServiceUrl: process.env.NOTIFICATION_SERVICE_URL,
};
