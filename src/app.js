// src/app.js
const express = require('express');
const cors = require('cors');
const config = require('./config');
const paymentRoutes = require('./routes/paymentRoutes');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger); // Log incoming requests

// Routes
app.use('/api/payment', paymentRoutes);

// Global error handler
app.use(errorHandler);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
